import { tokenize } from "../../src/lexer.js";
import { parse } from "../../src/parser.js";
import { renderAscii } from "../../src/renderers/ascii.js";

function testRenderAscii(input: string) {
    const tokens = tokenize(input);
    const tree = parse(tokens);
    return renderAscii(tree);
}


const input: string[] = [`
src
    components
        Card.astro
    pages
        index.astro
`,
// Test 02
` 
src
`,
// Test 03
`
src
    a
    b
    c
`,
// Test 04
`
src
    a
        x
    b
        y
            z
`,
// Test 05
`
src
    a
        x
package.json
`,
// Test 06
``,
// Test 07
`
src
docs
README.md
`,
// Test 08
`
a
    b
        c
            d
                e
                    f
`,
// Test 09
// `
// src
//   components
// `,
// Test 10
`
src
        components
`];

for (const str of input) {
    const asciiOutput = testRenderAscii(str);
    console.log(asciiOutput + "\n");
}