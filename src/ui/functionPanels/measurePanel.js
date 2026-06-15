import { createMeasureTool } from "../../tools/measureTool.js";

function formatResult(result) {
  if (result.type === "distance") {
    return `距离：${result.value.toFixed(2)} ${result.unit}`;
  }
  if (result.type === "area") {
    return `面积：${result.value.toFixed(2)} ${result.unit}`;
  }
  if (result.type === "height") {
    return `高差：${result.heightDiff.toFixed(2)} m，水平距离：${result.horizontal.toFixed(2)} m`;
  }
  return "";
}

export function initMeasurePanel(container, viewer) {
  container.innerHTML = `
    <div class="function-panel__section">
      <p class="function-panel__hint">左键点击添加测量点与连线，双击左键结束测量。高度测量选取两个点后自动完成。</p>
      <div class="function-panel__actions">
        <button type="button" class="function-panel__btn" data-mode="distance">距离测量</button>
        <button type="button" class="function-panel__btn" data-mode="area">面积测量</button>
        <button type="button" class="function-panel__btn" data-mode="height">高度测量</button>
        <button type="button" class="function-panel__btn function-panel__btn--muted" data-mode="clear">清除全部</button>
      </div>
    </div>
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">测量结果</h3>
      <ul class="function-panel__results" id="measureResults"></ul>
    </div>
  `;

  const resultsEl = container.querySelector("#measureResults");
  const tool = createMeasureTool(viewer);

  tool.setResultCallback((result) => {
    const li = document.createElement("li");
    li.className = "function-panel__result-item";
    li.textContent = formatResult(result);
    resultsEl.prepend(li);
  });

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-mode]");
    if (!btn) {
      return;
    }
    const mode = btn.dataset.mode;
    if (mode === "distance") {
      tool.startDistance();
    } else if (mode === "area") {
      tool.startArea();
    } else if (mode === "height") {
      tool.startHeight();
    } else if (mode === "clear") {
      tool.clearAll();
      resultsEl.innerHTML = "";
    }
  });

  return {
    activate() {
      tool.activate();
    },
    deactivate() {
      tool.deactivate();
    },
  };
}
