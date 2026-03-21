// Homework 01

import { arch } from "os";

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let numberOne: number = 33;
let numberTwo: number = 37;

let originalOne: number = numberOne;
let originalTwo: number = numberTwo;

[numberOne, numberTwo] = [numberTwo, numberOne];

console.log(`The originals are: ${originalOne} and ${originalTwo}`);
console.log(`The swapped are ${numberTwo} and ${numberOne}`);
console.log(`After swapping: numberOne = ${numberOne}, numberTwo = ${numberTwo}`);

//-------------------------------------------------------------------------------//

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

let numberThree: number = 25;

function oddOrEven(): void {
  let isEven: boolean = numberThree % 2 === 0;
  if (isEven) {
    console.log('The number is Even');
  } else {
    console.log('The number is odd.');
  }
}

oddOrEven();

//-------------------------------------------------------------------------------//

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

let numberFour: number = 7;

function positiveOrNot(): void {
  let isItPositive: boolean = numberFour > 0;
  if (isItPositive) {
    console.log('The number is Positive.');
  } else if (numberFour === 0) {
    console.log('0 is neither positive or negative');
  } else {
    console.log('The number is Negative');
  }
}
positiveOrNot();

//-------------------------------------------------------------------------------//

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
const quantity: number = 3;

function calculateTotalCost(price: number, quantity: number): number {
  const totalCost = price * quantity;
  return totalCost;
}

console.log(calculateTotalCost(price, quantity));

//-------------------------------------------------------------------------------//

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.
function celsiusToFahrenheitConverter(celsius: number): number {
  const fahrenheit: number = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheitConverter(37));

//-------------------------------------------------------------------------------//

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

function isLoggedIn() {
  const LoggedIn = true;
  if (LoggedIn) {
    console.log('Welcome!');
  } else {
    console.log('Please Log in.');
  }
}

isLoggedIn();

//-------------------------------------------------------------------------------//

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

function checkPermission(hasTicket: boolean, isAdult: boolean): void {
  let canEnter = hasTicket && isAdult;
  if (canEnter) {
    console.log('You can enter.');
  } else {
    console.log('You cannot enter.');
  }
}
checkPermission(true, false);

//-------------------------------------------------------------------------------//

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

const checkForEmptyString = (theWord: string) => {
  let isEmpty: boolean = theWord === '';
  if (isEmpty) {
    console.log('String is empty.');
  } else {
    console.log('String is not empty.');
  }
};
checkForEmptyString('Hello');

//-------------------------------------------------------------------------------//

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

const startsWithA = (theWordTwo: string): void => {
  const trimmed = theWordTwo.trim();
  console.log(
    trimmed.toUpperCase().startsWith('A')
      ? 'The word starts with "A".'
      : 'The word doesn\'t start with "A".',
  );
};

startsWithA('Liana');

//-------------------------------------------------------------------------------//

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

let message: string = 'TypeScript is fun';
let favoriteLanguage: string = 'Python';

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(`My favorite programming language is ${favoriteLanguage}.`);

//-------------------------------------------------------------------------------//

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

const addBigIntNumbers = (bigIntNumberOne: bigint, bigIntNumberTwo: bigint) => {
  return bigIntNumberOne + bigIntNumberTwo;
};

console.log(addBigIntNumbers(25000000n, 3500000n));

//-------------------------------------------------------------------------------//

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

const numbersArray: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;

for (let i = 0; i < numbersArray.length; i++) {
  const current = numbersArray[i];
  totalProduct = totalProduct * current;
}

console.log(`Total product of the Array is: ${totalProduct}`);

//-------------------------------------------------------------------------------//

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
  console.log(student.name);
}

//-------------------------------------------------------------------------------//

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

const printId = (id: string | number) => {
  console.log(`The ID value is: ${id}.`);
};

printId(7);

//-------------------------------------------------------------------------------//

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."


const testingTimeEstimantion = (QAname: string, functionalitiesNumber: number, time = 2): any => {
    const totalTime: number = functionalitiesNumber * time;
    return `The QA ${QAname}, will need ${totalTime} hours to comple the ${functionalitiesNumber} project/s.`
}

console.log(testingTimeEstimantion('Velyo', 7));

//-------------------------------------------------------------------------------//

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

const userOne: User = {
    id: 1,
    name: 'Okami'
};

const userTwo: User = {
    id: '777',
    name: 'Kozure'
};

//-------------------------------------------------------------------------------//

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

const removeDuplicate = (): void => {
    const duplicates: number [] = [10, 20, 10, 30, 40]
    const removedDuplicates = [...new Set(duplicates)]
    console.log(removedDuplicates);
}

removeDuplicate();

//-------------------------------------------------------------------------------//



