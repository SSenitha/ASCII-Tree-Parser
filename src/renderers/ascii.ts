import { TreeNode } from "../types.js";


export function renderAscii(root: TreeNode): string {

    const lines: string[] = [];

    function visit(node: TreeNode, prefix: string, isLast: boolean) {
        const connector = isLast ? "└── " : "├── ";
        lines.push(prefix + connector + node.name);

        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            visit(child, newPrefix, i === node.children.length - 1);
        }
    }

    lines.push(root.name); // Add the root node

    for (let i = 0; i < root.children.length; i++) {
        visit(root.children[i], "", i === root.children.length - 1);
    }

    return lines.join("\n");
}