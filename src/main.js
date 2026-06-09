import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";
import { LAYER_TREE } from "./config/layerTree.js";
import { TUNNEL_LINES } from "./config/tunnelLocations.js";
import { initAppShell } from "./ui/appShell.js";
import { initLayerTree } from "./ui/layerTree.js";
import { initSurveyTablePanel } from "./ui/surveyTablePanel.js";
import { DEFAULT_TABLE_ID } from "./data/tableRegistry.js";
import {
  addTunnelMarkers,
  clearTilesetRootTransform,
  computeInitialPlacementMatrix,
  endpointToCartesian,
  initialPlacementAnchor,
  pickBestModelMatrix,
} from "./utils/tunnelTransform.js";
import { composeInitialTilesetMatrix } from "./utils/modelMatrixAdjust.js";
import { INITIAL_CAMERA } from "./config/initialCamera.js";
import { initGlobeTranslucencyPanel } from "./ui/globeTranslucencyPanel.js";
import { initTilesetTransformPanel } from "./ui/tilesetTransformPanel.js";
import { initDrillHolePanel } from "./ui/drillHolePanel.js";
import { initSceneClickHandler } from "./ui/sceneClickHandler.js";
import { initScenePopupManager } from "./ui/scenePopup.js";
import { applyInitialCamera, initCameraPresetLogger } from "./utils/cameraPreset.js";
import {
  DRILL_TILESET_FOLDERS,
  getTilesetLoadOptions,
  MAIN_TILESET_FOLDER,
} from "./config/tilesetOptions.js";
import { createTilesetVisibilityController } from "./utils/tilesetVisibility.js";

window.CESIUM_BASE_URL = `${import.meta.env.BASE_URL}cesium/`;

const { layerTreeRoot, chartPanelRoot, cesiumContainer, showRightSidebar } = initAppShell();
const surveyTablePanel = initSurveyTablePanel(chartPanelRoot);

const layerTree = initLayerTree(layerTreeRoot, LAYER_TREE, {
  onSelect(node) {
    surveyTablePanel.showTable(node);
    showRightSidebar();
  },
});

const defaultNode = layerTree.getNodeById(DEFAULT_TABLE_ID);
if (defaultNode) {
  layerTree.setActive(DEFAULT_TABLE_ID);
  surveyTablePanel.showTable(defaultNode);
  showRightSidebar();
}

const devTools = document.createElement("div");
devTools.className = "dev-tools";
devTools.hidden = true;
document.body.appendChild(devTools);

Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_TOKEN;

const TIANDITU_TOKEN = import.meta.env.VITE_TIANDITU_TOKEN;

function createTiandituImageryProvider(type) {
  return new Cesium.UrlTemplateImageryProvider({
    url: `https://t{s}.tianditu.gov.cn/DataServer?T=${type}_w&x={x}&y={y}&l={z}&tk=${TIANDITU_TOKEN}`,
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    maximumLevel: 18,
  });
}

const viewer = new Cesium.Viewer(cesiumContainer, {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  animation: false,
  timeline: false,
  baseLayerPicker: false,
  geocoder: true,
  homeButton: true,
  sceneModePicker: true,
  navigationHelpButton: true,
  fullscreenButton: true,
  baseLayer: new Cesium.ImageryLayer(createTiandituImageryProvider("img")),
});

viewer.imageryLayers.addImageryProvider(createTiandituImageryProvider("cia"));

// 保留全球地形，关闭与 3D Tiles 的深度测试以降低每帧 GPU 开销
viewer.scene.globe.depthTestAgainstTerrain = false;

const rightPanelStack = document.createElement("div");
rightPanelStack.className = "control-panel-stack control-panel-stack--right";
devTools.appendChild(rightPanelStack);

initGlobeTranslucencyPanel(viewer, rightPanelStack);

const sceneClickHandler = initSceneClickHandler(viewer);
const scenePopupManager = initScenePopupManager(viewer);

const placementAnchor = initialPlacementAnchor();
applyInitialCamera(viewer, placementAnchor, INITIAL_CAMERA);
initCameraPresetLogger(viewer, () => placementAnchor);

const leftLine = TUNNEL_LINES.left;
const rightLine = TUNNEL_LINES.right;

const worldLeftEntrance = endpointToCartesian(leftLine.entrance);
const worldLeftExit = endpointToCartesian(leftLine.exit);
const worldRightEntrance = endpointToCartesian(rightLine.entrance);
const worldRightExit = endpointToCartesian(rightLine.exit);

addTunnelMarkers(viewer, TUNNEL_LINES);

const { matrix: baseMatrix, errors } = pickBestModelMatrix(
  worldLeftEntrance,
  worldLeftExit,
  worldRightEntrance,
  worldRightExit
);
const initialPlacementMatrix = composeInitialTilesetMatrix(
  placementAnchor,
  computeInitialPlacementMatrix(worldLeftEntrance, worldLeftExit)
);

console.info("隧道配准误差（米）:", {
  左线进口: errors.leftEntrance.toFixed(2),
  左线出口: errors.leftExit.toFixed(2),
  右线进口: errors.rightEntrance.toFixed(2),
  右线出口: errors.rightExit.toFixed(2),
});
console.info("隧道设计路面高程（米）:", {
  左线进口: leftLine.entrance.elevation,
  左线出口: leftLine.exit.elevation,
  右线进口: rightLine.entrance.elevation,
  右线出口: rightLine.exit.elevation,
});

const loadedTilesets = [];
const tilesetByFolder = new Map();

const transformPanel = initTilesetTransformPanel({
  tileset: null,
  baseMatrix,
  anchor: placementAnchor,
  initialPlacementMatrix,
  applyRegistration: false,
  container: devTools,
});

const tilesetVisibility = createTilesetVisibilityController(viewer, tilesetByFolder, {
  loadTileset,
});

function tilesetUrl(folder) {
  return `${import.meta.env.BASE_URL}model/${folder}/tileset.json`;
}

async function loadTileset(folder) {
  const existing = tilesetByFolder.get(folder);
  if (existing) {
    return existing;
  }

  const tileset = await Cesium.Cesium3DTileset.fromUrl(
    tilesetUrl(folder),
    getTilesetLoadOptions(folder)
  );
  await clearTilesetRootTransform(tileset);
  tilesetByFolder.set(folder, tileset);
  loadedTilesets.push(tileset);
  transformPanel.setTilesets(loadedTilesets);
  return tileset;
}

function preloadDrillTilesets() {
  const load = async () => {
    try {
      await Promise.all(DRILL_TILESET_FOLDERS.map((folder) => loadTileset(folder)));
    } catch (error) {
      console.error("预加载钻孔模型失败:", error);
    }
  };

  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(() => {
      load();
    });
  } else {
    setTimeout(load, 2000);
  }
}

loadTileset(MAIN_TILESET_FOLDER)
  .then(async (mainTileset) => {
    viewer.scene.primitives.add(mainTileset);
    preloadDrillTilesets();
    initDrillHolePanel({
      viewer,
      tilesetByFolder,
      tilesetVisibility,
      anchor: placementAnchor,
      popupManager: scenePopupManager,
      initialCamera: INITIAL_CAMERA,
      sceneClickHandler,
      container: rightPanelStack,
    });
  })
  .catch((error) => {
    console.error("加载隧道模型失败:", error);
  });
