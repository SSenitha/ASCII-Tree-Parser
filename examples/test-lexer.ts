import { tokenize } from "../src/lexer";


const input = `
src
    components
        Card.astro
    pages
        index.astro
`;


console.log(tokenize(input));