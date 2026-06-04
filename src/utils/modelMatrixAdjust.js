import * as Cesium from "cesium";

/** 已配准的基准变换，面板不直接暴露 */
export const BASE_TILESET_ADJUST = {
  tx: 0,
  ty: -529,
  tz: 322,
  rx: 0,
  ry: 0,
  rz: 9.4,
};

/** 面板细调默认值（归零 + 无缩放） */
export const DEFAULT_FINE_ADJUST = {
  tx: 0,
  ty: 0,
  tz: 0,
  rx: 0,
  ry: 0,
  rz: 0,
  scale: 1,
};

function rotationMatrixFromAxisAngles(rx, ry, rz) {
  const rotX = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(rx), new Cesium.Matrix3());
  const rotY = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(ry), new Cesium.Matrix3());
  const rotZ = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rz), new Cesium.Matrix3());

  let rotation = Cesium.Matrix3.multiply(rotY, rotX, new Cesium.Matrix3());
  rotation = Cesium.Matrix3.multiply(rotZ, rotation, rotation);
  return rotation;
}

function mergeAdjust(fineAdjust = DEFAULT_FINE_ADJUST) {
  return {
    tx: BASE_TILESET_ADJUST.tx + fineAdjust.tx,
    ty: BASE_TILESET_ADJUST.ty + fineAdjust.ty,
    tz: BASE_TILESET_ADJUST.tz + fineAdjust.tz,
    rx: BASE_TILESET_ADJUST.rx + fineAdjust.rx,
    ry: BASE_TILESET_ADJUST.ry + fineAdjust.ry,
    rz: BASE_TILESET_ADJUST.rz + fineAdjust.rz,
    scale: fineAdjust.scale ?? 1,
  };
}

export function composeTilesetMatrix(baseMatrix, anchor, fineAdjust = DEFAULT_FINE_ADJUST) {
  const adjust = mergeAdjust(fineAdjust);
  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(anchor);
  const fixedToEnu = Cesium.Matrix4.inverse(enuToFixed, new Cesium.Matrix4());

  const translation = Cesium.Matrix4.fromTranslation(
    new Cesium.Cartesian3(adjust.tx, adjust.ty, adjust.tz),
    new Cesium.Matrix4()
  );

  const rotation = Cesium.Matrix4.fromRotation(
    rotationMatrixFromAxisAngles(adjust.rx, adjust.ry, adjust.rz),
    new Cesium.Matrix4()
  );

  const scale = Cesium.Matrix4.fromScale(
    new Cesium.Cartesian3(adjust.scale, adjust.scale, adjust.scale),
    new Cesium.Matrix4()
  );

  let localAdjust = Cesium.Matrix4.multiply(translation, rotation, new Cesium.Matrix4());
  localAdjust = Cesium.Matrix4.multiply(localAdjust, scale, localAdjust);
  const worldAdjust = Cesium.Matrix4.multiply(
    enuToFixed,
    Cesium.Matrix4.multiply(localAdjust, fixedToEnu, new Cesium.Matrix4()),
    new Cesium.Matrix4()
  );

  return Cesium.Matrix4.multiply(worldAdjust, baseMatrix, new Cesium.Matrix4());
}
