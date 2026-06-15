import * as Cesium from "cesium";
import { pickPreviewPosition, pickWorldPosition } from "../utils/scenePick.js";

const MEASURE_COLORS = {
  point: Cesium.Color.CYAN,
  line: Cesium.Color.YELLOW,
  polygon: Cesium.Color.fromCssColorString("#00d4ff").withAlpha(0.35),
  outline: Cesium.Color.fromCssColorString("#00d4ff"),
};

const PREVIEW_LINE_MATERIAL = MEASURE_COLORS.line.withAlpha(0.7);
const PREVIEW_POLYGON_MATERIAL = MEASURE_COLORS.polygon.withAlpha(0.25);
const PREVIEW_OUTLINE_COLOR = MEASURE_COLORS.outline.withAlpha(0.7);

function geodesicDistance(cartographics) {
  let total = 0;
  for (let i = 1; i < cartographics.length; i += 1) {
    const geodesic = new Cesium.EllipsoidGeodesic(cartographics[i - 1], cartographics[i]);
    total += geodesic.surfaceDistance;
  }
  return total;
}

function polygonArea(cartesians) {
  if (cartesians.length < 3) {
    return 0;
  }
  const tangentPlane = Cesium.EllipsoidTangentPlane.fromPoints(cartesians);
  const positions2D = tangentPlane.projectPointsOntoPlane(cartesians);
  return Cesium.PolygonPipeline.computeArea2D(positions2D);
}

export function createMeasureTool(viewer) {
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  const defaultHandler = viewer.cesiumWidget.screenSpaceEventHandler;
  const entities = viewer.entities;
  const measureEntities = [];
  let active = false;
  let mode = null;
  let points = [];
  let sessionEntities = [];
  let dynamicEntity = null;
  let previewEntityKind = null;
  let previewEnd = null;
  let clickTimer = null;
  let moveRafId = 0;
  let onResult = null;

  const pendingScreenPosition = new Cesium.Cartesian2();
  const previewLinePositions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];
  const previewPolygonPositions = [];

  const CLICK_DELAY_MS = 250;

  function trackEntity(entity) {
    measureEntities.push(entity);
    return entity;
  }

  function trackSessionEntity(entity) {
    sessionEntities.push(entity);
    return trackEntity(entity);
  }

  function removeEntityFromCollections(entity) {
    entities.remove(entity);
    const idx = measureEntities.indexOf(entity);
    if (idx >= 0) {
      measureEntities.splice(idx, 1);
    }
  }

  function clearDynamicShape() {
    previewEnd = null;
    previewEntityKind = null;
    if (dynamicEntity) {
      entities.remove(dynamicEntity);
      dynamicEntity = null;
    }
    if (moveRafId) {
      cancelAnimationFrame(moveRafId);
      moveRafId = 0;
    }
  }

  function getPreviewEntityKind() {
    if (mode === "distance" || mode === "height") {
      return "line";
    }
    if (mode === "area") {
      return points.length >= 3 ? "polygon" : "line";
    }
    return null;
  }

  function updatePreviewLinePositions() {
    if (!previewEnd || points.length === 0) {
      return [];
    }
    if (mode === "height" && points.length >= 2) {
      Cesium.Cartesian3.clone(points[0], previewLinePositions[0]);
      Cesium.Cartesian3.clone(points[1], previewLinePositions[1]);
    } else {
      Cesium.Cartesian3.clone(points[points.length - 1], previewLinePositions[0]);
      Cesium.Cartesian3.clone(previewEnd, previewLinePositions[1]);
    }
    return previewLinePositions;
  }

  function updatePreviewPolygonHierarchy() {
    if (!previewEnd || points.length < 3) {
      return new Cesium.PolygonHierarchy([]);
    }
    previewPolygonPositions.length = 0;
    for (let i = 0; i < points.length; i += 1) {
      previewPolygonPositions.push(points[i]);
    }
    previewPolygonPositions.push(previewEnd);
    return new Cesium.PolygonHierarchy(previewPolygonPositions);
  }

  function ensurePreviewEntity() {
    const kind = getPreviewEntityKind();
    if (!kind) {
      return;
    }
    if (dynamicEntity && previewEntityKind !== kind) {
      entities.remove(dynamicEntity);
      dynamicEntity = null;
      previewEntityKind = null;
    }
    if (dynamicEntity) {
      return;
    }
    previewEntityKind = kind;
    if (kind === "line") {
      dynamicEntity = entities.add({
        polyline: {
          positions: new Cesium.CallbackProperty(() => updatePreviewLinePositions(), false),
          width: 2,
          material: PREVIEW_LINE_MATERIAL,
        },
      });
    } else {
      dynamicEntity = entities.add({
        polygon: {
          hierarchy: new Cesium.CallbackProperty(() => updatePreviewPolygonHierarchy(), false),
          material: PREVIEW_POLYGON_MATERIAL,
          outline: true,
          outlineColor: PREVIEW_OUTLINE_COLOR,
        },
      });
    }
  }

  function processPreviewMove() {
    moveRafId = 0;
    if (!active || !mode || points.length === 0) {
      return;
    }
    const cartesian = pickPreviewPosition(viewer, pendingScreenPosition);
    if (!cartesian) {
      return;
    }
    if (!previewEnd) {
      previewEnd = new Cesium.Cartesian3();
    }
    Cesium.Cartesian3.clone(cartesian, previewEnd);
    ensurePreviewEntity();
  }

  function clearSessionGraphics() {
    points = [];
    sessionEntities.forEach((entity) => removeEntityFromCollections(entity));
    sessionEntities = [];
    clearDynamicShape();
  }

  function reset() {
    clearSessionGraphics();
    mode = null;
  }

  function commitSession() {
    sessionEntities = [];
    points = [];
    clearDynamicShape();
    mode = null;
  }

  function addPointEntity(position, label) {
    return trackSessionEntity(entities.add({
      position,
      point: {
        pixelSize: 10,
        color: MEASURE_COLORS.point,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
      label: label
        ? {
            text: label,
            font: "13px sans-serif",
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -14),
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          }
        : undefined,
    }));
  }

  function addSegmentEntity(start, end) {
    return trackSessionEntity(entities.add({
      polyline: {
        positions: [start, end],
        width: 3,
        material: MEASURE_COLORS.line,
        clampToGround: true,
      },
    }));
  }

  function addConfirmedPoint(cartesian, pointLabel) {
    points.push(cartesian);
    addPointEntity(cartesian, pointLabel);
    if (points.length >= 2) {
      addSegmentEntity(points[points.length - 2], cartesian);
    }
  }

  function finishDistance() {
    if (points.length < 2) {
      return;
    }
    const cartographics = points.map((p) => Cesium.Cartographic.fromCartesian(p));
    const distance = geodesicDistance(cartographics);
    onResult?.({ type: "distance", value: distance, unit: "m" });
    commitSession();
  }

  function finishArea() {
    if (points.length < 3) {
      return;
    }
    const area = polygonArea(points);
    sessionEntities
      .filter((entity) => entity.polyline)
      .forEach((entity) => {
        removeEntityFromCollections(entity);
        const idx = sessionEntities.indexOf(entity);
        if (idx >= 0) {
          sessionEntities.splice(idx, 1);
        }
      });
    trackEntity(entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(points),
        material: MEASURE_COLORS.polygon,
        outline: true,
        outlineColor: MEASURE_COLORS.outline,
        outlineWidth: 2,
      },
    }));
    onResult?.({ type: "area", value: area, unit: "m²" });
    commitSession();
  }

  function finishHeight() {
    if (points.length < 2) {
      return;
    }
    const c0 = Cesium.Cartographic.fromCartesian(points[0]);
    const c1 = Cesium.Cartographic.fromCartesian(points[1]);
    const heightDiff = c1.height - c0.height;
    const horizontal = geodesicDistance([c0, c1]);
    const pointEntities = sessionEntities.filter((entity) => entity.point);
    const labelStyle = {
      font: "13px sans-serif",
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -14),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    };
    if (pointEntities[0]) {
      pointEntities[0].label = { ...labelStyle, text: "起点" };
    }
    if (pointEntities[1]) {
      pointEntities[1].label = { ...labelStyle, text: "终点" };
    }
    onResult?.({
      type: "height",
      heightDiff,
      horizontal,
      unit: "m",
    });
    commitSession();
  }

  function finishCurrentMode() {
    if (mode === "distance") {
      finishDistance();
    } else if (mode === "area") {
      finishArea();
    } else if (mode === "height") {
      finishHeight();
    }
  }

  function handleSingleClick(click) {
    if (!active || !mode) {
      return;
    }

    const pick = pickWorldPosition(viewer, click.position);
    if (!pick) {
      return;
    }

    if (mode === "height") {
      if (points.length === 0) {
        addConfirmedPoint(pick.cartesian);
      } else if (points.length === 1) {
        addConfirmedPoint(pick.cartesian);
        finishHeight();
      }
      return;
    }

    addConfirmedPoint(pick.cartesian);
    if (mode === "area" && points.length === 3) {
      entities.remove(dynamicEntity);
      dynamicEntity = null;
      previewEntityKind = null;
    }
  }

  handler.setInputAction((click) => {
    window.clearTimeout(clickTimer);
    clickTimer = window.setTimeout(() => {
      clickTimer = null;
      handleSingleClick(click);
    }, CLICK_DELAY_MS);
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  handler.setInputAction((movement) => {
    if (!active || !mode || points.length === 0) {
      return;
    }
    pendingScreenPosition.x = movement.endPosition.x;
    pendingScreenPosition.y = movement.endPosition.y;
    if (!moveRafId) {
      moveRafId = requestAnimationFrame(processPreviewMove);
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

  handler.setInputAction(() => {
    window.clearTimeout(clickTimer);
    clickTimer = null;
    if (!active || !mode || mode === "height") {
      return;
    }
    finishCurrentMode();
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

  return {
    setResultCallback(cb) {
      onResult = cb;
    },
    activate() {
      active = true;
      defaultHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    },
    deactivate() {
      active = false;
      window.clearTimeout(clickTimer);
      clickTimer = null;
      if (moveRafId) {
        cancelAnimationFrame(moveRafId);
        moveRafId = 0;
      }
      reset();
      defaultHandler.setInputAction((event) => {
        const cartesian = viewer.camera.pickEllipsoid(
          event.position,
          viewer.scene.globe.ellipsoid
        );
        if (!cartesian) {
          return;
        }
        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        const height = viewer.scene.globe.getHeight(cartographic) ?? 0;
        const cameraHeight = viewer.camera.positionCartographic.height;
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromRadians(
            cartographic.longitude,
            cartographic.latitude,
            height + cameraHeight * 0.5
          ),
          duration: 1,
        });
      }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    },
    startDistance() {
      reset();
      mode = "distance";
    },
    startArea() {
      reset();
      mode = "area";
    },
    startHeight() {
      reset();
      mode = "height";
    },
    clearAll() {
      reset();
      measureEntities.forEach((e) => entities.remove(e));
      measureEntities.length = 0;
    },
    destroy() {
      handler.destroy();
    },
  };
}
