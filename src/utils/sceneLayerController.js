import { DRILL_TILESET_FOLDERS, TUNNEL_TILESET_FOLDERS } from "../config/tilesetOptions.js";
import {
  DEFAULT_GLOBE_ALPHA,
  hideTerrainImagery,
  showTerrainImagery,
} from "./globeTranslucency.js";

/** 地形影像图、隧道与钻孔模型的显示控制 */
export function createSceneLayerController(viewer, tilesetByFolder, { loadTileset, onGlobeAlphaChange } = {}) {
  let imageryVisible = true;
  let tunnelVisible = true;
  let drillLayerEnabled = true;
  let activeDrillFolder = null;

  function setImageryVisible(visible) {
    imageryVisible = visible;

    if (visible) {
      showTerrainImagery(viewer);
      onGlobeAlphaChange?.(DEFAULT_GLOBE_ALPHA);
      return;
    }

    hideTerrainImagery(viewer);
    onGlobeAlphaChange?.(0);
  }

  function setTunnelVisible(visible) {
    tunnelVisible = visible;
    for (const folder of TUNNEL_TILESET_FOLDERS) {
      const tileset = tilesetByFolder.get(folder);
      if (tileset) {
        tileset.show = visible;
      }
    }
  }

  function hideDrillTilesetsVisual() {
    for (const folder of DRILL_TILESET_FOLDERS) {
      const tileset = tilesetByFolder.get(folder);
      if (!tileset) {
        continue;
      }
      // 仅切换 show，勿 remove 后再 add——Cesium3DTileset 移除后不可安全复用
      tileset.show = false;
    }
  }

  async function showAllDrillTilesets() {
    for (const folder of DRILL_TILESET_FOLDERS) {
      let tileset = tilesetByFolder.get(folder);
      if (!tileset && loadTileset) {
        tileset = await loadTileset(folder);
      }
      if (!tileset) {
        continue;
      }

      await tileset.readyPromise;

      if (!viewer.scene.primitives.contains(tileset)) {
        viewer.scene.primitives.add(tileset);
      }
      tileset.show = true;
    }
  }

  async function showDrillTilesets() {
    if (!drillLayerEnabled) {
      hideDrillTilesetsVisual();
      return;
    }

    await showAllDrillTilesets();
  }

  async function showDrillTileset(folder) {
    if (!DRILL_TILESET_FOLDERS.includes(folder)) {
      return;
    }

    activeDrillFolder = folder;
    await showDrillTilesets();
  }

  function hideDrillTilesets() {
    activeDrillFolder = null;
    hideDrillTilesetsVisual();
  }

  function setDrillLayerVisible(visible) {
    drillLayerEnabled = visible;
    if (!visible) {
      hideDrillTilesetsVisual();
      return;
    }
    showDrillTilesets();
  }

  return {
    setImageryVisible,
    setTunnelVisible,
    setDrillLayerVisible,
    isImageryVisible: () => imageryVisible,
    isTunnelVisible: () => tunnelVisible,
    isDrillLayerVisible: () => drillLayerEnabled,
    hideDrillTilesets,
    showDrillTileset,
    showDrillTilesets,
  };
}
