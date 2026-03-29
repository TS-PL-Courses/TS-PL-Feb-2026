// npx ts-node homework/teodor-mtodorovv/homework-3/homework-03.ts
// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
console.log('\nExercise 1');
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
const arrColors: string[] = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'white',
  'black',
];
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
for (let i = 0; i < arrColors.length; i++) {
  const colors = arrColors[i];
  if (colors.length > 4) {
    console.log(colors);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log('\nExercise 2');
for (let i = 1; i <= 100; i++) {
  console.log(i);
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
console.log('\nExercise 4');
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console
for (let i = 0; i < phoneNumbers.length; i++) {
  const original = phoneNumbers[i];
  const newNumbers = '+359' + original.slice(1);
  console.log(`Original phone numbers: ${original} | New numbers: ${newNumbers}`);
}

// Exercise 5: Decide on an evening activity
console.log('\nExercise 5');
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
let name: string = 'John';
let hour: number = 23;
let money: number = 25.1;
let isSick: boolean = false;

// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
let activity: string;

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (!isSick && money >= 20 && hour < 21) {
  activity = 'go to the cinema';
} else if (!isSick && money < 20) {
  activity = `go to the park`;
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = `watch a movie`;
} else {
  activity = 'stay at home and go to bed';
}

console.log(
  `Person details: \nname: ${name}\nmoney: $${money}\nhour: ${hour}\nis he sick?: ${isSick}\nActivity: ${activity} `,
);

// Exercise 6: Use an Enum, Object type, and Arrays
console.log('\nExercise 6');
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
enum AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }

type Clients = {
  name: string;
  accountType: AccountTypes;
};

const firstClient = {
  name: 'Ivan Petrov',
  accountType: AccountTypes.Current,
};

const secondClient = {
  name: 'Ivanka Ivanova',
  accountType: AccountTypes.FlexSave,
};

const thirdClient = {
  name: 'Peter Dimitrov',
  accountType: AccountTypes.Deposit,
};

// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
const arrClients: Clients[] = [firstClient, secondClient, thirdClient];

for (let i = 0; i < arrClients.length; i++) {
  const clients = arrClients[i];
  console.log(
    `Client name: ${clients.name}` +
      ` , ` +
      `Account type: ${clients.accountType} (${AccountTypes[clients.accountType]})`,
  );
}

// Functions

// Exercise 7:
console.log('\nExercise 7');
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

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
console.log('\nExercise 8');
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

// Exercise 9:
console.log('\nExercise 9');
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
console.log('\nExercise 10');
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

// Exercise 11:
console.log('\nExercise 11');
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

// Exercise 12:
console.log('\nExercise 12');
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
