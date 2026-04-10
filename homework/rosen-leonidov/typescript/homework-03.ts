// npx ts-node homework/rosen-leonidov/typescript/homework-03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
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

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
const phoneNumbers = ['0376829209', '04239982009', '0536829299'];
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
for (let i = 0; i < phoneNumbers.length; i++) {
  if (phoneNumbers[i].startsWith('0')) {
    phoneNumbers[i] = phoneNumbers[i].replace(/^0/, '+359');
  }
  console.log(`Original: 0${phoneNumbers[i].slice(4)}, New: ${phoneNumbers[i]}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
const name: string = 'Alice';
const hour: number = 22;
const money: number = 25.5;
const isSick: boolean = false;
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
let activity: string;
if (!isSick) {
  if (money >= 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }
} else {
  activity = 'stay at home and go to bed';
}
console.log(
  `Name: ${name}, Hour: ${hour}, Money: ${money}, Sick: ${isSick}, Activity: ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
type Client = {
  name: string;
  accountType: AccountType;
};
const client1: Client = { name: 'Georgi Petrov', accountType: AccountType.Current };
const client2: Client = { name: 'Mariya Ivanova', accountType: AccountType.FlexSave };
const client3: Client = { name: 'Ivan Petrov', accountType: AccountType.Deposit };
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
const clients: Client[] = [client1, client2, client3];
for (let i = 0; i < clients.length; i++) {
  console.log(`Name: ${clients[i].name}, Account Type: ${AccountType[clients[i].accountType]}`);
}

// Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  car_number: number,
  driver_name: string,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 2523, 'Petko');

// Exercise 8:
// Fix the errors in the code below:
function sum_2_numbers(number_1: number, number_2: number) {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
/**
 * Prints a person's full name
 * @param {string} firstName - The person's first name
 * @param {string} [middleName] - The person's middle name (optional)
 * @param {string} lastName - The person's last name
 */
function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`Full Name: ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Full Name: ${firstName} ${lastName}`);
  }
}
printFullName('John', 'Doe', 'Michael');
printFullName('Jane', 'Smith');
// Step 3: Call the function with and without a Middle Name to verify it works correctly
printFullName('John', 'Doe', 'Michael');
printFullName('Jane', 'Smith');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
/**
 * Concatenates a person's first name, last name, and age
 * @param {string} firstName - The person's first name
 * @param {string} lastName - The person's last name
 * @param {number} age - The person's age
 * @returns {string} The concatenated string
 */
function concatenatePersonInfo(
  firstName: string = 'Missing',
  lastName: string = 'Missing',
  age: number = 0,
): string {
  if (firstName === 'Missing' || lastName === 'Missing' || age === 0) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  return `${firstName} ${lastName}, Age: ${age}`;
}
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly
console.log(concatenatePersonInfo('Alice', 'Johnson', 30));
console.log(concatenatePersonInfo('Bob', 'Smith'));
console.log(concatenatePersonInfo());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
/**
 * Prints a message about loving a programming language
 * @param {string} programmingLanguage - The programming language
 * @param {string} compliment - The compliment about the programming language
 */
function loveProgrammingLanguage(programmingLanguage: string, compliment: string): void {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly
loveProgrammingLanguage('TypeScript', 'it has great type safety');
loveProgrammingLanguage('JavaScript', 'it is versatile');
loveProgrammingLanguage('Python', 'it is easy to learn');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
/**
 * Counts the number of uppercase and lowercase letters in a string
 * @param {string} input - The input string
 * @returns {{ uppercase: number; lowercase: number }} An object containing the counts of uppercase and lowercase letters
 */
function countLetterCases(input: string): { uppercase: number; lowercase: number } {
  let uppercase = 0;
  let lowercase = 0;

  for (const char of input) {
    if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else if (char >= 'a' && char <= 'z') {
      lowercase++;
    }
  }

  return { uppercase, lowercase };
}

const sampleString = 'Hello World';
const counts = countLetterCases(sampleString);
console.log(`Number of uppercase characters: ${counts.uppercase}`);
console.log(`Number of lowercase characters: ${counts.lowercase}`);
