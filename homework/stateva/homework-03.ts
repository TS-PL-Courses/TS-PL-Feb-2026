// Homework 03 - Collections and Loops

// npx ts-node homework-03-stateva.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met#

console.log('=============== Exercise 1:===============');

let colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log('=============== Exercise 2:===============');

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
console.log('=============== Exercise 3:===============');
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 1; i <= 5; i++) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

for (let i = 4; i >= 1; i--) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('=============== Exercise 4:===============');

let phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneNumbers.length; i++) {
  let originalNumber: string = phoneNumbers[i];
  let newNumber: string = originalNumber.replace('0', '+359');
  console.log(`Original: ${originalNumber}, New: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

console.log('=============== Exercise 5:===============');

let name: string = 'Gergana';
let hour: number = 22;
let money: number = 25.5;
let isSick: boolean = true;

if (!isSick && money >= 20 && (hour < 21 || hour > 24)) {
  console.log(
    `${name} has ${money} money and it's ${hour} o'clock, so the activity is: go to the cinema.`,
  );
}
if (!isSick && money < 20) {
  console.log(
    `${name} has ${money} money and it's ${hour} o'clock, so the activity is: go to the park.`,
  );
}
if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  console.log(
    `${name} has ${money} money and it's ${hour} o'clock, so the activity is: watch a movie.`,
  );
}
if (isSick) {
  console.log(`${name} is sick, so the activity is: stay at home and go to bed.`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

console.log('=============== Exercise 6:===============');

enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

interface Client {
  name: string;
  accountType: AccountType;
}

const clients: Client[] = [
  { name: 'Ivan Petrov', accountType: AccountType.Current },
  { name: 'Mira Petkova', accountType: AccountType.FlexSave },
  { name: 'Jujo Baba', accountType: AccountType.Deposit },
];

for (let i = 0; i < clients.length; i++) {
  console.log(
    `Client Name: ${clients[i].name}, Account Type: ${AccountType[clients[i].accountType]}`,
  );
}

// Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works
// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

// function add_item_in_form(
//   table_row: number,
//   complain: string,
//   client_name: string,
//   driver_name: string,
//   car_number: number,
// ) {
//   console.log('Printing the row');
//   console.log(table_row, complain, client_name, car_number, driver_name);
// }

console.log('=============== Exercise 7:===============');

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  car_number: number,
  driver_name: string,
) {
  console.log('Printing the row');
  console.log(
    `In row ${table_row}, client ${client_name} complained that driver ${driver_name} from car ${car_number} ${complain.toLowerCase()}.`,
  );
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 2523, 'Petko');

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

console.log('=============== Exercise 8:===============');

function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} The product of a and b
 */

// function multiply(a: number, b: number): number {
//     return a * b;
// }

// Step 3: Call the function with and without a Middle Name to verify it works correctly

console.log('=============== Exercise 9:===============');

/**
 * Prints a person's first, middle and last name
 * @param {string} firstName - the person's first name
 * @param {string} middleName - the person's middle name (optional)
 * @param {string} lastName - the person's last name
 */

function print_name(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    console.log(firstName, middleName, lastName);
  } else {
    console.log(firstName, lastName);
  }
}

print_name('Ivan', 'Ivanov', 'Georgiev');
print_name('Maria', 'Atanasova');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('=============== Exercise 10:===============');

/**
 * Returns first name, last name, and age
 * @param firstName - first name
 * @param lastName - last name
 * @param age - age
 * @returns string
 */
function person_info(firstName: string = 'Unknown', lastName: string = 'Unknown', age: number = 0) {
  if (firstName === 'Unknown' || lastName === 'Unknown' || age === 0) {
    return 'Missing one or all arguments - first name, last name, or age';
  }

  return firstName + ' ' + lastName + ' ' + age;
}

console.log(person_info('Ivan', 'Petrov', 25));
console.log(person_info('Maria', 'Ivanova'));
console.log(person_info('Asparuh'));
console.log(person_info());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('=============== Exercise 11:===============');

/**
 * Prints why I love a programming language
 * @param programming_language - programming language
 * @param compliment - compliment
 */
function love_language(programming_language: string, compliment: string) {
  console.log(`I love ${programming_language} because ${compliment}`);
}

love_language('JavaScript', 'it is versatile');
love_language('TypeScript', 'it helps find errors');
love_language('Python', 'it is easy to learn');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('=============== Exercise 12:===============');

function count_letters(text: string) {
  let uppercase = 0;
  let lowercase = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z') {
      uppercase++;
    } else if (text[i] >= 'a' && text[i] <= 'z') {
      lowercase++;
    }
  }

  return { uppercase, lowercase };
}

const result = count_letters('Hello World');
console.log('Number of uppercase characters:', result.uppercase);
console.log('Number of lowercase characters:', result.lowercase);

// Exercise 7 Hints:
// The order of the arguments in the "add_item_in_form" function call or the order of the parameters in the function should be fixed

// Exercise 8 Hints:
// 1. Missing closing bracket in the console log statement
// 2. A return statement is missing inside the function

// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts
