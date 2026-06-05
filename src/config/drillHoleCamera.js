import * as Cesium from "cesium";
import { enuKmToWorld } from "../utils/cameraPreset.js";

/** 各钻孔相机预设（ENU 相对 placementAnchor，单位：千米） */
export const DRILL_HOLE_CAMERAS = {
  out2: {
    label: "钻孔1",
    camera: {
      position: { x: 1.151, y: 0.184, z: 0.214 },
      target: { x: 1.158, y: 0.18, z: 0.212 },
    },
  },
  out3: {
    label: "钻孔2",
    camera: {
      position: { x: 2.178, y: -0.108, z: 0.479 },
      target: { x: 1.633, y: -0.061, z: 0.117 },
    },
    popupCartesian: {
      x: -1660371.405238071,
      y: 5314091.46453611,
      z: 3103160.032878114,
    },
  },
  out4: {
    label: "钻孔3",
    camera: {
      position: { x: 3.535, y: -1.084, z: 0.376 },
      target: { x: 11.503, y: 7.684, z: -0.636 },
    },
    popupCartesian: {
      x: -1662690.4416061216,
      y: 5313707.750079656,
      z: 3102747.709065877,
    },
  },
};

export function resolvePopupWorldPosition(drillConfig, anchor) {
  if (drillConfig.popupCartesian) {
    const { x, y, z } = drillConfig.popupCartesian;
    return new Cesium.Cartesian3(x, y, z);
  }

  if (drillConfig.popupLonLatHeight) {
    const { lon, lat, height } = drillConfig.popupLonLatHeight;
    return Cesium.Cartesian3.fromDegrees(lon, lat, height);
  }

  return enuKmToWorld(anchor, drillConfig.camera.target);
}
