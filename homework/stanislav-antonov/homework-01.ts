// Homework 01 Stanislav Antonov
//npx ts-node homework/stanislav-antonov/homework-01.ts

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping

// Step 1: Declare 2 variables with numbers.
let firstNumber: number = 5;
let secondNumber: number = 10;

// Step 2: Swap their values.

let originalFirst = firstNumber; // Save original values
let originalSecond = secondNumber; //Save original values

let temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

// Step 3: Log the original values and the final values.

console.log('Original values:');
console.log('firstNumber =', originalFirst);
console.log('secondNumber =', originalSecond);

console.log('New values:');
console.log('firstNumber =', firstNumber);
console.log('secondNumber =', secondNumber);

// Exercise 2: Check if a number is even or odd

// Step 1: Declare a variable and assign any number to it.
let numberVariable: number = 8;

// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
let booleanVariable: boolean = numberVariable % 2 === 0;

// Step 3: Log the result.

console.log('Is the number even?');
if (booleanVariable) {
  console.log('yes');
} else {
  console.log('no');
}

// Exercise 3: Verify if a number is positive

// Step 1: Declare a variable and assign any number to it.
let numberVar1: number = -12;

// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
let greaterThanZero: boolean = numberVar1 > 0;

// Step 3: Log the result.
console.log('Is the variable greater than 0?');
if (greaterThanZero) {
  console.log('yes');
} else {
  console.log('no');
}

// Exercise 4: Total cost calculation

// Step 1: Create a variable called price with the value 19.99.
let price: number = 19.99;

// Step 2: Create another variable called quantity with the value 3.
let quantity: number = 3;

// Step 3: Calculate the total cost by multiplying price and quantity.
let totalCost: number = price * quantity;

// Step 4: Log the total cost.
console.log(`The total cost is $${totalCost}`);

// Exercise 5: Celsius to Fahrenheit converter

// Step 1: Create a variable for the temperature in Celsius.
let tempCelsius: number = 27;

// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
let tempFahrenheit: number = (tempCelsius * 9) / 5 + 32;

// Step 3: Store the result in a variable.

// Step 4: Log the temperature in Fahrenheit.
console.log(`The temperature in Fahrenheit is: ${tempFahrenheit}`);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check

// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean = true;
// Step 2: If isLoggedIn is true, log "Welcome!".
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}
// Step 3: If isLoggedIn is false, log "Please log in".

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
let hasTicket: boolean = true;

// Step 2: Create a boolean variable isAdult with the value false.
let isAdult: boolean = true;

// Step 3: Create a variable called canEnter that is true only if both variables are true.
let canEnter: boolean;

// Step 4: Log the result of canEnter.

if (hasTicket && isAdult) {
  canEnter = true;
} else {
  canEnter = false;
}

console.log('Can enter:', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")

// Step 1: Declare a variable and assign any string to it.
let string1: string = '';

// Step 2: Declare a boolean variable and check if the first variable is an empty string.
let isEmpty: boolean = string1 === '';

// Step 3: Log the result.
console.log('Is the string empty?', isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
let str12: string = 'Hello';
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
let startsWith: boolean = str12.startsWith('A');

// Step 3: Log the result.
console.log('Starts with A?', startsWith);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
let s1: string = 'TypeScript is fun';

// Step 2: Log the length of the string.
console.log(s1.length);

// Step 3: Log the string in uppercase.
console.log(s1.toUpperCase());

// Step 4: Log the string in lowercase.
console.log(s1.toLowerCase());

// Step 5: Create a variable called favoriteLanguage.
let favoriteLanguage: string = 'C++';

// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition

// Step 1: Create two bigint numbers.
let bigIn1: bigint = 10n;
let bigIn2: bigint = 20n;

// Step 2: Add the two bigint numbers together.

// Step 3: Log the result.
console.log(bigIn1 + bigIn2);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
let arrNum: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the total product.
let product: number = 1;

// Step 3: Use a loop to multiply all numbers in the array.
for (let i = 0; i < arrNum.length; i++) {
  product = product * arrNum[i];
}
// Step 4: Log the final product.
console.log(product);

// Exercise 13: Array of student objects

// Step 1: Create an array called students.
interface Student {
  name: string;
  grade: number;
}

let students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
// Step 5: Log each student's name.

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
function printID(id: string | number): void {
  console.log(id);
}

printID(5);
printID('hello');

// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities

// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
let qaName: string = 'Ivan';
let functionalities: number = 5;

// time per functionality
const timePerFeature: number = 2;

// Step 2: Calculate the total time needed to test all functionalities.
let totalTime: number = functionalities * timePerFeature;

// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
// Step 3
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${functionalities} project/s.`,
);

// Exercise 16: Union in objects

// Step 1: Create a type for a user object.
type User = {
  id: number | string;
  name: string;
};
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).

// Step 4: Create one user object with a numeric id.
const user1: User = {
  id: 1,
  name: 'Alice',
};
// Step 5: Create another user object with a string id.

const user2: User = {
  id: 'abc123',
  name: 'Bob',
};

console.log(user1);
console.log(user2);

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
