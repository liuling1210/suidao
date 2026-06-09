import * as Cesium from "cesium";
import { DEFAULT_POPUP_SIZE } from "../config/drillHoleCamera.js";

const POPUP_IMAGE = `${import.meta.env.BASE_URL}img/popup_panel.png`;
const TEXTURE_WIDTH = 1120;
const TEXTURE_HEIGHT = 640;
const SURFACE_LIFT_METERS = 2;
const CAMERA_NUDGE_METERS = 4;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function liftAlongSurface(position, meters) {
  const up = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(
    position,
    new Cesium.Cartesian3()
  );
  return Cesium.Cartesian3.add(
    position,
    Cesium.Cartesian3.multiplyByScalar(up, meters, new Cesium.Cartesian3()),
    new Cesium.Cartesian3()
  );
}

function nudgeTowardCamera(viewer, position, meters) {
  const toCamera = Cesium.Cartesian3.subtract(
    viewer.camera.positionWC,
    position,
    new Cesium.Cartesian3()
  );
  if (Cesium.Cartesian3.magnitudeSquared(toCamera) < 1e-6) {
    return position;
  }

  Cesium.Cartesian3.normalize(toCamera, toCamera);
  return Cesium.Cartesian3.add(
    position,
    Cesium.Cartesian3.multiplyByScalar(toCamera, meters, new Cesium.Cartesian3()),
    new Cesium.Cartesian3()
  );
}

function resolveVisiblePosition(viewer, worldPosition) {
  let position = Cesium.Cartesian3.clone(worldPosition);
  position = liftAlongSurface(position, SURFACE_LIFT_METERS);
  position = nudgeTowardCamera(viewer, position, CAMERA_NUDGE_METERS);
  return position;
}

async function createPopupTexture(title) {
  const background = await loadImage(POPUP_IMAGE);
  const canvas = document.createElement("canvas");
  canvas.width = TEXTURE_WIDTH;
  canvas.height = TEXTURE_HEIGHT;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(background, 0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);

  ctx.font = '600 72px "Segoe UI", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = "#67e8f9";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(34, 211, 238, 0.6)";
  ctx.shadowBlur = 16;
  ctx.fillText(title, TEXTURE_WIDTH / 2, TEXTURE_HEIGHT * 0.42);

  return canvas;
}

export function initScenePopupManager(viewer) {
  let currentEntity = null;
  let showToken = 0;

  function hide() {
    showToken += 1;
    if (currentEntity) {
      viewer.entities.remove(currentEntity);
      currentEntity = null;
    }
  }

  async function show({ worldPosition, title, size = DEFAULT_POPUP_SIZE }) {
    const token = ++showToken;
    if (currentEntity) {
      viewer.entities.remove(currentEntity);
      currentEntity = null;
    }

    const texture = await createPopupTexture(title);
    if (token !== showToken) {
      return;
    }

    currentEntity = viewer.entities.add({
      position: resolveVisiblePosition(viewer, worldPosition),
      billboard: {
        image: texture,
        sizeInMeters: true,
        width: size.width,
        height: size.height,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
    });
  }

  return { show, hide, getCurrent: () => currentEntity };
}
