// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

console.log('\n Exercise 1');

let firstNumber: number = 5;
let seconNumber: number = 9;

console.log(`Original values are: ${firstNumber} and ${seconNumber}`);

[firstNumber, seconNumber] = [seconNumber, firstNumber];

console.log(`Final values after swap are: ${firstNumber} and ${seconNumber}`);

// Exercise 2: Check if a number is even or odd

// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

console.log('\n Exercise 2');
const evenOrOdd: number = 43;
const isEven: boolean = evenOrOdd % 2 === 0;
console.log(`Is the number ${evenOrOdd} even? - ${isEven}`);

// Exercise 3: Verify if a number is positive

// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

console.log('\n Exercise 3');

const isPositive: number = -8;
const checkPositive: boolean = isPositive > 0;
//console.log(`The number ${isPositive} is positive?`, checkPositive);
console.log(`The number ${isPositive} is positive: ${checkPositive}`);

// Exercise 4: Total cost calculation

// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

console.log('\n Exercise 4');

const price: number = 19.99;
const quantity: number = 3;
const totalCost = price * quantity;
//console.log('The total price is:', totalCost);
console.log(`Total cost of multiplied price and quantity is: ${totalCost}`);

// Exercise 5: Celsius to Fahrenheit converter

// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('\n Exercise 5');

const celsiusTemperature: number = 25;
const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
console.log(`The Fahrenheit Temperature is: ${fahrenheitTemperature}`);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check

// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

console.log('\n Exercise 6');

const isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log('Welcome');
} else console.log('Please log in');

// Exercise 7: Entry permission

// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

console.log('\n Exercise 7');

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;
console.log(`Can enter: ${canEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")

// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

console.log('\n Exercise 8');

const emptyString: string = '';
const isEmpty: boolean = emptyString === '';
console.log(`Is the string empty? - ${isEmpty}`);

// Exercise 9: Determine if a string starts with the letter 'A'

// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

console.log('\n Exercise 9');

const text: string = 'Hello World';
const firstLetter: boolean = text.startsWith('A');
console.log(`Does the string start with A - ${firstLetter}`);

// Exercise 10: String operations

// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

console.log('\n Exercise 10');

const message: string = 'Typescript is fun';
console.log('Message lenght:', message.length);
console.log('Message to uppercase:', message.toUpperCase());
console.log('Message to lowercase:', message.toLowerCase());

const favoriteLanguage: string = 'Typecript';
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition

// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

console.log('\n Exercise 11');

const number1: bigint = 1023432324n;
const number2: bigint = 1523443243n;
const sum = number1 + number2;

console.log(`The sum of the two bigints is: ${sum}`);

// Part 5 — Array (array)

// Exercise 12: Product of an array

// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

console.log('\n Exercise 12');

const numbers: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;
for (let i = 0; i < numbers.length; i++) {
  totalProduct *= numbers[i];
}

console.log(`The total products are: ${totalProduct}`);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

console.log('\n Exercise 13');

type Student = { name: string; grade: number };

const students: Student[] = [
  { name: 'Nikoleta', grade: 5 },
  { name: 'Ivan', grade: 9 },
];

for (const student of students) {
  console.log(`Student: ${student.name}`);
}

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

console.log('\n Exercise 14');

function printId(id: string | number): void {
  console.log(`The id is: ${id}`);
}

printId('Hello World');
printId(234);

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

console.log('\n Exercise 15');

const qaName = 'Nikoleta';
const numberOfFunctionalities = 6;
const timeForOneFunctionality = 2;
const totalTimeForAllFunctionalities = numberOfFunctionalities * timeForOneFunctionality;

console.log(
  `The QA ${qaName} will need ${totalTimeForAllFunctionalities} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

console.log('\n Exercise 16');

type User = {
  id: number | string;
  name: string;
};

const user1: User = {
  id: 5,
  name: 'Nikoleta',
};
const user2: User = {
  id: 'Fifth',
  name: 'Ivan',
};

console.log(
  `The user ${user1.name} is with id: ${user1.id}, and the user ${user2.name} is with id: ${user2.id}.`,
);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

console.log('\n Exercise 17');

const numbers1: number[] = [10, 20, 10, 30, 40];
const numbers2 = [...new Set(numbers)];

console.log(`The unique numbers in the array are: ${numbers2}`);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

console.log('\n Exercise 18');

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const difference: number[] = [
  ...arr1.filter((x) => !arr2.includes(x)),
  ...arr2.filter((x) => !arr1.includes(x)),
];

console.log(`Difference: ${difference}`);

// Exercise 19: Find the union of two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

console.log('\n Exercise 19');

const arr11: number[] = [1, 2, 3, 4];
const arr22: number[] = [3, 4, 5];
const union = arr11.concat(arr22);
const unionUniqueValues = [...new Set(union)];

console.log(`The result is: ${unionUniqueValues}`);
