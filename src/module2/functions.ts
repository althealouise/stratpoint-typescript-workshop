// Basic function with type annotations
function add(a: number, b: number): number {
    return a + b;
  }
  
  // Optional parameters
  function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Althea")); // "Hello, Alice!"
  console.log(greet("Louise", "Good morning")); // "Good morning, Bob!"
  
  // Default parameters
  function countdown(start: number = 10): void {
    while (start > 0) {
      console.log(start);
      start--;
    }
    console.log("Blast off!");
  }
  
  // Rest parameters
  // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
  }
  
  console.log(sum(1, 2, 3, 5)); // 11
  
  // Function overloading
  function padLeft(value: string, padding: string): string;
  function padLeft(value: string, padding: number): string;
  function padLeft(value: string, padding: string | number): string {
    if (typeof padding === "number") {
      return " ".repeat(padding) + value;
    }
    return padding + value;
  }
  
  console.log(padLeft("Hello", 4));     // "    Hello"
  console.log(padLeft("Hello", "---")); // "---Hello"