// Homework 03 - Collections and Loops

// Exercise 1
const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3
// Up
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// Down
for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// Exercise 4
const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneNumbers.length; i++) {
  const original = phoneNumbers[i];
  const updated = original.replace(/^0/, '+359');
  console.log(`Original: ${original} -> New: ${updated}`);
}

// Exercise 5
const name: string = 'Ivan';
const hour: number = 22;
const money: number = 25.5;
const isSick: boolean = false;

let activity: string;

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (hour >= 21 && hour <= 24 && money > 20) {
  activity = 'watch a movie';
} else if (money >= 20) {
  activity = 'go to the cinema';
} else {
  activity = 'go to the park';
}

console.log(`${name}, Hour: ${hour}, Money: ${money}, Activity: ${activity}`);

// Exercise 6
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type Client = {
  name: string;
  accountType: AccountType;
};

const client1: Client = { name: 'John Doe', accountType: AccountType.Current };
const client2: Client = { name: 'Jane Smith', accountType: AccountType.FlexSave };
const client3: Client = { name: 'Peter Ivanov', accountType: AccountType.Deposit };

const clients: Client[] = [client1, client2, client3];

for (let i = 0; i < clients.length; i++) {
  console.log(`Name: ${clients[i].name}, Account Type: ${AccountType[clients[i].accountType]}`);
}

// Exercise 7
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

// Exercise 8
function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9
/**
 * Prints a person's full name
 * @param firstName - First name
 * @param lastName - Last name
 * @param middleName - Optional middle name
 */
function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}

printFullName('Ivan', 'Ivanov');
printFullName('Ivan', 'Ivanov', 'Petrov');

// Exercise 10
/**
 * Returns full info about a person
 * @param firstName - First name
 * @param lastName - Last name
 * @param age - Age
 */
function getPersonInfo(firstName?: string, lastName?: string, age?: number): string {
  if (!firstName || !lastName || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age';
  }

  return `${firstName} ${lastName} is ${age} years old`;
}

console.log(getPersonInfo('Ivan', 'Ivanov', 25));
console.log(getPersonInfo('Ivan'));
console.log(getPersonInfo());

// Exercise 11
/**
 * Prints why you love a programming language
 * @param language - Programming language
 * @param compliment - Reason you like it
 */
function loveLanguage(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment}`);
}

loveLanguage('TypeScript', 'it is strongly typed');
loveLanguage('JavaScript', 'it is flexible');

// Exercise 12
function countLetters(text: string): { upper: number; lower: number } {
  let upper = 0;
  let lower = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= 'A' && char <= 'Z') {
      upper++;
    } else if (char >= 'a' && char <= 'z') {
      lower++;
    }
  }

  return { upper, lower };
}

const result = countLetters('Hello World');
console.log(`Number of uppercase characters: ${result.upper}`);
console.log(`Number of lowercase characters: ${result.lower}`);
