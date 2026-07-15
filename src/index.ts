export { tokenize } from "./lexer.js";
export { parse } from "./parser.js";
export { renderAscii } from "./renderers/ascii.js";

import {
    tokenize,
    parse,
    renderAscii
} from "./index.js";

export function generateAsciiTree(input: string): string {
    const tokens = tokenize(input);
    const tree = parse(tokens);
    return renderAscii(tree);
}