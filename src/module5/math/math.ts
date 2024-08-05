// Export individual functions
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

// Export a constant
export const PI = 3.14159;

// Export a class
export class Circle {
    constructor(private radius: number) {}

    area(): number {
        return PI * this.radius ** 2;
    }
}