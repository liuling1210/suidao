/** 隧道设计资料（WGS84 坐标 + 设计路面高程，单位：米） */
export const TUNNEL_LINES = {
  left: {
    name: "左线隧道",
    chainage: { start: "ZK81+693", end: "ZK88+135", length: 6442 },
    entrance: { lon: 107.333492, lat: 29.298659, elevation: 592.132 },
    exit: { lon: 107.398801, lat: 29.28922, elevation: 620.175 },
    axisDirection: { min: 75, max: 105 },
    segments: [
      {
        from: "ZK81+693",
        to: "ZK85+000",
        slope: 0.01453,
        gradePointElevation: 640.585,
      },
      {
        from: "ZK85+000",
        to: "ZK88+135",
        slope: -0.0065,
      },
    ],
  },
  right: {
    name: "右线隧道",
    chainage: { start: "K81+705", end: "K88+109", length: 6404 },
    entrance: { lon: 107.333701, lat: 29.298371, elevation: 592.597 },
    exit: { lon: 107.398503, lat: 29.28857, elevation: 620.55 },
    axisDirection: { min: 79, max: 105 },
    segments: [
      {
        from: "K81+705",
        to: "K85+000",
        slope: 0.014584,
        gradePointElevation: 640.83,
      },
      {
        from: "K85+000",
        to: "K88+109",
        slope: -0.0065,
      },
    ],
  },
};

/** 读取进出口设计路面高程 */
export function getTunnelEndpointHeights(lineKey) {
  const line = TUNNEL_LINES[lineKey];
  return {
    entrance: line.entrance.elevation,
    exit: line.exit.elevation,
  };
}

/** 读取全部进出口设计路面高程 */
export function getAllEndpointHeights() {
  return {
    leftEntrance: TUNNEL_LINES.left.entrance.elevation,
    leftExit: TUNNEL_LINES.left.exit.elevation,
    rightEntrance: TUNNEL_LINES.right.entrance.elevation,
    rightExit: TUNNEL_LINES.right.exit.elevation,
  };
}

/**
 * 模型本地坐标（米，来自 tileset 包围盒）
 * 坐标轴约定：X = 隧道延伸方向，Y = 左右线横向，Z = 竖向（Up）
 */
export const MODEL_TUNNEL_LINES = {
  left: {
    entrance: { x: -4115.94873046875, y: -1712.8272094726562, z: 940.5238647460938 },
    exit: { x: 2654.744140625, y: -1712.8272094726562, z: 940.5238647460938 },
  },
  right: {
    entrance: { x: -4115.94873046875, y: -1741.1968383789062, z: 940.5238647460938 },
    exit: { x: 2654.744140625, y: -1741.1968383789062, z: 940.5238647460938 },
  },
};

/** 用于整体定位的模型中心线（左右线 Y 均值） */
export const MODEL_CENTERLINE = {
  center: { x: -730.602294921875, y: -1726.5120239257812, z: 940.5238647460938 },
  halfLength: 3385.346435546875,
};

/** 默认加载时的初始地理定位（WGS84，高程单位：米） */
export const INITIAL_TILESET_PLACEMENT = {
  lon: 107.333492,
  lat: 29.298659,
  height: 620.55,
};
