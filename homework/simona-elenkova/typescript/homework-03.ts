// Homework 03

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const itemsArray: string[] = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'white',
  'black',
];
for (const item of itemsArray) {
  if (item.length > 4) {
    console.log(item);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let i = 0; i <= 100; i++) {
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

// Going up (1 to 5 stars)
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j <= i; j++) {
    line += '* ';
  }
  console.log(line);
}
// Going down (4 to 1 stars)
for (let i = 4; i > 0; i--) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += '* ';
  }
  console.log(line);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
const newPhones: string[] = [];
for (const number of phoneNumbers) {
  if (number.startsWith('0')) {
    const newNumber = number.replace('0', '+359');
    newPhones.push(newNumber);
  }
}
console.log(phoneNumbers, newPhones);

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

const name: string = 'Toshe';
const hour: number = 18;
const money: number = 19.9;
const isSick: boolean = false;

let activity: string = '';

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (!isSick && money >= 20) {
  activity = 'go to the cinema';
} else {
  activity = 'go to the park';
}

console.log(
  `Name: ${name}, Hour: ${hour}, Money: ${money}, Sick: ${isSick}, Activity: ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

enum accountTypes {
  'Current' = 1,
  'FlexSave' = 4,
  'Deposit' = 2,
}

const clients = [
  {
    name: 'Toshe',
    accountType: accountTypes.Current,
  },
  {
    name: 'Sashe',
    accountType: accountTypes.FlexSave,
  },
  {
    name: 'Mishe',
    accountType: accountTypes.Deposit,
  },
];

for (const client of clients) {
  console.log(client.name, client.accountType);
}

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function addItemInForm(
  table_row: number,
  complain: string,
  client_name: string,
  car_number: number,
  driver_name: string,
): void {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
}

addItemInForm(2556, 'Driver drank', 'Mitko', 2628, 'Ivan');

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function sum2Numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum2Numbers(2, 3));

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

/**
 * Print person's names
 * @param {string} firstName - person's first name
 * @param {string} lastName - person's middle name
 * @param {string} secondName - person's last name
 */
function printNames(firstName: string, lastName: string, secondName?: string): void {
  if (secondName) {
    console.log(firstName, secondName, lastName);
  } else {
    console.log(firstName, lastName);
  }
}

printNames('Unicorn', 'Extension', 'Rainbow');
printNames('Unicorn', 'Extension');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 *
 * @param {string} firstName - person's first name
 * @param {string} lastName - person's last name
 * @param {number} age - person's age
 * @returns {string} concatenated strings
 */
function printNamesAndAge(firstName = 'Unicorn', lastName = 'Extension', age = 0) {
  if (firstName === 'Unicorn' || lastName === 'Extension' || age === 0) {
    return `${firstName} ${lastName}, ${age}. Missing one or all arguments - first name, last name, or age`;
  }
  return firstName + lastName + age;
}

console.log(printNamesAndAge('Toshe', 'OtGradina', 5));
console.log(printNamesAndAge('Sashe', 'OtGradina'));
console.log(printNamesAndAge('Mishe'));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly
/**
 *
 * @param {string} language
 * @param {string} compliment
 */
function favoriteProgrammingLanguage(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment}`);
}

favoriteProgrammingLanguage('Unicorn', 'it is very magical');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function upperLowerCaseCalculation(param: string): void {
  let uppercaseLetters: number = 0;
  let lowercaseLetters: number = 0;
  for (const letter of param) {
    if (letter === letter.toUpperCase()) {
      uppercaseLetters++;
    } else {
      lowercaseLetters++;
    }
  }
  console.log(`Number of uppercase characters: ${uppercaseLetters}`);
  console.log(`Number of lowercase characters: ${lowercaseLetters}`);
}

upperLowerCaseCalculation('UnicornSmile');

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
