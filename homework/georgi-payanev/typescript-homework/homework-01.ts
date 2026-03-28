// Homework 01

//npx ts-node homework/georgi-payanev/typescript-homework/homework-01.ts

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

console.log('\nExercise 1:');
let number1: number = 5;
let number2: number = 6;

console.log('Original number 1 is:' + ' ' + number1 + '.');
console.log('Original number 2 is:' + ' ' + number2 + '.');

let swappedNumber1: number = number2;
let swappedNumber2: number = number1;

console.log('Swapped number 1 is:' + ' ' + swappedNumber1 + '.');
console.log('Swapped number 2 is:' + ' ' + swappedNumber2 + '.');

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

console.log('\nExercise 2:');

const number: number = 5;
const isEven = number % 2 === 0;

if (isEven) {
  console.log('The number' + ' ' + number + ' ' + 'is even.');
} else {
  console.log('The number' + ' ' + number + ' ' + 'is odd.');
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

console.log('\nExercise 3:');

const value: number = -1;
const isPositive: boolean = value >= 0;

if (isPositive) {
  console.log('The number' + ' ' + value + ' ' + 'is positive.');
} else {
  console.log('The number' + ' ' + value + ' ' + 'is negative.');
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

console.log('\nExercise 4:');

const price: number = 19.99;
const quantity: number = 3;
const totalCost = price * quantity;

console.log('The total cost is:' + ' ' + totalCost + '.');

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('\nExercise 5:');

const temperatureInCelsius: number = 31;
const temperatureInFarenheit: number = (temperatureInCelsius * 9) / 5 + 32;

console.log('The temperature in Farenheitt is:' + ' ' + temperatureInFarenheit + '.');

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

console.log('\nExercise 6:');

let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in!');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

console.log('\nExercise 7:');

const hasTicket: boolean = true;
const isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;

console.log(canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

console.log('\nExercise 8:');

let text: string = '';
let isEmpty: boolean = text.length === 0;

console.log(isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

console.log('\nExercise 9:');

let string: string = 'Anastas';
let isStatingWithA: boolean = string.charAt(0) === 'A';

console.log(isStatingWithA);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

console.log('\nExercise 10:');

const message: string = 'TypeScript is fun';
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

const language: string = 'Typescript';
const favoriteLanguage: string = `My favorite programming language is ${language}!`;
console.log(favoriteLanguage);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

console.log('\nExercise 11:');

const bigiInt1: bigint = 30000000000000000n;
const bigiInt2: bigint = 60000000000000000n;

console.log(bigiInt1 + bigiInt2);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

console.log('\nExercise 12:');

const numbers: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;

for (let index = 0; index < numbers.length; index++) {
  totalProduct = numbers[index] * totalProduct;
}

console.log('The total product is: ', totalProduct);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

console.log('\nExercise 13:');

const students = [
  { name: 'Ivan', grade: 5 },
  { name: 'Gosho', grade: 10 },
  { name: 'Pesho', grade: 15 },
];

for (let index = 0; index < students.length; index++) {
  console.log(students[index].name);
}

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

console.log('\nExercise 14:');

function printId(message: string | number) {
  console.log(message);
}
printId('Text');
printId(1);

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

console.log('\nExercise 15:');

function calculateQATime(qaName: string, numberOfFunctionalities: number, timeNeeded: number = 2) {
  const totalTimeNeeded: number = numberOfFunctionalities * timeNeeded;
  return `The QA ${qaName} will need ${totalTimeNeeded} hours to complete ${numberOfFunctionalities} project/s.`;
}

console.log(calculateQATime('Georgi Payanev', 20));
console.log(calculateQATime('Ivan', 3));

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

console.log('\nExercise 16:');

type User = {
  id: number | string;
  name: string;
};

let userWithNumericId: User = {
  id: 5,
  name: 'Gosho',
};

let userWithStringId: User = {
  id: 'newid',
  name: 'Mitko',
};

console.log(userWithNumericId);
console.log(userWithStringId);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
