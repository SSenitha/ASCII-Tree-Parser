import { describe, it, expect } from "vitest";

import { validateIndentationGap } from "../src/validators/lexer.js";
import { validateDepth } from "../src/validators/parser.js";
import { validateNodeName } from "../src/validators/lexer.js";


describe("Validators", () => {


    it("should accept valid indentation", () => {
        expect(() => validateIndentationGap(4))
            .not.toThrow();
    });

    it("should reject invalid indentation", () => {
        expect(() => validateIndentationGap(3))
            .toThrow();
    });

    it("should accept correct depth transition", () => {
        expect(() => validateDepth(1,2))
            .not.toThrow();
    });

    it("should reject skipped depth", () => {
        expect(() => validateDepth(1,3))
            .toThrow();
    })

    it("should reject empty names", () => {
        expect(() => validateNodeName(""))
            .toThrow();
    });

});