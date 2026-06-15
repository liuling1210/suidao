import * as Cesium from "cesium";
import { formatLonLatHeight, pickWorldPosition } from "../utils/scenePick.js";

const MARK_COLOR = Cesium.Color.fromCssColorString("#ffd700");

function removeElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
  }
}

export function createLocationMarkTool(viewer) {
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  const entities = viewer.entities;
  let markIndex = 0;
  const marks = [];

  viewer.scene.canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  function showCoordsPopup(screenPosition, formatted, cartesian) {
    removeElement("locationMarkCoordsPopup");

    const popup = document.createElement("div");
    popup.id = "locationMarkCoordsPopup";
    popup.className = "location-mark-coords-popup";
    popup.innerHTML = `
      <div class="location-mark-coords-popup__header">
        <span>坐标信息</span>
        <button type="button" class="location-mark-coords-popup__close" aria-label="关闭">×</button>
      </div>
      <dl class="location-mark-coords-popup__grid">
        <dt>经度</dt><dd>${formatted.lon}°</dd>
        <dt>纬度</dt><dd>${formatted.lat}°</dd>
        <dt>高程</dt><dd>${formatted.height} m</dd>
        <dt>X</dt><dd>${cartesian.x.toFixed(2)}</dd>
        <dt>Y</dt><dd>${cartesian.y.toFixed(2)}</dd>
        <dt>Z</dt><dd>${cartesian.z.toFixed(2)}</dd>
      </dl>
    `;

    popup.style.left = `${Math.min(screenPosition.x + 12, window.innerWidth - 280)}px`;
    popup.style.top = `${Math.min(screenPosition.y + 12, window.innerHeight - 220)}px`;
    document.body.appendChild(popup);

    const close = () => {
      popup.remove();
      document.removeEventListener("click", closeOnOutside);
    };

    const closeOnOutside = (event) => {
      if (!popup.contains(event.target)) {
        close();
      }
    };

    popup.querySelector(".location-mark-coords-popup__close").addEventListener("click", close);
    setTimeout(() => document.addEventListener("click", closeOnOutside), 0);
  }

  function showContextMenu(screenPosition, pick) {
    removeElement("locationMarkContextMenu");
    removeElement("locationMarkCoordsPopup");

    const formatted = formatLonLatHeight(pick.lonLatHeight);
    const cartesian = pick.cartesian;

    const menu = document.createElement("div");
    menu.id = "locationMarkContextMenu";
    menu.className = "location-mark-menu";
    menu.innerHTML = `
      <button type="button" class="location-mark-menu__btn" data-action="coords">
        查看坐标
      </button>
      <button type="button" class="location-mark-menu__btn" data-action="mark">
        添加标记
      </button>
      ${marks.length > 0 ? `
        <button type="button" class="location-mark-menu__btn location-mark-menu__btn--muted" data-action="clear">
          清除全部标记
        </button>
      ` : ""}
    `;

    menu.style.left = `${screenPosition.x}px`;
    menu.style.top = `${screenPosition.y}px`;
    document.body.appendChild(menu);

    const close = () => {
      menu.remove();
      document.removeEventListener("click", closeOnOutside);
    };

    const closeOnOutside = (event) => {
      if (!menu.contains(event.target)) {
        close();
      }
    };

    setTimeout(() => document.addEventListener("click", closeOnOutside), 0);

    menu.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-action]");
      if (!btn) {
        return;
      }
      const action = btn.dataset.action;
      if (action === "coords") {
        showCoordsPopup(screenPosition, formatted, cartesian);
      } else if (action === "mark") {
        markIndex += 1;
        const label = `标记 ${markIndex}`;
        const entity = entities.add({
          position: cartesian,
          point: {
            pixelSize: 12,
            color: MARK_COLOR,
            outlineColor: Cesium.Color.WHITE,
            outlineWidth: 2,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          },
          label: {
            text: label,
            font: "13px sans-serif",
            fillColor: MARK_COLOR,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -16),
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          },
        });
        marks.push({
          id: markIndex,
          label,
          lon: formatted.lon,
          lat: formatted.lat,
          height: formatted.height,
          entity,
        });
      } else if (action === "clear") {
        clearMarks();
      }
      close();
    });
  }

  function clearMarks() {
    marks.forEach((mark) => entities.remove(mark.entity));
    marks.length = 0;
    markIndex = 0;
  }

  handler.setInputAction((click) => {
    const pick = pickWorldPosition(viewer, click.position);
    if (!pick) {
      return;
    }
    showContextMenu(click.position, pick);
  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

  return {
    getMarks() {
      return [...marks];
    },
    clearMarks,
    destroy() {
      removeElement("locationMarkContextMenu");
      removeElement("locationMarkCoordsPopup");
      handler.destroy();
    },
  };
}
