export function initTilesetUploadPanel({ onUpload, onApplyRegistrationChange, onFlyToTileset, container = document.body }) {
  const panel = document.createElement("div");
  panel.className = "control-panel tileset-upload-panel";
  panel.innerHTML = `
    <div class="control-panel__title">模型替换</div>
    <p class="tileset-upload-panel__hint">选择包含 tileset.json 的 3D Tiles 文件夹以替换当前场景模型。</p>
    <label class="control-panel__toggle tileset-upload-panel__toggle">
      <input type="checkbox" class="tileset-upload-panel__apply-registration" />
      应用既有配准（baseMatrix + 粗调）
    </label>
    <p class="tileset-upload-panel__toggle-hint">勾选：使用隧道配准矩阵与写死的粗调；取消：使用初始定位，仍可用左侧面板粗调。</p>
    <label class="control-panel__reset tileset-upload-panel__button">
      上传 3D Tiles 文件夹
      <input type="file" class="tileset-upload-panel__input" webkitdirectory multiple hidden />
    </label>
    <button type="button" class="control-panel__reset tileset-upload-panel__fly">飞到当前模型</button>
    <div class="tileset-upload-panel__status">当前模型：默认隧道模型</div>
  `;

  container.appendChild(panel);

  const input = panel.querySelector(".tileset-upload-panel__input");
  const status = panel.querySelector(".tileset-upload-panel__status");
  const button = panel.querySelector(".tileset-upload-panel__button");
  const applyRegistrationInput = panel.querySelector(".tileset-upload-panel__apply-registration");
  const flyButton = panel.querySelector(".tileset-upload-panel__fly");

  flyButton.addEventListener("click", () => {
    onFlyToTileset?.();
  });

  function getApplyRegistration() {
    return applyRegistrationInput.checked;
  }

  applyRegistrationInput.addEventListener("change", () => {
    onApplyRegistrationChange?.(getApplyRegistration());
  });

  input.addEventListener("change", async () => {
    const files = input.files;
    if (!files?.length) {
      return;
    }

    button.classList.add("is-loading");
    status.textContent = "正在加载本地 3D Tiles...";

    try {
      const applyRegistration = getApplyRegistration();
      await onUpload(files, { applyRegistration });
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
    getApplyRegistration,
    setApplyRegistration: (checked) => {
      applyRegistrationInput.checked = checked;
    },
  };
}
