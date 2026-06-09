import { renderBoreholeLogTable } from "./renderers/boreholeLogTable.js";
import { renderMatrixTable } from "./renderers/matrixTable.js";
import { renderRockPropertiesTable } from "./renderers/rockPropertiesTable.js";
import { renderStandardTable } from "./renderers/standardTable.js";

export function renderSurveyTable(table) {
  if (table.schema === "rockProperties") {
    return renderRockPropertiesTable(table);
  }
  if (table.schema === "boreholeLog") {
    return renderBoreholeLogTable(table);
  }
  if (table.schema === "matrixTable") {
    return renderMatrixTable(table);
  }
  return renderStandardTable(table);
}
