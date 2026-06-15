import { LITHOLOGY_LEGEND, LITHOLOGY_LEGEND_TITLE } from "../config/lithologyLegend.js";

function renderLegendItem({ name, color, type = "fill", lineStyle = "dashed", image }) {
  if (type === "line") {
    const lineClass =
      lineStyle === "solid"
        ? "lithology-legend__swatch lithology-legend__swatch--line lithology-legend__swatch--line-solid"
        : "lithology-legend__swatch lithology-legend__swatch--line";

    return `
      <li class="lithology-legend__item">
        <span
          class="${lineClass}"
          style="--legend-line-color: ${color};"
          aria-hidden="true"
        ></span>
        <span class="lithology-legend__label">${name}</span>
      </li>
    `;
  }

  const swatchStyle = image
    ? `background-image: url(${image});`
    : `background-color: ${color};`;

  return `
    <li class="lithology-legend__item">
      <span
        class="lithology-legend__swatch"
        style="${swatchStyle}"
        aria-hidden="true"
      ></span>
      <span class="lithology-legend__label">${name}</span>
    </li>
  `;
}

export function initLithologyLegendPanel(container = document.body) {
  const panel = document.createElement("div");
  panel.className = "lithology-legend-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <div class="lithology-legend">
      <div class="lithology-legend__title">${LITHOLOGY_LEGEND_TITLE}</div>
      <ul class="lithology-legend__list">
        ${LITHOLOGY_LEGEND.map(renderLegendItem).join("")}
      </ul>
    </div>
  `;

  container.appendChild(panel);

  return {
    panel,
    show() {
      panel.hidden = false;
    },
    hide() {
      panel.hidden = true;
    },
    isVisible: () => !panel.hidden,
  };
}
