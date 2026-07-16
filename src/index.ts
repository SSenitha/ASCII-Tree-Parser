import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";
import { renderAscii } from "./renderers/ascii.js";

export { tokenize } from "./lexer.js";
export { parse } from "./parser.js";
export { renderAscii } from "./renderers/ascii.js";
export { ValidationError } from "./errors/validationErrors.js";

export function generateAsciiTree(input: string): string {
    const tokens = tokenize(input);
    const tree = parse(tokens);
    return renderAscii(tree);
}