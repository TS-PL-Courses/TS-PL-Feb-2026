// Homework 01

//npx ts-node homework/katerina-karaboeva/typescript-homeworks/katerina-ts-homework-01.ts

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

console.log('\nExercise 1');
//Solution:
let firstNumber: number = 10;
let secondNumber: number = 15;
console.log(firstNumber, '- This is original value 1');
console.log(secondNumber, ' - This is original value 2');
let swapped1: number = secondNumber;
secondNumber = firstNumber;
firstNumber = swapped1;
console.log(firstNumber, ' - This is swapped 1 value');
console.log(secondNumber, ' - This is swapped 2 value');

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

console.log('\nExercise 2');
//Solution:
const numberIsEven = 44;
const isEven = numberIsEven % 2 === 0;
if (isEven) {
  console.log('This number is even');
} else {
  console.log('This number is odd');
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

console.log('\nExercise 3');
//Solution:
const numberIsNegative = -82;
const isGreater: boolean = numberIsNegative > 0;
if (isGreater) {
  console.log('This number is positive');
} else {
  console.log('This number is negative');
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

console.log('\nExercise 4');
//Solution:
const price: number = 19.99;
const quantity: number = 3;
const totalCost = quantity * price;
console.log(totalCost);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('\nExercise 5');
//Solution:
let temperatureInCelsius: number = 20; // temperature in Celsius
const resultInFahrenheit = (temperatureInCelsius * 9) / 5 + 32; // Conversion to Fahrenheit and storing in end variable.
console.log(resultInFahrenheit);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

console.log('\nExercise 6');
//Solution:
let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please, log in!');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

console.log('\nExercise 7');
//Solution:
const hasTicket: boolean = true;
const isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;
console.log(canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

console.log('\nExercise 8');
//Solution:
let anyString: string = 'This string is not empty';
let checkIfEmpty: boolean = anyString.length === 0;
console.log(checkIfEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

console.log('\nExercise 9');
//Solution:
let randomString: string = 'Katerina';
let isTrue = randomString.charAt(0) === 'A';
console.log(isTrue);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

console.log('\nExercise 10');
//Solution:
const languages: string = 'Typescript is fun';
console.log('The length of my string is', languages.length); //length of the string
console.log('My string in Uppercase is', languages.toUpperCase());
console.log('My string in Lowercase is', languages.toLowerCase());
const favouriteLanguage: string = 'Java';
console.log(`My favorite programming language is ${favouriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

console.log('\nExercise 11');
//Solution
const bigInt1: bigint = 5000000n;
const bigInt2: bigint = 4000000n;
const resultBigInt: bigint = bigInt1 + bigInt2;
console.log('This is the sum of my bigInt1 and bigInt 2:', resultBigInt);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

console.log('\nExercise 12');
//Solution 1:
let numbers: number[] = [10, 20, 30, 40];
let totalProduct = 1;
for (let index = 0; index < numbers.length; index++) {
  totalProduct *= numbers[index];
}
console.log('This is the product of all numbers in the array', totalProduct);

//Solution 2:
let numbers1: number[] = [10, 20, 30, 40];
numbers1 = numbers1.map((x) => x * 2);
console.log('This is the array, after each number in it has been multiplied by 2', numbers1);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

console.log('\nExercise 13');
//Solution1:
console.log('\nSolution 1');
const students: { name: string; grade: number }[] = [
  {
    name: 'Draco Malfoy',
    grade: 6,
  },
  {
    name: 'Katerina Karaboeva',
    grade: 5,
  },
  {
    name: 'Hermione Granger',
    grade: 5,
  },
  {
    name: 'Harry Potter',
    grade: 666,
  },
];
//връщане на нов масив, с имената от оригиналния
const firstName = students.map((student) => student.name);
console.log('Students from Hogwarts', firstName);

//Solution 2:
console.log('\nSolution 2');

const students1: { firstName: string; grade: number }[] = [
  {
    firstName: 'Draco Malfoy',
    grade: 6,
  },
  {
    firstName: 'Katerina Karaboeva',
    grade: 5,
  },
  {
    firstName: 'Hermione Granger',
    grade: 5,
  },
  {
    firstName: 'Harry Potter',
    grade: 666,
  },
];
//обхождане на масива и логване на резултата за всяка итерация
students1.forEach((students1) => {
  console.log(students1.firstName);
});

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

console.log('\nExercise 14');
//Solution:
function printId(stringOrNumber: string | number) {
  console.log(stringOrNumber);
}
printId('This is a string'); //calling the function with string
printId(7); //calling the function with number

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

console.log('\nExercise 15');
//Solution:
const qaName: string = 'Katerina, The Master of QAs,';
const numberOfFunctionalities: number = 3; //total number functionalities for testing.
const timeForTestOneFunct: number = 2; //time needed to test 1 functionality is 2 hours.
const totalTimeForTest: number = numberOfFunctionalities * timeForTestOneFunct; // multiply number of functionalities by time for testing one functionality.
console.log(
  `The QA ${qaName} will need ${totalTimeForTest} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

console.log('\nExercise 16');
//Solution:
type User = { id: number | string; name: string };
let one: User = { id: 4, name: '78' };
let two: User = { id: '78', name: 'Katerina' };
console.log('There is nothing to log here');

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

console.log('\nExercise 17');
//Solution:
const duplicateNumbers: number[] = [10, 20, 10, 30, 40];
const removedDuplicates = duplicateNumbers.filter(
  (value, index, array) => array.indexOf(value) === index,
);
console.log(removedDuplicates);

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
