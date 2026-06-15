const TOOLBAR_ITEMS = [
  { id: "measure", label: "数据测量" },
  { id: "home", label: "首页" },
  { id: "model", label: "模型调节" },
  { id: "roam", label: "摄像机漫游" },
];

export function initBottomToolbar(container, { onSelect, defaultId = "home" } = {}) {
  const nav = document.createElement("nav");
  nav.className = "bottom-toolbar";
  nav.setAttribute("aria-label", "功能导航");

  nav.innerHTML = TOOLBAR_ITEMS.map((item) => `
    <button
      type="button"
      class="bottom-toolbar__btn"
      data-id="${item.id}"
      aria-pressed="false"
    >${item.label}</button>
  `).join("");

  container.appendChild(nav);

  let activeId = defaultId;

  function setActive(id) {
    activeId = id;
    nav.querySelectorAll(".bottom-toolbar__btn").forEach((btn) => {
      const isActive = btn.dataset.id === id;
      btn.classList.toggle("bottom-toolbar__btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  nav.addEventListener("click", (event) => {
    const btn = event.target.closest(".bottom-toolbar__btn");
    if (!btn || btn.dataset.id === activeId) {
      return;
    }
    setActive(btn.dataset.id);
    onSelect?.(btn.dataset.id);
  });

  setActive(defaultId);

  return { setActive, getActive: () => activeId };
}
