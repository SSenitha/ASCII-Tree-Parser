import { describe, it, expect } from "vitest";
import { tokenize } from "../src/lexer.js";
import { parse } from "../src/parser.js";


describe("Parser", () => {

    it("should build a tree structure from tokens", () => {

        const input = `
src
    components
        Card.ts
`;

        const tokens = tokenize(input);
        const tree = parse(tokens);

        expect(tree.name).toBe(".");
        expect(tree.children).toHaveLength(1);

        const src = tree.children[0];
        expect(src.name).toBe("src");
        expect(src.children).toHaveLength(1);

        const components = src.children[0];
        expect(components.name).toBe("components");
        expect(components.children[0].name)
            .toBe("Card.ts");

    });

    // Check for edge cases
    it("should support multiple children", () => {

        const input = `
src
    a
    b
    c
`;

        const tokens = tokenize(input);
        const tree = parse(tokens);

        const src = tree.children[0];
        expect(src.children).toHaveLength(3);
        expect(src.children.map(child => child.name))
            .toEqual([
                "a",
                "b",
                "c"
            ]);

    });
});