// Import specific exports from a module
import { add, subtract, PI, Circle } from './math';

console.log(add(20, 24));  // 44
console.log(subtract(8, 1));  // 7
console.log(PI);  // 3.14159

const circle = new Circle(5);
console.log(circle.area());  // ~78.54