import { initSurveyTablePanel } from "./surveyTablePanel.js";
import { initDrillHoleInfoPanel } from "./drillHoleInfoPanel.js";

function createFunctionPanelShell(title) {
  return `
    <div class="cyber-panel cyber-panel--nav cyber-panel--table cyber-panel--function">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title">${title}</span>
      </div>
      <div class="cyber-panel__body function-panel__body"></div>
    </div>
  `;
}

export function initRightPanel(container) {
  const tableRoot = document.createElement("div");
  tableRoot.className = "right-panel__table";
  container.appendChild(tableRoot);

  const functionRoot = document.createElement("div");
  functionRoot.className = "right-panel__function";
  functionRoot.hidden = true;
  container.appendChild(functionRoot);

  const drillInfoRoot = document.createElement("div");
  drillInfoRoot.className = "right-panel__drill-info";
  drillInfoRoot.hidden = true;
  container.appendChild(drillInfoRoot);

  const surveyTablePanel = initSurveyTablePanel(tableRoot);

  let mode = "table";
  let activeFunctionId = null;
  let lastTableNode = null;
  const functionPanels = new Map();

  const drillHoleInfoPanel = initDrillHoleInfoPanel(drillInfoRoot, {
    onClose() {
      showTable(lastTableNode);
    },
  });

  function registerFunctionPanel(id, title, initFn) {
    const wrapper = document.createElement("div");
    wrapper.className = "function-panel";
    wrapper.dataset.id = id;
    wrapper.hidden = true;
    wrapper.innerHTML = createFunctionPanelShell(title);
    const body = wrapper.querySelector(".function-panel__body");
    const api = initFn(body);
    functionRoot.appendChild(wrapper);
    functionPanels.set(id, { wrapper, api });
  }

  function hideAllRoots() {
    tableRoot.hidden = true;
    functionRoot.hidden = true;
    drillInfoRoot.hidden = true;
  }

  function showTable(node) {
    mode = "table";
    activeFunctionId = null;
    hideAllRoots();
    tableRoot.hidden = false;
    functionPanels.forEach(({ wrapper, api }) => {
      wrapper.hidden = true;
      api.deactivate?.();
    });
    if (node) {
      lastTableNode = node;
      surveyTablePanel.showTable(node);
    }
  }

  function showDrillInfo(folder) {
    mode = "drillInfo";
    activeFunctionId = null;
    hideAllRoots();
    drillInfoRoot.hidden = false;
    functionPanels.forEach(({ wrapper, api }) => {
      wrapper.hidden = true;
      api.deactivate?.();
    });
    drillHoleInfoPanel.showDrill(folder);
  }

  function showFunction(id) {
    if (!functionPanels.has(id)) {
      return;
    }
    mode = "function";
    activeFunctionId = id;
    hideAllRoots();
    functionRoot.hidden = false;

    functionPanels.forEach(({ wrapper, api }, panelId) => {
      const visible = panelId === id;
      wrapper.hidden = !visible;
      if (visible) {
        api.activate?.();
      } else {
        api.deactivate?.();
      }
    });
  }

  function deactivateFunctions() {
    showTable(lastTableNode);
  }

  return {
    showTable,
    showDrillInfo,
    showFunction,
    deactivateFunctions,
    registerFunctionPanel,
    getMode: () => mode,
    getActiveFunctionId: () => activeFunctionId,
  };
}
