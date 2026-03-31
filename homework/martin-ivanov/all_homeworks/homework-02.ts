// npx ts-node homework/martin-ivanov/all_homeworks/homework-02.ts
// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
console.log('Exercise 1: Use a boolean as an if/else condition');
const isMale: boolean = false;
if (isMale) {
  console.log('The person is male');
} else {
  console.log('The person is female');
}
console.log('');

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
console.log('Exercise 2: Check if a number is between two other numbers');
let firstNum: number = 6;
let secondNum: number = 4;
let thirdNum: number = 8;
if (firstNum > secondNum && firstNum < thirdNum) {
  console.log(`The number ${firstNum} is between ${secondNum} and ${thirdNum}`);
} else {
  console.log(`The number ${firstNum} is NOT between ${secondNum} and ${thirdNum}`);
}
console.log('');

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
console.log('Exercise 3: Multiple number comparison');
let firstNum1: number = 90;
let secondNum1: number = 10;
let thirdNum1: number = 8;
if (firstNum1 < secondNum1 && firstNum1 < thirdNum1 && secondNum1 < thirdNum1) {
  console.log(`The asceding order is: ${firstNum1}, ${secondNum1}, ${thirdNum1}`);
} else if (firstNum1 < secondNum1 && firstNum1 < thirdNum1 && secondNum1 > thirdNum1) {
  console.log(`The asceding order is: ${firstNum1}, ${thirdNum1}, ${secondNum1}`);
} else if (secondNum1 < firstNum1 && secondNum1 < thirdNum1 && firstNum1 < thirdNum1) {
  console.log(`The asceding order is: ${secondNum1}, ${firstNum1}, ${thirdNum1}`);
} else if (secondNum1 < firstNum1 && secondNum1 < thirdNum1 && firstNum1 > thirdNum1) {
  console.log(`The asceding order is: ${secondNum1}, ${thirdNum1}, ${firstNum1} `);
} else if (thirdNum1 < firstNum1 && thirdNum1 < secondNum1 && secondNum1 < firstNum1) {
  console.log(`The asceding order is: ${thirdNum1}, ${secondNum1}, ${firstNum1}`);
} else if (thirdNum1 < firstNum1 && thirdNum1 < secondNum1 && secondNum1 > firstNum1) {
  console.log(`The asceding order is: ${thirdNum1}, ${firstNum1}, ${secondNum1} `);
}
console.log('');

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
console.log('Exercise 4: Check if a string has more than 10 characters');
const myString: string = 'mytypescript';
let lengthString = myString.length;
if (lengthString > 10) {
  console.log(`The length of the string is more then 10. The result is: ${lengthString}`);
} else
  console.log(`The length of the string is equal or less then 10. The result is: ${lengthString}`);
console.log();

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
//first solution
console.log('Exercise 5: Check if a string contains the letter B');
const stringLetter: string = 'CSS';
if (stringLetter.charAt(0) === 'B') {
  console.log(`The string ${stringLetter} contains the letter 'B'`);
} else if (stringLetter.charAt(1) === 'B') {
  console.log(`The string ${stringLetter} contains the letter 'B'`);
} else if (stringLetter.charAt(2) === 'B') {
  console.log(`The string ${stringLetter} contains the letter 'B'`);
} else console.log(`The string ${stringLetter} does NOT contains the letter 'B'`);
//second solution
if (stringLetter.includes('B')) {
  console.log(`The string ${stringLetter} contains the letter 'B'`);
} else {
  console.log(`The string ${stringLetter} does NOT contain the letter 'B'`);
}

console.log('');

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
console.log('Exercise 6: Check if a client will be allowed in a karting competition.');
const client1Age: number = 18;
const client1LapTime: number = 4234;
if (client1Age >= 18 && client1Age < 65) {
  if (client1LapTime < 60) {
    console.log(
      `The client meets the age and best lap time requirements and is allowed to proceed \n Age: ${client1Age} \n Time: ${client1LapTime}`,
    );
  } else {
    console.log(
      `The client meets the age requirement but does not have the required best lap time and is not allowed to proceed \n Age: ${client1Age} \n Time: ${client1LapTime}`,
    );
  }
} else {
  if (client1LapTime < 60) {
    console.log(
      `The client does not meet the age requirement, but has the required best lap time and is not allowed to proceed \n Age: ${client1Age} \n Time: ${client1LapTime}`,
    );
  } else {
    console.log(
      `The client does not meet both age and best time lap requirements, and is not allowed to proceed \n Age: ${client1Age} \n Time: ${client1LapTime}`,
    );
  }
}
console.log('');

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log('Exercise 7: Convert Strings to Uppercase (map)');
const arrayStrings: string[] = ['petur', 'dido', 'georgi', 'nikola', 'vasilena', 'martin'];
// let mapList = arrayStrings.map((name) => {
//   return name.toUpperCase();
// });
const mapList = arrayStrings.map((name) => name.toUpperCase());
console.log(mapList);
console.log('');

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log('Exercise 8: Filter Long Words (filter)');
const filterArray: string[] = ['computer', 'monitor', 'keyboard', 'mouse', 'cabel'];
const wordFilter = filterArray.filter((word) => word.length > 5);
console.log(wordFilter);
console.log('');

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
console.log('Exercise 9: Find Maximum Number (reduce)');
const maximumNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('');

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.
console.log('Exercise 10: Calculate Total Price (map + reduce)');
type Item = { name: string; price: number; quantity: number };
const items: Item[] = [
  { name: 'item1', price: 10, quantity: 2 },
  { name: 'item2', price: 20, quantity: 3 },
  { name: 'item3', price: 30, quantity: 4 },
];
const calculateNum = items.map((Item) => Item.price * Item.quantity);
console.log(calculateNum);
const sum = calculateNum.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);
console.log('');

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
console.log('Exercise 11: Get Unique Values (reduce)');
const duplicatedNumber: number[] = [2, 4, 23, 45, 4, 23, 85, 2345, 983, 2345, 85];
let uniqueNumber = duplicatedNumber.reduce(() => 0);

console.log('');

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
console.log('Exercise 12: Filter + Transform Users (filter + map – advanced)');
console.log('');
