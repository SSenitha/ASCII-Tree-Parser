import { describe, it, expect } from "vitest";
import { tokenize } from "../src/lexer.js";
import { parse } from "../src/parser.js";
import { renderAscii } from "../src/renderers/ascii.js";


describe("ASCII Renderer", () => {

    it("should render a simple tree", () => {

        const input = `
src
    index.ts
`;

        const tree = parse(tokenize(input));
        const output = renderAscii(tree);

        expect(output).toBe(
`. 
└── src
    └── index.ts`
        .replace(". ", ".")
        );
    });


    it("should correctly render multiple branches", () => {
        const input = `
src
    components
    pages
    utils
`;

        const tree = parse(tokenize(input));
        const output = renderAscii(tree);

        expect(output).toBe(
`. 
└── src
    ├── components
    ├── pages
    └── utils`
        .replace(". ", ".")
        );
    });
});