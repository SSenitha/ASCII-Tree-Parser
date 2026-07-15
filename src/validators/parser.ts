import { ValidationError } from "../errors/validationErrors.js";

// Check if parent and child has a gap of depth of 1
export function validateDepth(parentDepth: number, childDepth: number): void {
    if ((parentDepth + 1) < childDepth) {
        throw new ValidationError("Invalid depth. Child depth must be exactly one more than parent depth.");
    }
}