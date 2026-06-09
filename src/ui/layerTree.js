function isLeaf(node) {
  return !node.children?.length;
}

function renderLeaf(node, depth) {
  const title = node.tableNo ? `${node.tableNo} ${node.label}` : node.label;
  return `
    <li class="layer-tree__item layer-tree__item--leaf" data-depth="${depth}" data-id="${node.id}">
      <button
        type="button"
        class="layer-tree__node layer-tree__node--leaf"
        data-id="${node.id}"
        title="${title}"
      >
        <span class="layer-tree__bullet"></span>
        <span class="layer-tree__label">${node.label}</span>
      </button>
    </li>
  `;
}

function renderBranch(node, depth) {
  const childrenHtml = node.children.map((child) => renderNode(child, depth + 1)).join("");

  return `
    <li class="layer-tree__item layer-tree__item--branch" data-depth="${depth}" data-id="${node.id}">
      <button
        type="button"
        class="layer-tree__node layer-tree__node--branch"
        data-id="${node.id}"
        aria-expanded="true"
        title="${node.label}"
      >
        <span class="layer-tree__toggle" aria-hidden="true"></span>
        <span class="layer-tree__label">${node.label}</span>
      </button>
      <ul class="layer-tree__children">${childrenHtml}</ul>
    </li>
  `;
}

function renderNode(node, depth = 0) {
  return isLeaf(node) ? renderLeaf(node, depth) : renderBranch(node, depth);
}

export function initLayerTree(container, treeData, { onSelect } = {}) {
  container.innerHTML = `
    <ul class="layer-tree__root">
      ${treeData.map((node) => renderNode(node, 0)).join("")}
    </ul>
  `;

  let activeId = null;

  function setActive(id) {
    activeId = id;
    container.querySelectorAll(".layer-tree__node").forEach((node) => {
      node.classList.toggle("layer-tree__node--active", node.dataset.id === id);
    });
  }

  container.addEventListener("click", (event) => {
    const branchBtn = event.target.closest(".layer-tree__node--branch");
    if (branchBtn) {
      const item = branchBtn.closest(".layer-tree__item--branch");
      const expanded = branchBtn.getAttribute("aria-expanded") === "true";
      branchBtn.setAttribute("aria-expanded", expanded ? "false" : "true");
      item.classList.toggle("layer-tree__item--collapsed", expanded);
      return;
    }

    const leafBtn = event.target.closest(".layer-tree__node--leaf");
    if (!leafBtn) {
      return;
    }

    const id = leafBtn.dataset.id;
    setActive(id);

    const node = findNodeById(treeData, id);
    onSelect?.(node);
  });

  return { setActive, getNodeById: (id) => findNodeById(treeData, id) };
}

function findNodeById(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
