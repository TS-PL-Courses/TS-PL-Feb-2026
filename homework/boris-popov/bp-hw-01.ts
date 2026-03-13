// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
console.log('--- Exercise 1: Variable swapping ---');
let a: number = 3;
let b: number = 7;
console.log('Initial vlues: a =', a, 'b =', b);

let temp: number = a;
a = b;
b = temp;
console.log('Values after swap: a =', a, 'b =', b);

// Exercise 2: Check if a number is even or odd
console.log('--- Exercise 2: Check if a number is even or odd ---');
let myNum1: number = 23;
let isEven: boolean = myNum1 % 2 === 0;
console.log('The number', myNum1, 'is even:', isEven);

// Exercise 3: Verify if a number is positive
console.log('--- Exercise 3: Verify if a number is positive ---');
let myNum2: number = -23;
let isPositive: boolean = myNum2 > 0;
console.log('The number', myNum2, 'is positive:', isPositive);

// Exercise 4: Total cost calculation
console.log('--- Exercise 4: Total cost calculation ---');
const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;
console.log('The total cost is:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
console.log('--- Exercise 5: Celsius to Fahrenheit converter ---');
const celsius: number = 32;
const fahrenheit: number = (celsius * 9) / 5 + 32;
console.log(celsius, 'C =', fahrenheit, 'F');

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
console.log('--- Exercise 6: Login check ---');
let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
console.log('--- Exercise 7: Entry permission ---');
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;

if (canEnter) {
  console.log('You can enter.');
} else {
  console.log("You can't enter.");
}

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].
