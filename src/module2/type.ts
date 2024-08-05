// Number
let age: number = 30;
let price: number = 99.99;
console.log(`Age: ${age}, Price: $${price.toFixed(2)}`);

// String
let myName: string = "Alice";
let greeting: string = `Hello, ${myName}!`;
console.log(greeting);
console.log(myName.toUpperCase());

// Boolean
let isStudent: boolean = true;
console.log(`Is a student: ${isStudent ? "Yes" : "No"}`);

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(`Sum of numbers: ${numbers.reduce((a, b) => a + b, 0)}`);
console.log(`Names: ${names.join(", ")}`);

// Tuple
let person: [string, number] = ["Alice", 30];
console.log(`${person[0]} is ${person[1]} years old.`);

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;
console.log(`Favorite color (enum value): ${favoriteColor}`);

// Any
let notSure: any = 4;
console.log(`notSure is initially: ${notSure}`);
notSure = "maybe a string instead";
console.log(`notSure is now: ${notSure}`);
notSure = false;
console.log(`notSure is finally: ${notSure}`);

// Void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a logged message");

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(`u is ${u}, n is ${n}`);

// Object
let user: object = { myName: "Alice", age: 30 };
console.log(`User: ${JSON.stringify(user)}`);

// Never
function throwError(message: string): never {
    throw new Error(message);
}

try {
    throwError("This is an error message");
} catch (e: any) {
    console.log(`Caught error: ${e.message}`);
}

// Using generics with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First name: ${getFirstElement(names)}`);

// Using type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(`Length of string: ${strLength}`);

// Using optional parameters
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}

console.log(buildName("Bob"));
console.log(buildName("Alice", "Johnson"));

// Using union types
function printId(id: number | string) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("202");

// Using intersection types
interface Name {
    myName: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

let person2: Person = { myName: "Charlie", age: 35 };
console.log(`Person: ${JSON.stringify(person2)}`);