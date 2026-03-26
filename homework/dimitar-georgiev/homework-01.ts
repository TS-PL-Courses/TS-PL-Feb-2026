// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let number: number = 7;
let number2: number = 77;

let originalValues = [number, number2];

let swapped = number;
number = number2;
number2 = swapped;

let finalValues = [number, number2];

console.log('Original values:', originalValues);
console.log('Final values:', finalValues);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

let numberE2: number = 7;
let boolean: boolean = numberE2 % 2 === 0;

console.log('Is the number even?:', boolean);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

let numberE3: number = 7;
let booleanE3: boolean = numberE3 > 0;

console.log('Is the number greater than 0?:', booleanE3);

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;

console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

let celsius: number = 37;
let fahrenheit: number = (celsius * 9) / 5 + 32;

console.log('The temperature in Fahrenheit is:', fahrenheit);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

let isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;

if (canEnter) {
  console.log('User is allowed to enter');
} else {
  console.log('User is NOT allowed to enter');
}

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

let stringE8: string = 'Hello!';
let isEmpty: boolean = stringE8 === '';

console.log('Is the string empty?:', isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

let stringE9: string = 'Yo!';
let starstWithA = stringE9.startsWith('A');

console.log('Is the string containing A?:', starstWithA);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

let stringE10: string = 'TypeScript is fun';
console.log('Lenght of the string:', stringE10.length);
console.log('String in uppercase:', stringE10.toUpperCase());
console.log('String in lowercase:', stringE10.toLowerCase());
let favoriteLanguage: string = 'Typescript';
console.log('My favorite programming language is', favoriteLanguage);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

let bigNumber1: bigint = 123456789012345678901234567890n;
let bigNumber2 = BigInt('123456789012345678901234567899');
let numbersTogether: bigint = bigNumber1 + bigNumber2;
console.log('Result:', numbersTogether);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

let array = [10, 20, 30, 40];
let finalProduct = 1;
for (let multiply of array) {
  finalProduct *= multiply;
}
console.log('Final Product:', finalProduct);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

let students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Gosho', grade: 97 },
];

for (let student of students) {
  console.log(student.name);
}

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number) {
  console.log(id);
}
printId('ABC123');
printId(123);

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed
// to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

function needsForQA(
  nameOfQA: string = 'Dimitar',
  numberOfFunctionalities: number = 27,
  timePerFunctionality: number = 2,
) {
  let totalTime: number = numberOfFunctionalities * timePerFunctionality;

  console.log(
    `The QA ${nameOfQA} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`,
  );
}
needsForQA();

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

let user1: User = {
  id: 101,
  name: 'Alice',
};

let user2: User = {
  id: 'A-550',
  name: 'Bob',
};

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

let numbers = [10, 20, 10, 30, 40];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5];

let difference = [
  ...arr1.filter((num) => !arr2.includes(num)),
  ...arr2.filter((num) => !arr1.includes(num)),
];

console.log(difference);

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

let arr1E19 = [1, 2, 3, 4];
let arr2E19 = [3, 4, 5];
let union = [...new Set([...arr1E19, ...arr2E19])];
console.log(union);
