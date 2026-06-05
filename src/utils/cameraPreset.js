import * as Cesium from "cesium";

function round3(value) {
  return Number(value.toFixed(3));
}

function worldToEnuKm(anchor, worldPoint) {
  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(anchor);
  const fixedToEnu = Cesium.Matrix4.inverse(enuToFixed, new Cesium.Matrix4());
  const enuMeters = Cesium.Matrix4.multiplyByPoint(fixedToEnu, worldPoint, new Cesium.Cartesian3());

  return {
    x: enuMeters.x / 1000,
    y: enuMeters.y / 1000,
    z: enuMeters.z / 1000,
  };
}

function enuKmToWorld(anchor, point) {
  const enuMeters = new Cesium.Cartesian3(point.x * 1000, point.y * 1000, point.z * 1000);
  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(anchor);
  return Cesium.Matrix4.multiplyByPoint(enuToFixed, enuMeters, new Cesium.Cartesian3());
}

export { enuKmToWorld };

function getCameraLookAtWorld(viewer) {
  const scene = viewer.scene;
  const canvas = scene.canvas;
  const center = new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight / 2);

  let target = scene.pickPosition(center);
  if (!Cesium.defined(target)) {
    const ray = viewer.camera.getPickRay(center);
    target = scene.globe.pick(ray, scene);
  }
  if (!Cesium.defined(target)) {
    target = Cesium.Cartesian3.add(
      viewer.camera.positionWC,
      Cesium.Cartesian3.multiplyByScalar(viewer.camera.directionWC, 500, new Cesium.Cartesian3()),
      new Cesium.Cartesian3()
    );
  }

  return target;
}

export function captureCameraPreset(viewer, anchor) {
  const position = worldToEnuKm(anchor, viewer.camera.positionWC);
  const target = worldToEnuKm(anchor, getCameraLookAtWorld(viewer));

  return { position, target };
}

export function formatCameraPreset(preset) {
  const { position, target } = preset;
  return [
    "INITIAL_CAMERA 预设（可复制到代码）:",
    "const INITIAL_CAMERA = {",
    `  position: { x: ${round3(position.x)}, y: ${round3(position.y)}, z: ${round3(position.z)} },`,
    `  target: { x: ${round3(target.x)}, y: ${round3(target.y)}, z: ${round3(target.z)} },`,
    "};",
  ].join("\n");
}

export function applyInitialCamera(viewer, anchor, preset) {
  const position = enuKmToWorld(anchor, preset.position);
  const target = enuKmToWorld(anchor, preset.target);

  const direction = Cesium.Cartesian3.subtract(target, position, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(direction, direction);

  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(position);
  const up = Cesium.Matrix4.getColumn(enuToFixed, 2, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(up, up);

  viewer.camera.setView({
    destination: position,
    orientation: { direction, up },
  });
}

export function flyToCameraPreset(viewer, anchor, preset, { duration = 1.5 } = {}) {
  const position = enuKmToWorld(anchor, preset.position);
  const target = enuKmToWorld(anchor, preset.target);

  const direction = Cesium.Cartesian3.subtract(target, position, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(direction, direction);

  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(position);
  const up = Cesium.Matrix4.getColumn(enuToFixed, 2, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(up, up);

  return viewer.camera.flyTo({
    destination: position,
    orientation: { direction, up },
    duration,
  });
}

export function initCameraPresetLogger(viewer, getAnchor) {
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

  handler.setInputAction(() => {
    const anchor = getAnchor();
    if (!anchor) {
      console.warn("锚点未就绪，无法输出 INITIAL_CAMERA");
      return;
    }

    const preset = captureCameraPreset(viewer, anchor);
    console.log(formatCameraPreset(preset));
  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

  viewer.scene.canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return handler;
}
