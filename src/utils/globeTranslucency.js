export const DEFAULT_GLOBE_ALPHA = 1;

export function applyGlobeAlpha(viewer, alpha) {
  if (alpha >= 1) {
    viewer.scene.globe.translucency.enabled = false;
    viewer.scene.globe.translucency.frontFaceAlpha = 1;
    return;
  }

  viewer.scene.globe.translucency.enabled = true;
  viewer.scene.globe.translucency.frontFaceAlpha = alpha;
}

/** 隐藏地形影像：关闭影像图层并隐藏地球表面（避免默认蓝色 baseColor 透出） */
export function hideTerrainImagery(viewer) {
  const layers = viewer.imageryLayers;
  for (let i = 0; i < layers.length; i += 1) {
    layers.get(i).show = false;
  }

  const globe = viewer.scene.globe;
  globe.show = false;
  globe.translucency.enabled = false;
  globe.translucency.frontFaceAlpha = 1;
}

/** 恢复地形影像显示 */
export function showTerrainImagery(viewer) {
  const layers = viewer.imageryLayers;
  for (let i = 0; i < layers.length; i += 1) {
    const layer = layers.get(i);
    layer.show = true;
    layer.alpha = 1;
  }

  const globe = viewer.scene.globe;
  globe.show = true;
  applyGlobeAlpha(viewer, DEFAULT_GLOBE_ALPHA);
}
