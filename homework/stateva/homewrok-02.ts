// Homework 02
// npx ts-node homework-02.ts
// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.}
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
console.log('===============Exercise 1 Boolean if/else:===============');

const isMale: boolean = true;

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
console.log('===============Exercise 2 Number between two numbers:===============');

let num1: number = 1;
let num2: number = 4;
let num3: number = 8;

if (num1 > num2 && num1 < num3) {
  console.log('The number ' + num1 + ' is between ' + num2 + ' and ' + num3);
} else {
  console.log('The number ' + num1 + ' is NOT between ' + num2 + ' and ' + num3);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

console.log('===============Exercise 3 Multiple number comparison:===============');

let a = 5;
let b = 2;
let c = 8;

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}

if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}

console.log(a, b, c);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

console.log('===============Exercise 4 String length check:===============');

let str: string = 'Quality Assurance';

if (str.length > 10) {
  console.log('The string ' + str + ' has more than 10 chars');
} else {
  console.log('The string ' + str + ' does NOT have more than 10 chars');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

console.log('===============Exercise 5 String contains letter B:===============');

let str2: string = 'Pub';

if (str2.toLowerCase().includes('b')) {
  console.log('The string ' + str2 + ' contains the letter B');
} else {
  console.log('The string ' + str2 + ' does NOT contain the letter B');
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

console.log('===============Exercise 6 Karting competition eligibility:===============');

let age: number = 12;
let bestLapTime: number = 55.5;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(
    'The client is ' +
      age +
      ' years old, has a best lap time of ' +
      bestLapTime +
      ' seconds, and is allowed to compete.',
  );
} else {
  console.log(
    'The client is ' +
      age +
      ' years old, has a best lap time of ' +
      bestLapTime +
      ' seconds, and is NOT allowed to compete.',
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('===============Exercise 7 Convert Strings to Uppercase:===============');

let welcomeMessage: string[] = ['Hello', 'Welcome', 'Good Morning'];

let upperCaseMessage: string[] = welcomeMessage.map((message) => message.toUpperCase());

console.log(upperCaseMessage);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('===============Exercise 8 Filter Long Words:===============');

let words: string[] = ['Pancakes', 'Eggs', 'Flavour', 'Syrup', 'Butter'];

let longerWords: string[] = words.filter((word) => word.length > 5);

console.log(longerWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

console.log('===============Exercise 9 Find Maximum Number:===============');

let numbers: number[] = [301, 345, 87, 345.1, 50];

let biggestNumber: number = numbers.reduce(
  (max, currentNumber) => (currentNumber > max ? currentNumber : max),
  numbers[0],
);

console.log(biggestNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

console.log('===============Exercise 10 Calculate Total Price:===============');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

let shoppingList: Item[] = [
  { name: 'Flour', price: 2.5, quantity: 2 },
  { name: 'Cheese', price: 5.5, quantity: 3 },
  { name: 'Eggs', price: 0.2, quantity: 12 },
];

let shoppingPrice = shoppingList.map((item) => item.price * item.quantity);

let total = shoppingPrice.reduce((sum, value) => sum + value, 0);

console.log(total);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

console.log('=================Exercise 11 Get Unique Values===================');

let numbers2: number[] = [2, 2, 5, 88, 5, 7, 88];

let unique = numbers2.reduce((acc: number[], curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(unique);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

console.log('==================Exercise 12 Users Filter + Map:==================');

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 19 },
];

let result = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(result);
