import { TreeNode } from "../src/types";

const tree: TreeNode = {
    name: ".",
    children: [
        {
            name: "src",
            children: [
                {
                    name: "index.ts",
                    children: []
                }
            ]
        }
    ]
};

console.log(JSON.stringify(tree, null, 2));