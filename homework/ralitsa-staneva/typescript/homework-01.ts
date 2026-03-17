//npx ts-node --project tsconfig.json homework\ralitsa-staneva\typescript\homework-01.ts
// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swappingcd
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let num1: number = 3;
let num2: number = 5;
let swappedNum1: number = num2;
let swappedNum2: number = num1;
console.log(`1) Original values are: num1 = ${num1} and num2 = ${num2}.`);
console.log(`Swapped values are: num1 = ${swappedNum1} and num2 = ${swappedNum2}.`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

let number: number = 7;
let isEven: boolean = number % 2 === 0;
console.log(`2) The number ${number} is even: ${isEven}.`);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.
let num: number = -365;
let isPositive: boolean = num > 0;
console.log(`3) The number ${num} is positive: ${isPositive}.`);

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log(`4) The total cost is: $${totalCost}.`);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

let celsius: number = 15.5;
let fahrenheit: number = celsius * (9 / 5) + 32;
console.log(`5) The temperature in Fahrenheit is: ${fahrenheit}°F`);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

let isLoggedIn: boolean = true;
if (isLoggedIn === true) {
  console.log(`6) Welcome!`);
} else {
  console.log(`6) Please log in.`);
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;
console.log(`7) Can enter: ${canEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

let str: string = 'nagnificent';
let isEmptyString: boolean = str.length === 0;
console.log(`8) The string is: empty ${isEmptyString}`);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

let str1: string = 'Apple';
let isFirstLetterA: boolean = str1.startsWith('A');
console.log(`9) The string starts with 'A': ${isFirstLetterA}`);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

let message: string = 'TypeScript is fun';
console.log(`10) Length of the message is: ${message.length}.`);
console.log(`10) The message in UPPERCASE is: ${message.toUpperCase()}.`);
console.log(`10) The message in LOWERCASE is: ${message.toLowerCase()}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

let bigInt1: bigint = 123456789012345678901234567890n;
let bigInt2: bigint = 847593762752750297027503942343n;
let sumOfBigInts: bigint = bigInt1 + bigInt2;
console.log(`11) The sum of the two bigints numbers is: ${sumOfBigInts}.`);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;
for (let i = 0; i < numbers.length; i++) {
  product = product * numbers[i];
}
console.log(`12) The product of the numbers is: ${product}.`);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

let students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];
let studentsList: string[] = [];
for (let i = 0; i < students.length; i++) {
  studentsList.push(students[i].name);
}
console.log(`13) The student names are: ${studentsList.join(', ')}.`);

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number): void {
  console.log(`14) The id value is ${id}.`);
}
printId('gsjfhkfsdkf');

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

const qaName: string = 'Sofia';
let countOfFunctionalities: number = 6;
let timeForTestingPerFunctionality: number = 2;
let totalTimeNeeded: number = countOfFunctionalities * timeForTestingPerFunctionality;
console.log(
  `15) The QA ${qaName} will need ${totalTimeNeeded} hours to complete ${countOfFunctionalities} project/s. `,
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
const user1: User = { id: 123, name: 'John' };
const user2: User = { id: 'abc', name: 'Jane' };
console.log(`16) User 1 has ID: ${user1.id} and name: ${user1.name}.`);
console.log(`16) User 2 has ID: ${user2.id} and name: ${user2.name}.`);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

let array: number[] = [10, 20, 10, 30, 40];
let arrayWithoutDuplicates: number[] = [...new Set(array)];
console.log(`17) The array without duplicates is: ${arrayWithoutDuplicates}.`);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];
let difference: number[] = arr1
  .filter((x) => !arr2.includes(x))
  .concat(arr2.filter((x) => !arr1.includes(x)));
console.log(`18) The difference between the arrays is: ${difference}.`);

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
let arr3: number[] = [1, 2, 3, 4];
let arr4: number[] = [3, 4, 5];
let union: number[] = arr3.concat(arr4);
let unionWithoutDuplicates: number[] = [...new Set(union)];
console.log(`19) The union of the arrays is: ${unionWithoutDuplicates}.`);
