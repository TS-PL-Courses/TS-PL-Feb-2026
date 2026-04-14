// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
console.log('\n Exercise 1');

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
let result: string[] = [];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    result.push(colors[i]);
  }
}
console.log(`Colors with more than 4 characters: ${result.join(' , ')}`);

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log('\n Exercise 2');

let numbers: string = '';
for (let i = 1; i <= 100; i++) {
  numbers += i + ' ';
}

console.log(`The numbers from 1 to 100 are: ${numbers}`);
console.log('\n Exercise 3');

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let symbol: string = '';

for (let i = 1; i <= 5; i++) {
  for (let y = 1; y <= i; y++) {
    symbol += '* ';
  }
  symbol += '\n';
}

for (let i = 4; i >= 1; i--) {
  for (let y = 1; y <= i; y++) {
    symbol += '* ';
  }
  symbol += '\n';
}

console.log(symbol);

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console
console.log('\n Exercise 4');

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
let result1: string = '';
for (let i = 0; i < phoneNumbers.length; i++) {
  const originalPhoneNumbers = phoneNumbers[i];
  const newPhoneNumbers = originalPhoneNumbers.replace(/^0/, '+359');
  console.log(
    `The Original phone number is: ${originalPhoneNumbers}. The new phone number is: ${newPhoneNumbers}`,
  );
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
console.log('\n Exercise 5');

const name: string = 'Nikoleta';
const hour: number = 22;
const money: number = 22;
const isSick: boolean = true;
let activity: string;

if (isSick) {
  activity = 'Will stay at home and go to bed.';
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'Will watch a movie.';
} else if (!isSick && money >= 20) {
  activity = 'Will go to the cinema.';
} else if (!isSick && money < 20) {
  activity = 'Will Go to the park.';
}

console.log(
  `The person ${name} has ${money} euro and is sick: ${isSick} and the hour is ${hour}. ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
console.log('\n Exercise 6');

enum accountTypes {
  'Current' = 1,
  'FlexSave' = 4,
  'Deposit' = 2,
}

type clientData = { name: string; cardType: accountTypes };

const user1: clientData = {
  name: 'Philip',
  cardType: accountTypes.Current,
};

const user2: clientData = {
  name: 'Nikoleta',
  cardType: accountTypes.Deposit,
};

const user3: clientData = {
  name: 'Ivan',
  cardType: accountTypes.FlexSave,
};

let text: string = '';
const users: clientData[] = [user1, user2, user3];
for (let i = 0; i < users.length; i++) {
  console.log(`Name: ${users[i].name}, Account Type: ${accountTypes[users[i].cardType]}`);
}

console.log(text);

// Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

console.log('\n Exercise 7');

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, driver_name, car_number);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

console.log('\n Exercise 8');

function sum_2_numbers(number_1: number, number_2: number) {
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

console.log('\n Exercise 9');
/**
 * Print person's name
 * @param {string} firstName - the first name to be printed
 * @param {string} lastName - the last name to be printed
 * @param {string} [middleName] - the middle name to be printed (Optional)
 * @returns {string} The first, last and middle name
 */

function person(firstName: string, lastName: string, middleName?: string): string {
  return [firstName, middleName, lastName].filter(Boolean).join(' ');
}

console.log(person('Ivan', 'Ivanov', 'Georgiev'));

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Conguments - first name, last name, or age"sole log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('\n Exercise 10');
/**
 * Return concatenated strings
 * @param {string} firstName - [firstName = 'Nikoleta] - optional
 * @param {string} lastName [lastName = 'Nedelkova']- optional
 * @param {number} age [age=37] - optional
 * @returns {string} Concatenated strings: first name, last name, and age
 */

function concatenatedStrings(
  firstName: string = 'Nikoleta',
  lastName: string = 'Nedelkova',
  age: number = 37,
) {
  let missingArguments = false;
  if (arguments.length < 3) missingArguments = true;
  if (missingArguments) {
    console.log('Missing one or all arguments - first name, last name, or age');
  }
  return `${firstName}, ${lastName}, ${age}`;
}

console.log(concatenatedStrings());
console.log(concatenatedStrings('Ivan'));
console.log(concatenatedStrings('Ivan', 'Ivanov', 32));
console.log(concatenatedStrings('Ivanov'));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('\n Exercise 11');

/**
 * Prints a message about the programming language
 * @param {string} programmingLanguage - Programming language you like
 * @param {string} compliment - A compliment about the programming language
 * @returns {string} Message about the programming language
 */

function programming(programmingLanguage: string, compliment: string) {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}
programming('Typescript', "it's nice.");
programming('Java', "it's readable.");

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('\n Exercise 12');

function caseCalculator(text: string): string {
  let lowerCases: number = 0;
  let upperCases: number = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toLowerCase() && text[i] !== text[i].toUpperCase()) {
      lowerCases++;
    } else if (text[i] === text[i].toUpperCase() && text[i] !== text[i].toLowerCase()) {
      upperCases++;
    }
  }
  return (
    `Number of the lowercae characters: ${lowerCases}` +
    '\n' +
    `Number of the uppercase characters: ${upperCases}`
  );
}
console.log(caseCalculator('HeLL0@! WorLd@'));
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
