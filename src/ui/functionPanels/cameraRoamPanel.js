import { createCameraRoam } from "../../tools/cameraRoam.js";

export function initCameraRoamPanel(container, viewer) {
  container.innerHTML = `
    <div class="function-panel__section">
      <p class="function-panel__hint">
        激活后使用键盘慢速漫游场景。漫游时建议将焦点保持在三维视窗内。
      </p>
    </div>
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">移动</h3>
      <ul class="function-panel__key-list">
        <li><kbd>W</kbd> 前进</li>
        <li><kbd>S</kbd> 后退</li>
        <li><kbd>A</kbd> 左移</li>
        <li><kbd>D</kbd> 右移</li>
        <li><kbd>Q</kbd> 下降</li>
        <li><kbd>E</kbd> 上升</li>
      </ul>
    </div>
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">视角</h3>
      <ul class="function-panel__key-list">
        <li><kbd>↑</kbd> 上看</li>
        <li><kbd>↓</kbd> 下看</li>
        <li><kbd>←</kbd> 左转</li>
        <li><kbd>→</kbd> 右转</li>
      </ul>
    </div>
    <div class="function-panel__status" id="roamStatus">漫游已启用</div>
  `;

  const roam = createCameraRoam(viewer);

  return {
    activate() {
      roam.activate();
    },
    deactivate() {
      roam.deactivate();
    },
  };
}
