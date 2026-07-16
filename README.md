# 🌳 ASCII-Tree-Parser

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/npm/v/ascii-tree-parser)
![Build](https://img.shields.io/github/actions/workflow/status/SSenitha/ASCII-Tree-Parser/test.yml)
![npm downloads](https://img.shields.io/npm/dm/ascii-tree-parser)

> A lightweight parser and renderer for generating beautiful ASCII directory trees from **TreeScript**: a lightweight domain-specific language (DSL).

> 🚀 **Status:** Stable Release (v1.0.0)

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

<br>

---

## 💡 Why ASCII-Tree-Parser?

Writing directory trees manually in documentation is repetitive and error-prone.

A small change in a project structure can require manually updating:

- spacing
- connectors
- indentation
- branches

ASCII-Tree-Parser separates the structure definition from the visual representation.

Describe the tree once, render it anywhere.

<br>

---

## ✨ Current Features

| Feature | Status |
|---|---|
| Lexer | ✅ Done |
| Parser | ✅ Done |
| ASCII Renderer | ✅ Done |
| Automated Tests | ✅ Done |
| Validator | ✅ Done |
| CLI | ✅ Done |
| HTML Renderer | 🚧 Planned |
| Markdown Renderer | 🚧 Planned |
| Unicode Renderer | 🚧 Planned |

<br>

---

## 📦 Installation

### Using npm

```bash
npm install ascii-tree-parser
```

### Using CLI

```bash
npm install -g ascii-tree-parser
```

### Verify
```bash
ascii-tree-parser --version
```

<br>

---

## 🚀 Quick Start

### Create a file:

`project.tree`

### paste you tree:

```text
src
    components
        Button.ts
    pages
        index.ts
package.json
```

### Run:
```bash
ascii-tree-parser project.tree
```

### Output:
```text
.
├── src
│   ├── components
│   │   └── Button.ts
│   ├── pages
│   │   └── index.ts
└── package.json
```

<br>

---

## 📚 Library Usage

```typescript
import { generateAsciiTree } from "ascii-tree-parser";

const output = generateAsciiTree(`
src
    index.ts
`);

console.log(output);
```

<br>

---

## 🏗️ Project Architecture

```
 Input
   │
   ▼
 Lexer
   │
   ▼
Validator
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

<br>

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

<br>

---

## 📄 License

MIT