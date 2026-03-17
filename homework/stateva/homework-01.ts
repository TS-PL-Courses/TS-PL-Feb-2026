// Homework 01 Stateva
// npx ts-node homework-01.ts

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

// First way to swap values using a temporary variable
console.log('===============Exercise 1 : Variable swapping===============');

let a: number = 7;
let b: number = 88;

const initialA: number = a;
const initialB: number = b;

a = initialB;
b = initialA;

console.log(`Original values: a = ${initialA}, b = ${initialB}`);
console.log(`Swapped values: a = ${a}, b = ${b}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result

console.log('===============Exercise 2 : Check if a number is even or odd===============');

const num: number = 3244;
const isEven: boolean = num % 2 === 0;

console.log('The number:', num, 'is even:', isEven);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result

console.log('===============Exercise 3 : Verify if a number is positive===============');

const digit: number = -90;
const isPositive: boolean = digit > 0 ? true : false;

console.log('The number:', digit, isPositive ? 'is positive.' : 'is negative.');

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

console.log('===============Exercise 4 : Total cost calculation===============');

const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;

console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('===============Exercise 5 : Celsius to Fahrenheit converter===============');

let celsius: number = 31;
let fahrenheit: number = (celsius * 9) / 5 + 32;

console.log(celsius, 'degrees Celsius is equal to', fahrenheit, 'degrees Fahrenheit.');

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

console.log('===============Exercise 6 : Login check===============');

let isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

let isLoggedIn2: boolean = false;
console.log(isLoggedIn2 ? 'Welcome!' : 'Please log in');

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
// Step 2: Create a boolean variable isAdult with value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

console.log('===============Exercise 7 : Entry permission===============');

let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;

console.log(canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result

console.log('===============Exercise 8 : Check if a string is empty===============');

let str: string = '';
let emptyString: boolean = str === '';

console.log('Is the string empty:', emptyString);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result

console.log(
  '===============Exercise 9 : Determine if a string starts with the letter "A"===============',
);

let address: string = 'Ahtopol';
let startLetterA: boolean = address.startsWith('A');

console.log('Does the string start with "A":', startLetterA);

let word: string = 'TypeScript';
let startWithA: boolean = word[0] === 'A' || word[0] === 'a';

console.log('String starts with "A":', startWithA);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

console.log('===============Exercise 10 : String operations===============');

let message: string = 'TypeScript is fun';
console.log('Length of the string:', message.length);
console.log('String in uppercase:', message.toUpperCase());
console.log('String in lowercase:', message.toLowerCase());

let favoriteLanguage: string = 'TypeScript';
console.log('My favorite programming language is', favoriteLanguage);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

console.log('===============Exercise 11 : BigInt addition===============');

let bigInt1: bigint = 977345873456345692346573465436n;
let bigInt2: bigint = 827345687435674235634564735745n;
let bigIntSum: bigint = bigInt1 + bigInt2;

console.log(bigIntSum);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

console.log('===============Exercise 12 : Product of an array===============');

let numbers: number[] = [10, 20, 30, 40];

let product = 1;

for (let num of numbers) {
  product *= num;
}

console.log(product);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

console.log('===============Exercise 13 : Array of student objects===============');

type Student = {
  name: string;
  grade: number;
};

let students: Student[] = [
  { name: 'Misho', grade: 6 },
  { name: 'Lara', grade: 6 },
];

for (let student of students) {
  console.log(student.name);
}
// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

console.log('===============Exercise 14 : Function with union type===============');

function printID(id: string | number) {
  console.log('ID:', id);
}

printID('TRABANT');
printID(9876);

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

console.log('===============Exercise 15 : Calculate time needed for testing===============');

let qaName: string = 'Sara';
let numberOfFun: number = 2;
let timePerFun: number = 2;
let totalTime: number = numberOfFun * timePerFun;

console.log(`The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFun} projects.`);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

console.log('===============Exercise 16 : Union in objects===============');

type User = {
  id: number | string;
  name: string;
};

let user1: User = {
  id: 123,
  name: 'Pepi',
};

let user2: User = {
  id: 'BG12343',
  name: 'Nora',
};

console.log(user1);
console.log(user2);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].

console.log('===============Exercise 17 : Remove duplicate numbers from an array===============');

let nums: number[] = [10, 20, 10, 30, 40];
let uniqueNums: number[] = nums.filter((num, index) => nums.indexOf(num) === index);

console.log(uniqueNums);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

console.log('===============Exercise 18 : Find the difference between two arrays===============');

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];

let difference = [
  ...arr1.filter((x) => !arr2.includes(x)),
  ...arr2.filter((x) => !arr1.includes(x)),
];

console.log(difference);

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].

console.log('===============Exercise 19 : Find the union of two arrays===============');

let arr3: number[] = [1, 2, 3, 4];
let arr4: number[] = [3, 4, 5];

let union: number[] = Array.from(new Set([...arr3, ...arr4]));

console.log(union);
