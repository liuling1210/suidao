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
import { initGlobeTranslucencyPanel } from "./ui/globeTranslucencyPanel.js";
import { initTilesetTransformPanel } from "./ui/tilesetTransformPanel.js";

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

initGlobeTranslucencyPanel(viewer);

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
const placementAnchor = initialPlacementAnchor();
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

let currentTileset = null;

async function flyToTileset(tileset) {
  await tileset.readyPromise;
  await viewer.flyTo(tileset, {
    duration: 2,
    offset: new Cesium.HeadingPitchRange(
      0,
      Cesium.Math.toRadians(-45),
      tileset.boundingSphere.radius * 2.5
    ),
  });
}

async function loadTileset(tileset, { flyTo = true } = {}) {
  if (currentTileset) {
    viewer.scene.primitives.remove(currentTileset);
  }

  await clearTilesetRootTransform(tileset);

  viewer.scene.primitives.add(tileset);
  currentTileset = tileset;
  transformPanel.setTileset(tileset);

  if (flyTo) {
    await flyToTileset(tileset);
  }
}

const transformPanel = initTilesetTransformPanel({
  tileset: null,
  baseMatrix,
  anchor: placementAnchor,
  initialPlacementMatrix,
  applyRegistration: false,
});

Cesium.Cesium3DTileset.fromUrl(`${import.meta.env.BASE_URL}model/out/tileset.json`)
  .then((tileset) => loadTileset(tileset))
  .catch((error) => {
    console.error("加载隧道模型失败:", error);
  });
