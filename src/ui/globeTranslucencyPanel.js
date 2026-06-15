import {
  applyGlobeAlpha,
  DEFAULT_GLOBE_ALPHA,
} from "../utils/globeTranslucency.js";

export function initGlobeTranslucencyPanel(viewer, container = document.body) {
  applyGlobeAlpha(viewer, DEFAULT_GLOBE_ALPHA);

  const panel = document.createElement("div");
  panel.className = "control-panel translucency-panel";
  panel.innerHTML = `
    <div class="translucency-panel__title">影像透明度</div>
    <div class="translucency-panel__control">
      <input
        id="globeAlphaSlider"
        class="translucency-panel__slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value="${DEFAULT_GLOBE_ALPHA}"
      />
      <span id="globeAlphaValue" class="translucency-panel__value">${DEFAULT_GLOBE_ALPHA.toFixed(2)}</span>
    </div>
  `;

  container.appendChild(panel);

  const slider = panel.querySelector("#globeAlphaSlider");
  const valueLabel = panel.querySelector("#globeAlphaValue");

  function setAlpha(alpha) {
    slider.value = String(alpha);
    valueLabel.textContent = alpha.toFixed(2);
  }

  slider.addEventListener("input", () => {
    const alpha = Number(slider.value);
    applyGlobeAlpha(viewer, alpha);
    valueLabel.textContent = alpha.toFixed(2);
  });

  return { setAlpha };
}
