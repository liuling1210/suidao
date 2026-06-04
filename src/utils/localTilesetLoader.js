import * as Cesium from "cesium";

function normalizePath(path) {
  return path.replace(/\\/g, "/").replace(/^\.\//, "");
}

function getDirectory(path) {
  const index = path.lastIndexOf("/");
  return index >= 0 ? path.slice(0, index + 1) : "";
}

function resolveRelativePath(baseDir, relativeUrl) {
  if (/^(blob:|data:|https?:)/i.test(relativeUrl)) {
    return relativeUrl;
  }

  const stack = baseDir.split("/").filter(Boolean);
  for (const part of relativeUrl.split("/")) {
    if (!part || part === ".") {
      continue;
    }
    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }
  return stack.join("/");
}

function findRootTilesetPath(pathToBlobUrl) {
  let rootTilesetPath = null;
  let rootDepth = Number.POSITIVE_INFINITY;

  for (const path of pathToBlobUrl.keys()) {
    if (!path.endsWith("tileset.json")) {
      continue;
    }

    const depth = path.split("/").length;
    if (depth < rootDepth) {
      rootDepth = depth;
      rootTilesetPath = path;
    }
  }

  return rootTilesetPath;
}

function extractRelativePathFromBlobUrl(url) {
  if (!url.startsWith("blob:")) {
    return null;
  }

  const tripleSlashMatch = url.match(/^blob:\/\/\/(.+)$/);
  if (tripleSlashMatch) {
    return decodeURIComponent(tripleSlashMatch[1]);
  }

  return null;
}

function buildFileNameIndex(pathToBlobUrl) {
  const fileNameToPaths = new Map();

  for (const path of pathToBlobUrl.keys()) {
    const fileName = path.split("/").pop();
    if (!fileName) {
      continue;
    }

    const paths = fileNameToPaths.get(fileName) ?? [];
    paths.push(path);
    fileNameToPaths.set(fileName, paths);
  }

  return fileNameToPaths;
}

export function createLocalTilesetSession(files) {
  const pathToBlobUrl = new Map();

  for (const file of files) {
    const path = normalizePath(file.webkitRelativePath || file.name);
    pathToBlobUrl.set(path, URL.createObjectURL(file));
  }

  const rootTilesetPath = findRootTilesetPath(pathToBlobUrl);
  if (!rootTilesetPath) {
    for (const blobUrl of pathToBlobUrl.values()) {
      URL.revokeObjectURL(blobUrl);
    }
    throw new Error("所选文件夹中未找到 tileset.json");
  }

  const baseDir = getDirectory(rootTilesetPath);
  const blobUrlSet = new Set(pathToBlobUrl.values());
  const fileNameToPaths = buildFileNameIndex(pathToBlobUrl);

  function lookupByRelativePath(relativePath, preferredBaseDir = baseDir) {
    const normalized = normalizePath(relativePath);
    const candidates = [
      normalized,
      resolveRelativePath(preferredBaseDir, normalized),
      resolveRelativePath(baseDir, normalized),
    ];

    for (const candidate of candidates) {
      const blobUrl = pathToBlobUrl.get(candidate);
      if (blobUrl) {
        return blobUrl;
      }
    }

    const fileName = normalized.split("/").pop();
    const matchingPaths = fileNameToPaths.get(fileName) ?? [];

    if (matchingPaths.length === 1) {
      return pathToBlobUrl.get(matchingPaths[0]);
    }

    for (const path of matchingPaths) {
      if (path.startsWith(preferredBaseDir) || path.startsWith(baseDir)) {
        return pathToBlobUrl.get(path);
      }
    }

    if (matchingPaths.length > 0) {
      return pathToBlobUrl.get(matchingPaths[0]);
    }

    return null;
  }

  return {
    rootTilesetPath,
    tilesetUrl: pathToBlobUrl.get(rootTilesetPath),
    resolveRequestUrl(url) {
      if (!url) {
        return url;
      }

      if (blobUrlSet.has(url)) {
        return url;
      }

      if (url.startsWith("blob:")) {
        const relativePath = extractRelativePathFromBlobUrl(url);
        if (relativePath) {
          const resolved = lookupByRelativePath(relativePath);
          if (resolved) {
            return resolved;
          }
        }
        return url;
      }

      if (/^(data:|https?:)/i.test(url)) {
        return url;
      }

      const resolved = lookupByRelativePath(url);
      return resolved ?? url;
    },
    revokeAll() {
      for (const blobUrl of pathToBlobUrl.values()) {
        URL.revokeObjectURL(blobUrl);
      }
      pathToBlobUrl.clear();
      blobUrlSet.clear();
      fileNameToPaths.clear();
    },
  };
}

let currentSession = null;
let interceptorInstalled = false;

function getActiveSession() {
  return currentSession;
}

function installResourceInterceptor() {
  if (interceptorInstalled) {
    return;
  }
  interceptorInstalled = true;

  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const session = getActiveSession();
    if (!session) {
      return originalFetch(input, init);
    }

    const url = typeof input === "string" ? input : input.url;
    const resolved = session.resolveRequestUrl(url);
    if (resolved !== url) {
      return originalFetch(resolved, init);
    }
    return originalFetch(input, init);
  };

  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function open(method, url, ...rest) {
    const session = getActiveSession();
    if (session && typeof url === "string") {
      url = session.resolveRequestUrl(url);
    }
    return originalOpen.call(this, method, url, ...rest);
  };

  const loadWithXhr = Cesium.Resource._Implementations.loadWithXhr;
  Cesium.Resource._Implementations.loadWithXhr = function patchedLoadWithXhr(url, ...rest) {
    const session = getActiveSession();
    if (session && typeof url === "string") {
      url = session.resolveRequestUrl(url);
    }
    return loadWithXhr.call(this, url, ...rest);
  };
}

export function bindLocalTilesetSession(session) {
  installResourceInterceptor();
  if (currentSession && currentSession !== session) {
    currentSession.revokeAll();
  }
  currentSession = session;
}

export function clearLocalTilesetSession() {
  if (currentSession) {
    currentSession.revokeAll();
    currentSession = null;
  }
}

export async function loadLocalTilesetFromFiles(files) {
  const fileList = [...files];
  if (!fileList.length) {
    throw new Error("未选择任何文件");
  }

  const session = createLocalTilesetSession(fileList);
  bindLocalTilesetSession(session);

  try {
    const tileset = await Cesium.Cesium3DTileset.fromUrl(session.tilesetUrl);
    await tileset.readyPromise;
    return { tileset, session };
  } catch (error) {
    clearLocalTilesetSession();
    throw error;
  }
}
