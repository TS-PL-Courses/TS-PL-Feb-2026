// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

console.log('\nExercise 1');

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
for (let i = 0; i < colors.length; i++) {
  const item = colors[i];

  if (item.length > 4) {
    console.log(item);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

console.log('\nExercise 2');

let result: string = '';
for (let index = 1; index <= 100; index++) {
  result = result + index + ' ';
}
console.log(result);

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

console.log('\nExercise 3');

let count: number = 0;

for (let index = 1; index <= 9; index++) {
  if (index <= 5) count++;
  else count--;
  let line: string = '';
  for (let j = 0; j < count; j++) {
    line = line + '* ';
  }
  console.log(line);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('\nExercise 4');

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

let addCode = function (phone: string): string {
  return '+359' + phone.substring(1);
};

for (let i = 0; i < phoneNumbers.length; i++) {
  const element = phoneNumbers[i];

  const newNumber = addCode(element);
  console.log(`Original number is: ${element}\t-> New number is: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

console.log('\nExercise 5');

const name: string = 'John';
const hour: number = 5;
const money: number = 25.5;
const sick: boolean = false;

if (sick === false) {
  if (money >= 20) {
    if (21 <= hour && hour <= 24) {
      console.log(`${name} has ${money} and can watch a movie.`);
    } else {
      console.log(`${name} has ${money} and can go to the cinema.`);
    }
  } else {
    console.log(`${name} has ${money} and can go to the park.`);
  }
} else {
  console.log(`${name} is sick and must stay at home, and go to bed.`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

console.log('\nExercise 6');

enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type ClientData = {
  name: string;
  accountType: AccountType;
};

const client1: ClientData = {
  name: 'John Doe',
  accountType: AccountType.Current,
};

const client2: ClientData = {
  name: 'Jane Doe',
  accountType: AccountType.FlexSave,
};

const client3: ClientData = {
  name: 'Max Musterman',
  accountType: AccountType.Deposit,
};

const clients: ClientData[] = [client1, client2, client3];

for (let index = 0; index < clients.length; index++) {
  const client = clients[index];

  console.log(`Client name is: ${client.name}. Account type is: ${client.accountType}`);
}

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

console.log('\nExercise 7');

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
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

console.log('\nExercise 8');

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

console.log('\nExercise 9');

/**
 * Print names
 * @param {string} firstName - the first name
 * @param {string} lastName - the last name
 * @param {string} middleName - the middle name
 * @returns {void}
 **/

function printNames(firstName: string, lastName: string, middleName?: string): void {
  if (middleName === undefined) {
    console.log(`${firstName} ${lastName}`);
  } else {
    console.log(`${firstName} ${middleName} ${lastName}`);
  }
}

printNames('Joana', 'Daneva', 'Hristova');
printNames('Joana', 'Daneva');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('\nExercise 10');

/**
 * Return concatenated strings of first name, last name, and age
 * @param {string} firstName - the first name
 * @param {string} lastName - the last name
 * @param {number} age - age number
 * @returns {string}
 **/

function userData(firstName?: string, lastName?: string, age?: number): string {
  if (firstName === undefined || lastName === undefined || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  return `${firstName}', ${lastName}', Age: ${age}' `;
}

console.log(userData('Joana-Beatris', 'Daneva', 35));
console.log(userData('Joana-Beatris', 'Daneva'));
console.log(userData());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('\nExercise 11');

/**
 * Prints a comlimenting sentence about programming languages
 * @param {string} language - the language
 * @param {string} compliment - the compliment
 * @returns {void}
 **/

function languageCompliment(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment} `);
}
languageCompliment('TypeScript', "it's AWESOME!");
languageCompliment('Java', "it's COOL!");
languageCompliment('C#', "it's AMAZING!");

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('\nExercise 12');

function countLetterCasing(text: string): [number, number] {
  let uppercase: number = 0;
  let lowercase: number = 0;

  for (let i = 0; i < text.length; i++) {
    const character = text[i];

    if ('a' <= character && character <= 'z') {
      lowercase++;
    } else if ('A' <= character && character <= 'Z') {
      uppercase++;
    }
  }
  return [uppercase, lowercase];
}

const text: string = 'Hello World';

const [uppercase, lowercase] = countLetterCasing(text);

console.log(`String is "${text}"`);

console.log(`Number of uppercase characters: ${uppercase}`);
console.log(`Number of lowercase characters: ${lowercase}`);

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
