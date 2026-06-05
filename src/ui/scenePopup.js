import * as Cesium from "cesium";
import { worldToScreen } from "../utils/scenePick.js";

const POPUP_IMAGE = `${import.meta.env.BASE_URL}img/popup_panel.png`;

function createPopupElement(title) {
  const el = document.createElement("div");
  el.className = "scene-popup";
  el.innerHTML = `
    <img class="scene-popup__bg" src="${POPUP_IMAGE}" alt="" draggable="false" />
    <div class="scene-popup__title">${title}</div>
  `;
  return el;
}

export function initScenePopupManager(viewer) {
  let current = null;

  function hide() {
    if (!current) {
      return;
    }
    current.removeListener();
    current.element.remove();
    current = null;
  }

  function show({ worldPosition, title }) {
    hide();

    const element = createPopupElement(title);
    document.body.appendChild(element);

    function updatePosition() {
      const screen = worldToScreen(viewer, worldPosition);
      if (!Cesium.defined(screen)) {
        element.hidden = true;
        return;
      }

      element.hidden = false;
      element.style.left = `${screen.x}px`;
      element.style.top = `${screen.y}px`;
    }

    const removeListener = viewer.scene.postRender.addEventListener(updatePosition);
    updatePosition();

    current = { element, removeListener, worldPosition, title };
  }

  return { show, hide, getCurrent: () => current };
}
