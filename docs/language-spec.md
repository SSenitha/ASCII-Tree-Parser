# 📝 TreeScript Language Specification

**TreeScript** is the simplified, indentation-based language used to describe tree structures for this project.

---

## 🔤 Current Syntax

Tree depth is represented by indentation.

Each indentation level consists of **4 spaces**.

**Example:**

```text
src
    components
        Card.astro
```

---

## 📏 Rules

1. 📄 One line represents one node.
2. ➡️ Four spaces (or Tab) increase depth by one.
3. ⬜ Blank lines are ignored.
4. 🔒 Node names are preserved exactly.

---

## 🔮 Validation

TreeScript will validate:

- ⚠️ Invalid indentation
- ⚠️ Depth jumps
- ⚠️ Empty node names

See [Roadmap](roadmap.md) for when validation is planned to land.

---

⬅️ [Back to README](../README.md)
