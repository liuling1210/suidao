const APP_TITLE = "基于WebGL的地下工程三维基础信息系统";

export function initAppShell() {
  const app = document.createElement("div");
  app.id = "app";
  app.className = "app-shell";
  app.innerHTML = `
    <div id="cesiumContainer" class="app-viewer"></div>

    <header class="app-header">
      <div class="app-header__side app-header__side--left">
        <span class="app-header__badge">地下工程</span>
        <span class="app-header__meta">三维可视化平台</span>
      </div>
      <div class="app-header__title-wrap">
        <div class="app-header__title-frame">
          <h1 class="app-header__title">${APP_TITLE}</h1>
        </div>
      </div>
    </header>

    <aside class="app-sidebar app-sidebar--left">
      <div class="cyber-panel cyber-panel--nav">
        <div class="cyber-panel__header">
          <span class="cyber-panel__icon"></span>
          <span class="cyber-panel__title">勘察数据</span>
        </div>
        <div class="cyber-panel__body">
          <div id="layerTreeRoot" class="layer-tree"></div>
        </div>
      </div>
    </aside>

    <aside class="app-sidebar app-sidebar--right app-sidebar--hidden">
      <div id="chartPanelRoot" class="chart-panel-root"></div>
    </aside>
  `;

  document.body.prepend(app);

  const rightSidebar = app.querySelector(".app-sidebar--right");

  return {
    layerTreeRoot: app.querySelector("#layerTreeRoot"),
    chartPanelRoot: app.querySelector("#chartPanelRoot"),
    cesiumContainer: app.querySelector("#cesiumContainer"),
    showRightSidebar() {
      rightSidebar.classList.remove("app-sidebar--hidden");
    },
    hideRightSidebar() {
      rightSidebar.classList.add("app-sidebar--hidden");
    },
  };
}
