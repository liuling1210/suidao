import * as Cesium from "cesium";
import { DRILL_HOLE_CAMERAS, resolvePopupWorldPosition } from "../config/drillHoleCamera.js";
import { DRILL_TILESET_FOLDERS } from "../config/tilesetOptions.js";
import { flyToCameraPreset } from "../utils/cameraPreset.js";

export const DRILL_HOLES = [
  { label: "钻孔1", folder: "out2" },
  { label: "钻孔2", folder: "out3" },
  { label: "钻孔3", folder: "out4" },
];

async function flyToTileset(viewer, tileset) {
  await tileset.readyPromise;
  const radius = tileset.boundingSphere.radius;

  await viewer.flyTo(tileset, {
    duration: 1.5,
    offset: new Cesium.HeadingPitchRange(
      0,
      Cesium.Math.toRadians(-35),
      Math.max(radius * 2.5, 30)
    ),
  });
}

function resolveDrillFolderFromPick(picked, tilesetByFolder) {
  if (!Cesium.defined(picked)) {
    return null;
  }

  let tileset = picked.tileset;
  if (!tileset && picked.content) {
    tileset = picked.content.tileset;
  }
  if (!tileset && picked.primitive instanceof Cesium.Cesium3DTileset) {
    tileset = picked.primitive;
  }

  if (!tileset) {
    return null;
  }

  for (const folder of DRILL_TILESET_FOLDERS) {
    if (tilesetByFolder.get(folder) === tileset) {
      return folder;
    }
  }

  return null;
}

export function createDrillHoleController({
  viewer,
  tilesetByFolder,
  tilesetVisibility,
  anchor,
  popupManager,
  legendPanel,
  initialCamera,
}) {
  let activeFolder = "initial";
  let onActiveChange = null;
  let onDrillPick = null;

  function notifyActiveChange() {
    onActiveChange?.(activeFolder);
  }

  function hideDrillPresentation() {
    popupManager?.hide();
    legendPanel?.hide();
  }

  async function ensureDrillTilesetsVisible(folder) {
    if (!tilesetVisibility?.isDrillLayerVisible()) {
      return false;
    }

    try {
      await tilesetVisibility.showDrillTileset(folder);
      return true;
    } catch (error) {
      console.error("显示钻孔模型失败:", error);
      return false;
    }
  }

  async function flyToDrillCamera(folder) {
    const drillConfig = DRILL_HOLE_CAMERAS[folder];
    if (drillConfig?.camera) {
      await flyToCameraPreset(viewer, anchor, drillConfig.camera);
      return;
    }

    const tileset = tilesetByFolder.get(folder);
    if (!tileset) {
      console.warn(`未找到模型: ${folder}`);
      return;
    }

    await flyToTileset(viewer, tileset);
  }

  async function showDrillPopup(folder) {
    const drillConfig = DRILL_HOLE_CAMERAS[folder];
    if (!drillConfig) {
      popupManager?.hide();
      return;
    }

    const popupWorld = resolvePopupWorldPosition(drillConfig, anchor);
    await popupManager?.show({
      worldPosition: popupWorld,
      title: drillConfig.label,
      size: drillConfig.popupSize,
    });
  }

  async function flyToInitial() {
    activeFolder = "initial";
    hideDrillPresentation();
    tilesetVisibility?.hideDrillTilesets();
    notifyActiveChange();
    try {
      await flyToCameraPreset(viewer, anchor, initialCamera);
    } catch (error) {
      console.error("回到初始视角失败:", error);
    }
  }

  /** 面板定位按钮：仅显示模型并飞到预设视角 */
  async function locateDrill(folder) {
    if (folder === "initial") {
      await flyToInitial();
      return;
    }

    hideDrillPresentation();

    const visible = await ensureDrillTilesetsVisible(folder);
    if (!visible) {
      return;
    }

    activeFolder = folder;
    notifyActiveChange();

    try {
      await flyToDrillCamera(folder);
    } catch (error) {
      console.error("飞行定位失败:", error);
    }
  }

  /** 鼠标点击钻孔模型：显示图例、弹窗并触发侧栏收起，不改变当前相机 */
  async function pickDrill(folder) {
    if (!tilesetVisibility?.isDrillLayerVisible()) {
      return;
    }

    if (activeFolder !== folder) {
      popupManager?.hide();
    }

    const visible = await ensureDrillTilesetsVisible(folder);
    if (!visible) {
      return;
    }

    activeFolder = folder;
    legendPanel?.show();
    notifyActiveChange();
    onDrillPick?.(folder);

    try {
      await showDrillPopup(folder);
    } catch (error) {
      console.error("显示钻孔弹窗失败:", error);
    }
  }

  function bindSceneClick() {
    const clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    clickHandler.setInputAction((click) => {
      const folder = resolveDrillFolderFromPick(
        viewer.scene.pick(click.position),
        tilesetByFolder
      );
      if (!folder) {
        return;
      }
      pickDrill(folder);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    return () => clickHandler.destroy();
  }

  return {
    DRILL_HOLES,
    locateDrill,
    pickDrill,
    flyToInitial,
    hideLegend: () => legendPanel?.hide(),
    hideDrillPresentation,
    getActiveFolder: () => activeFolder,
    setOnActiveChange: (callback) => {
      onActiveChange = callback;
    },
    setOnDrillPick: (callback) => {
      onDrillPick = callback;
    },
    bindSceneClick,
  };
}
