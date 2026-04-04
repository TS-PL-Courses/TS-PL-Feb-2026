// npx ts-node homework/petar-petrov/homework-03.ts

// Homework 03 - Collections and Loops

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

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row = row + '* ';
  }
  console.log(row);
}

for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row = row + '* ';
  }
  console.log(row);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneNumbers.length; i++) {
  const newNumber: string = '+359' + phoneNumbers[i].slice(1);
  console.log('Original: ' + phoneNumbers[i] + ' | New: ' + newNumber);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

const name: string = 'Petar';
const hour: number = 22;
const money: number = 25.5;
const isSick: boolean = false;

let activity: string;

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (!isSick && money >= 20) {
  activity = 'go to the cinema';
} else {
  activity = 'go to the park';
}

console.log('Name: ' + name);
console.log('Hour: ' + hour);
console.log('Money: ' + money);
console.log('Is sick: ' + isSick);
console.log('Activity: ' + activity);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

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
  name: 'Petar Ivanov',
  accountType: AccountType.FlexSave,
};

const client3: Client = {
  name: 'Nikola Petrov',
  accountType: AccountType.Deposit,
};

const clients: Client[] = [client1, client2, client3];

for (let i = 0; i < clients.length; i++) {
  console.log(
    'Name: ' + clients[i].name + ' | Account Type: ' + AccountType[clients[i].accountType],
  );
}

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
  console.log(table_row, complain, client_name, driver_name, car_number);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

/**
 * Prints a person's full name in the console
 * @param {string} firstName - the person's first name
 * @param {string} lastName - the person's last name
 * @param {string} [middleName] - the person's middle name (optional)
 */
function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(firstName + ' ' + middleName + ' ' + lastName);
  } else {
    console.log(firstName + ' ' + lastName);
  }
}

// Step 3: Call the function with and without a Middle Name to verify it works correctly
printFullName('John', 'Doe', 'Jane');
printFullName('Petar', 'Ivanov');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Returns a formatted string with a person's first name, last name, and age
 * @param {string} firstName - the person's first name
 * @param {string} lastName - the person's last name
 * @param {number} age - the person's age
 * @returns {string} A formatted string with the person's details
 */
function getPersonDetails(
  firstName: string = 'Missing',
  lastName: string = 'Missing',
  age: number = 0,
): string {
  if (firstName === 'Missing' || lastName === 'Missing' || age === 0) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  return firstName + ' ' + lastName + ', age: ' + age;
}

console.log(getPersonDetails('Petar', 'Ivanov', 30));
console.log(getPersonDetails('Petar'));
console.log(getPersonDetails());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Prints a message about a programming language and why it is loved
 * @param {string} programmingLanguage - the programming language
 * @param {string} compliment - the reason why the language is loved
 */
function loveLanguage(programmingLanguage: string, compliment: string): void {
  console.log('I love ' + programmingLanguage + ' because ' + compliment);
}

loveLanguage('TypeScript', 'catches bugs early');
loveLanguage('Python', 'is extremely easy to learn and use');
loveLanguage('JavaScript', 'it runs literally everywhere');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countLetters(text: string): { uppercase: number; lowercase: number } {
  let uppercase: number = 0;
  let lowercase: number = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z') {
      uppercase = uppercase + 1;
    } else if (text[i] >= 'a' && text[i] <= 'z') {
      lowercase = lowercase + 1;
    }
  }

  return { uppercase: uppercase, lowercase: lowercase };
}

const result = countLetters('Hello World');
console.log('Number of uppercase characters: ' + result.uppercase);
console.log('Number of lowercase characters: ' + result.lowercase);

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
