// Homework 03 - Collections and Loops

//npx ts-node homework/katerina-karaboeva/typescript-homeworks/katerina-ts-homework-03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

console.log('\nExercise 1');
//Solution:

const colours: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white'];

for (let i: number = 0; i < colours.length; i++) {
  if (colours[i].length > 4) console.log(colours[i]);
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

console.log('\nExercise 2');
//Solution:

for (let i: number = 1; i <= 100; i++) {
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

console.log('\nExercise 3');
//Solution:

//let stars: string = '';
//for (let i = 1; i <= 3; i++) {
//console.log(stars);
//for (let b = 0; b <= i; b++) {
// stars += '*';
// }
//}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('\nExercise 4');
//Solution:

const phoneNumber: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneNumber.length; i++) {
  if (phoneNumber[i].startsWith('0')) {
    console.log(phoneNumber[i], '->', '+359' + phoneNumber[i].slice(1));
  }
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
//Solution:

const name: string = 'Marina';
const hour: number = 17;
const money: number = 20;
const isNotSick: boolean = true;

if (!isNotSick) {
  console.log(`${name} is sick, then she will stay at home and go to bed`);
} else if (money >= 20) {
  if (hour >= 21 && hour <= 24) {
    console.log(
      `${name} is not sick, she has ${money} money, but the hour is too late -> ${hour}, then she will watch a movie`,
    );
  } else {
    console.log(
      `${name} is not sick, she has ${money} money, the hour is early -> ${hour}, then she will go to the cinema`,
    );
  }
} else {
  console.log(`${name} is not sick, but she has only ${money} money, then she will go to the park`);
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
//Solution:

enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

const client1 = {
  name: 'Sansa',
  accountType: AccountType.Current,
};

const client2 = {
  name: 'Arya',
  accountType: AccountType.FlexSave,
};

const client3 = {
  name: 'Deneris',
  accountType: AccountType.Deposit,
};

const clientData = [client1, client2, client3];
for (let i = 0; i < clientData.length; i++)
  console.log(`${clientData[i].name} has account type ${AccountType[clientData[i].accountType]}`);

// Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

console.log('\nExercise 7');
//Solution:

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

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523); //swapped 2523 with 'Petko' as it needs to follow the order defined in add_item_in_form function

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

console.log('\nExercise 8');
//Solution:

function sum_2_numbers(number_1: number, number_2: number) {
  const result = number_1 + number_2;
  return result; //added return
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
//Solution:

/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} [middleName]
 */

function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}

printFullName('Deneris', 'Targerian', 'Targerian'); // Call with middle name

printFullName('Sansa', 'Stark'); // Call without middle name

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('\nExercise 10');
//Solution:

/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @returns {string}
 */
function getPersonInfo(firstName?: string, lastName?: string, age?: number): string {
  if (!firstName || !lastName || age === undefined) {
    return `Missing one or all arguments - first name, last name, or age`;
  }

  return `${firstName} ${lastName} is ${age} years old`;
}

console.log(getPersonInfo('Jamy', 'Lanister', 30)); // with all

console.log(getPersonInfo('Mircela', 'Lanister')); // missing age

console.log(getPersonInfo('Tirion')); // missing last name

console.log(getPersonInfo()); // without anything

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('\nExercise 11');
//Solution:

/**
 * @param {string} language
 * @param {string} compliment
 */
function programmingLanguageMessage(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment}`);
}

programmingLanguageMessage('TypeScript', 'it makes code safer and easier to maintain');
programmingLanguageMessage('JavaScript', 'it is flexible and widely used');
programmingLanguageMessage('Java', 'i simply love it');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('\nExercise 12');
//Solution:

function countLetters(text: string): void {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++;
    }
  }

  console.log(`Number of uppercase characters: ${upperCaseCount}`);
  console.log(`Number of lowercase characters: ${lowerCaseCount}`);
}

countLetters('Hello World');

// Exercise 7 Hints:
// The order of the arguments in the "add_item_in_form" function call or the order of the parameters in the function should be fixed

// Exercise 8 Hints:
// 1. Missing closing bracket in the console log statement
// 2. A return statement is missing inside the function

// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts}
