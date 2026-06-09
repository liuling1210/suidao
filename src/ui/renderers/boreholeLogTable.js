function renderCell(value) {
  const display = value === "" || value == null ? "" : value;
  return `<td>${display}</td>`;
}

function renderColgroup(columnCount) {
  return `
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      ${Array.from({ length: columnCount - 1 }, () => '<col class="survey-table__col survey-table__col--num" />').join("")}
    </colgroup>
  `;
}

function renderHeader(headers) {
  const cells = headers
    .map((col) => `<th>${col.label.replace(/\n/g, "<br />")}</th>`)
    .join("");
  return `<thead><tr>${cells}</tr></thead>`;
}

function renderBody(groups, headers) {
  const dataKeys = headers.slice(1).map((col) => col.key);
  let html = "";

  for (const group of groups) {
    const rowCount = group.rows.length;

    group.rows.forEach((row, index) => {
      html += "<tr>";

      if (index === 0) {
        html += `<td class="survey-table__sample" rowspan="${rowCount}">${group.holeId}</td>`;
      }

      for (const key of dataKeys) {
        html += renderCell(row[key]);
      }

      html += "</tr>";
    });
  }

  return html;
}

export function renderBoreholeLogTable(table) {
  const headers = table.headers;
  const columnCount = headers.length;

  return `
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--borehole">
        ${renderColgroup(columnCount)}
        ${renderHeader(headers)}
        <tbody>
          ${renderBody(table.groups, headers)}
        </tbody>
        ${
          table.remark
            ? `<tfoot>
                <tr class="survey-table__remark">
                  <td class="survey-table__stat-label">备注</td>
                  <td colspan="${columnCount - 1}">${table.remark}</td>
                </tr>
              </tfoot>`
            : ""
        }
      </table>
    </div>
  `;
}
