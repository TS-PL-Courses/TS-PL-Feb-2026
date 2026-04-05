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
console.log('-----Exercise 8-----');
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function sum_2_numbers(number_1: number, number_2: number) {
  let result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
console.log('-----Exercise 9-----');
/**
 * Prints the full name of a person.
 * If a middle name is provided, it is included between the first and last name.
 *
 * @param {string} firstName - The person's first name
 * @param {string} lastName - The person's last name
 * @param {string} middleName - The person's middle name (optional)
 */
function printFullName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    console.log(`Full Name: ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Full Name: ${firstName} ${lastName}`);
  }
}
printFullName('Ivan', 'Petrov', 'Georgiev');
printFullName('Georgi', 'Asparuhov');

// Exercise 10:
console.log('-----Exercise 10-----');
/**
 * Returns information about a person.
 * @param {string} firstName - The person's first name
 * @param {string} lastName - The person's last name
 * @param {number} age - The person's age
 * @returns {string} A formatted string with the person's information
 */
function getPersonInfo(
  firstName: string = 'Unknown',
  lastName: string = 'Unknown',
  age: number = 0,
): string {
  if (firstName === 'Unknown' || lastName === 'Unknown' || age === 0) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  return `${firstName} ${lastName}, Age: ${age}`;
}

console.log(getPersonInfo('Georgi', 'Georgiev', 30));
console.log(getPersonInfo('Georgi', 'Georgiev'));
console.log(getPersonInfo('Georgi'));
console.log(getPersonInfo());

// Exercise 11:
console.log('-----Exercise 11-----');
/**
 * Prints a message about loving a programming language.
 * @param {string} programmingLanguage - The programming language you love
 * @param {string} compliment - The compliment for the programming language
 */
function message(programmingLanguage: string, compliment: string) {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}
message('TypeScript', "I'm currently learning it");
message('C#', 'it is widely used');
message('Python', 'it has a simple syntax');

// Exercise 12:
console.log('-----Exercise 12-----');
/**
 * Counts the number of uppercase and lowercase letters in a string
 * @param {string} input - The input string
 * @returns {{ uppercase: number; lowercase: number }} Object with counts
 */
function countUpperAndLowerCase(input: string): { uppercase: number; lowercase: number } {
  let uppercase: number = 0;
  let lowercase: number = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else if (char >= 'a' && char <= 'z') {
      lowercase++;
    }
  }
  return { uppercase, lowercase };
}
let sampleString: string = 'Hello World is a very Popular Phrase Used In Programming';
const counts = countUpperAndLowerCase(sampleString);
console.log(`Number of uppercase characters: ${counts.uppercase}`);
console.log(`Number of lowercase characters: ${counts.lowercase}`);
