// Homework 03
// npx ts-node homework/boris-popov/homework-03-boris-popov.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
console.log(
  "-----Exercise 1: Loop over an array and log items only if the item's length is over 4 characters-----",
);
let colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log(
  '-----Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop-----',
);
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
console.log(
  '-----Exercise 3: Write a script to construct the following pattern using a nested for loop-----',
);
const totalRows = 5;
for (let i = 1; i <= totalRows; i++) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

for (let i = totalRows - 1; i >= 1; i--) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

// Exercise 4: Phone number area code substitution
console.log('-----Exercise 4: Phone number area code substitution-----');
let phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
for (let i = 0; i < phoneNumbers.length; i++) {
  const originalNumber = phoneNumbers[i];
  let newNumber = originalNumber;

  if (originalNumber[0] === '0') {
    newNumber = '+359' + originalNumber.substring(1);
  }

  console.log(`Original: ${originalNumber}, New: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
console.log('-----Exercise 5: Decide on an evening activity-----');
let name: string = 'John';
let hour: number = 20;
let money: number = 25.5;
let isSick: boolean = false;
let activity: string;

if (isSick) {
  activity = 'stay at home and go to bed';
} else {
  if (money > 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }
}
console.log(
  `Name: ${name}, Hour: ${hour}, Money: ${money}, Is Sick: ${isSick}, Activity: ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays
console.log('-----Exercise 6: Use an Enum, Object type, and Arrays-----');
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}
type Client = {
  name: string;
  accountType: AccountType;
};
const client1: Client = {
  name: 'John Doe',
  accountType: AccountType.Current,
};
const client2: Client = {
  name: 'Jane Smith',
  accountType: AccountType.FlexSave,
};
const client3: Client = {
  name: 'Bob Johnson',
  accountType: AccountType.Deposit,
};
const clients: Client[] = [client1, client2, client3];
for (let i = 0; i < clients.length; i++) {
  console.log(`Name: ${clients[i].name}, Account Type: ${AccountType[clients[i].accountType]}`);
}

// Part 2: Functions

// Exercise 7:
console.log('-----Exercise 7-----');
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
