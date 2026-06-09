const COLUMN_COUNT = 10;

const FIELDS = [
  "density",
  "ucsNatural",
  "ucsSaturated",
  "softening",
  "tensile",
  "shearPhi",
  "shearC",
  "elasticModulus",
  "poisson",
];

function renderCell(value) {
  const display = value === "" || value == null ? "" : value;
  return `<td>${display}</td>`;
}

function renderColgroup() {
  return `
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      ${FIELDS.map(() => '<col class="survey-table__col survey-table__col--num" />').join("")}
    </colgroup>
  `;
}

function renderHeader() {
  return `
    <thead>
      <tr>
        <th rowspan="2">岩样编号</th>
        <th rowspan="2">天然密度<br /><span class="survey-table__unit">(g/cm³)</span></th>
        <th colspan="2">岩石单轴抗压强度</th>
        <th rowspan="2">软化系数</th>
        <th rowspan="2">抗拉强度<br /><span class="survey-table__unit">(MPa)</span></th>
        <th colspan="2">抗剪强度(图解法)</th>
        <th colspan="2">变形强度</th>
      </tr>
      <tr>
        <th>天然<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>饱和<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>φ<br /><span class="survey-table__unit">(°)</span></th>
        <th>C<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>弹性模量<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>泊桑比</th>
      </tr>
    </thead>
  `;
}

function renderSampleRows(samples) {
  let html = "";

  for (const sample of samples) {
    const rowCount = sample.rows.length;
    const shearSpan = sample.shearRowspan ?? 0;

    sample.rows.forEach((row, index) => {
      html += "<tr>";

      if (index === 0) {
        html += `<td class="survey-table__sample" rowspan="${rowCount}">${sample.sampleId}</td>`;
      }

      html += renderCell(row.density);
      html += renderCell(row.ucsNatural);
      html += renderCell(row.ucsSaturated);
      html += renderCell(row.softening);
      html += renderCell(row.tensile);

      if (shearSpan > 1) {
        if (index === 0) {
          html += `<td rowspan="${shearSpan}">${row.shearPhi ?? ""}</td>`;
          html += `<td rowspan="${shearSpan}">${row.shearC ?? ""}</td>`;
        }
      } else {
        html += renderCell(row.shearPhi);
        html += renderCell(row.shearC);
      }

      html += renderCell(row.elasticModulus);
      html += renderCell(row.poisson);
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
          ${stat.values.map((value) => renderCell(value)).join("")}
        </tr>
      `
    )
    .join("");
}

export function renderRockPropertiesTable(table) {
  return `
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--extended">
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
