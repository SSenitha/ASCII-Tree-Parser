import { ValidationError } from "../errors/validationErrors.js";

// Validate proper spacing for indentation
export function validateIndentationGap(indentation: number): void {
    if (indentation % 4 !== 0) {
        throw new ValidationError("Invalid indentation. Must be a multiple of 4.");
    }
}

// Validate a node has a valid name (non-empty and no whitespace)
export function validateNodeName(name: string): void {
    if (name.trim() === "") {
        throw new ValidationError("Invalid node name. Name must be a non-empty string with no leading or trailing whitespace.");
    }
}9