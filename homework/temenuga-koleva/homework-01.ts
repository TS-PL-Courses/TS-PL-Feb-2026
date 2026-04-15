// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let numberA: number = 3;
let numberB: number = 44;
console.log(`numberA is ${numberA}`);
console.log(`numberB is ${numberB}`);
numberA = numberA + numberB;
numberB = numberA - numberB;
numberA = numberA - numberB;
console.log(`numberA is now ${numberA}`);
console.log(`numberB is now ${numberB}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result

const n = 11;
const isEven = n % 2;
if (isEven === 0) {
  console.log(`${n} is an even number.`);
} else {
  console.log(`${n} is an odd number.`);
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result

const m = 15;
if (m > 0) {
  console.log(`${m} is a positive number.`);
} else {
  console.log(`${m} is not a positive number.`);
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;
console.log(`The total cost is ${totalCost}.`);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

const tCelsius: number = 21;
const tFahrenheit: number = (tCelsius * 9) / 5 + 32;
console.log(`${tCelsius} degrees Celsius is equal to ${tFahrenheit} degrees Fahrenheit.`);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

const isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
// Step 2: Create a boolean variable isAdult with value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;
if (canEnter) {
  console.log(`You can enter`);
} else {
  console.log(`You can NOT enter`);
}

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result

const str: string = 'abc';
const isEmpty: boolean = str === '';
if (isEmpty) {
  console.log(`The string is empty.`);
} else {
  console.log(`The string is not empty.`);
}

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result

const str2: string = 'Alalabala';
const startsWithA: boolean = str2.startsWith('A');
if (startsWithA) {
  console.log(`The string starts with the letter 'A'.`);
} else {
  console.log(`The string does not start with the letter 'A'.`);
}

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

const message: string = 'TypeScript is fun';
console.log(`The length of the string is ${message.length}.`);
console.log(`The string in uppercase is ${message.toUpperCase()}.`);
console.log(`The string in lowercase is ${message.toLowerCase()}.`);
const favoriteLanguage: string = 'C#';
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

const bigInt1: bigint = 12345678901234567890n;
const bigInt2: bigint = 98765432109876543210n;
const bigIntSum: bigint = bigInt1 + bigInt2;
console.log(`The sum of the two bigint numbers is ${bigIntSum}.`);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

const numbers: number[] = [10, 20, 30, 40];
let total: number = 1;
for (const num of numbers) {
  total *= num;
}
console.log(`The product of the array is ${total}.`);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

const students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

for (const student of students) {
  console.log(`Student name: ${student.name}`);
}

// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number): void {
  console.log(`The id is ${id}.`);
}
printId(123);
printId('abc123');

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

const qaName: string = 'Me';
const numberOfFunctionalities: number = 6;
const timePerFunctionality: number = 2;
const totalTime: number = numberOfFunctionalities * timePerFunctionality;
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

type User = {
  id: number | string;
  name: string;
};
const user1: User = {
  id: 34,
  name: 'Axel',
};
const user2: User = {
  id: 'a12',
  name: 'Monica',
};
console.log(`User 1: id = ${user1.id}, name = ${user1.name}`);
console.log(`User 2: id = ${user2.id}, name = ${user2.name}`);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].

const duplicates: number[] = [10, 20, 10, 30, 40];
const uniques: number[] = Array.from(new Set(duplicates));
console.log(`Unique numbers: ${uniques}`);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
const difference: number[] = [
  ...arr1.filter((x) => !arr2.includes(x)),
  ...arr2.filter((x) => !arr1.includes(x)),
];
console.log(`Difference between arr1 and arr2: ${difference}`);

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].

const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [3, 4, 5];
const union: number[] = Array.from(new Set([...array1, ...array2]));
console.log(`Union of array1 and array2: ${union}`);
