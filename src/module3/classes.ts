// 1. Basic class
class PersonB {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  let personB = new PersonB("Bob", 30);
  personB.greet(); // Outputs: Hello, my name is Bob and I'm 30 years old.
  
  // 2. Class with parameter properties
  class Student {
    constructor(public name: string, private age: number) {}
  
    introduce(): void {
      console.log(`I'm ${this.name} and I'm a student.`);
    }
  
    getAge(): number {
      return this.age;
    }
  }
  
  let student = new Student("Alice", 20);
  student.introduce(); // Outputs: I'm Alice and I'm a student.
  console.log(student.name); // Outputs: Alice
  console.log(student.getAge()); // Outputs: 20
  // console.log(student.age); // This would cause an error because age is private
  
  // 3. Getters and setters
  class Circle {
    private _radius: number;
  
    constructor(radius: number) {
      this._radius = radius;
    }
  
    get radius(): number {
      return this._radius;
    }
  
    set radius(value: number) {
      if (value <= 0) {
        throw new Error("Radius must be positive");
      }
      this._radius = value;
    }
  
    get area(): number {
      return Math.PI * this._radius ** 2;
    }
  }
  
  let circle = new Circle(5);
  console.log(circle.area); // Approximately 78.54
  circle.radius = 10;
  console.log(circle.area); // Approximately 314.16
  // circle.radius = -1; // This would throw an error
  
  // 4. Inheritance
  class Animal {
    constructor(public name: string) {}
  
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log('Woof! Woof!');
    }
  
    move(distance: number = 5) {
      console.log('Running...');
      super.move(distance);
    }
  }
  
  let dog = new Dog('Rex');
  dog.bark(); // Outputs: Woof! Woof!
  dog.move(); // Outputs: Running... \n Rex moved 5m.
  
  // 5. Static members
  class MathOperations {
    static PI: number = 3.14159;
  
    static add(x: number, y: number): number {
      return x + y;
    }
  }
  
  console.log(MathOperations.PI); // Outputs: 3.14159
  console.log(MathOperations.add(5, 3)); // Outputs: 8
  
  // 6. Abstract classes
  abstract class ShapeB {
    constructor(public color: string) {}
  
    abstract calculateArea(): number;
  
    displayArea(): void {
      console.log(`This ${this.color} shape has an area of ${this.calculateArea()}.`);
    }
  }
  
  class SquareB extends ShapeB {
    constructor(color: string, private sideLengthB: number) {
      super(color);
    }
  
    calculateArea(): number {
      return this.sideLengthB ** 2;
    }
  }
  
  let squareB = new SquareB('red', 5);
  squareB.displayArea(); // Outputs: This red shape has an area of 25.
  
  // 7. Implementing interfaces
  interface Printable {
    print(): void;
  }
  
  class Book implements Printable {
    constructor(private title: string, private author: string) {}
  
    print(): void {
      console.log(`${this.title} by ${this.author}`);
    }
  }
  
  let book = new Book('1984', 'George Orwell');
  book.print(); // Outputs: 1984 by George Orwell