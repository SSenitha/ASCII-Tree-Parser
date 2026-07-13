import { tokenize } from "../src/lexer.js";


const input = `
src
    components
        Card.astro
    pages
        index.astro
`;


console.log(tokenize(input));