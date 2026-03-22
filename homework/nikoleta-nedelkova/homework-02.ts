// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isMale = true;
if (isMale) {
  console.log(`Is the person male? - ${isMale}`);
} else {
  console.log(`The person is male - ${isMale}`);
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const number1: number = 324;
const number2: number = 567;
const number3: number = 657;

if ((number1 > number2 && number1 < number3) || (number1 > number3 && number1 < number2)) {
  console.log(`The number ${number1} is between ${number2} and ${number3}`);
} else {
  console.log(`The number ${number1} is NOT between ${number2} and ${number3}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const first: number = 45643;
const second: number = 5435;
const third: number = 45;

const allnumbers = [first, second, third];

const ascOrder = allnumbers.sort((a, b) => a - b);

console.log(`Ascending order: ${ascOrder}`);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const text: string = 'Hello World';
let message: string;

if (text.length > 10) {
  message = 'is greater than 10';
} else if (text.length === 10) {
  message = 'is equal to 10';
} else {
  message = 'is less than 10';
}
console.log(
  `The length of the string "${text}" ${message} and contains ${text.length} characters.`,
);

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const text1: string = 'AbC';
let message1: string;

if (text1.toUpperCase().includes('B')) {
  message1 = "contains the letter 'B/b'.";
} else {
  message1 = "does NOT contain the letter 'B/b'.";
}

console.log(`The string "${text1}" ${message1}`);

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const clientAge: number = 26;
const clientBestTime: number = 23.5;

if (clientAge < 18) {
  console.log(`The client is ${clientAge} years old. It's under 18 -> Not allowed to compete.`);
} else if (clientAge >= 65) {
  console.log(`The client is ${clientAge} years old -> Not allowed to compete`);
} else if (clientBestTime >= 60) {
  console.log(
    `The best lap time of the client is ${clientBestTime}. It's too high -> Not allowed to compete.`,
  );
} else {
  console.log(
    `The client is ${clientAge} years old and the best lap time is ${clientBestTime} -> Allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const text2: string[] = ['string1', 'string2', 'string3'];
const result = text2.map((str) => str.toUpperCase());

console.log(`All the strings in Uppercase: ${result}`);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const longWords: string[] = ['Hello', 'Quantity', 'Numbers', 'Two', 'One', 'Page'];
const filteredWords = longWords.filter((word) => word.length > 5);
console.log(`The words longer than 5 characters are: ${filteredWords}`);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers: number[] = [4, 7, 2, 3, 4, 5, 674, 1122, 4565, 22, 465];
const largestNumber = numbers.reduce((acc, num) => {
  return num > acc ? num : acc;
});
console.log(`The largest number is: ${largestNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = { name: string; price: number; quantity: number };

const items: Item[] = [
  { name: 'Ball', price: 5, quantity: 8 },
  { name: 'Lego', price: 8, quantity: 10 },
  { name: 'Bear', price: 6, quantity: 9 },
];

const itemPrice = items.map((items) => items.price * items.quantity);
console.log(`The price of the items are: ${itemPrice}`);

const sumAllItams = itemPrice.reduce((acc, num) => acc + num, 0);
console.log(`The sum of the price of all items is ${sumAllItams}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const numbers4: number[] = [5, 9, 3, 5, 6, 4, 5, 6, 7, 4, 5, 5];

const uniqueValues = numbers4.reduce((acc, num) => (acc.includes(num) ? acc : [...acc, num]), []);

console.log(`The unique values are: ${uniqueValues}`);

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
  { name: 'Nikoleta', age: 37 },
  { name: 'Boris', age: 9 },
  { name: 'Gergana', age: 19 },
];
const usersOver18 = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(`The users over 18 are: ${usersOver18}`);
