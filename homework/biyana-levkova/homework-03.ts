//npx ts-node homework/biyana-levkova/homework-03.ts

// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
const colorsArr: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "black",
];
for (let i = 0; i < colorsArr.length; i++) {
  if (colorsArr[i].length > 4) {
    console.log(colorsArr[i]);
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
let row: number = 5;
for (let i = 0; i < row; i++) {
  let line = "";
  for (let y = 0; y <= i; y++) {
    line += "* ";
  }
  console.log(line);
}
for (let i = row - 2; i >= 0; i--) {
  let line2 = "";
  for (let y = 0; y <= i; y++) {
    line2 += "* ";
  }
  console.log(line2);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console
const phoneNumbers: string[] = ["0376829209", "04239982009", "0536829299"];
let areaCode = "+359";
for (let i = 0; i < phoneNumbers.length; i++) {
  console.log("Original phone number is " + phoneNumbers[i]);
  console.log(
    "Phone number with redacted area code is " +
      areaCode +
      phoneNumbers[i].substring(1, phoneNumbers[i].length),
  );
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
interface People {
  name: string;
  hour: number;
  money: number;
  isSick: boolean;
}
const Georgi: People = { name: "Georgi", hour: 13, money: 30, isSick: true };
let activitySummary =
  Georgi.name +
  " has " +
  Georgi.money +
  " EUR, it is " +
  Georgi.hour +
  " o'clock and it is " +
  Georgi.isSick +
  " that he\'s sick";

if (
  !Georgi.isSick &&
  Georgi.money > 20 &&
  Georgi.hour > 21 &&
  Georgi.hour < 24
) {
  console.log(activitySummary);
  console.log("Watch a movie");
} else if (!Georgi.isSick && Georgi.money > 20) {
  console.log(activitySummary);
  console.log("Go to the cinema");
}
if (!Georgi.isSick && Georgi.money < 20) {
  console.log(activitySummary);
  console.log("Go to the park");
}
if (Georgi.isSick) {
  console.log(activitySummary);
  console.log("Stay at home and go to bed");
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

enum accountTypes {
  "Current" = 1,
  "FlexSave" = 4,
  "Deposit" = 2,
}
interface Client {
  name: string;
  accountType: accountTypes;
}
const petar: Client = { name: "Petar", accountType: accountTypes.Current };
const maria: Client = { name: "Maria", accountType: accountTypes.FlexSave };
const georgi: Client = { name: "Georgi", accountType: accountTypes.Deposit };

const clientBase: Client[] = [petar, maria, georgi];
for (let i = 0; i < clientBase.length; i++) {
  console.log(
    clientBase[i].name + ", " + accountTypes[clientBase[i].accountType],
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
  car_number: number,
  driver_name: string,
) {
  console.log("Printing the row");
  console.log(
    `In ${table_row} there's a complain saying that ${complain} from client ${client_name} about car number ${car_number} with driver ${driver_name}`,
  );
}

add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko");

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function sum_2_numbers(number_1: number, number_2: number): number {
  return number_1 + number_2;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

// /**
//  * Multiply two numbers
//  * @param {number} a - the first number to be multiplied
//  * @param {number} b - the second number to be multiplied
//  * @returns {number} The product of a and b
//  */

// function multiply(a: number, b: number): number {
//     return a * b;
// }
// Step 3: Call the function with and without a Middle Name to verify it works correctly

/**
 * getFullName names
 * @param {string} firstName - the first name of Person
 * @param {string} lastName - the last name of Person
 * @param {string} middleName - the middle name of Person, optional
 * @returns {string} - the full name of Person
 */

function getFullName(
  firstName: string,
  lastName: string,
  middleName?: string,
): string {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  } else {
    return firstName + " " + lastName;
  }
}

console.log(getFullName("ivan", "ivanov"));
console.log(getFullName("Albena", "Krasimirova", "Stoilova"));

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * getNameAge
 * @param {string} : first name
 * @param {string} : last name
 * @param {string} : age
 * @returns {string} : name and age - first, last, age
 */

function getNameAge(
  firstName1: string = "unknown",
  lastName1: string = "unknown",
  age: string = "unknown",
): string {
  if (
    firstName1 === "unknown" ||
    lastName1 === "unknown" ||
    age === "unknown"
  ) {
    return "Missing one or all arguments - first name, last name, or age";
  } else {
    return firstName1 + " " + lastName1 + " " + age;
  }
}
console.log(getNameAge("Stoyan", "Iliev", "25"));
console.log(getNameAge("Ivan", "12"));
console.log(getNameAge("20"));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * getMessage
 * @param {string} progrLang - this is the programming language
 * @param {string} compliment - this is how it makes you feel
 * @param {string} - this is your message about the programming language
 */

function getMessage(
  progrLang: string = "TypeScript",
  compliment: string = "it is awesome",
): string {
  return `I love ${progrLang} because ${compliment}`;
}

console.log(getMessage("typescript", "it changes the way I think of things"));
console.log(getMessage("TS"));
console.log(getMessage());

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countLetters(word: string) {
  let upperCase: string[] = [];
  let lowerCase: string[] = [];
  let upperCaseCount: number = 0;
  let lowerCaseCount: number = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word.charAt(i) === word.charAt(i).toUpperCase() &&
      word.charAt(i) !== " "
    ) {
      upperCase.push(word.charAt(i));
      upperCaseCount += 1;
    }
    if (
      word.charAt(i) === word.charAt(i).toLowerCase() &&
      word.charAt(i) !== " "
    ) {
      lowerCase.push(word.charAt(i));
      lowerCaseCount += 1;
    }
  }
  console.log(
    `Number of uppercase characters: ${upperCaseCount}, respectively they are ${upperCase}`,
  );
  console.log(
    `Number of lowercase characters: ${lowerCaseCount}, respectively they are ${lowerCase}`,
  );
}
countLetters("This Is a Test");
countLetters("One more Test");

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
