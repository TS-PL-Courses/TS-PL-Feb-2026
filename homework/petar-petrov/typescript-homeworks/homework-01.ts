// Homework 01

// npx ts-node homework/petar-petrov/typescript-homeworks/homework-01.ts

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
let a: number = 5;
let b: number = 10;

// Step 2: Swap their values using a temporary variable.
let temp: number = a;
a = b;
b = a;

// Step 3: Log the original values and the final values.
console.log('Original values:', 'a =', temp, 'b =', b);
console.log('Final values:', 'a =', a, 'b =', temp);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
let myNumber: number = 8;

// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
let isEven: boolean = myNumber % 2 === 0;

// Step 3: Log the result
console.log(myNumber, 'is even:', isEven);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
let myNum: number = 7;

// Step 2: Declare a boolean variable and check if first variable is greater than 0.
let isPositive: boolean = myNum > 0;

// Step 3: Log the result
console.log(myNum, 'is positive:', isPositive);

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
let price: number = 19.99;

// Step 2: Create another variable called quantity with the value 3.
let quantity: number = 3;

// Step 3: Calculate the total cost by multiplying price and quantity.
let totalCost: number = price * quantity;

// Step 4: Log the total cost.
console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
let celsius: number = 25;

// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
let fahrenheit: number = (celsius * 9) / 5 + 32;

// Step 4: Log the temperature in Fahrenheit.
console.log(celsius, '°C is', fahrenheit, '°F');

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean = true;

// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
let hasTicket: boolean = true;

// Step 2: Create a boolean variable isAdult with value false.
let isAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both variables are true.
let canEnter: boolean = hasTicket && isAdult;

// Step 4: Log the result of canEnter.
console.log('Can enter:', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
let myString: string = 'TypeScript';

// Step 2: Declare a boolean variable and check if first variable is an empty string.
let isEmpty: boolean = myString === '';

// Step 3: Log the result
console.log('Is empty:', isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
let myWord: string = 'Apple';

// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
let startsWithA: boolean = myWord.startsWith('A');

// Step 3: Log the result
console.log(myWord, "starts with 'A':", startsWithA);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
let message: string = 'TypeScript is fun';

// Step 2: Log the length of the string.
console.log('Length:', message.length);

// Step 3: Log the string in uppercase.
console.log('Uppercase:', message.toUpperCase());

// Step 4: Log the string in lowercase.
console.log('Lowercase:', message.toLowerCase());

// Step 5: Create a variable called favoriteLanguage.
let favoriteLanguage: string = 'TypeScript';

// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
let bigNum1: bigint = 1000000000000n;
let bigNum2: bigint = 2000000000000n;

// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.
let bigSum: bigint = bigNum1 + bigNum2;
console.log('BigInt sum:', bigSum);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
let numbers: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the total product.
let totalProduct: number = 1;

// Step 3: Use a loop to multiply all numbers in the array.
for (let i = 0; i < numbers.length; i++) {
  totalProduct = totalProduct * numbers[i];
}

// Step 4: Log the final product.
console.log('Total product:', totalProduct);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
let students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.
function printId(id: string | number) {
  console.log('ID:', id);
}

printId(101);
printId('ABC123');

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
let qaName: string = 'Petar';
let numberOfFunctionalities: number = 5;
let hoursPerFunctionality: number = 2;

// Step 2: Calculate the total time needed to test all functionalities.
let totalTime: number = numberOfFunctionalities * hoursPerFunctionality;

// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = {
  id: number | string;
  name: string;
};

// Step 4: Create one user object with a numeric id.
let user1: User = { id: 1, name: 'Petar' };

// Step 5: Create another user object with a string id.
let user2: User = { id: 'ABC', name: 'Iva' };

console.log(user1);
console.log(user2);

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
