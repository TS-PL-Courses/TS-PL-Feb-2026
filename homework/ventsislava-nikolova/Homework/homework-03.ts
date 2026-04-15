// Homework 03 - Solutions

// =======================
// Exercise 1
// =======================
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// =======================
// Exercise 2
// =======================
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// =======================
// Exercise 3
// =======================
// Increasing
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// Decreasing
for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// =======================
// Exercise 4
// =======================
const phones = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phones.length; i++) {
  let newPhone = phones[i].replace(/^0/, '+359');
  console.log('Original:', phones[i], 'New:', newPhone);
}

// =======================
// Exercise 5
// =======================
let name = 'Venci';
let hour = 22;
let money = 25.5;
let isSick = false;

let activity = '';

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (!isSick && money >= 20) {
  activity = 'go to the cinema';
} else if (!isSick && money < 20) {
  activity = 'go to the park';
}

console.log(name, hour, money, isSick, activity);

// =======================
// Exercise 6
// =======================
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

const client1 = {
  name: 'John Doe',
  accountType: AccountType.Current,
};

const client2 = {
  name: 'Jane Smith',
  accountType: AccountType.FlexSave,
};

const client3 = {
  name: 'Peter Johnson',
  accountType: AccountType.Deposit,
};

const clients = [client1, client2, client3];

for (let i = 0; i < clients.length; i++) {
  console.log(clients[i].name, clients[i].accountType);
}

// =======================
// Exercise 7
// =======================
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

// =======================
// Exercise 8
// =======================
function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// =======================
// Exercise 9
// =======================
/**
 * Prints a person's full name
 * @param firstName - First name
 * @param lastName - Last name
 * @param middleName - Optional middle name
 */
function printFullName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    console.log(firstName, middleName, lastName);
  } else {
    console.log(firstName, lastName);
  }
}

printFullName('Ivan', 'Petrov');
printFullName('Ivan', 'Petrov', 'Georgiev');

// =======================
// Exercise 10
// =======================
/**
 * Returns full info about a person
 */
function getPersonInfo(firstName: string = '', lastName: string = '', age?: number): string {
  if (!firstName || !lastName || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age';
  }

  return `${firstName} ${lastName} is ${age} years old`;
}

console.log(getPersonInfo('Ivan', 'Petrov', 25));
console.log(getPersonInfo('Ivan'));
console.log(getPersonInfo());

// =======================
// Exercise 11
// =======================
/**
 * Prints a programming compliment
 */
function programmingLove(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment}`);
}

programmingLove('TypeScript', 'it is strongly typed');
programmingLove('JavaScript', 'it is flexible');

// =======================
// Exercise 12
// =======================
function countLetters(text: string) {
  let upper = 0;
  let lower = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= 'A' && char <= 'Z') {
      upper++;
    } else if (char >= 'a' && char <= 'z') {
      lower++;
    }
  }

  return { upper, lower };
}

const result = countLetters('Hello World');
console.log('Uppercase:', result.upper);
console.log('Lowercase:', result.lower);
