export const MAIN_TILESET_FOLDER = "out1";

/** 与 out1 同级的隧道模型，启动时一并加载 */
export const TUNNEL_TILESET_FOLDERS = ["out1", "out"];

export const DRILL_TILESET_FOLDERS = ["out2", "out3", "out4"];

const SHARED_LOD_OPTIONS = {
  skipLevelOfDetail: true,
  baseScreenSpaceError: 1024,
  skipScreenSpaceErrorFactor: 16,
  cullWithChildrenBounds: true,
  dynamicScreenSpaceError: true,
  dynamicScreenSpaceErrorDensity: 0.002,
  foveatedScreenSpaceError: true,
  foveatedConeSize: 0.1,
};

/** 主隧道 LOD：近看保留细节 */
const MAIN_TILESET_LOD = {
  ...SHARED_LOD_OPTIONS,
  maximumScreenSpaceError: 20,
};

/** 钻孔模型 LOD：可更激进 */
const DRILL_TILESET_LOD = {
  ...SHARED_LOD_OPTIONS,
  maximumScreenSpaceError: 48,
};

export function getTilesetLoadOptions(folder) {
  return TUNNEL_TILESET_FOLDERS.includes(folder) ? MAIN_TILESET_LOD : DRILL_TILESET_LOD;
}
