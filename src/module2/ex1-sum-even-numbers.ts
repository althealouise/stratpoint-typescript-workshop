function sumEvenNumbers(numbers: number[]): number {
    return numbers
        .filter(num => num % 2 === 0) // filter even numbers by using modulo 2 and the result should be 0
        .reduce((sum, num) => sum + num, 0); // get the sum of the filtered numbers

    /* given answer:
    return numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0); (same)
    */
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // should be 12
