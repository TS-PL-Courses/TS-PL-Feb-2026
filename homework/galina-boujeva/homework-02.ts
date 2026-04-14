// Homework 02
// npx ts-node homework/galina-boujeva/homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isMale: boolean = true;
if (isMale) {
  console.log('This person is Male');
} else {
  console.log('This person is Female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstNumber: number = 20;
<<<<<<< HEAD
const secondNumber: number = 5;
const thirdNumber: number = 15;
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
=======
const secondNumber: number = 25;
const thirdNumber: number = 2;

if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber > thirdNumber && firstNumber < secondNumber)
) {
>>>>>>> main
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const a: number = 15;
const b: number = 5;
const c: number = 8;
if (a <= b && a <= c) {
  if (b <= c) {
    console.log(`${a}, ${b}, ${c}`);
  } else {
    console.log(`${a}, ${c}, ${b}`);
  }
} else if (b <= a && b <= c) {
  if (a <= c) {
    console.log(`${b}, ${a}, ${c}`);
  } else {
    console.log(`${b}, ${c}, ${a}`);
  }
} else {
  if (a <= b) {
    console.log(`${c}, ${a}, ${b}`);
  } else {
    console.log(`${c}, ${b}, ${a}`);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const string: string = '12345678911';
if (string.length > 10) {
  console.log(`String ${string} has more than 10 characters`);
} else if (string.length === 10) {
  console.log(`String ${string} has exactly 10 characters`);
} else {
  console.log(`String ${string} has less than 10 characters`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const str: string = 'ABC';
if (str.includes('B')) {
  console.log(`The string ${str} contains the letter 'B'`);
} else {
  console.log(`The string ${str} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

let clientAge: number = 18;
let bestLapTime: number = 65.13;
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${bestLapTime}s → Client is allowed to compete`,
  );
} else {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${bestLapTime}s → Client is NOT allowed to compete`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const colours: string[] = ['pink', 'yellow', 'violet', 'red', 'blue'];
const uppercasedColours = colours.map((colour) => colour.toUpperCase());
console.log(uppercasedColours);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const words: string[] = ['cat', 'dog', 'elephant', 'tiger', 'lion', 'capybara'];
const filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const arrayNum: number[] = [81, 122, 3, 14, 761, 16211, -12, 0];

const maxValue = arrayNum.reduce((acc, curr) => Math.max(acc, curr));
console.log(`Maximum number is: ${maxValue}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const arrayWithDuplicates: number[] = [55, 1, 3, 3, 7, 7, 7, 9, 55, 4, 4, 2];

const uniqueValues = arrayWithDuplicates.reduce((acc: number[], curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(`Unique values are: ${uniqueValues}`);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Ivan', age: 33 },
  { name: 'Maria', age: 19 },
  { name: 'Georgi', age: 17 },
  { name: 'Diana', age: 16 },
  { name: 'Lidia', age: 22 },
];

const adultUsers = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(`Users over 18 are: ${adultUsers}`);
