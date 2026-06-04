import * as Cesium from "cesium";
import { INITIAL_TILESET_PLACEMENT, MODEL_TUNNEL_LINES } from "../config/tunnelLocations.js";

/**
 * 基于当地 ENU（东-北-天）坐标系计算 modelMatrix
 * - 模型 X 轴 → 隧道走向（含进出口高程差的完整三维方向）
 * - 模型 Z 轴 → 当地 Up（椭球面法向）
 * - 模型 Y 轴 → 由右手系自动确定（左右线横向）
 */
export function computeEnuAlignedModelMatrix(modelEntrance, modelExit, worldEntrance, worldExit) {
  const modelForward = Cesium.Cartesian3.subtract(modelExit, modelEntrance, new Cesium.Cartesian3());
  const modelLength = Cesium.Cartesian3.magnitude(modelForward);
  Cesium.Cartesian3.normalize(modelForward, modelForward);

  const modelUpHint = Cesium.Cartesian3.UNIT_Z;
  let modelRight = Cesium.Cartesian3.cross(modelForward, modelUpHint, new Cesium.Cartesian3());
  if (Cesium.Cartesian3.magnitudeSquared(modelRight) < 1e-12) {
    modelRight = Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_Y);
  } else {
    Cesium.Cartesian3.normalize(modelRight, modelRight);
  }
  const modelUp = Cesium.Cartesian3.cross(modelRight, modelForward, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(modelUp, modelUp);

  const worldVector = Cesium.Cartesian3.subtract(worldExit, worldEntrance, new Cesium.Cartesian3());
  const worldLength = Cesium.Cartesian3.magnitude(worldVector);
  const scale = worldLength / modelLength;

  const enuToFixed = Cesium.Transforms.eastNorthUpToFixedFrame(worldEntrance);
  const fixedToEnu = Cesium.Matrix4.inverse(enuToFixed, new Cesium.Matrix4());

  const worldForwardEnu = Cesium.Matrix4.multiplyByPointAsVector(
    fixedToEnu,
    worldVector,
    new Cesium.Cartesian3()
  );
  if (Cesium.Cartesian3.magnitudeSquared(worldForwardEnu) < 1e-12) {
    worldForwardEnu.x = 0;
    worldForwardEnu.y = 1;
    worldForwardEnu.z = 0;
  }
  Cesium.Cartesian3.normalize(worldForwardEnu, worldForwardEnu);

  const worldUpHint = Cesium.Cartesian3.UNIT_Z;
  let worldRightEnu = Cesium.Cartesian3.cross(worldForwardEnu, worldUpHint, new Cesium.Cartesian3());
  if (Cesium.Cartesian3.magnitudeSquared(worldRightEnu) < 1e-12) {
    worldRightEnu = Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_X);
  } else {
    Cesium.Cartesian3.normalize(worldRightEnu, worldRightEnu);
  }
  const worldUpEnu = Cesium.Cartesian3.cross(worldRightEnu, worldForwardEnu, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(worldUpEnu, worldUpEnu);

  const modelBasis = basisMatrix(modelForward, modelRight, modelUp);
  const modelBasisInverse = Cesium.Matrix3.transpose(modelBasis, new Cesium.Matrix3());
  const worldBasis = basisMatrix(worldForwardEnu, worldRightEnu, worldUpEnu);
  const rotationEnu = Cesium.Matrix3.multiply(worldBasis, modelBasisInverse, new Cesium.Matrix3());

  const toModelOrigin = Cesium.Matrix4.fromTranslation(
    Cesium.Cartesian3.negate(modelEntrance, new Cesium.Cartesian3()),
    new Cesium.Matrix4()
  );
  const rotationMatrix = Cesium.Matrix4.fromRotation(rotationEnu, new Cesium.Matrix4());
  const scaleRotation = Cesium.Matrix4.multiplyByScale(
    rotationMatrix,
    new Cesium.Cartesian3(scale, scale, scale),
    new Cesium.Matrix4()
  );

  let localMatrix = Cesium.Matrix4.multiply(scaleRotation, toModelOrigin, new Cesium.Matrix4());
  return Cesium.Matrix4.multiply(enuToFixed, localMatrix, new Cesium.Matrix4());
}

function basisMatrix(xAxis, yAxis, zAxis) {
  return Cesium.Matrix3.fromColumnMajorArray([
    xAxis.x,
    xAxis.y,
    xAxis.z,
    yAxis.x,
    yAxis.y,
    yAxis.z,
    zAxis.x,
    zAxis.y,
    zAxis.z,
  ]);
}

export function localPointToCartesian(point) {
  return new Cesium.Cartesian3(point.x, point.y, point.z);
}

export function transformPoint(matrix, point) {
  return Cesium.Matrix4.multiplyByPoint(matrix, point, new Cesium.Cartesian3());
}

export function computeInitialPlacementMatrix(worldLeftEntrance, worldLeftExit) {
  const leftModel = MODEL_TUNNEL_LINES.left;
  const worldAnchor = Cesium.Cartesian3.fromDegrees(
    INITIAL_TILESET_PLACEMENT.lon,
    INITIAL_TILESET_PLACEMENT.lat,
    INITIAL_TILESET_PLACEMENT.height
  );
  const tunnelVector = Cesium.Cartesian3.subtract(worldLeftExit, worldLeftEntrance, new Cesium.Cartesian3());
  const worldExitAtAnchor = Cesium.Cartesian3.add(worldAnchor, tunnelVector, new Cesium.Cartesian3());

  return computeEnuAlignedModelMatrix(
    localPointToCartesian(leftModel.entrance),
    localPointToCartesian(leftModel.exit),
    worldAnchor,
    worldExitAtAnchor
  );
}

export function initialPlacementAnchor() {
  return Cesium.Cartesian3.fromDegrees(
    INITIAL_TILESET_PLACEMENT.lon,
    INITIAL_TILESET_PLACEMENT.lat,
    INITIAL_TILESET_PLACEMENT.height
  );
}

export async function clearTilesetRootTransform(tileset) {
  await tileset.readyPromise;
  const root = tileset.root;
  if (
    root?.transform &&
    !Cesium.Matrix4.equalsEpsilon(root.transform, Cesium.Matrix4.IDENTITY, Cesium.Math.EPSILON10)
  ) {
    root.transform = Cesium.Matrix4.IDENTITY.clone();
  }
}

export function pickBestModelMatrix(worldLeftEntrance, worldLeftExit, worldRightEntrance, worldRightExit) {
  const leftModel = MODEL_TUNNEL_LINES.left;
  const rightModel = MODEL_TUNNEL_LINES.right;

  const orientations = [
    {
      modelEntrance: localPointToCartesian(leftModel.entrance),
      modelExit: localPointToCartesian(leftModel.exit),
    },
    {
      modelEntrance: localPointToCartesian(leftModel.exit),
      modelExit: localPointToCartesian(leftModel.entrance),
    },
  ];

  let bestMatrix = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestErrors = null;

  for (const orientation of orientations) {
    const matrix = computeEnuAlignedModelMatrix(
      orientation.modelEntrance,
      orientation.modelExit,
      worldLeftEntrance,
      worldLeftExit
    );

    const errors = {
      leftEntrance: Cesium.Cartesian3.distance(
        transformPoint(matrix, localPointToCartesian(leftModel.entrance)),
        worldLeftEntrance
      ),
      leftExit: Cesium.Cartesian3.distance(
        transformPoint(matrix, localPointToCartesian(leftModel.exit)),
        worldLeftExit
      ),
      rightEntrance: Cesium.Cartesian3.distance(
        transformPoint(matrix, localPointToCartesian(rightModel.entrance)),
        worldRightEntrance
      ),
      rightExit: Cesium.Cartesian3.distance(
        transformPoint(matrix, localPointToCartesian(rightModel.exit)),
        worldRightExit
      ),
    };

    const score = errors.rightEntrance + errors.rightExit;
    if (score < bestScore) {
      bestScore = score;
      bestMatrix = matrix;
      bestErrors = errors;
    }
  }

  return { matrix: bestMatrix, errors: bestErrors };
}

export async function sampleTerrainHeights(viewer, points) {
  const terrainProvider = viewer.terrainProvider;
  const cartographics = points.map((p) => Cesium.Cartographic.fromDegrees(p.lon, p.lat));

  try {
    const sampled = await Cesium.sampleTerrainMostDetailed(terrainProvider, cartographics);
    return sampled.map((c) => c.height ?? 0);
  } catch {
    return points.map(() => 0);
  }
}

export function degreesToCartesian(point, height = 0) {
  return Cesium.Cartesian3.fromDegrees(point.lon, point.lat, height);
}

export function endpointToCartesian(endpoint) {
  return degreesToCartesian(endpoint, endpoint.elevation);
}

export function addTunnelMarkers(viewer, lines) {
  Object.entries(lines).forEach(([, line]) => {
    const entrance = endpointToCartesian(line.entrance);
    const exit = endpointToCartesian(line.exit);

    viewer.entities.add({
      name: `${line.name}进口`,
      position: entrance,
      point: { pixelSize: 12, color: Cesium.Color.LIME, outlineWidth: 2, outlineColor: Cesium.Color.BLACK },
      label: {
        text: `${line.name}进口\nH=${line.entrance.elevation.toFixed(3)}m`,
        font: "14px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -14),
      },
    });

    viewer.entities.add({
      name: `${line.name}出口`,
      position: exit,
      point: { pixelSize: 12, color: Cesium.Color.ORANGE, outlineWidth: 2, outlineColor: Cesium.Color.BLACK },
      label: {
        text: `${line.name}出口\nH=${line.exit.elevation.toFixed(3)}m`,
        font: "14px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -14),
      },
    });
  });
}
