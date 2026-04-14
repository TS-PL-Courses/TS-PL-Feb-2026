// Homework 03

//npx ts-node homework/georgi-payanev/typescript-homework/homework-03.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

console.log('\nExercise 1:');

const colorsArray: string[] = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'white',
  'black',
];

for (const color of colorsArray) {
  if (color.length > 4) {
    console.log(color);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

console.log('\nExercise 2:');

for (let index = 1; index <= 100; index++) {
  console.log(index);
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

console.log('\nExercise 3:');

let star: number = 0;

for (let index = 1; index <= 9; index++) {
  if (index <= 5) star++;
  else star--;
  let base: string = '';
  for (let j = 0; j < star; j++) {
    base += '* ';
  }
  console.log(base);
}
// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('\nExercise 4:');

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
let newNumbers: string[] = [];

for (const oldNumber of phoneNumbers) {
  let newNumber = oldNumber.replace('0', '+359');
  newNumbers.push(newNumber);
}

console.log(phoneNumbers);
console.log(newNumbers);

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

console.log('\nExercise 5:');

const name: string = 'Pesho';
const hour: number = 23;
const money: number = 200;
let isSick: boolean = false;

if (isSick === false) {
  if (money >= 20) {
    if (hour >= 21 && hour <= 24) {
      console.log(
        `${name}, has ${money} money and is not sick. The hour is ${hour} so he will watch a movie.`,
      );
    } else {
      console.log(
        `${name}, has ${money} money and is not sick. The hour is ${hour} so he will go to the cinema.`,
      );
    }
  } else {
    console.log(
      `${name}, has ${money} money and is not sick. The hours is ${hour} so he will go to the park.`,
    );
  }
} else {
  console.log(`${name} is sick, so ho will stay at home and go to bed.}`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

console.log('\nExercise 6:');

enum AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type ClientData = {
  name: string;
  accountType: AccountTypes;
};

const firstClient: ClientData = {
  name: 'Ivan ivanov',
  accountType: AccountTypes.Current,
};

const secondClient: ClientData = {
  name: 'Pesho Peshev',
  accountType: AccountTypes.FlexSave,
};

const thirdClient: ClientData = {
  name: 'Dragni Dragnev',
  accountType: AccountTypes.Deposit,
};

const arrayOfClients: ClientData[] = [firstClient, secondClient, thirdClient];

for (const client in arrayOfClients) {
  console.log(
    `The client ${arrayOfClients[client].name} has an account ot type: ${arrayOfClients[client].accountType}.`,
  );
}

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

console.log('\nExercise 7:');

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

console.log('\nExercise 8:');

function sum_2_numbers(number_1: number, number_2: number) {
  const result = number_1 + number_2;
  return result;
}
console.log(sum_2_numbers(2, 8));

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

console.log('\nExercise 9:');

/**
 * Print user names
 * @param {string} firstName - the first name of the user
 * @param {string} middleName - the second name of the user
 * @param {string} lastName - the last name of the user
 * @returns {void}
 */

function printUserNames(firstName: string, lastName: string, middleName?: string): void {
  if (middleName === undefined) {
    console.log(`${firstName} ${lastName}`);
  } else {
    console.log(`${firstName} ${middleName} ${lastName}`);
  }
}

printUserNames('Georgi', 'Payanev');
printUserNames('Georgi', 'Payanev', 'Todorov');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('\nExercise 10:');

/**
 * Concatenate strings
 * @param {string} firstName - user's first name
 * @param {string} lastName - user's last name
 * @param {number} age - user's age
 * @returns {string} The concatenation of first name, last name and age
 */

function printUserDetails(firstName?: string, lastName?: string, age?: number): string {
  if (firstName === undefined || lastName === undefined || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age.';
  }
  return `${firstName} ${lastName}, ${age} years old.`;
}

console.log(printUserDetails('Georgi', 'Payanev', 31));
console.log(printUserDetails('Georgi', 'Payanev'));
console.log(printUserDetails('Georgi'));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('\nExercise 11:');

/**
 * Printing a compliment console message
 * @param {string} programmingLanguage - a programming language
 * @param {string} compliment - a compliment
 * @returns {void}
 */

function printMessage(programmingLanguage: string, compliment: string): void {
  console.log(`I love ${programmingLanguage} because ${compliment}.`);
}

printMessage('Java', 'it is nice');
printMessage('Python', 'it is easy');
printMessage('Typescript', 'it is perfect');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('\nExercise 12:');

function numberOfUpperAndLowerCases(text: string) {
  let uppercaseNumber = 0;
  let lowercaseNumber = 0;

  for (let index = 0; index < text.length; index++) {
    const element = text[index];

    if (/[a-zA-Z]/.test(element)) {
      if (element === element.toUpperCase()) {
        uppercaseNumber++;
      } else {
        lowercaseNumber++;
      }
    }
  }
  console.log(`Number of uppercase characters: ${uppercaseNumber}.`);
  console.log(`Number of lowercase characters: ${lowercaseNumber}.`);
}

numberOfUpperAndLowerCases('This is Me.');
// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts
