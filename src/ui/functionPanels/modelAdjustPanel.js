const LOCATE_ICON = `
  <svg class="function-panel__locate-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
  </svg>
`;

const LAYER_OPTIONS = [
  { id: "imagery", label: "地形影像图" },
  { id: "tunnel", label: "隧道模型", locate: "initial", locateTitle: "回到初始视角" },
  { id: "drill", label: "钻孔模型" },
];

function renderLayerRow(item) {
  const locateBtn = item.locate
    ? `
      <button
        type="button"
        class="function-panel__locate-btn"
        data-locate="${item.locate}"
        title="${item.locateTitle}"
        aria-label="${item.locateTitle}"
      >${LOCATE_ICON}</button>
    `
    : "";

  return `
    <li class="function-panel__layer-row">
      <label class="function-panel__toggle">
        <input type="checkbox" data-layer="${item.id}" checked />
        <span class="function-panel__toggle-box"></span>
        <span class="function-panel__toggle-label">${item.label}</span>
      </label>
      ${locateBtn}
    </li>
  `;
}

export function initModelAdjustPanel(container, sceneLayers, drillHoleRef) {
  container.innerHTML = `
    <div class="function-panel__section">
      <p class="function-panel__hint">勾选显示对应图层，取消勾选则隐藏。点击定位图标可飞到预设视角。</p>
      <ul class="function-panel__layer-toggles">
        ${LAYER_OPTIONS.map(renderLayerRow).join("")}
        <li class="function-panel__drill-locates" data-drill-locates hidden>
          <div class="function-panel__drill-locate-list">
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out2" title="定位到钻孔1" aria-label="定位到钻孔1">
              ${LOCATE_ICON}
              <span>钻孔1</span>
            </button>
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out3" title="定位到钻孔2" aria-label="定位到钻孔2">
              ${LOCATE_ICON}
              <span>钻孔2</span>
            </button>
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out4" title="定位到钻孔3" aria-label="定位到钻孔3">
              ${LOCATE_ICON}
              <span>钻孔3</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  `;

  const checkboxes = container.querySelectorAll("[data-layer]");
  const drillLocates = container.querySelector("[data-drill-locates]");
  const drillCheckbox = container.querySelector('[data-layer="drill"]');

  function syncDrillLocatesVisibility() {
    const visible = sceneLayers.isDrillLayerVisible();
    drillLocates.hidden = !visible;
  }

  function syncCheckboxes() {
    checkboxes.forEach((input) => {
      const layer = input.dataset.layer;
      if (layer === "imagery") {
        input.checked = sceneLayers.isImageryVisible();
      } else if (layer === "tunnel") {
        input.checked = sceneLayers.isTunnelVisible();
      } else if (layer === "drill") {
        input.checked = sceneLayers.isDrillLayerVisible();
      }
    });
    syncDrillLocatesVisibility();
  }

  container.addEventListener("change", (event) => {
    const input = event.target.closest("[data-layer]");
    if (!input) {
      return;
    }
    const visible = input.checked;
    const layer = input.dataset.layer;
    if (layer === "imagery") {
      sceneLayers.setImageryVisible(visible);
    } else if (layer === "tunnel") {
      sceneLayers.setTunnelVisible(visible);
    } else if (layer === "drill") {
      sceneLayers.setDrillLayerVisible(visible);
      if (!visible) {
        drillHoleRef?.current?.hideDrillPresentation();
      }
      syncDrillLocatesVisibility();
    }
  });

  container.addEventListener("click", (event) => {
    const initialBtn = event.target.closest("[data-locate='initial']");
    if (initialBtn) {
      drillHoleRef?.current?.flyToInitial();
      return;
    }

    const drillBtn = event.target.closest("[data-drill]");
    if (drillBtn) {
      if (!drillCheckbox.checked) {
        return;
      }
      drillHoleRef?.current?.locateDrill(drillBtn.dataset.drill);
    }
  });

  syncCheckboxes();

  return {
    activate() {
      syncCheckboxes();
    },
    deactivate() {},
  };
}
