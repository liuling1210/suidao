import * as Cesium from "cesium";
import { DRILL_HOLE_CAMERAS, resolvePopupWorldPosition } from "../config/drillHoleCamera.js";
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

export function initDrillHolePanel({
  viewer,
  tilesetByFolder,
  anchor,
  popupManager,
  initialCamera,
  sceneClickHandler,
  container = document.body,
}) {
  const panel = document.createElement("div");
  panel.className = "control-panel drill-hole-panel";
  panel.innerHTML = `
    <div class="control-panel__title">钻孔定位</div>
    <div class="control-panel__row drill-hole-panel__row">
      <label class="control-panel__label" for="drillHoleSelect">选择钻孔</label>
      <select id="drillHoleSelect" class="drill-hole-panel__select">
        <option value="initial" selected>初始视角</option>
        ${DRILL_HOLES.map(
          (hole) => `<option value="${hole.folder}">${hole.label}</option>`
        ).join("")}
      </select>
    </div>
  `;

  container.appendChild(panel);

  const select = panel.querySelector("#drillHoleSelect");

  function hideAllPopups() {
    popupManager?.hide();
    sceneClickHandler?.clear();
  }

  select.addEventListener("change", async () => {
    const folder = select.value;

    if (folder === "initial") {
      hideAllPopups();
      try {
        await flyToCameraPreset(viewer, anchor, initialCamera);
      } catch (error) {
        console.error("回到初始视角失败:", error);
      }
      return;
    }

    const drillConfig = DRILL_HOLE_CAMERAS[folder];
    if (drillConfig?.camera) {
      try {
        await flyToCameraPreset(viewer, anchor, drillConfig.camera);
        const popupWorld = resolvePopupWorldPosition(drillConfig, anchor);
        popupManager?.show({ worldPosition: popupWorld, title: drillConfig.label });
      } catch (error) {
        console.error("飞行定位失败:", error);
      }
      return;
    }

    const tileset = tilesetByFolder.get(folder);
    if (!tileset) {
      console.warn(`未找到模型: ${folder}`);
      return;
    }

    popupManager?.hide();
    try {
      await flyToTileset(viewer, tileset);
    } catch (error) {
      console.error("飞行定位失败:", error);
    }
  });

  return {
    panel,
    flyTo: async (folder) => {
      select.value = folder;
      select.dispatchEvent(new Event("change"));
    },
  };
}
