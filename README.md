# 🌳 ASCII-Tree-Parser

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/npm/v/ascii-tree-parser)

> A lightweight parser and renderer for generating beautiful ASCII directory trees from **TreeScript** — a simplified tree language.

> 🚧 **Status:** Early Development (v0.1.0)

---

## 📖 Overview

ASCII-Tree-Parser is an open-source TypeScript library that transforms **TreeScript**, an easy-to-write indentation-based tree language, into a structured tree representation and renders it as ASCII trees.

Instead of manually writing:

```text
.
├── src
│   ├── components
│   │   └── Card.astro
│   └── pages
│       └── index.astro
└── package.json
```

you can describe the structure using TreeScript:

```text
src
    components
        Card.astro
    pages
        index.astro
package.json
```

The parser converts this into an internal tree structure that can later be rendered into multiple formats.

---

## ✨ Current Features

| Feature | Status |
|---|---|
| Lexer | ✅ Done |
| Parser | ✅ Done |
| ASCII Renderer | ✅ Done |
| Automated Tests | 🚧 In Progress |
| Validator | ⏳ Planned |
| CLI | ⏳ Planned |
| HTML Renderer | ⏳ Planned |
| Markdown Plugin | ⏳ Planned |

---

## 🏗️ Project Architecture

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
 Tree Model
   │
   ├── ASCII Renderer
   ├── HTML Renderer (planned)
   ├── SVG Renderer (planned)
   └── JSON Renderer (planned)
```

See [docs/architecture.md](docs/architecture.md) for the full breakdown.

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| 🏗️ [Architecture](docs/architecture.md) | Overall system architecture |
| 📝 [Language Specification](docs/language-spec.md) | TreeScript grammar and syntax rules |
| ⚙️ [Parser Design](docs/parser.md) | Stack-based parser implementation |
| 🎨 [Renderer Design](docs/renderer.md) | Recursive ASCII rendering |
| 🗺️ [Roadmap](docs/roadmap.md) | Planned features |
| 🤝 [Contributing](CONTRIBUTING.md) | Contribution guidelines |

---

## 📄 License

MIT