import * as Cesium from "cesium";

const MOVE_KEYS = new Set(["w", "a", "s", "d", "q", "e"]);
const ROTATE_KEYS = new Set(["arrowup", "arrowdown", "arrowleft", "arrowright"]);

const MOVE_SPEED = 30;
const ROTATE_SPEED = 0.004;

export function createCameraRoam(viewer) {
  let active = false;
  const pressed = new Set();
  let removeTick = null;

  function onKeyDown(event) {
    if (!active) {
      return;
    }
    const key = event.key.toLowerCase();
    if (MOVE_KEYS.has(key) || ROTATE_KEYS.has(key)) {
      pressed.add(key);
      event.preventDefault();
    }
  }

  function onKeyUp(event) {
    const key = event.key.toLowerCase();
    pressed.delete(key);
  }

  function tick() {
    if (!active || pressed.size === 0) {
      return;
    }

    const camera = viewer.camera;
    const dt = 1 / 60;

    if (pressed.has("w")) {
      camera.moveForward(MOVE_SPEED * dt);
    }
    if (pressed.has("s")) {
      camera.moveBackward(MOVE_SPEED * dt);
    }
    if (pressed.has("a")) {
      camera.moveLeft(MOVE_SPEED * dt);
    }
    if (pressed.has("d")) {
      camera.moveRight(MOVE_SPEED * dt);
    }
    if (pressed.has("q")) {
      camera.moveDown(MOVE_SPEED * dt);
    }
    if (pressed.has("e")) {
      camera.moveUp(MOVE_SPEED * dt);
    }

    if (pressed.has("arrowleft")) {
      camera.lookLeft(ROTATE_SPEED);
    }
    if (pressed.has("arrowright")) {
      camera.lookRight(ROTATE_SPEED);
    }
    if (pressed.has("arrowup")) {
      camera.lookUp(ROTATE_SPEED);
    }
    if (pressed.has("arrowdown")) {
      camera.lookDown(ROTATE_SPEED);
    }
  }

  function activate() {
    if (active) {
      return;
    }
    active = true;
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    removeTick = viewer.clock.onTick.addEventListener(tick);
  }

  function deactivate() {
    if (!active) {
      return;
    }
    active = false;
    pressed.clear();
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
    if (removeTick) {
      viewer.clock.onTick.removeEventListener(tick);
      removeTick = null;
    }
  }

  return { activate, deactivate };
}
