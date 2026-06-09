import { enuKmToWorld } from "../utils/cameraPreset.js";

/** 弹窗广告牌默认尺寸（米），随场景透视缩放 */
export const DEFAULT_POPUP_SIZE = { width: 5.6, height: 3.2 };

/** 各钻孔相机预设（ENU 相对 placementAnchor，单位：千米） */
export const DRILL_HOLE_CAMERAS = {
  out2: {
    label: "钻孔1",
    camera: {
      position: { x: 1.151, y: 0.184, z: 0.214 },
      target: { x: 1.158, y: 0.18, z: 0.212 },
    },
    popupEnu: { x: 1.409, y: 0.002, z: 0.128 },
    popupSize: { width: 140, height: 80 },
  },
  out3: {
    label: "钻孔2",
    camera: {
      position: { x: 2.178, y: -0.108, z: 0.479 },
      target: { x: 1.633, y: -0.061, z: 0.117 },
    },
    popupEnu: { x: 1.726, y: -0.052, z: 0.211 },
    popupSize: { width: 168, height: 96 },
  },
  out4: {
    label: "钻孔3",
    camera: {
      position: { x: 3.535, y: -1.084, z: 0.376 },
      target: { x: 11.503, y: 7.684, z: -0.636 },
    },
    popupEnu: { x: 4.054, y: -0.57, z: 0.265 },
    popupSize: { width: 224, height: 128 },
  },
};

export function resolvePopupWorldPosition(drillConfig, anchor) {
  if (drillConfig.popupEnu) {
    return enuKmToWorld(anchor, drillConfig.popupEnu);
  }

  if (drillConfig.camera?.target) {
    return enuKmToWorld(anchor, drillConfig.camera.target);
  }

  return null;
}
