import { Token } from "./lexer.js";
import { TreeNode } from "./types.js";
import { validateDepth } from "./validators/parser.js";

export function parse(tokens: Token[]): TreeNode {

    const root: TreeNode = {
        name: ".",
        children: []
    };

    const stack: TreeNode[] = [root];

    for (const token of tokens) {

        const node: TreeNode = {
            name: token.name,
            children: []
        };


        while (stack.length > token.depth + 1) {
            stack.pop();
        }


        const parent = stack[stack.length - 1];

        // Since 'root' is in length 1, taking depth 0
        validateDepth(stack.length - 2,token.depth);

        parent.children.push(node);

        stack.push(node);
    }

    return root;

}

