import * as Cesium from "cesium";

/** WGS84 坐标（度 / 米） */
export function cartesianToLonLatHeight(cartesian) {
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
  return {
    lon: Cesium.Math.toDegrees(cartographic.longitude),
    lat: Cesium.Math.toDegrees(cartographic.latitude),
    height: cartographic.height,
  };
}

/** 世界坐标 → 屏幕像素（弹窗锚点用） */
export function worldToScreen(viewer, cartesian) {
  return Cesium.SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian);
}

function isInFrontOfCamera(viewer, cartesian) {
  const toPoint = Cesium.Cartesian3.subtract(
    cartesian,
    viewer.camera.positionWC,
    new Cesium.Cartesian3()
  );
  return Cesium.Cartesian3.dot(toPoint, viewer.camera.directionWC) > 0;
}

function buildPickResult(cartesian, source, picked = null) {
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
  return {
    cartesian: Cesium.Cartesian3.clone(cartesian),
    cartographic,
    lonLatHeight: cartesianToLonLatHeight(cartesian),
    source,
    picked,
  };
}

/**
 * 精确拾取场景中的三维点击位置。
 * 优先使用深度缓冲（pickPosition），可准确命中 3D Tiles 模型表面。
 */
export function pickWorldPosition(viewer, windowPosition) {
  const scene = viewer.scene;

  const depthPosition = scene.pickPosition(windowPosition);
  if (Cesium.defined(depthPosition) && isInFrontOfCamera(viewer, depthPosition)) {
    return buildPickResult(depthPosition, "depth");
  }

  const picked = scene.pick(windowPosition);
  if (Cesium.defined(picked)) {
    const retryPosition = scene.pickPosition(windowPosition);
    if (Cesium.defined(retryPosition) && isInFrontOfCamera(viewer, retryPosition)) {
      return buildPickResult(retryPosition, "depth", picked);
    }
  }

  const ray = viewer.camera.getPickRay(windowPosition);
  if (ray) {
    const globePosition = scene.globe.pick(ray, scene);
    if (Cesium.defined(globePosition)) {
      return buildPickResult(globePosition, "globe", picked ?? null);
    }
  }

  return null;
}

export function formatLonLatHeight({ lon, lat, height }, decimals = 6) {
  return {
    lon: lon.toFixed(decimals),
    lat: lat.toFixed(decimals),
    height: height.toFixed(2),
  };
}
