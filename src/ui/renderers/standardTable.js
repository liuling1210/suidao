const COLUMN_COUNT = 7;

function renderColgroup() {
  return `
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
    </colgroup>
  `;
}

function renderHeader() {
  return `
    <thead>
      <tr>
        <th rowspan="3">样品编号</th>
        <th rowspan="2">天然密度</th>
        <th colspan="2">单轴抗压强度</th>
        <th rowspan="3">软化系数</th>
        <th colspan="2">天然三轴抗剪</th>
      </tr>
      <tr>
        <th>天然</th>
        <th>饱和</th>
        <th>c</th>
        <th>φ</th>
      </tr>
      <tr>
        <th><span class="survey-table__unit">(g/cm³)</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">°</span></th>
      </tr>
    </thead>
  `;
}

function renderDataCell(value) {
  const display = value === "" || value == null ? "" : value;
  return `<td>${display}</td>`;
}

function renderSampleRows(samples) {
  let html = "";

  for (const sample of samples) {
    const rowCount = sample.rows.length;
    const triaxialSpan = sample.triaxialRowspan ?? 0;

    sample.rows.forEach((row, index) => {
      html += "<tr>";

      if (index === 0) {
        html += `<td class="survey-table__sample" rowspan="${rowCount}">${sample.sampleId}</td>`;
      }

      html += renderDataCell(row.density);
      html += renderDataCell(row.ucsNatural);
      html += renderDataCell(row.ucsSaturated);
      html += renderDataCell(row.softening);

      if (triaxialSpan > 1) {
        if (index === 0) {
          html += `<td rowspan="${triaxialSpan}">${row.c ?? "-"}</td>`;
          html += `<td rowspan="${triaxialSpan}">${row.phi ?? "-"}</td>`;
        }
      } else {
        html += renderDataCell(row.c);
        html += renderDataCell(row.phi);
      }

      html += "</tr>";
    });
  }

  return html;
}

function renderStatRows(stats) {
  return stats
    .map(
      (stat) => `
        <tr class="survey-table__stat">
          <td class="survey-table__stat-label">${stat.label}</td>
          ${stat.values.map((value) => renderDataCell(value)).join("")}
        </tr>
      `
    )
    .join("");
}

export function renderStandardTable(table) {
  return `
    <div class="survey-table-wrap">
      <table class="survey-table">
        ${renderColgroup()}
        ${renderHeader()}
        <tbody>
          ${renderSampleRows(table.samples)}
        </tbody>
        <tfoot>
          ${renderStatRows(table.stats)}
          <tr class="survey-table__remark">
            <td class="survey-table__stat-label">备注</td>
            <td colspan="${COLUMN_COUNT - 1}">${table.remark || ""}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}
