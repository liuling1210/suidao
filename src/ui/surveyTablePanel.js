import { getSurveyTable } from "../data/tableRegistry.js";
import { downloadSurveyTable } from "../utils/downloadSurveyTable.js";
import { renderSurveyTable } from "./surveyTableRender.js";

function renderEmptyState(title) {
  return `
    <div class="survey-table-empty">
      <p class="survey-table-empty__title">${title}</p>
      <p class="survey-table-empty__hint">该表格数据待接入</p>
    </div>
  `;
}

export function initSurveyTablePanel(container) {
  container.innerHTML = `
    <div class="cyber-panel cyber-panel--nav cyber-panel--table">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title" id="surveyTableTitle"></span>
        <button
          type="button"
          class="survey-table-panel__download"
          id="surveyTableDownload"
          title="下载当前表格"
          hidden
        >
          下载
        </button>
      </div>
      <div class="cyber-panel__body" id="surveyTableBody"></div>
    </div>
  `;

  const titleEl = container.querySelector("#surveyTableTitle");
  const bodyEl = container.querySelector("#surveyTableBody");
  const downloadBtn = container.querySelector("#surveyTableDownload");

  let currentHeading = "";

  downloadBtn.addEventListener("click", () => {
    const tableEl = bodyEl.querySelector(".survey-table");
    if (tableEl && currentHeading) {
      downloadSurveyTable(tableEl, currentHeading);
    }
  });

  function showTable(node) {
    if (!node) {
      return;
    }

    const table = getSurveyTable(node.id);
    const heading = node.label;

    currentHeading = heading;
    titleEl.textContent = heading;

    if (table) {
      bodyEl.innerHTML = renderSurveyTable(table);
      downloadBtn.hidden = false;
    } else {
      bodyEl.innerHTML = renderEmptyState(heading);
      downloadBtn.hidden = true;
    }
  }

  return { showTable };
}
