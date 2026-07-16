import { describe, it, expect } from "vitest";
import { tokenize } from "../src/lexer.js";


describe("Lexer", () => {

    it("should tokenize a basic tree structure", () => {

        const input = `
src
    components
`;

        const tokens = tokenize(input);

        expect(tokens).toHaveLength(2);

        expect(tokens[0]).toEqual({
            name: "src",
            depth: 0
        });

        expect(tokens[1]).toEqual({
            name: "components",
            depth: 1
        });

    });

    // Additional test cases to cover more scenarios
    it("should ignore empty lines", () => {

      const input = `

src

    components

`;

      const tokens = tokenize(input);
      expect(tokens).toHaveLength(2);

  });
});