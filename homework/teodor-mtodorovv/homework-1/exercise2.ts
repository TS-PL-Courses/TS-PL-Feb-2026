// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result

// npx ts-node homework/teodor-mtodorovv/homework-01/exercise2.ts

// Step 1: Declare a variable and assign any number to it.
let oddOrEvenNumber: number = 15;

// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even. Gonna use % operator
let isEven: boolean = oddOrEvenNumber % 2 === 0;

// Step 3: Log the result
console.log('My number is ', oddOrEvenNumber, "and it's even", isEven);
