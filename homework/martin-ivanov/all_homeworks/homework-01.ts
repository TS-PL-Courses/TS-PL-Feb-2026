// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.
let exercise1: string = 'Variable swapping';
console.log('Exercise 1:', exercise1);

let a: number = 20;
let b: number = 30;
console.log('Original values:');
console.log(' a=', a);
console.log('b =', b);
let c = a;
a = b;
b = c;
console.log('Swiped values:');
console.log('a =', a);
console.log('b =', b);
console.log('');

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.
let exercise2: string = 'Check if a number is even or odd';
console.log('Exercise 2:', exercise2);

let numberEven: number = 6;
let numberOdd: number = 13;
let even_number: boolean = numberEven % 2 === 0;
let odd_number: boolean = numberOdd % 2 === 0;
console.log('The number is even =', even_number);
console.log('The number is odd =', odd_number);
console.log('');

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.
let exercise3: string = 'Verify if a number is positive';
console.log('Exercise 3:', exercise3);

let greater_number: number = 12;
let less_number: number = -6;
let greater_check: boolean = greater_number > 0;
let less_check: boolean = less_number < 0;
console.log('This is greater than 0 =', greater_number);
console.log('This is less than 0 =', less_number);
console.log('');

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.
let exercise4: string = 'Total cost calculation';
console.log('Exercise 4:', exercise4);

let price: number = 19.99;
let quantity: number = 3;
let total: number = price * quantity;
console.log('Total Calculation =', total);
console.log('');

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.
let exercise5: string = 'Celsius to Fahrenheit converter';
console.log('Exercise 5:', exercise5);

let celsius_num: number = 17;
let Fahrenheit: number = (celsius_num * 9) / 5 + 32;
console.log('Fahrenheit temperature =', Fahrenheit);
console.log('');

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".
let exercise6: string = 'Login check';
console.log('Exercise6 :', exercise6);

let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}
console.log('');

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.
let exercise7: string = 'Entry permission';
console.log('Exercise7 :', exercise7);

let hasTicket: boolean = true;
let isAdult: boolean = true;
let canEnter: boolean = hasTicket && isAdult;
console.log('canEnter:', canEnter);
console.log('');

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.
let exercise8: string = 'Check if a string is empty (an empty string is "")';
console.log('Exercise8 :', exercise8);

let check_string: string = '';
let isEmpty: boolean = check_string === '';
console.log('The string is empty:', isEmpty);

// let length = check_string.length === 0;
// if (length === true) {
//   console.log('the string is empty =');
// } else {
//   console.log('the string is not empty =', check_string);
// }
console.log('');

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.
let exercise9: string = 'Determine if a string starts with the letter A';
console.log('Exercise9 :', exercise9);

let letter_string: string = 'Animal';
let letter_first = letter_string[0];
let check_letter: boolean = letter_first === 'A';
console.log('The first letter in the string is A:', check_letter);

console.log('');

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
let exercise10: string = 'String operations';
console.log('Exercise10 :', exercise10);

let message: string = 'TypeScript is fun';
let length_string: number = message.length;
console.log('Log the length of the string ->', length_string);

let uppercase_string: string = message.toUpperCase();
//console.log("Uppercase:", message.toUpperCase());
console.log('Log the string in uppercase ->', uppercase_string);

let lowercase_string: string = message.toLowerCase();
console.log('Log the string in lowercase ->', lowercase_string);

let favoriteLanguage: string = 'TypeScript';
console.log('My favorite programming language is', favoriteLanguage);

console.log('');

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.
let exercise11: string = 'BigInt addition';
console.log('Exercise11:', exercise11);

console.log('');

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.
let exercise12: string = 'Product of an array';
console.log('Exercise12 :', exercise12);
let number_array: number[] = [10, 20, 30, 40];
//let total_product: number = '';

console.log('');

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
let exercise13: string = 'Array of student objects';
console.log('Exercise13 :', exercise13);
let students: string[] = ['Alice', 'Bob', 'Genadi', 'Pesho', 'Viktor', 'Valeri'];

console.log('');

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.
let exercise14: string = 'Function with a union type';
console.log('Exercise14 :', exercise14);

console.log('');

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
let exercise15: string =
  'Calculate the amount of time a QA engineer needs to test a number of functionalities';
console.log('Exercise15 :', exercise15);

console.log('');

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
let exercise16: string = 'Union in objects';
console.log('Exercise16 :', exercise16);

console.log('');

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
let exercise17: string = 'Remove duplicate numbers from an array';
console.log('Exercise17 :', exercise17);

console.log('');

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].
let exercise18: string = 'Find the difference between two arrays';
console.log('Exercise18 :', exercise18);

console.log('');

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
let exercise19: string = 'Find the union of two arrays';
console.log('Exercise19 :', exercise19);

console.log('');
