const APP_TITLE = "基于WebGL的地下工程三维基础信息系统";

function createSidebarControls(side, expandLabel) {
  const isLeft = side === "left";
  const collapseIcon = isLeft ? "◀" : "▶";
  const expandTab = document.createElement("button");
  expandTab.type = "button";
  expandTab.className = `sidebar-expand-tab sidebar-expand-tab--${side}`;
  expandTab.setAttribute("aria-label", `展开${expandLabel}`);
  expandTab.innerHTML = `<span class="sidebar-expand-tab__label">${expandLabel}</span>`;

  const collapseBtn = document.createElement("button");
  collapseBtn.type = "button";
  collapseBtn.className = `sidebar-edge-btn sidebar-edge-btn--${side}`;
  collapseBtn.setAttribute("aria-label", `收起${expandLabel}`);
  collapseBtn.textContent = collapseIcon;

  return { expandTab, collapseBtn };
}

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
      <div class="sidebar-slide sidebar-slide--left"></div>
    </aside>

    <aside class="app-sidebar app-sidebar--right">
      <div class="sidebar-slide sidebar-slide--right"></div>
    </aside>

    <div id="bottomToolbarRoot" class="bottom-toolbar-root"></div>
  `;

  document.body.prepend(app);

  const leftSidebar = app.querySelector(".app-sidebar--left");
  const rightSidebar = app.querySelector(".app-sidebar--right");
  const leftSlide = leftSidebar.querySelector(".sidebar-slide--left");
  const rightSlide = rightSidebar.querySelector(".sidebar-slide--right");

  const leftControls = createSidebarControls("left", "勘察数据");
  const rightControls = createSidebarControls("right", "数据表格");

  leftSlide.innerHTML = `
    <div class="cyber-panel cyber-panel--nav">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="cyber-panel__title">勘察数据</span>
      </div>
      <div class="cyber-panel__body">
        <div id="layerTreeRoot" class="layer-tree"></div>
      </div>
    </div>
  `;

  const chartPanelRoot = document.createElement("div");
  chartPanelRoot.id = "chartPanelRoot";
  chartPanelRoot.className = "chart-panel-root";
  rightSlide.appendChild(rightControls.collapseBtn);
  rightSlide.appendChild(chartPanelRoot);

  leftSlide.appendChild(leftControls.collapseBtn);
  leftSidebar.appendChild(leftControls.expandTab);
  rightSidebar.appendChild(rightControls.expandTab);

  function setSidebarCollapsed(sidebar, collapsed) {
    sidebar.classList.toggle("is-collapsed", collapsed);
    sidebar.dataset.collapsed = collapsed ? "true" : "false";
  }

  function isSidebarCollapsed(sidebar) {
    return sidebar.classList.contains("is-collapsed");
  }

  leftControls.collapseBtn.addEventListener("click", () => {
    setSidebarCollapsed(leftSidebar, true);
  });
  leftControls.expandTab.addEventListener("click", () => {
    setSidebarCollapsed(leftSidebar, false);
  });
  rightControls.collapseBtn.addEventListener("click", () => {
    setSidebarCollapsed(rightSidebar, true);
  });
  rightControls.expandTab.addEventListener("click", () => {
    setSidebarCollapsed(rightSidebar, false);
  });

  return {
    layerTreeRoot: app.querySelector("#layerTreeRoot"),
    chartPanelRoot,
    bottomToolbarRoot: app.querySelector("#bottomToolbarRoot"),
    cesiumContainer: app.querySelector("#cesiumContainer"),
    showLeftSidebar() {
      setSidebarCollapsed(leftSidebar, false);
    },
    hideLeftSidebar() {
      setSidebarCollapsed(leftSidebar, true);
    },
    showRightSidebar() {
      setSidebarCollapsed(rightSidebar, false);
    },
    hideRightSidebar() {
      setSidebarCollapsed(rightSidebar, true);
    },
    collapseSidebars() {
      setSidebarCollapsed(leftSidebar, true);
      setSidebarCollapsed(rightSidebar, true);
    },
    isRightSidebarCollapsed() {
      return isSidebarCollapsed(rightSidebar);
    },
    toggleLeftSidebar() {
      setSidebarCollapsed(leftSidebar, !isSidebarCollapsed(leftSidebar));
    },
    toggleRightSidebar() {
      setSidebarCollapsed(rightSidebar, !isSidebarCollapsed(rightSidebar));
    },
  };
}
