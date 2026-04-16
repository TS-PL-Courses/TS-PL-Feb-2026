// npx ts-node homework/kremena-ivanova/homework-03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

let arrColors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < arrColors.length; i++) {
  const element = arrColors[i];
  if (element.length > 4) {
    console.log(`1) Text length of \"${element}\" is longer than 4 symbols`);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
for (let i = 1; i <= 100; i++) {
  console.log(`2) Print numbers: ${i}`);
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
  console.log(row.trim());
} //1 to 5

for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
} //4 to 1

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

let arrTelNums: string[] = ['0898771221', '0876543210', '0885237104', '0899021510', '0878776653'];
for (let i = 0; i < arrTelNums.length; i++) {
  const startFormat = arrTelNums[i];
  const endFormat = startFormat.replace(/^0/, '+359');
  console.log(`4) Local format: ${startFormat}, International format: ${endFormat}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

function decideActivity(isSick: boolean, hour: number, money: number): void {
  let activity: string = '';

  if (isSick) {
    activity = 'stay at home and go to bed';
  } else if (money > 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }
  console.log(`5) I will ${activity}.`);
}
decideActivity(true, 15, 50); //I will stay at home and go to bed.
decideActivity(false, 22, 5000); //I will watch a movie.
decideActivity(false, 9, 50); //I will go to the cinema.
decideActivity(false, 12, 5); //I will go to the park.

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
  Deposit = 2,
  FlexSave = 4,
}

interface Client {
  name: string;
  accountType: AccountType;
}

const client1: Client = {
  name: 'Anna Popova',
  accountType: AccountType.Current,
};

const client2: Client = {
  name: 'Irena Dobreva',
  accountType: AccountType.Deposit,
};

const client3: Client = {
  name: 'Ivan Petrov',
  accountType: AccountType.FlexSave,
};

const clients: Client[] = [client1, client2, client3];
for (const client of clients) {
  console.log(`6) Client name: ${client.name}, account type: ${AccountType[client.accountType]}`);
}

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }
// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

function addComplaint(
  tableRow: number,
  carNumber: number,
  driverName: string,
  clientName: string,
  complaint: string,
) {
  console.log(`7) Row ${tableRow}, car number: ${carNumber}, driver: ${driverName}`);
  console.log(`7) Customer: ${clientName}, problem: ${complaint}`);
}
addComplaint(215, 1550, 'Ivan Petrov', 'Maya Stoeva', 'The driver was smoking.');

// Exercise 8:
// Fix the errors in the code below:
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }
// console.log(sum_2_numbers(2, 3));

function sumTwoNums(numA: number, numB: number): number {
  const result = numA + numB;
  return result;
}
console.log(`8) The sum of these two numbers is: ${sumTwoNums(2, 3)}`);

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

/**JSDoc:
 * Prints a person's full name in the console.
 * If a middle name is provided (non-empty), it is included between first and last name.
 *
 * @param {string} first - The person's first name
 * @param {string} last - The person's last name
 * @param {string} middle - The person's middle name (optional)
 * @returns {void}
 */

function printName(first: string, last: string, middle?: string): void {
  if (middle && middle.trim() !== '') {
    console.log(`9) ${first} ${middle} ${last}`);
  } else {
    console.log(`9) ${first} ${last}`);
  }
}
printName('Zoya', 'Peeva', 'Koleva'); //Zoya Koleva Peeva
printName('Zoya', 'Koleva', ''); // Zoya Koleva (edgecase: mid name seems as last name..)
printName('Angel', 'Yanev'); //Angel Yanev

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Returns a formatted string containing a person's first name, last name, and age.
 * If one or more arguments are missing (undefined), it returns a message indicating missing data
 * along with the provided/default values.
 *
 * @param {string | undefined} firstN - The person's first name
 * @param {string | undefined} lastN - The person's last name
 * @param {number | undefined} age - The person's age
 * @returns {string} A formatted string with the person's information or a missing arguments message
 */

function printInfo(
  firstN: string | undefined = undefined,
  lastN: string | undefined = undefined,
  age: number | undefined = undefined,
): void {
  const hasMissingArgs: boolean = firstN === undefined || lastN === undefined || age === undefined;
  if (hasMissingArgs) {
    console.log(`10) Missing one or all arguments - first name, last name, or age.
    Default: first name: ${firstN}, last name: ${lastN}, age: ${age}`);
  } else {
    console.log(`10) ${firstN} ${lastN}, age: ${age}`);
  }
}

printInfo('Ivan', 'Petrov', 32); //Ivan Petrov, age: 32
printInfo(); //Missing .. Default: first name: undefined, last name: undefined, age: undefined
printInfo('Maria'); //Missing .. Default: first name: Maria, last name: undefined, age: undefined
printInfo('Elena', '', 20); //Elena , age: 20
printInfo(undefined, undefined, 25); //Missing ... Default: first name: undefined, last name: undefined, age: 25

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Prints a message expressing appreciation for a programming language
 * along with a reason why it is liked.
 *
 * @param {string} lang - The programming language name
 * @param {string} reason - The reason or compliment for the language
 * @returns {void}
 */

function printMessage(lang: string, reason: string): void {
  console.log(`11) I love ${lang} because ${reason}`);
}

printMessage('TypeScript', 'it was the first programming language I started learning.');
printMessage('C#', 'it is great for developing back-end logic.');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countCharsTypes(text: string): void {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= 'A' && char <= 'Z') {
      uppercaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowercaseCount++;
    }
  }
  console.log(`12) Number of uppercase characters: ${uppercaseCount}`);
  console.log(`12) Number of lowercase characters: ${lowercaseCount}`);
}

countCharsTypes('I know John Smith.'); //Number of uppercase characters: 3 /n Number of lowercase characters: 11 //U:3, L:11
countCharsTypes('abc-123-ABC-0Oo-   -%*@'); //U:4, L:4
countCharsTypes(' '); // U:0, L:0
countCharsTypes('.'); // U:0, L:0
countCharsTypes(','); // U:0, L:0
