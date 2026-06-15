import { createDrillHoleController, DRILL_HOLES } from "../tools/drillHoleController.js";

export { DRILL_HOLES };

export function initDrillHolePanel({
  viewer,
  tilesetByFolder,
  tilesetVisibility,
  anchor,
  popupManager,
  legendPanel,
  initialCamera,
  container = document.body,
}) {
  const controller = createDrillHoleController({
    viewer,
    tilesetByFolder,
    tilesetVisibility,
    anchor,
    popupManager,
    legendPanel,
    initialCamera,
  });

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

  controller.setOnActiveChange((folder) => {
    select.value = folder;
  });

  select.addEventListener("change", () => {
    const value = select.value;
    if (value === "initial") {
      controller.flyToInitial();
      return;
    }
    controller.locateDrill(value);
  });

  const unbindSceneClick = controller.bindSceneClick();

  return {
    panel,
    ...controller,
    flyTo: (folder) => controller.locateDrill(folder),
    destroy() {
      unbindSceneClick();
    },
  };
}
