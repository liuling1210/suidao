const DEFAULT_ALPHA = 1;

function applyGlobeAlpha(viewer, alpha) {
  if (alpha >= 1) {
    viewer.scene.globe.translucency.enabled = false;
    viewer.scene.globe.translucency.frontFaceAlpha = 1;
    return;
  }

  viewer.scene.globe.translucency.enabled = true;
  viewer.scene.globe.translucency.frontFaceAlpha = alpha;
}

export function initGlobeTranslucencyPanel(viewer, container = document.body) {
  applyGlobeAlpha(viewer, DEFAULT_ALPHA);

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
        value="${DEFAULT_ALPHA}"
      />
      <span id="globeAlphaValue" class="translucency-panel__value">${DEFAULT_ALPHA.toFixed(2)}</span>
    </div>
  `;

  container.appendChild(panel);

  const slider = panel.querySelector("#globeAlphaSlider");
  const valueLabel = panel.querySelector("#globeAlphaValue");

  slider.addEventListener("input", () => {
    const alpha = Number(slider.value);
    applyGlobeAlpha(viewer, alpha);
    valueLabel.textContent = alpha.toFixed(2);
  });

  return panel;
}
