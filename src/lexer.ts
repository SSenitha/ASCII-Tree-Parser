import { validateIndentationGap } from "./validators/lexer.js";
import { validateNodeName } from "./validators/lexer.js";

export interface Token {
    name: string;
    depth: number;
}

export function tokenize(input: string): Token[] {

    const lines = input.split("\n");

    return lines
        .filter(line => line.trim().length > 0)
        .map(line => {

            const spaces = line.search(/\S/); //count leading whitespaces
            const name = line.trim();

            validateIndentationGap(spaces);
            validateNodeName(name);
            return {
                name: name,
                depth: Math.floor(spaces / 4)
            };
        });
}