// npx ts-node homework/mihaelina-lilova/Typescript/homework-01.ts

// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

console.log();
console.log('Exercise 1: Variable swapping');

let numberOne: number = 10;
let numberTwo: number = 25;
let swappingNumber: number;

const originalNumberOne: number = numberOne;
const originalNumberTwo: number = numberTwo;

swappingNumber = numberOne;
numberOne = numberTwo;
numberTwo = swappingNumber;

console.log(`numberOne original value is: ${originalNumberOne}`);
console.log(`numberTwo original value is: ${originalNumberTwo}`);
console.log(`numberOne new value is: ${numberOne}`);
console.log(`numberTwo new value is: ${numberTwo}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result

console.log();
console.log('Exercise 2: Check if a number is even or odd');

let randomNumber: number = 25;
let isEven: boolean = randomNumber % 2 === 0;

if (isEven) {
  console.log('The number is even!');
} else {
  console.log('The number is odd');
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result

console.log();
console.log('Exercise 3: Verify if a number is positive');

let numberToCheck: number = -1;
let isPositive: boolean = numberToCheck > 0;

if (isPositive) {
  console.log('The number is positive!');
} else {
  console.log('The number is negative');
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

console.log();
console.log('Exercise 4: Total cost calculation');

let price: number = 19.99;
let quantity: number = 3;
// let totalCost: number = price * quantity;
console.log(`The total cost is: ${price * quantity}`);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log();
console.log('Exercise 5: Celsius to Fahrenheit converter');
let temperatureC: number = 34;
let temperatureF: number = (temperatureC * 9) / 5 + 32;

console.log(
  `The temperature is ${temperatureC} degrees in Celsius and ${temperatureF} degrees in Fahrenheit.`,
);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

console.log();
console.log('Exercise 6: Login check');
let isLoggedIn: boolean = false;

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
// Step 2: Create a boolean variable isAdult with value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

console.log();
console.log('Exercise 7: Entry permission');
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;

console.log(`Entry permission: ${canEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result

console.log();
console.log('Exercise 8: Check if a string is empty (empty string is "")');
let newString: string = 'New text.';
let isEmptyString: boolean = newString === '';

if (isEmptyString) {
  console.log('This string is empty!');
} else {
  console.log('The string is not empty!');
}

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result

console.log();
console.log("Exercise 9: Determine if a string starts with the letter 'A'");
let randomString: string = 'A Mouse';
let isFirstLetterA: boolean = randomString.charAt(0) === 'A';

if (isFirstLetterA) {
  console.log(`The word ${randomString} starts with the letter 'A'`);
} else {
  console.log(`The word ${randomString} doesn't starts with the letter 'A'`);
}

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

console.log();
console.log('Exercise 10: String operations');
let message: string = 'TypeScript is fun';

console.log(`The length of ${message} is ${message.length} symbols.`);
console.log(`The ${message} in uppercase is ${message.toUpperCase()}.`);
console.log(`The ${message} in lowercase is ${message.toLowerCase()}.`);

let favoriteLanguage: string = 'JavaScript';
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

console.log();
console.log('Exercise 11: BigInt addition');
let firstBigintNum: bigint = 13860606066666n;
let seocndBigintNum: bigint = 39444747474747n;

console.log(
  `The sum of ${firstBigintNum} and ${seocndBigintNum} is ${firstBigintNum + seocndBigintNum}`,
);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

console.log();
console.log('Exercise 12: Product of an array');
const numbers: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   totalProduct *= element;
// }
for (const num of numbers) {
  totalProduct *= num;
}
console.log(`The result of the number multiplication is ${totalProduct}.`);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

console.log();
console.log('Exercise 13: Array of student objects');
type Student = {
  name: string;
  grade: number;
};

const students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Ivon', grade: 100 },
];

let studentNumber: number = 1;
for (const num of students) {
  console.log(`The student ${studentNumber} name is ${num.name}`);
  studentNumber++;
}

// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

console.log();
console.log('Exercise 14: Function with union type');
function printId(id: string | number): void {
  console.log(`The ID is ${id}`);
}
printId('Mihi');

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

console.log();
console.log(
  'Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities',
);

function calculateTestingTime(QAname: string, funNumber: number): void {
  const time: number = 2;
  const totalTime: number = funNumber * time;
  console.log(`The QA ${QAname} will need ${totalTime} hours to complete ${funNumber} project/s.`);
}

calculateTestingTime('Anna', 5);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

console.log();
console.log('Exercise 16: Union in objects');

type User = {
  id: number | string;
  name: string;
};

function createUser(user: User): string {
  //console.log(`The user ID is: ${user.id}. The user name is: ${user.name}`);
  return `The user ID is: ${user.id}. The user name is: ${user.name}`;
}
console.log(createUser({ id: 12, name: 'Zoe' }));
console.log(createUser({ id: 'Female', name: 'Zoe' }));

//  createUser({ id: 12, name: 'Zoe' });
// createUser({ id: 'Female', name: 'Zoe' });

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].

console.log();
console.log('Exercise 17: Remove duplicate numbers from an array');

const arrOfNumber: number[] = [10, 20, 10, 30, 40];
const arrResult: number[] = [];

for (let j = 0; j < arrOfNumber.length; j++) {
  if (!arrResult.includes(arrOfNumber[j])) {
    arrResult.push(arrOfNumber[j]);
  }
}
console.log(arrResult);

// arrResult.push(arrOfNumber[0]);
// for (let j = 1; j < arrOfNumber.length - 1; j++) {
//   for (let i = 0; i < arrResult.length; i++) {
//     if (arrResult[i] === arrOfNumber[j]) {
//       break;
//     }
//     arrResult.push(arrOfNumber[j]);
//     i++;
//     j++;
//   }
// }

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

console.log();
console.log('Exercise 18: Find the difference between two arrays');

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
let difference: number[] = arr1.concat(arr2);
difference = difference.filter((num) => !(arr1.includes(num) && arr2.includes(num)));
console.log(difference);

// for (let i = 0; i < arr1.length; i++) {
//   if (!arr2.includes(arr1[i])) {
//     difference.push(arr1[i]);
//   }
// }
// for (let j = 0; j < arr2.length; j++) {
//   if (!arr1.includes(arr2[j])) {
//     difference.push(arr2[j]);
//   }
// }
// console.log(difference);

// let difference = [
//   ...arr1.filter((num) => !arr2.includes(num)),
//   ...arr2.filter((num) => !arr1.includes(num)),
// ];

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].

function exr19() {
  console.log();
  console.log('Exercise 19: Find the union of two arrays');

  const arr1: number[] = [1, 2, 3, 4];
  const arr2: number[] = [3, 4, 5];
  const union: number[] = arr1.concat(arr2).filter((num, index, arr) => arr.indexOf(num) === index);
  console.log(union);

  //   union.sort();
  //   for (let i = 0; i < union.length; i++) {
  //     if (arr1.includes(union[i]) && arr2.includes(union[i])) {
  //       swipeAndRemoveElement(union, i);
  //       i++;
  //     }
  //   }
  //   function swipeAndRemoveElement(arr: number[], index: number) {
  //     const currentElement: number = arr[index];
  //     const lastElement: number = arr[arr.length - 1];
  //     arr[arr.length - 1] = currentElement;
  //     arr[index] = lastElement;
  //     arr.pop();
  //   }
  //   union.sort();
  //   console.log(union);
}

exr19();
