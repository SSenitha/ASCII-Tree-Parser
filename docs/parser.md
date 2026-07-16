# ⚙️ Parser

The parser converts TreeScript tokens into a `TreeNode` hierarchy.

---

## 🧮 Algorithm

The parser uses a **stack**.

**Example TreeScript input:**

```
src
    components
        Card.astro
```

**Stack evolution:**

```
.

.
src

.
src
components

.
src
components
Card.astro
```

When depth decreases, nodes are popped from the stack until the correct parent is reached.

---

## ⚡ Complexity

This results in an **O(n)** parser — each token is pushed and popped from the stack at most once.

---

⬅️ [Back to README](../README.md)
