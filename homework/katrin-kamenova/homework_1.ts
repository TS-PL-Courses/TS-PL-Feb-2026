// npx ts-node /homework/katrin-kamenova/homework_1.ts

// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
let number1: number = 2; // Step 1: Declare 2 variables with numbers.
let number2: number = 8;
let number2Swap: number = number2; // Step 2: Swap their values.
number2 = number1;
number1 = number2Swap;
console.log(`Original values were: ${number1}, ${number2}`); // Step 3: Log the original values and the final values.
console.log('After swapping: number1 =', number1, 'number2 =', number2); // Step 3: Log the original values and the final values.

// Exercise 2: Check if a number is even or odd
let number3: number = 2; // Step 1: Declare a variable and assign any number to it.
let isEven: boolean = number3 % 2 === 0; // Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
console.log('Is the number', number3, 'even?', isEven); // Step 3: Log the result

// Exercise 3: Verify if a number is positive
let number4: number = 4; // Step 1: Declare a variable and assign any number to it.
let isPositive: boolean = number4 > 0; // Step 2: Declare a boolean variable and check if first variable is greater than 0.
console.log('Is the number', number4, 'positive?', isPositive); // Step 3: Log the result

// Exercise 4: Total cost calculation
let price: number = 19.99; // Step 1: Create a variable called price with the value 19.99.
let quantity: number = 3; // Step 2: Create another variable called quantity with the value 3.
let totalCost: number = price * quantity; // Step 3: Calculate the total cost by multiplying price and quantity.
console.log('The total cost is:', totalCost); // Step 4: Log the total cost.

// Exercise 5: Celsius to Fahrenheit converter
let celsius: number = 30; // Step 1: Create a variable for the temperature in Celsius.
let fahrenheit: number = (celsius * 9) / 5 + 32; // Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
console.log('The temperature in Fahrenheit is:', fahrenheit); // Step 3: Store the result in a variable. // Step 4: Log the temperature in Fahrenheit.

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
let isLoggedIn: boolean = true; // Step 1: Create a boolean variable called isLoggedIn.
if (isLoggedIn === true) {
  console.log('Welcome!'); // Step 2: If isLoggedIn is true, log "Welcome!".
} else {
  console.log('Please log in'); // Step 3: If isLoggedIn is false, log "Please log in".
}

// Exercise 7: Entry permission
let hasTicket: boolean = true; // Step 1: Create a boolean variable hasTicket with value true.
let isAdult: boolean = false; // Step 2: Create a boolean variable isAdult with value false.
let canEnter: boolean = hasTicket && isAdult; // Step 3: Create a variable called canEnter that is true only if both variables are true.
console.log('Can this person enter?', canEnter); // Step 4: Log the result of canEnter.

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
let thisString = 'Hello'; // Step 1: Declare a variable and assign any string to it.
let isStringEmpty: boolean = thisString === ''; // Step 2: Declare a boolean variable and check if first variable is an empty string.
console.log('Is the string empty?', isStringEmpty); // Step 3: Log the result

// Exercise 9: Determine if a string starts with the letter 'A'
const letterA: string = 'Apple'; // Step 1: Declare a variable and assign any string to it.
let checkString: boolean = letterA.startsWith('A'); // Step 2: Declare a boolean variable and check if first variable starts with 'A'.
console.log("Does the string start with the letter 'A'?", checkString); // Step 3: Log the result

// Exercise 10: String operations
const message: string = 'TypesScript is fun'; // Step 1: Create a string variable message with the value "TypeScript is fun".
console.log('The lenght of the string is:', message.length); // Step 2: Log the length of the string.
console.log('The string in uppercase is:', message.toUpperCase()); // Step 3: Log the string in uppercase.
console.log('The string in lowercase is:', message.toLowerCase()); // Step 4: Log the string in lowercase.
const favoriteLanguage: string = 'TypeScript'; // Step 5: Create a variable called favoriteLanguage.
console.log('My favourite programming language is:', favoriteLanguage); // Step 6: Log the sentence using a template string: "My favorite programming language is ___".

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition

const bigInt1: bigint = 12141637373867398n; // Step 1: Create two bigint numbers.
const bigInt2: bigint = 286927629867982n;
const bigIntSum: bigint = bigInt1 + bigInt2; // Step 2: Add the two bigint numbers together.
console.log('The sum of the two big integers is:', bigIntSum); // Step 3: Log the result.

// Part 5 — Array (array)

// Exercise 12: Product of an array
let numbers: number[] = [10, 20, 30, 40]; // Step 1: Create an array with the numbers [10, 20, 30, 40].
let totalProduct: number = 1; // Step 2: Create a variable to store the total product.
for (let i = 0; i < numbers.length; i++) {
  totalProduct = totalProduct * numbers[i];
} // Step 3: Use a loop to multiply all numbers in the array.
console.log(`The total product is: ${totalProduct}`); // Step 4: Log the final product.

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
function printId(id: string | number) {
  console.log(`The ID is: ${id}`);
}

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities

// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accept time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

const qaName: string = 'Katrin';
const numberOfFunctionalities: number = 3;
const timePerFuctionality: number = 2;

let totalTimeNeeded: number = numberOfFunctionalities * timePerFuctionality;
console.log(
  `The QA: ${qaName} will need ${totalTimeNeeded} hours to complete ${numberOfFunctionalities} functionalities.`,
);

// Exercise 16: Union in objects

// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

type User = { id: number | string; name: string };
let user1: User = { id: 2, name: 'Katrin' };
let user2: User = { id: 'user01', name: 'John' };

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 30, 20, 40, 10].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].
let numbersArray: number[] = [10, 20, 30, 20, 40, 10];
numbersArray = [...new Set(numbersArray)];
console.log(numbersArray);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

// Exercise 19: Find the union of two arrays
let arr1: number[] = [1, 2, 3, 4]; // Step 1: Create an array arr1 with values [1, 2, 3, 4].
let arr2: number[] = [3, 4, 5]; // Step 2: Create another array arr2 with values [3, 4, 5].
let union: number[] = arr1.concat(arr2); // Step 3: Combine both arrays into one.
union.splice(2, 3); // Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
console.log(union); // Step 6: Log the result which should be [1, 2, 3, 4, 5].
