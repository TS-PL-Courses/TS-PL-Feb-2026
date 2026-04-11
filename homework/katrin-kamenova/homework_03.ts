// npx ts-node homework/katrin-kamenova/homework_03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
const arrayOfColours = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
for (let i = 0; i < arrayOfColours.length; i++) {
  if (arrayOfColours[i].length > 4) {
    console.log(arrayOfColours[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
let n: number = 1;
while (n <= 100) {
  console.log('The number is:' + n);
  n++;
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < i; j++) {
    row += '*';
  }
  console.log(row);
}
for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < i; j++) {
    row += '*';
  }
  console.log(row);
}

// Exercise 4: Phone number area code substitution
const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
console.log('Original phone numbers: ' + phoneNumbers);
for (let i = 0; i < phoneNumbers.length; i++) {
  if (phoneNumbers[i].startsWith('0')) {
    phoneNumbers[i] = phoneNumbers[i].replace('0', '+359');
  }
}
console.log('New phone numbers: ' + phoneNumbers);

// Exercise 5: Decide on an evening activity
let name: string = 'John Doe';
let hour: number = 20;
let money: number = 20.1; //try with different values and boundaries for hour and money to see the different outputs
let isSick: boolean = false; //try with true as well to see the different output

let activity: string;

if (isSick) {
  activity = 'Stay at home and go to bed';
} else if (money >= 20 && hour < 21) {
  activity = 'Go to the cinema';
} else if (money >= 20 && hour >= 21) {
  activity = 'Watch a movie';
} else {
  activity = 'Go to the park';
}
console.log(`Name: ${name}, Hour: ${hour}, Money: ${money}, Is Sick: ${isSick}`);
console.log(`Decided Activity: ${activity}`);

// Exercise 6: Use an Enum, Object type, and Arrays
enum accountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}
let clientArray: { name: string; accountType: accountTypes }[] = [
  {
    name: 'John Doe',
    accountType: accountTypes.Current,
  },
  {
    name: 'Jane Doe',
    accountType: accountTypes.Deposit,
  },
  {
    name: 'Bob Pancake',
    accountType: accountTypes.FlexSave,
  },
];
clientArray.forEach((client) => {
  console.log(`Name: ${client.name}, Account Type: ${client.accountType}`);
});

// Exercise 7:
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
function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
}
console.log(sum_2_numbers(2, 3));

// Exercise 9:
/**
 *
 * @param firstName - Person's first name
 * @param lastName - Person's last name
 * @param middleName - Optional parameter for Middle name
 * @returns - returns the result of first, last, middle names
 */
function names(firstName: string, lastName: string, middleName?: string) {
  return `${firstName} ${lastName} ${middleName || ''}`;
}
console.log(names('Johnny', 'Bravo'));
console.log(names('Johnny', 'Bravo', 'Middlename'));

// Exercise 10:
/**
 *
 * @param firstName - provide first name
 * @param lastName - provide last name
 * @param age - provide age
 * @returns - returns the result of first name, last name and age concatenated together
 */

function concatStrings(firstName: string, lastName: string, age: number) {
  if (!firstName || !lastName || !age === undefined) {
    throw new Error('Missing one or all arguments - first name, last name or age');
  }
  return `${firstName} ${lastName} ${age}`;
}
try {
  console.log(concatStrings('John', 'Doe', 30));
} catch (error) {
  console.error(error);
}
/*
try {
  console.log(concatStrings('John', 'Doe'));
} catch (error) {
  console.error(error);
}

try {
  console.log(concatStrings('John'));
} catch (error) {
  console.error(error);
}

try {
  console.log(concatStrings());
} catch (error) {
  console.error(error);
} finally {
  console.log('Finished executing the function');
}*/

// Exercise 11:
/**
 * Prints a message about loving a programming language and its compliment
 * @param programmingLanguage - The programming language
 * @param compliment - The compliment message for the programming language
 */
function printMessage(programmingLanguage: string, compliment: string) {
  return `I love ${programmingLanguage} because ${compliment}`;
}
console.log(printMessage('TypeScript', "it's awesome!"));
