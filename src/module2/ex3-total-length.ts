function getTotalLength(input: string | string[]): number {
    if (typeof input === "string") {
      return input.length; // for single string
    } else {
      return input.reduce((total, str) => total + str.length, 0); // for multiple strings / array of strings
    }
  }
  
  console.log(getTotalLength("Hello")); // 5
  console.log(getTotalLength(["Hello", "World"])); // 10