import { DRILL_TILESET_FOLDERS } from "../config/tilesetOptions.js";

/** 控制钻孔 tileset 按需加入场景，减少默认渲染负担 */
export function createTilesetVisibilityController(viewer, tilesetByFolder, { loadTileset } = {}) {
  function hideDrillTilesets() {
    for (const folder of DRILL_TILESET_FOLDERS) {
      const tileset = tilesetByFolder.get(folder);
      if (!tileset) {
        continue;
      }

      tileset.show = false;
      if (viewer.scene.primitives.contains(tileset)) {
        viewer.scene.primitives.remove(tileset);
      }
    }
  }

  async function showDrillTileset(folder) {
    if (!DRILL_TILESET_FOLDERS.includes(folder)) {
      return;
    }

    hideDrillTilesets();

    let tileset = tilesetByFolder.get(folder);
    if (!tileset && loadTileset) {
      tileset = await loadTileset(folder);
    }
    if (!tileset) {
      return;
    }

    await tileset.readyPromise;

    if (!viewer.scene.primitives.contains(tileset)) {
      viewer.scene.primitives.add(tileset);
    }
    tileset.show = true;
  }

  return { hideDrillTilesets, showDrillTileset };
}
