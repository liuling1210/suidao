import * as Cesium from "cesium";
import { formatLonLatHeight, pickWorldPosition } from "../utils/scenePick.js";

/** 左键拾取场景位置，控制台输出坐标信息 */
export function initSceneClickHandler(viewer, { onPick } = {}) {
  viewer.scene.pickTranslucentDepth = true;

  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  let lastPick = null;

  handler.setInputAction((click) => {
    const pick = pickWorldPosition(viewer, click.position);
    if (!pick) {
      return;
    }

    lastPick = pick;
    const formatted = formatLonLatHeight(pick.lonLatHeight);

    console.info("点击位置:", {
      经度: formatted.lon,
      纬度: formatted.lat,
      高程: formatted.height,
      来源: pick.source,
      cartesian: {
        x: pick.cartesian.x,
        y: pick.cartesian.y,
        z: pick.cartesian.z,
      },
    });

    onPick?.(pick);
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  return {
    getLastPick: () => lastPick,
    clear: () => {
      lastPick = null;
    },
    destroy: () => {
      handler.destroy();
    },
  };
}
