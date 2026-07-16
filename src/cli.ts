#!/usr/bin/env node

import { generateAsciiTree } from "./index.js";
import { readFileSync } from 'node:fs';
import packageJson from "../package.json" with { type: "json" };

const args = process.argv.slice(2);
const inputFile = args[0];

// Handle --version flag
if (args.includes("--help")) {
    console.log(`
Usage:
  ascii-tree-parser <file>

Options:
  --help       Show help
  --version    Show version
`);
    process.exit(0);
}


// Handle --version flag
if (args.includes("--version")) {
    console.log({ version: packageJson.version });
    process.exit(0);
}

// Main logic
if (!inputFile) {
    console.error("Usage: ascii-tree-parser <file>");
    process.exit(1);
}


try {
    const input = readFileSync(inputFile, 'utf-8');
    console.log(generateAsciiTree(input));

} catch (error) {
    if(error instanceof Error){
        console.error(error.message);
    }

    process.exit(1);
}