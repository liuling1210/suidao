import * as Cesium from "cesium";
import { composeTilesetMatrix, DEFAULT_FINE_ADJUST } from "../utils/modelMatrixAdjust.js";

const FINE_TRANSLATION_RANGE = { min: -30, max: 30, step: 0.01, decimals: 2 };
const FINE_ROTATION_RANGE = { min: -15, max: 15, step: 0.01, decimals: 2 };
const FINE_SCALE_RANGE = { min: 0.97, max: 1.03, step: 0.0001, decimals: 4 };

const FIELDS = [
  { key: "tx", label: "东向 E (m)", group: "细调平移", ...FINE_TRANSLATION_RANGE },
  { key: "ty", label: "北向 N (m)", group: "细调平移", ...FINE_TRANSLATION_RANGE },
  { key: "tz", label: "天向 U (m)", group: "细调平移", ...FINE_TRANSLATION_RANGE },
  { key: "rx", label: "绕 X 轴 (东) °", group: "细调旋转", ...FINE_ROTATION_RANGE },
  { key: "ry", label: "绕 Y 轴 (北) °", group: "细调旋转", ...FINE_ROTATION_RANGE },
  { key: "rz", label: "绕 Z 轴 (天) °", group: "细调旋转", ...FINE_ROTATION_RANGE },
  { key: "scale", label: "缩放倍率", group: "细调缩放", ...FINE_SCALE_RANGE },
];

function formatValue(value, decimals) {
  return String(Number(value.toFixed(decimals)));
}

function createFieldRow(field, value) {
  return `
    <div class="control-panel__row">
      <label class="control-panel__label" for="tileset-${field.key}">${field.label}</label>
      <input
        id="tileset-${field.key}"
        class="control-panel__slider"
        type="range"
        min="${field.min}"
        max="${field.max}"
        step="${field.step}"
        value="${value}"
        data-key="${field.key}"
      />
      <input
        class="control-panel__number"
        type="number"
        min="${field.min}"
        max="${field.max}"
        step="${field.step}"
        value="${formatValue(value, field.decimals)}"
        data-key="${field.key}"
      />
    </div>
  `;
}

export function initTilesetTransformPanel({ tileset, baseMatrix, anchor, container = document.body }) {
  const adjust = { ...DEFAULT_FINE_ADJUST };

  const panel = document.createElement("div");
  panel.className = "control-panel tileset-panel";

  const groups = ["细调平移", "细调旋转", "细调缩放"];

  panel.innerHTML = `
    <div class="control-panel__title">模型变换</div>
    ${groups
      .map((group) => {
        const fields = FIELDS.filter((field) => field.group === group);
        return `
          <div class="control-panel__section">
            <div class="control-panel__section-title">${group}</div>
            ${fields.map((field) => createFieldRow(field, adjust[field.key])).join("")}
          </div>
        `;
      })
      .join("")}
    <button type="button" class="control-panel__reset">重置细调</button>
  `;

  container.appendChild(panel);

  function applyMatrix() {
    tileset.modelMatrix = composeTilesetMatrix(baseMatrix, anchor, adjust);
  }

  function syncValue(key, value) {
    const field = FIELDS.find((item) => item.key === key);
    const clamped = Cesium.Math.clamp(value, field.min, field.max);
    adjust[key] = clamped;

    const slider = panel.querySelector(`input[type="range"][data-key="${key}"]`);
    const number = panel.querySelector(`input[type="number"][data-key="${key}"]`);
    slider.value = String(clamped);
    number.value = formatValue(clamped, field.decimals);

    applyMatrix();
  }

  panel.querySelectorAll("input[type='range']").forEach((slider) => {
    slider.addEventListener("input", () => {
      syncValue(slider.dataset.key, Number(slider.value));
    });
  });

  panel.querySelectorAll("input[type='number']").forEach((input) => {
    input.addEventListener("change", () => {
      syncValue(input.dataset.key, Number(input.value));
    });
  });

  panel.querySelector(".control-panel__reset").addEventListener("click", () => {
    Object.keys(DEFAULT_FINE_ADJUST).forEach((key) => {
      syncValue(key, DEFAULT_FINE_ADJUST[key]);
    });
  });

  applyMatrix();

  return {
    panel,
    getAdjust: () => ({ ...adjust }),
    setAdjust: (values) => {
      Object.entries(values).forEach(([key, value]) => {
        if (key in adjust) {
          syncValue(key, value);
        }
      });
    },
  };
}
