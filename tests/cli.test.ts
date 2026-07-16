import { describe, it, expect } from "vitest";
import { execSync } from "node:child_process";


describe("CLI", () => {

    it("should display version", () => {
        const output = execSync(
            "node dist/cli.js --version"
        )
        .toString()
        .trim();

        expect(output)
            .toBe("{ version: '1.0.0' }");

    });


});