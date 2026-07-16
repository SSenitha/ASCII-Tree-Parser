# 🎨 ASCII Renderer

The ASCII renderer traverses the `TreeNode` recursively to produce a familiar directory-tree output.

---

## 🔁 How it Works

Each recursive call receives:

- 📍 current node
- 🧵 current prefix
- 🏁 whether the node is the last sibling

---

## 🖼️ Example Output

**TreeScript input:**

```text
src
    components
        Card.astro
    pages
        index.astro
```

**Rendered output:**

```text
.
└── src
    ├── components
    │   └── Card.astro
    └── pages
        └── index.astro
```

---

## 🧩 Prefix Logic

The renderer determines whether to draw:

| Symbol | Meaning |
|---|---|
| `├──` | Node has following siblings |
| `└──` | Node is the last sibling |
| `│` | Ancestor level still has siblings below |
| ` ` (spaces) | Ancestor level has no remaining siblings |

This is based purely on sibling relationships computed during traversal.

---

⬅️ [Back to README](../README.md)
