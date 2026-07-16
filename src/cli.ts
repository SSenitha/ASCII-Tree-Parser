#!/usr/bin/env node

import { generateAsciiTree } from "./index.js";
import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const inputFile = args[0];

// Handle --help flag
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
    console.log("version: 1.1.0");
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