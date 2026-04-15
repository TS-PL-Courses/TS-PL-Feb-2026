//npx ts-node ConditionalStatements.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
let isMale = true;
if (isMale) {
  console.log('The client is male');
} else {
  console.log('The person is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

let firstNumber: number = 7;
let secondNumber: number = 8;
let thirdNumber: number = 6;

if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
// Function that prints three numbers in ascending order
function printAscending(a: number, b: number, c: number): void {
  if (a <= b && a <= c) {
    // a е най‑малко
    if (b <= c) {
      console.log(a, b, c);
    } else {
      console.log(a, c, b);
    }
  } else if (b <= a && b <= c) {
    // b е най‑малко
    if (a <= c) {
      console.log(b, a, c);
    } else {
      console.log(b, c, a);
    }
  } else {
    // c е най‑малко
    if (a <= b) {
      console.log(c, a, b);
    } else {
      console.log(c, b, a);
    }
  }
}

// how to call:
printAscending(12, 4, 20);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
let sentence: string = 'I love rockendroll!';
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
if (sentence.length > 10) {
  console.log(`The string "${sentence}" has more than 10 characters.`);
} else {
  console.log(`The string "${sentence}" does NOT have more than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
let testString = 'Bob';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
if (testString.includes('B')) {
  // Step 3: Log the result like so:
  // "The string {string} contains the letter 'B'"
  console.log(`The string "${testString}" includes the letter 'B'`);
} else {
  // "The string {string} does NOT contain the letter 'B'"
  console.log(`The string "${testString}" does not includes letter 'B'`);
}
//Variant with function
function checkForB(text: string): void {
  if (text.includes('B')) {
    console.log(`The string "${text}" includes the letter 'B'`);
  } else {
    console.log(`The string "${text}" does not includes letter 'B'`);
  }
}
checkForB('Barier');
checkForB('Hello');
// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
let age: number = 21;
let bestLap: number = 59.21;
let isAllowed = age >= 18 && age < 65 && bestLap < 60;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time
// less than 60 seconds, using if-else statements.
if (isAllowed) {
  // Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
  console.log(`Client age:${age}`);
  console.log(`Best lap time: "${bestLap}`);
  console.log('Client is allowed to compete!');
} else {
  console.log('Client is not allow to compete!');
}
