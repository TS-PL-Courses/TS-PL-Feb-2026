// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"

let colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

for (const color of colors) {
  if (color.length > 4) {
    console.log(`These words are longer than 4 letters: ${color}.`);
  }
}

//-------------------------------------------------------------------------------//

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let i = 1; i < 100; i++) {
  console.log(i);
}

//-------------------------------------------------------------------------------//

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

for (let i = 1; i <= 5; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '* ';
  }

  console.log(row);
}

for (let i = 4; i >= 1; i--) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '* ';
  }

  console.log(row);
}

//-------------------------------------------------------------------------------//

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

let phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

let replaceZeroWithCode = phoneNumbers.map((num) => num.replace('0', '+359'));

for (let i = 0; i < replaceZeroWithCode.length; i++) {
  let newNumber = i + 1;
  let changedNumbers = replaceZeroWithCode[i];
  let finalNumbers: string = `Num ${newNumber} changed to ${changedNumbers}.`;
  console.log(finalNumbers);
}

//-------------------------------------------------------------------------------//

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

interface User {
  name: string;
  hour: number;
  money: number;
  isSick: boolean;
}

const user: User = {
  name: 'Augustos',
  hour: 13,
  money: 19,
  isSick: false,
};

if (user.isSick) {
  console.log(`User ${user.name} should stay home and go to bed.`);
} else if (user.money > 20 && user.hour >= 21 && user.hour <= 24) {
  console.log(`User ${user.name} should watch a movie.`);
} else if (user.money >= 20) {
  console.log(`User ${user.name} can go to the cinema.`);
} else {
  console.log(`User ${user.name} can go to the park.`);
}

//-------------------------------------------------------------------------------//

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

enum Account {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

interface Client {
  name: string;
  accountType: Account;
}

const clientOne: Client = { name: 'John Doe', accountType: Account.Deposit };
const clientTwo: Client = { name: 'French Montana', accountType: Account.FlexSave };
const clientThree: Client = { name: 'Shinmen Takezo', accountType: Account.Current };

const clients: Client[] = [clientOne, clientTwo, clientThree];

for (const client of clients) {
  console.log(
    'Client name is: ' + client.name + ', and the account type is: ' + Account[client.accountType],
  );
}

//-------------------------------------------------------------------------------//

// Functions

// Exercise 7:
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

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 1234);

//-------------------------------------------------------------------------------//

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

//-------------------------------------------------------------------------------//

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:
// Step 3: Call the function with and without a Middle Name to verify it works correctly

function personNames(firstName: string, lastName: string, middleName?: string): string {
  return `Person name is: ${firstName} ${lastName}${middleName ? ` ${middleName}` : ''}.`;
}

console.log(personNames('Evstatii', 'Omarov'));

/**
 * Creates a formatted string containing a person's full name.
 * @param {string} firstName - The person's first name
 * @param {string} lastName - The person's last name
 * @param {string} [middleName] - The person's middle name (optional)
 * @returns {string} The formatted person name
 */

/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} The product of a and b
 */

//function multiply(a: number, b: number): number {
//     return a * b;
// }

//-------------------------------------------------------------------------------//

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/** 
 * concatStrings
 * @param fName - person first name.
 * @param lName - person last name.
 * @param age - person age.
 * @returns A warning message if arguments are missing, otherwise a formatted string with full name and age.
 */

const concatStrings = (fName?: string, lName?: string, age?: number) => {
  if (fName === undefined || lName === undefined || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age.';
  }

  return `The person ${fName} ${lName} is ${age} years old.`;
};

//-------------------------------------------------------------------------------//

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Favourite Programming language
 * @param programmingLanguage - favourite programming language
 * @param compliment - compliment for the language it self
 * @returns - whole sentence with favourite programming language and a compliment
 */

function favourites(programmingLanguage: string, compliment: string): void {
  console.log(`I love ${programmingLanguage} because it is ${compliment}`);
}

favourites('Typescript', 'colorful');
favourites('Python', 'easier');

//-------------------------------------------------------------------------------//

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8
function calculateUpperLowerLetters(theWord: string): string {

  let lowerLetters: number = 0; 
  let upperLetters: number = 0;

  for (const word of theWord) {

    if (word === word.toLowerCase() && word !== word.toUpperCase()) {
      lowerLetters++;
    } 
    
    else if (word === word.toUpperCase() && word !== word.toLowerCase()) {
      upperLetters++;
    }

  }

  return `Number of uppercase characters: ${upperLetters} and Number of lowercase characters: ${lowerLetters}`;
}

console.log(calculateUpperLowerLetters('Hello World'));
//-------------------------------------------------------------------------------//

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
