export function initTilesetUploadPanel({ onUpload, container = document.body }) {
  const panel = document.createElement("div");
  panel.className = "control-panel tileset-upload-panel";
  panel.innerHTML = `
    <div class="control-panel__title">模型替换</div>
    <p class="tileset-upload-panel__hint">选择包含 tileset.json 的 3D Tiles 文件夹，将替换当前场景模型并沿用既有配准矩阵。</p>
    <label class="control-panel__reset tileset-upload-panel__button">
      上传 3D Tiles 文件夹
      <input type="file" class="tileset-upload-panel__input" webkitdirectory multiple hidden />
    </label>
    <div class="tileset-upload-panel__status">当前模型：默认隧道模型</div>
  `;

  container.appendChild(panel);

  const input = panel.querySelector(".tileset-upload-panel__input");
  const status = panel.querySelector(".tileset-upload-panel__status");
  const button = panel.querySelector(".tileset-upload-panel__button");

  input.addEventListener("change", async () => {
    const files = input.files;
    if (!files?.length) {
      return;
    }

    button.classList.add("is-loading");
    status.textContent = "正在加载本地 3D Tiles...";

    try {
      const folderName = files[0].webkitRelativePath.split("/")[0] || "本地模型";
      await onUpload(files);
      status.textContent = `当前模型：${folderName}`;
    } catch (error) {
      console.error("加载本地 3D Tiles 失败:", error);
      status.textContent = `加载失败：${error.message || error}`;
    } finally {
      button.classList.remove("is-loading");
      input.value = "";
    }
  });

  return {
    panel,
    setStatus: (text) => {
      status.textContent = text;
    },
  };
}
