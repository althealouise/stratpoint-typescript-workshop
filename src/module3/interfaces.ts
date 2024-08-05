// 1. Basic interface
interface PersonA {
  name: string;
  age: number;
}

// Using the interface
let employee: PersonA = {
  name: "Alice",
  age: 30
};

console.log(`Employee: ${employee.name}, ${employee.age} years old`);

// 2. Interface with optional property
interface CarA {
  make: string;
  model: string;
  year?: number;  // Optional property
}

let myCarA: CarA = {
  make: "Toyota",
  model: "Corolla"
};

let yourCar: CarA = {
  make: "Honda",
  model: "Civic",
  year: 2022
};

console.log(`My car: ${myCarA.make} ${myCarA.model}`);
console.log(`Your car: ${yourCar.make} ${yourCar.model}, ${yourCar.year}`);

// Interface with readonly property
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
console.log(`Point: (${point.x}, ${point.y})`);
// point.x = 5;  // Error: Cannot assign to 'x' because it is a read-only property

// 3. Interface with function type
interface MathFunc {
  (x: number, y: number): number;
}

let addA: MathFunc = function(x: number, y: number): number {
  return x + y;
};

console.log(`5 + 3 = ${addA(5, 3)}`);

// 4. Interface extending another interface
interface ShapeA {
  color: string;
}

interface SquareA extends ShapeA {
  sideLength: number;
}

let squareA: SquareA = {
  color: "blue",
  sideLength: 10
};

console.log(`SquareA: ${squareA.color}, side length ${squareA.sideLength}`);

// 5. Interface describing indexable types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
console.log(`First name: ${myArray[0]}`);

// 6. Class implementing an interface
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

let clock = new Clock();
console.log(`Current time: ${clock.currentTime.toLocaleTimeString()}`);
clock.setTime(new Date(2023, 0, 1, 12, 0, 0));
console.log(`Set time: ${clock.currentTime.toLocaleTimeString()}`);

// 7. Interface for object with multiple properties
interface FullName {
  firstName: string;
  lastName: string;
}

function printName(name: FullName) {
  console.log(`${name.firstName} ${name.lastName}`);
}

printName({firstName: "John", lastName: "Doe"});