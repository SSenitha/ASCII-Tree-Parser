import { tokenize } from "../src/lexer.js";
import { parse } from "../src/parser.js";


const input = `
src
    components
        Card.astro
    pages
        index.astro
`;


const tokens = tokenize(input);

const tree = parse(tokens);


console.log(
    JSON.stringify(tree, null, 2)
);