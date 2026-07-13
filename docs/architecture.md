# 🏗️ Architecture

ASCII-Tree-Parser is designed as a modular language-processing pipeline for **TreeScript**.

```
Input
   │
   ▼
Lexer
   │
   ▼
Tokens
   │
   ▼
Parser
   │
   ▼
TreeNode
   │
   ├── ASCII Renderer
   ├── HTML Renderer
   ├── JSON Renderer
   └── SVG Renderer
```

---

## 🤔 Why this architecture?

Each component has exactly **one** responsibility. This keeps the pipeline easy to test, extend, and reason about — new TreeScript features only touch the Lexer/Parser, and new output formats only touch the Renderer layer.

---

## 🔤 Lexer

Converts raw TreeScript text into tokens.

**Input:**

```text
src
    components
```

**Output:**

```json
[
    {
        "name": "src",
        "depth": 0
    },
    {
        "name": "components",
        "depth": 1
    }
]
```

---

## 🌲 Parser

Converts tokens into a hierarchical tree. See [Parser Design](parser.md) for details.

---

## 🎨 Renderer

Converts the tree into a target format. See [Renderer Design](renderer.md) for details.

**Current implementation:**

- ✅ ASCII

**Future implementations:**

- ⏳ HTML
- ⏳ JSON
- ⏳ SVG
- ⏳ Markdown

---

⬅️ [Back to README](../README.md)
