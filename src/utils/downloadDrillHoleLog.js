import { downloadSurveyTable } from "./downloadSurveyTable.js";
import {
  escapeHtml,
  formatDepth,
  formatExportRange,
  normalizeLayer,
} from "../ui/drillHoleLogRender.js";

function renderExportTable(info) {
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>层序</th>
        <th>地层代号</th>
        <th>深度范围（m）</th>
        <th>厚度（m）</th>
        <th>岩性</th>
        <th>岩土描述</th>
      </tr>
    </thead>
    <tbody>
      ${info.layers
        .map((layer, index) => {
          const normalized = normalizeLayer(layer, index);
          const stratumCode = layer.stratumCode ?? "";
          return `
            <tr>
              <td>${normalized.sequence}</td>
              <td>${escapeHtml(stratumCode)}</td>
              <td>${formatExportRange(layer.from, layer.to)}</td>
              <td>${formatDepth(normalized.thickness)}</td>
              <td>${escapeHtml(layer.lithology)}</td>
              <td style="text-align:left;white-space:normal;">${escapeHtml(layer.description ?? "")}</td>
            </tr>
          `;
        })
        .join("")}
    </tbody>
  `;
  return table;
}

/** 导出钻孔分层数据表（仅层序、地层代号、深度范围、厚度、岩性、岩土描述） */
export function downloadDrillHoleLog(info) {
  if (!info?.layers?.length) {
    return;
  }

  const table = renderExportTable(info);
  downloadSurveyTable(table, `${info.id}_钻孔柱状图`);
}
