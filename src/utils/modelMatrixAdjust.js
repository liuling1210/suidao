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

/** 已写入初始 modelMatrix 的粗调（面板归零后仍保持此位置） */
export const INITIAL_TILESET_COARSE_ADJUST = {
  tx: -34,
  ty: -533,
  tz: 286,
  rx: 0,
  ry: 0,
  rz: 9.4,
  scale: 1,
};

/** 面板粗调默认值（归零 + 无缩放） */
export const DEFAULT_COARSE_ADJUST = {
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

function mergeAdjust(coarseAdjust = DEFAULT_COARSE_ADJUST, includeBaseAdjust = true) {
  if (!includeBaseAdjust) {
    return {
      tx: coarseAdjust.tx,
      ty: coarseAdjust.ty,
      tz: coarseAdjust.tz,
      rx: coarseAdjust.rx,
      ry: coarseAdjust.ry,
      rz: coarseAdjust.rz,
      scale: coarseAdjust.scale ?? 1,
    };
  }

  return {
    tx: BASE_TILESET_ADJUST.tx + coarseAdjust.tx,
    ty: BASE_TILESET_ADJUST.ty + coarseAdjust.ty,
    tz: BASE_TILESET_ADJUST.tz + coarseAdjust.tz,
    rx: BASE_TILESET_ADJUST.rx + coarseAdjust.rx,
    ry: BASE_TILESET_ADJUST.ry + coarseAdjust.ry,
    rz: BASE_TILESET_ADJUST.rz + coarseAdjust.rz,
    scale: coarseAdjust.scale ?? 1,
  };
}

function composeEnuAdjustMatrix(anchor, adjust) {
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
  return Cesium.Matrix4.multiply(
    enuToFixed,
    Cesium.Matrix4.multiply(localAdjust, fixedToEnu, new Cesium.Matrix4()),
    new Cesium.Matrix4()
  );
}

/** 将粗调叠加到基准 placement 矩阵，得到加载时的初始 modelMatrix */
export function composeInitialTilesetMatrix(anchor, placementMatrix) {
  const worldAdjust = composeEnuAdjustMatrix(anchor, INITIAL_TILESET_COARSE_ADJUST);
  return Cesium.Matrix4.multiply(worldAdjust, placementMatrix, new Cesium.Matrix4());
}

export function composeTilesetMatrix(
  baseMatrix,
  anchor,
  coarseAdjust = DEFAULT_COARSE_ADJUST,
  { applyRegistration = true, initialPlacementMatrix = null } = {}
) {
  const adjust = mergeAdjust(coarseAdjust, applyRegistration);
  const worldAdjust = composeEnuAdjustMatrix(anchor, adjust);

  if (!applyRegistration) {
    const placement = initialPlacementMatrix ?? Cesium.Matrix4.IDENTITY;
    return Cesium.Matrix4.multiply(worldAdjust, placement, new Cesium.Matrix4());
  }

  return Cesium.Matrix4.multiply(worldAdjust, baseMatrix, new Cesium.Matrix4());
}
