import { describe, it, expect } from 'vitest';
import { tokenize } from '../src/lexer.js';

describe('Lexer', () => {
  it('should pass a basic placeholder test', () => {
    expect(1 + 1).toBe(2);
  });


  it('should parse basic text input', () => {
    const input = `
    src
        components
    `;
    const tokens = tokenize(input);
    expect(tokens).toBeDefined();
  });
});