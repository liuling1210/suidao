function normalizeCell(cell) {
  if (cell == null) {
    return { text: "", colspan: 1, rowspan: 1, className: "" };
  }
  if (typeof cell === "string" || typeof cell === "number") {
    return { text: String(cell), colspan: 1, rowspan: 1, className: "" };
  }
  return {
    text: cell.t ?? cell.text ?? "",
    colspan: cell.cs ?? cell.colspan ?? 1,
    rowspan: cell.rs ?? cell.rowspan ?? 1,
    className: cell.className ?? "",
  };
}

function renderCellTag(tag, cell) {
  const c = normalizeCell(cell);
  const attrs = [];
  if (c.colspan > 1) {
    attrs.push(`colspan="${c.colspan}"`);
  }
  if (c.rowspan > 1) {
    attrs.push(`rowspan="${c.rowspan}"`);
  }
  if (c.className) {
    attrs.push(`class="${c.className}"`);
  }
  const attrStr = attrs.length ? ` ${attrs.join(" ")}` : "";
  return `<${tag}${attrStr}>${c.text}</${tag}>`;
}

function renderHeaderRows(headerRows) {
  return headerRows
    .map((row) => `<tr>${row.map((cell) => renderCellTag("th", cell)).join("")}</tr>`)
    .join("");
}

function renderBodyRows(rows) {
  return rows.map((row) => `<tr>${row.map((cell) => renderCellTag("td", cell)).join("")}</tr>`).join("");
}

function getColumnCount(headerRows, rows) {
  const headerMax = headerRows.reduce(
    (max, row) => Math.max(max, row.reduce((sum, cell) => sum + normalizeCell(cell).colspan, 0)),
    0
  );
  const bodyMax = rows.reduce(
    (max, row) => Math.max(max, row.reduce((sum, cell) => sum + normalizeCell(cell).colspan, 0)),
    0
  );
  return Math.max(headerMax, bodyMax, 1);
}

export function renderMatrixTable(table) {
  const columnCount = getColumnCount(table.headerRows, table.rows);

  return `
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--matrix">
        <colgroup>
          ${Array.from({ length: columnCount }, () => '<col class="survey-table__col survey-table__col--num" />').join("")}
        </colgroup>
        <thead>
          ${renderHeaderRows(table.headerRows)}
        </thead>
        <tbody>
          ${renderBodyRows(table.rows)}
        </tbody>
        ${
          table.remark
            ? `<tfoot>
                <tr class="survey-table__remark">
                  <td class="survey-table__note" colspan="${columnCount}">${table.remark}</td>
                </tr>
              </tfoot>`
            : ""
        }
      </table>
    </div>
  `;
}
