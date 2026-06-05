import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";
import { TUNNEL_LINES } from "./config/tunnelLocations.js";
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

window.CESIUM_BASE_URL = `${import.meta.env.BASE_URL}cesium/`;

Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_TOKEN;

const TIANDITU_TOKEN = import.meta.env.VITE_TIANDITU_TOKEN;

function createTiandituImageryProvider(type) {
  return new Cesium.UrlTemplateImageryProvider({
    url: `https://t{s}.tianditu.gov.cn/DataServer?T=${type}_w&x={x}&y={y}&l={z}&tk=${TIANDITU_TOKEN}`,
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    maximumLevel: 18,
  });
}

const viewer = new Cesium.Viewer("cesiumContainer", {
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

viewer.scene.globe.depthTestAgainstTerrain = true;

const rightPanelStack = document.createElement("div");
rightPanelStack.className = "control-panel-stack control-panel-stack--right";
document.body.appendChild(rightPanelStack);

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

const TILESET_PATHS = ["out1", "out2", "out3", "out4"];

const loadedTilesets = [];
const tilesetByFolder = new Map();

async function addTileset(name, tileset) {
  await clearTilesetRootTransform(tileset);
  viewer.scene.primitives.add(tileset);
  loadedTilesets.push(tileset);
  tilesetByFolder.set(name, tileset);
  transformPanel.setTilesets(loadedTilesets);
}

const transformPanel = initTilesetTransformPanel({
  tileset: null,
  baseMatrix,
  anchor: placementAnchor,
  initialPlacementMatrix,
  applyRegistration: false,
});

Promise.all(
  TILESET_PATHS.map((name) =>
    Cesium.Cesium3DTileset.fromUrl(`${import.meta.env.BASE_URL}model/${name}/tileset.json`)
  )
)
  .then(async (tilesets) => {
    for (let i = 0; i < tilesets.length; i++) {
      await addTileset(TILESET_PATHS[i], tilesets[i]);
    }
    initDrillHolePanel({
      viewer,
      tilesetByFolder,
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
