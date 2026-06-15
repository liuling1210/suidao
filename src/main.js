import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";
import { LAYER_TREE } from "./config/layerTree.js";
import { TUNNEL_LINES } from "./config/tunnelLocations.js";
import { initAppShell } from "./ui/appShell.js";
import { initLayerTree } from "./ui/layerTree.js";
import { initRightPanel } from "./ui/rightPanel.js";
import { initBottomToolbar } from "./ui/bottomToolbar.js";
import { initMeasurePanel } from "./ui/functionPanels/measurePanel.js";
import { initCameraRoamPanel } from "./ui/functionPanels/cameraRoamPanel.js";
import { initModelAdjustPanel } from "./ui/functionPanels/modelAdjustPanel.js";
import { createLocationMarkTool } from "./tools/locationMarkTool.js";
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
import { initLithologyLegendPanel } from "./ui/lithologyLegendPanel.js";
import { initScenePopupManager } from "./ui/scenePopup.js";
import { applyInitialCamera } from "./utils/cameraPreset.js";
import {
  DRILL_TILESET_FOLDERS,
  getTilesetLoadOptions,
  MAIN_TILESET_FOLDER,
} from "./config/tilesetOptions.js";
import { createSceneLayerController } from "./utils/sceneLayerController.js";

window.CESIUM_BASE_URL = `${import.meta.env.BASE_URL}cesium/`;

const {
  layerTreeRoot,
  chartPanelRoot,
  bottomToolbarRoot,
  cesiumContainer,
  showRightSidebar,
  hideLeftSidebar,
} = initAppShell();

const drillHoleRef = { current: null };

const rightPanel = initRightPanel(chartPanelRoot);

const layerTree = initLayerTree(layerTreeRoot, LAYER_TREE, {
  onSelect(node) {
    if (rightPanel.getMode() === "table") {
      rightPanel.showTable(node);
      showRightSidebar();
    }
  },
});

function showHome({ resetScene = false } = {}) {
  if (resetScene) {
    drillHoleRef.current?.flyToInitial();
  }
  const defaultNode = layerTree.getNodeById(DEFAULT_TABLE_ID);
  layerTree.setActive(DEFAULT_TABLE_ID);
  rightPanel.showTable(defaultNode);
  showRightSidebar();
}

showHome();

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
  selectionIndicator: false,
  baseLayer: new Cesium.ImageryLayer(createTiandituImageryProvider("img")),
});

viewer.imageryLayers.addImageryProvider(createTiandituImageryProvider("cia"));

// 保留全球地形，关闭与 3D Tiles 的深度测试以降低每帧 GPU 开销
viewer.scene.globe.depthTestAgainstTerrain = false;
viewer.scene.pickTranslucentDepth = true;

createLocationMarkTool(viewer);

rightPanel.registerFunctionPanel("measure", "数据测量", (body) =>
  initMeasurePanel(body, viewer)
);
rightPanel.registerFunctionPanel("roam", "摄像机漫游", (body) =>
  initCameraRoamPanel(body, viewer)
);

initBottomToolbar(bottomToolbarRoot, {
  onSelect(id) {
    if (id === "home") {
      showHome({ resetScene: true });
      return;
    }
    rightPanel.showFunction(id);
    showRightSidebar();
  },
});

const rightPanelStack = document.createElement("div");
rightPanelStack.className = "control-panel-stack control-panel-stack--right";
devTools.appendChild(rightPanelStack);

const globeTranslucencyPanel = initGlobeTranslucencyPanel(viewer, rightPanelStack);

const scenePopupManager = initScenePopupManager(viewer);
const lithologyLegendPanel = initLithologyLegendPanel(document.getElementById("app"));

const placementAnchor = initialPlacementAnchor();
applyInitialCamera(viewer, placementAnchor, INITIAL_CAMERA);

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
const tilesetLoadingByFolder = new Map();

const transformPanel = initTilesetTransformPanel({
  tileset: null,
  baseMatrix,
  anchor: placementAnchor,
  initialPlacementMatrix,
  applyRegistration: false,
  container: devTools,
});

function tilesetUrl(folder) {
  return `${import.meta.env.BASE_URL}model/${folder}/tileset.json`;
}

async function isTilesetAvailable(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      return false;
    }
    const contentType = response.headers.get("content-type") || "";
    return contentType.includes("json");
  } catch {
    return false;
  }
}

async function loadTileset(folder) {
  const existing = tilesetByFolder.get(folder);
  if (existing) {
    return existing;
  }

  const pending = tilesetLoadingByFolder.get(folder);
  if (pending) {
    return pending;
  }

  const loadPromise = (async () => {
    const url = tilesetUrl(folder);
    if (!(await isTilesetAvailable(url))) {
      const message = `模型未找到: public/model/${folder}/tileset.json`;
      if (folder === MAIN_TILESET_FOLDER) {
        throw new Error(message);
      }
      console.warn(message);
      return null;
    }

    const tileset = await Cesium.Cesium3DTileset.fromUrl(
      url,
      getTilesetLoadOptions(folder)
    );
    await clearTilesetRootTransform(tileset);
    tilesetByFolder.set(folder, tileset);
    loadedTilesets.push(tileset);
    transformPanel.setTilesets(loadedTilesets);
    return tileset;
  })();

  tilesetLoadingByFolder.set(folder, loadPromise);

  try {
    return await loadPromise;
  } finally {
    tilesetLoadingByFolder.delete(folder);
  }
}

const sceneLayers = createSceneLayerController(viewer, tilesetByFolder, {
  loadTileset,
  onGlobeAlphaChange: (alpha) => globeTranslucencyPanel.setAlpha(alpha),
});

rightPanel.registerFunctionPanel("model", "模型调节", (body) =>
  initModelAdjustPanel(body, sceneLayers, drillHoleRef)
);

const tilesetVisibility = sceneLayers;

function preloadDrillTilesets() {
  const load = async () => {
    await Promise.all(DRILL_TILESET_FOLDERS.map((folder) => loadTileset(folder)));
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
    if (!mainTileset) {
      throw new Error(`主隧道模型未找到: public/model/${MAIN_TILESET_FOLDER}/tileset.json`);
    }
    viewer.scene.primitives.add(mainTileset);
    preloadDrillTilesets();
    drillHoleRef.current = initDrillHolePanel({
      viewer,
      tilesetByFolder,
      tilesetVisibility,
      anchor: placementAnchor,
      popupManager: scenePopupManager,
      legendPanel: lithologyLegendPanel,
      initialCamera: INITIAL_CAMERA,
      container: rightPanelStack,
    });
    drillHoleRef.current.setOnDrillPick((folder) => {
      hideLeftSidebar();
      rightPanel.showDrillInfo(folder);
      showRightSidebar();
    });
  })
  .catch((error) => {
    console.error("加载隧道模型失败:", error);
  });
