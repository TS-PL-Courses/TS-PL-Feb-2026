// Homework 03 - Collections and Loops
// npx ts-node homework/galina-boujeva/homework-03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

let i: number = 1;
while (i <= 100) {
  console.log('The number is ' + i);
  i++;
}

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

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNum: string[] = ['0376829209', '04239982009', '0536829299'];
for (let i = 0; i < phoneNum.length; i++) {
  const original = phoneNum[i];
  const updated = phoneNum[i].replace('0', '+359');
  console.log(`Original: ${original} → New: ${updated}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

let name: string = 'Anna';
let hour: number = 8;
let money: number = 31.75;
let isSick: boolean = false;

let activity: string;

if (!isSick && money >= 20) {
  activity = 'go to the cinema';
} else if (!isSick && money < 20) {
  activity = 'go to the park';
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (isSick) {
  activity = 'stay at home and go to bed';
}

console.log(`Name: ${name}`);
console.log(`Hour: ${hour}`);
console.log(`Money: ${money}`);
console.log(`Sick: ${isSick}`);
console.log(`Activity: ${activity}`);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

enum AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type Client = {
  name: string;
  accountType: AccountTypes;
};

const client1: Client = {
  name: 'John Doe',
  accountType: AccountTypes.Current,
};

const client2: Client = {
  name: 'Jane Smith',
  accountType: AccountTypes.FlexSave,
};

const client3: Client = {
  name: 'Diana Borisova',
  accountType: AccountTypes.Deposit,
};

const clients = [client1, client2, client3];
for (let i = 0; i < clients.length; i++) {
  console.log(`Name: ${clients[i].name}, Account Type: ${AccountTypes[clients[i].accountType]}`);
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

function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
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

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

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
