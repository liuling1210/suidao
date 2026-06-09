import fs from "node:fs/promises";
import path from "node:path";

const distDir = "dist";
const base = process.env.VITE_BASE ?? "/suidao/";
const baseSegment = base.replace(/^\/|\/$/g, "");

async function moveDirectory(src, dest) {
  await fs.rm(dest, { recursive: true, force: true });

  try {
    await fs.rename(src, dest);
    return;
  } catch (error) {
    if (error.code !== "EPERM" && error.code !== "EBUSY" && error.code !== "EXDEV") {
      throw error;
    }
  }

  // Windows 上 rename 常因目录占用失败，改用复制后删除
  await fs.cp(src, dest, { recursive: true });
  await fs.rm(src, { recursive: true, force: true });
}

async function moveCesiumAssets() {
  if (!baseSegment) {
    return;
  }

  const nestedCesiumDir = path.join(distDir, baseSegment, "cesium");
  const targetCesiumDir = path.join(distDir, "cesium");

  try {
    await fs.access(nestedCesiumDir);
  } catch {
    return;
  }

  await moveDirectory(nestedCesiumDir, targetCesiumDir);
  await fs.rm(path.join(distDir, baseSegment), { recursive: true, force: true });
  console.log(`Cesium assets moved to ${targetCesiumDir}`);
}

async function injectCesiumBaseUrl() {
  const indexPath = path.join(distDir, "index.html");
  let html = await fs.readFile(indexPath, "utf8");

  if (html.includes("window.CESIUM_BASE_URL")) {
    return;
  }

  const cesiumBaseUrl = `${base}cesium/`;
  const initScript = `<script>window.CESIUM_BASE_URL=${JSON.stringify(cesiumBaseUrl)};</script>`;
  html = html.replace(
    /(<link rel="stylesheet" href="[^"]*cesium\/Widgets\/widgets\.css">)/,
    `${initScript}\n    $1`
  );
  await fs.writeFile(indexPath, html);
  console.log(`Injected window.CESIUM_BASE_URL=${JSON.stringify(cesiumBaseUrl)}`);
}

await moveCesiumAssets();
await injectCesiumBaseUrl();
