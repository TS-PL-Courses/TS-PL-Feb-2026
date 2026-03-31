// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
let firstNumber: number = 10;
let secondNumber: number = 5;
console.log('Before swapping:');
console.log('First number:', firstNumber);
console.log('Second number:', secondNumber);

// Step 2: Swap their values.
let temp: number = firstNumber; // store the value of firstNumber in a temporary variable
firstNumber = secondNumber; // assign the value of secondNumber to firstNumber
secondNumber = temp; // assign the value of temp (original firstNumber) to secondNumber

// Step 3: Log the original values and the final values.
console.log('After swapping:');
console.log('First number:', firstNumber);
console.log('Second number:', secondNumber);

// Exercise 2: Check if a number is even or odd

// Step 1: Declare a variable and assign any number to it.
let numberToCheck: number = 11;
let secondNumberToCheck: number = 28;

// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
let isEven: boolean = numberToCheck % 2 === 0;
let isSecondNumberEven: boolean = secondNumberToCheck % 2 === 0;

// Step 3: Log the result.
console.log(`Is ${numberToCheck} even? ${isEven}`);
console.log(`Is ${secondNumberToCheck} even? ${isSecondNumberEven}`);

// Exercise 3: Verify if a number is positive

// Step 1: Declare a variable and assign any number to it.
let numberToCheckPositive: number = -5;

// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
let isPositive: boolean = numberToCheckPositive > 0;

// Step 3: Log the result.
console.log(`Is ${numberToCheckPositive} positive? ${isPositive}`);

// Exercise 4: Total cost calculation

// Step 1: Create a variable called price with the value 19.99.
let price: number = 19.99;

// Step 2: Create another variable called quantity with the value 3.
let quantity: number = 3;

// Step 3: Calculate the total cost by multiplying price and quantity.
let totalCost: number = price * quantity;

// Step 4: Log the total cost.
console.log(`Total cost: $${totalCost.toFixed(2)}`); // toFixed(2) is used to format the total cost to 2 decimal places

// Exercise 5: Celsius to Fahrenheit converter

// Step 1: Create a variable for the temperature in Celsius.
let temperatureCelsius: number = 25;

// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
let temperatureFahrenheit: number = (temperatureCelsius * 9) / 5 + 32;

// Step 3: Store the result in a variable.

// Step 4: Log the temperature in Fahrenheit.
console.log(`Temperature in Fahrenheit: ${temperatureFahrenheit}°F`);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check

// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean = false;

// Step 2: If isLoggedIn is true, log "Welcome!".
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission

// Step 1: Create a boolean variable hasTicket with the value true.
let hasTicket: boolean = true;

// Step 2: Create a boolean variable isAdult with the value false.
let isAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both variables are true.
let canEnter: boolean = hasTicket && isAdult;

// Step 4: Log the result of canEnter.
console.log(`Can enter: ${canEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")

// Step 1: Declare a variable and assign any string to it.
let stringToCheck: string = '';
let secondStringToCheck: string = 'Hello, World!';

// Step 2: Declare a boolean variable and check if the first variable is an empty string.
let isEmpty: boolean = stringToCheck === '';

// Step 3: Log the result.
console.log(`Is the string empty? ${isEmpty}`);
console.log(`Is the second string empty? ${secondStringToCheck === ''}`); // checking if the second string is empty as well

// Exercise 9: Determine if a string starts with the letter 'A'

// Step 1: Declare a variable and assign any string to it.
let stringToCheckStartsWithA: string = 'Apple';
let anotherStringToCheckStartsWithA: string = 'Banana';

// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
let startsWithA: boolean = stringToCheckStartsWithA.startsWith('A');
let anotherStartsWithA: boolean = anotherStringToCheckStartsWithA.startsWith('A');

// Step 3: Log the result.
console.log(`Does the string start with 'A'? ${startsWithA}`);
console.log(`Does the another string start with 'A'? ${anotherStartsWithA}`); // checking if the second string starts with 'A' as well

// Exercise 10: String operations

// Step 1: Create a string variable message with the value "TypeScript is fun".
let message: string = 'TypeScript is fun';

// Step 2: Log the length of the string.
console.log(`Length of the message: ${message.length}`);

// Step 3: Log the string in uppercase.
console.log(`Uppercase: ${message.toUpperCase()}`);

// Step 4: Log the string in lowercase.
console.log(`Lowercase: ${message.toLowerCase()}`);

// Step 5: Create a variable called favoriteLanguage.
let favoriteLanguage: string = 'TypeScript';

// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition

// Step 1: Create two bigint numbers.
let bigInt1: bigint = 1234567890123456789012345678901234567890n; // the 'n' at the end indicates that this is a bigint literal
let bigInt2: bigint = 9876543210987654321098765432109876543210n;

// Step 2: Add the two bigint numbers together.
let bigIntSum: bigint = bigInt1 + bigInt2;

// Step 3: Log the result.
console.log(`Sum of bigints: ${bigIntSum}`);

// Part 5 — Array (array)

// Exercise 12: Product of an array

// Step 1: Create an array with the numbers [10, 20, 30, 40].
let numbersArray: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the total product.
let totalProduct: number = 1;

// Step 3: Use a loop to multiply all numbers in the array.
for (let i = 0; i < numbersArray.length; i++) {
  totalProduct *= numbersArray[i];
}
// Step 4: Log the final product.
console.log(`Total product: ${totalProduct}`);

// Exercise 13: Array of student objects

// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
let studentsArray: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Charlie', grade: 92 },
  { name: 'Diana', grade: 88 },
];
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
for (let i = 0; i < studentsArray.length; i++) {
  const student = studentsArray[i];
  console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}

// Part 6 — Functions (function)

// Exercise 14: Function with a union type

// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
function printId(id: string | number) {
  // Step 3: Inside the function, log the id value
  console.log(`ID: ${id}`);
}
printId(12345); // testing the function with a number
printId('abcde'); // testing the function with a string

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities

// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
const qaName: string = 'Maria Penova';
let numberOfFunctionalities: number = 6;
const timePerFunctionality: number = 2; // hours
// Step 2: Calculate the total time needed to test all functionalities.
let totalTime: number = numberOfFunctionalities * timePerFunctionality;
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects

// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = {
  id: number | string; // the id can be either a number or a string
  name: string;
};
// Step 4: Create one user object with a numeric id.
const user1: User = {
  id: 101,
  name: 'Alexandra',
};
// Step 5: Create another user object with a string id.
const user2: User = {
  id: 'user002',
  name: 'Boris',
};
console.log(user1);
console.log(user2);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array

// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
let numbersWithDuplicates: number[] = [10, 20, 10, 30, 40];

// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
let uniqueNumbers: number[] = Array.from(new Set(numbersWithDuplicates)); // using Set to remove duplicates and then converting it back to an array

// Step 4: Log the new array, which should look like [10, 20, 30, 40].
console.log(uniqueNumbers);

// Exercise 18: Find the difference between two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4].
let arr1: number[] = [1, 2, 3, 4];

// Step 2: Create another array arr2 with values [3, 4, 5].
let arr2: number[] = [3, 4, 5];

// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
let difference: number[] = arr1
  .filter((x) => !arr2.includes(x))
  .concat(arr2.filter((x) => !arr1.includes(x)));

// Step 5: Log the result, which should be [1, 2, 5].
console.log(difference);

// Exercise 19: Find the union of two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4].
let arr1Union: number[] = [1, 2, 3, 4];

// Step 2: Create another array arr2 with values [3, 4, 5].
let arr2Union: number[] = [3, 4, 5];

// Step 3: Combine both arrays into one.
let combinedArray: number[] = arr1Union.concat(arr2Union);

// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
let union: number[] = Array.from(new Set(combinedArray)); // using Set to remove duplicates and then converting it back to an array
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
console.log(union);

//Using filter and includes to remove duplicates and find the union
const unionWithFilter = arr1Union.concat(arr2Union.filter((num) => !arr1Union.includes(num)));

console.log(unionWithFilter);
