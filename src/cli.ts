#!/usr/bin/env node

import { generateAsciiTree } from "./index.js";
import { readFileSync } from 'node:fs';


const inputFile = process.argv[2];

if (!inputFile) {
    console.error("Usage: ascii-tree-parser <file>");
    process.exit(1);
}


try {
    const input = readFileSync(inputFile, 'utf-8');
    console.log(generateAsciiTree(input));

} catch (error) {
    console.error("Error reading file:", error);
}