/** 简化视图行高比例（px/m） */
export const SIMPLIFIED_ROW_HEIGHT_SCALE = 2.0;
export const MIN_ROW_HEIGHT = 12;

const DEPTH_TICKS = [0, 50, 100, 150, 200, 250];

export function formatDepth(value) {
  return Number(value).toFixed(2);
}

export function formatRange(from, to) {
  return `${formatDepth(from)} ~ ${formatDepth(to)}`;
}

export function formatExportRange(from, to) {
  return `${formatDepth(from)}～${formatDepth(to)}`;
}

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function normalizeLayer(layer, index) {
  const thickness = layer.thickness ?? layer.to - layer.from;
  return {
    ...layer,
    sequence: layer.sequence ?? index + 1,
    stratumCode: layer.stratumCode ?? layer.mergeStratumCode ?? "/",
    thickness,
  };
}

export function getNormalizedLayers(info) {
  return info.layers.map(normalizeLayer);
}

export function computeStratumCodeRowspans(layers) {
  const rowspans = new Array(layers.length).fill(0);
  let index = 0;

  while (index < layers.length) {
    const code = layers[index].stratumCode;
    let end = index + 1;

    while (
      end < layers.length &&
      layers[end].stratumCode === code &&
      !layers[end].stratumCodeBreak
    ) {
      end += 1;
    }

    rowspans[index] = end - index;
    index = end;
  }

  return rowspans;
}

export function getWaterLevel(info) {
  return info.stableWaterLevel ?? info.groundwater;
}

function getSimplifiedRowHeight(layer) {
  return Math.max(layer.thickness * SIMPLIFIED_ROW_HEIGHT_SCALE, MIN_ROW_HEIGHT);
}

function renderDepthAxis(depth) {
  const ticks = [...DEPTH_TICKS.filter((tick) => tick < depth), depth];
  return `
    <div class="drill-info-column__axis" aria-hidden="true">
      <span class="drill-info-column__axis-label">深度(m)</span>
      ${ticks
        .map((tick, index, allTicks) => {
          if (index === 0) {
            return `<span class="drill-info-column__tick drill-info-column__tick--start">${formatDepth(tick)}</span>`;
          }
          if (index === allTicks.length - 1) {
            return `<span class="drill-info-column__tick drill-info-column__tick--end">${formatDepth(tick)}</span>`;
          }
          const top = (tick / depth) * 100;
          return `<span class="drill-info-column__tick" style="top: ${top}%">${formatDepth(tick)}</span>`;
        })
        .join("")}
    </div>
  `;
}

function renderChartBar(info) {
  const waterLevel = getWaterLevel(info);
  const waterTop = (waterLevel / info.depth) * 100;
  const segments = info.layers
    .map((layer) => {
      const height = ((layer.to - layer.from) / info.depth) * 100;
      return `<div class="drill-info-column__segment" style="height: ${height}%; background-color: ${layer.color};"></div>`;
    })
    .join("");

  return `
    <div class="drill-info-column__chart">
      <div class="drill-info-column__bar">${segments}</div>
      <div
        class="drill-info-column__waterline"
        style="top: ${waterTop}%;"
        title="稳定水位 ${formatDepth(waterLevel)} m"
      ></div>
    </div>
  `;
}

function renderChartCells(info, rowCount, index) {
  if (index !== 0) {
    return "";
  }

  return `
    <td class="drill-info-table__axis-cell" rowspan="${rowCount}">
      ${renderDepthAxis(info.depth)}
    </td>
    <td class="drill-info-table__chart-cell" rowspan="${rowCount}">
      ${renderChartBar(info)}
    </td>
  `;
}

function renderStratumCodeCell(layer, index, stratumCodeRowspans) {
  if (stratumCodeRowspans[index] <= 0) {
    return "";
  }

  return `<td class="drill-info-table__code-cell" rowspan="${stratumCodeRowspans[index]}">${escapeHtml(layer.stratumCode)}</td>`;
}

export function renderBasicInfoTable(info) {
  const waterLevel = getWaterLevel(info);
  return `
    <table class="drill-info-table drill-info-table--basic">
      <tbody>
        <tr>
          <th scope="row">孔号</th>
          <td colspan="2">${escapeHtml(info.id)}</td>
        </tr>
        <tr>
          <th scope="row">里程桩号</th>
          <td colspan="2">${escapeHtml(info.mileageStake || "/")}</td>
        </tr>
        <tr>
          <th scope="row">孔口高程</th>
          <td colspan="2">${formatDepth(info.elevation)} m</td>
        </tr>
        <tr>
          <th scope="row">钻孔深度</th>
          <td colspan="2">${formatDepth(info.depth)} m</td>
        </tr>
        <tr>
          <th scope="row">孔口坐标</th>
          <td>X=${formatDepth(info.coordX)}</td>
          <td>Y=${formatDepth(info.coordY)}</td>
        </tr>
        <tr>
          <th scope="row">稳定水位</th>
          <td colspan="2">${formatDepth(waterLevel)} m</td>
        </tr>
        <tr>
          <th scope="row">终孔直径</th>
          <td colspan="2">${info.finalDiameter != null ? `${info.finalDiameter} mm` : "/"}</td>
        </tr>
      </tbody>
    </table>
  `;
}

export function renderSimplifiedLithologyTable(info) {
  const layers = getNormalizedLayers(info);
  const rowCount = layers.length;
  const stratumCodeRowspans = computeStratumCodeRowspans(layers);

  return `
    <div class="drill-info-lithology-wrap">
      <table class="drill-info-table drill-info-table--lithology">
        <thead>
          <tr>
            <th scope="col" class="drill-info-table__col--axis">深度(m)</th>
            <th scope="col" class="drill-info-table__col--chart">柱状</th>
            <th scope="col" class="drill-info-table__col--seq">层序</th>
            <th scope="col" class="drill-info-table__col--code">地层代号</th>
            <th scope="col" class="drill-info-table__col--lithology">岩性</th>
            <th scope="col" class="drill-info-table__col--range">深度范围(m)</th>
            <th scope="col" class="drill-info-table__col--thickness">厚度(m)</th>
          </tr>
        </thead>
        <tbody>
          ${layers
            .map(
              (layer, index) => `
                <tr style="height: ${getSimplifiedRowHeight(layer)}px">
                  ${renderChartCells(info, rowCount, index)}
                  <td>${layer.sequence}</td>
                  ${renderStratumCodeCell(layer, index, stratumCodeRowspans)}
                  <td>${escapeHtml(layer.lithology)}</td>
                  <td>${formatRange(layer.from, layer.to)}</td>
                  <td>${formatDepth(layer.thickness)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export function renderFullLithologyTable(info) {
  const layers = getNormalizedLayers(info);
  const rowCount = layers.length;
  const stratumCodeRowspans = computeStratumCodeRowspans(layers);

  return `
    <div class="drill-info-lithology-wrap drill-info-lithology-wrap--full">
      <table class="drill-info-table drill-info-table--lithology drill-info-table--full">
        <thead>
          <tr>
            <th scope="col" class="drill-info-table__col--axis">深度(m)</th>
            <th scope="col" class="drill-info-table__col--chart">柱状</th>
            <th scope="col" class="drill-info-table__col--seq">层序</th>
            <th scope="col" class="drill-info-table__col--code">地层代号</th>
            <th scope="col" class="drill-info-table__col--range">深度范围(m)</th>
            <th scope="col" class="drill-info-table__col--thickness">厚度(m)</th>
            <th scope="col" class="drill-info-table__col--lithology">岩性</th>
            <th scope="col" class="drill-info-table__col--desc">岩土描述</th>
          </tr>
        </thead>
        <tbody>
          ${layers
            .map(
              (layer, index) => `
                <tr>
                  ${renderChartCells(info, rowCount, index)}
                  <td>${layer.sequence}</td>
                  ${renderStratumCodeCell(layer, index, stratumCodeRowspans)}
                  <td>${formatRange(layer.from, layer.to)}</td>
                  <td>${formatDepth(layer.thickness)}</td>
                  <td>${escapeHtml(layer.lithology)}</td>
                  <td class="drill-info-table__desc-cell">${escapeHtml(layer.description || "/")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export function renderWaterLegend(info) {
  return `
    <div class="drill-info-water-legend">
      <span class="drill-info-water-legend__line" aria-hidden="true"></span>
      <span>稳定水位：${formatDepth(getWaterLevel(info))} m</span>
    </div>
  `;
}
