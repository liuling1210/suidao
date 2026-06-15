import {
  renderBasicInfoTable,
  renderFullLithologyTable,
  renderWaterLegend,
} from "./drillHoleLogRender.js";
import { downloadDrillHoleLog } from "../utils/downloadDrillHoleLog.js";

export function createDrillHoleFullLogModal() {
  const overlay = document.createElement("div");
  overlay.className = "drill-full-log-modal";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="drill-full-log-modal__backdrop" data-action="close"></div>
    <div class="drill-full-log-modal__dialog" role="dialog" aria-modal="true">
      <div class="drill-full-log-modal__header">
        <h2 class="drill-full-log-modal__title" id="drillFullLogTitle"></h2>
        <button
          type="button"
          class="drill-full-log-modal__close"
          data-action="close"
          aria-label="关闭"
        >
          ×
        </button>
      </div>
      <div class="drill-full-log-modal__body" id="drillFullLogBody"></div>
      <div class="drill-full-log-modal__footer">
        <button type="button" class="drill-info-actions__btn" data-action="export-xls">
          导出
        </button>
        <button type="button" class="drill-info-actions__btn drill-info-actions__btn--muted" data-action="close">
          关闭
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const titleEl = overlay.querySelector("#drillFullLogTitle");
  const bodyEl = overlay.querySelector("#drillFullLogBody");
  let currentInfo = null;

  function hide() {
    overlay.hidden = true;
    currentInfo = null;
  }

  function show(info) {
    if (!info) {
      return;
    }

    currentInfo = info;
    titleEl.textContent = `完整柱状图 — ${info.id}`;
    bodyEl.innerHTML = `
      <section class="drill-info-section">
        <h3 class="drill-info-section__title">基本信息</h3>
        ${renderBasicInfoTable(info)}
      </section>
      <section class="drill-info-section">
        <h3 class="drill-info-section__title">钻孔柱状图</h3>
        ${renderFullLithologyTable(info)}
        ${renderWaterLegend(info)}
      </section>
    `;
    overlay.hidden = false;
  }

  overlay.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) {
      return;
    }

    if (action === "close") {
      hide();
      return;
    }

    if (!currentInfo) {
      return;
    }

    if (action === "export-xls") {
      downloadDrillHoleLog(currentInfo);
    }
  });

  return { show, hide };
}
