// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

console.log('\nEXCERCISE1\n');
const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
colors.forEach((a) => {
  if (a.length > 4) {
    console.log(a);
  }
});

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

console.log('\nEXCERCISE2\n');
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

console.log('\nEXCERCISE3\n');
/*
for (let i: number = 1; i <= 5; i++) {
  for (let j: number = 1; j <= i; j++) {
    console.log('*');
  }
}
  **/

const symbol: string = '*';
const min = 1;
const max = 5;
let temp: string = '';
let i: number = 1;

for (i = 1; i <= max; i++) {
  for (let j: number = 1; j <= i; j++) {
    temp += ` ${symbol}`;
  }
  console.log(temp);
  temp = '';
}
if (i >= max) {
  for (i = max - 1; i >= 1; i--) {
    for (let j: number = 1; j <= i; j++) {
      temp += ` ${symbol}`;
    }
    console.log(temp);
    temp = '';
  }
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('\nEXCERCISE4\n');
const phones: string[] = ['0376829209', '04239982009', '0536829299'];
let temp1: string[] = [];
let temp2: string = '';
for (let i = 0; i < phones.length; i++) {
  temp1 = [...phones[i]];
  temp1[0] = '+359';
  temp2 = temp1.reduce((a, b) => a + b);
  phones[i] = temp2;
}

console.log(phones);

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

console.log('\nEXCERCISE5\n');
type Person = { name: string; hour: number; money: number; sick: boolean };

function activity(person: Person) {
  if (!person.sick && person.money >= 20) {
    return console.log(`${person.name} will go to the cinema`);
  } else if (!person.sick && person.money < 20) {
    return console.log(`${person.name} will go to the park`);
  } else if (!person.sick && person.money > 20 && person.hour >= 21 && person.hour <= 24) {
    return console.log(`${person.name} will watch a movie`);
  } else if (person.sick) {
    return console.log(`${person.name} will stay at home and go to bed`);
  }
}

const people: Person[] = [
  { name: 'Гошо', hour: 16, money: 20, sick: false },
  { name: 'Пешо', hour: 12, money: 100, sick: false },
  { name: 'Тинтява', hour: 10, money: 58, sick: false },
  { name: 'Верка', hour: 8, money: 15, sick: false },
  { name: 'Линда', hour: 24, money: 35, sick: true },
  { name: 'Крум', hour: 13, money: 62, sick: false },
];

for (let i = 0; i < people.length; i++) {
  activity(people[i]);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

console.log('\nEXCERCISE6\n');

enum accountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type client = { name: string; accountType: accountTypes };
const clients: client[] = [
  { name: 'Апостол', accountType: accountTypes.Current },
  { name: 'Борис', accountType: accountTypes.Deposit },
  { name: 'Пурко', accountType: accountTypes.FlexSave },
  { name: 'Мехмед', accountType: accountTypes.Current },
  { name: 'Сидар', accountType: accountTypes.Deposit },
];
for (let i: number = 0; i < clients.length; i++) {
  console.log(clients[i].name, ', account type: ', clients[i].accountType);
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

console.log('\nEXCERCISE7\n');

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

console.log('\nEXCERCISE8\n');

function sum_2_numbers(number_1: number, number_2: number) {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(5, 10));
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

console.log('\nEXCERCISE9\n');

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} secondName optional
 * @returns {string} Concatinated all passed names, separated by space
 */

function fullName(firstName: string, lastName: string, secondName?: string): string {
  let result: string = '';
  if (secondName !== undefined) {
    return (result = firstName + ' ' + secondName + ' ' + lastName);
  } else {
    return (result = firstName + ' ' + lastName);
  }
}

console.log(fullName('Малинка', 'Кожухарова', 'Видинова'));
console.log(fullName('Тотьо', 'Тотев'));

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('\nEXCERCISE10\n');

/**
 *
 * @param person input parameter of object type - contains three optional parameters - firstName (string), lastName (string), age (number)
 * @returns the object properties which are passed
 */

function personDetails(person: { firstName?: string; lastName?: string; age?: number }) {
  if (person.firstName !== undefined && person.lastName !== undefined && person.age !== undefined) {
    return person.firstName + ' ' + person.lastName + ' age, ' + person.age;
  } else {
    return 'Missing one or all arguments - first name, last name, or age';
  }
}

console.log(personDetails({ firstName: 'Илонка', lastName: 'Малинова', age: 18 }));
console.log(personDetails({}));
console.log(personDetails({ firstName: 'Илонка', age: 18 }));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('\nEXCERCISE11\n');

/**
 *
 * @param {string} language
 * @param {string} compliment
 * console logs concatenated the arguments
 */

function compliLang(language: string, compliment: string) {
  console.log(`I love ${language} because ${compliment}`);
}

compliLang('typescript', "it's logical.");
compliLang('Portuguese', "it's musical.");

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countCase(phrase: string): number[] {
  let phraseArray: string[] = [...phrase];
  let small: number = 0;
  let capital: number = 0;

  phraseArray.forEach((char: string, index: number) => {
    if (/\p{Lu}/u.test(char)) {
      capital++;
    } else if (!/\p{Number}/u.test(char)) {
      if (/\p{Ll}/u.test(char)) {
        small++;
      }
    }
  });
  return [small, capital];
}

const result = countCase('Чичо Мунчо');
console.log(`Small letters: ${result[0]}; Capital letters: ${result[1]}`);
console.log(
  `Small letters: ${countCase('Chicho Muncho')[0]}; Capital letters: ${countCase('Chicho Muncho')[1]}`,
);
console.log(countCase('Хфърчило'));
console.log(countCase('10 hens, 2 goats and 2 sheeps'));

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
