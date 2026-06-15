import { getDrillHoleInfo } from "../config/drillHoleInfo.js";
import { createDrillHoleFullLogModal } from "./drillHoleFullLogModal.js";
import {
  renderBasicInfoTable,
  renderSimplifiedLithologyTable,
  renderWaterLegend,
} from "./drillHoleLogRender.js";
import { downloadDrillHoleLog } from "../utils/downloadDrillHoleLog.js";

function renderDrillInfoContent(info) {
  return `
    <div class="drill-info-panel__id">${info.id}</div>

    <section class="drill-info-section">
      <h3 class="drill-info-section__title">基本信息</h3>
      ${renderBasicInfoTable(info)}
    </section>

    <section class="drill-info-section">
      <h3 class="drill-info-section__title">钻孔柱状图（简化）</h3>
      ${renderSimplifiedLithologyTable(info)}
      ${renderWaterLegend(info)}
      <div class="drill-info-actions">
        <button type="button" class="drill-info-actions__btn" data-action="full-log">
          查看完整柱状图
        </button>
        <button type="button" class="drill-info-actions__btn" data-action="export">
          导出
        </button>
      </div>
    </section>
  `;
}

export function initDrillHoleInfoPanel(container, { onClose } = {}) {
  const fullLogModal = createDrillHoleFullLogModal();

  container.innerHTML = `
    <div class="cyber-panel cyber-panel--nav cyber-panel--table cyber-panel--drill-info">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title">钻孔信息</span>
        <button
          type="button"
          class="drill-info-panel__close"
          id="drillInfoClose"
          title="关闭"
          aria-label="关闭钻孔信息"
        >
          ×
        </button>
      </div>
      <div class="cyber-panel__body drill-info-panel__body" id="drillInfoBody"></div>
    </div>
  `;

  const bodyEl = container.querySelector("#drillInfoBody");
  const closeBtn = container.querySelector("#drillInfoClose");
  let currentInfo = null;

  closeBtn.addEventListener("click", () => {
    onClose?.();
  });

  bodyEl.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action || !currentInfo) {
      return;
    }

    if (action === "full-log") {
      fullLogModal.show(currentInfo);
      return;
    }

    if (action === "export") {
      downloadDrillHoleLog(currentInfo);
    }
  });

  function showDrill(folder) {
    const info = getDrillHoleInfo(folder);
    currentInfo = info;

    if (!info) {
      bodyEl.innerHTML = `
        <div class="survey-table-empty">
          <p class="survey-table-empty__title">暂无钻孔数据</p>
          <p class="survey-table-empty__hint">该钻孔信息待接入</p>
        </div>
      `;
      return;
    }

    bodyEl.innerHTML = renderDrillInfoContent(info);
  }

  return { showDrill };
}
