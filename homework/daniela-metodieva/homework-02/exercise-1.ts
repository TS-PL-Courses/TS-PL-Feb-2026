// npx ts-node homework/daniela-metodieva/homework-02/exercise-1.ts

// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isMale = true;
if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstNumber: number = 5;
const secondNumber: number = 2;
const thirdNumber: number = 9;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
//Put the numbers in an array and sort them

let a = 9;
let b = 3;
let c = 6;

let numbers: number[] = [a, b, c];
numbers.sort((x, y) => x - y);
console.log('The numbers in ascending order are:', numbers);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

let myString: string = 'This is a string.';
if (myString.length > 10) {
  console.log(`The string "${myString}" has more than 10 characters.`);
} else {
  console.log(`The string "${myString}" has only ${myString.length} characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

let threeCharString: string = 'ABC';
if (threeCharString.includes('B')) {
  console.log(`The string "${threeCharString}" contains the letter 'B'.`);
} else {
  console.log(`The string "${threeCharString}" does NOT contain the letter 'B'.`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

let clientAge: number = 25;
let bestLapTime: number = 45.5;

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(
    `The client with age ${clientAge} and best lap time ${bestLapTime} is allowed to compete.`,
  );
} else {
  console.log(
    `The client with age ${clientAge} and best lap time ${bestLapTime} is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let stringArray: string[] = ['apple', 'homework', 'typescript'];
let upperCaseArray: string[] = stringArray.map((str) => str.toUpperCase());
console.log('Uppercase strings:', upperCaseArray);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let words: string[] = ['hi', 'vegetable', 'long', 'tiny', 'overwhelming'];
let longWords: string[] = words.filter((word) => word.length > 5);
console.log('Words longer than 5 characters:', longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let numbersInArray: number[] = [4, 7, 1, 9, 3];
let maxNumber: number = numbersInArray.reduce(
  (max, current) => (current > max ? current : max),
  numbersInArray[0],
);
console.log('The largest number is:', maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = {
  name: string;
  price: number;
  quantity: number;
};

let items: Item[] = [
  { name: 'Pencils', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Notebook', price: 5, quantity: 3 },
];

let totalPrice: number = items
  .map((item) => item.price * item.quantity) //price × quantity for each item
  .reduce((total, current) => total + current, 0); //sum all values

console.log('Total price of all items:', totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

let numbersWhitDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers: number[] = numbersWhitDuplicates.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log('Unique numbers:', uniqueNumbers);

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

let users: User[] = [
  { name: 'Dani', age: 18 },
  { name: 'Martin', age: 40 },
  { name: 'Alex', age: 22 },
];

let adultUserNames: string[] = users.filter((user) => user.age > 18).map((user) => user.name);
console.log('Names of users over 18:', adultUserNames);
