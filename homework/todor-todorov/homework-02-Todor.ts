// npx ts-node homework/todor-todorov/homework-02-Todor.ts

// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isMale: boolean = false;

if (isMale) {
  console.log('The persen is male');
} else {
  console.log('The persen is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

let firstNumber: number = 5;
let secondNumber: number = 10;
let thirdNumber: number = 15;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

firstNumber = 10;
secondNumber = 5;
thirdNumber = 9;

if (firstNumber < secondNumber && secondNumber < thirdNumber) {
  console.log(`The numbers are ${firstNumber}, ${secondNumber}, ${thirdNumber}`);
} else if (firstNumber > secondNumber && secondNumber > thirdNumber) {
  console.log(`The numbers are ${thirdNumber}, ${secondNumber}, ${firstNumber}`);
} else if (firstNumber < secondNumber && secondNumber > thirdNumber) {
  console.log(`The numbers are ${firstNumber}, ${thirdNumber}, ${secondNumber}`);
} else if (firstNumber < secondNumber && secondNumber < thirdNumber) {
  console.log(`The numbers are ${firstNumber}, ${secondNumber}, ${thirdNumber}`);
} else if (secondNumber < firstNumber && firstNumber < thirdNumber) {
  console.log(`The numbers are ${secondNumber}, ${firstNumber}, ${thirdNumber}`);
} else if (secondNumber < thirdNumber && thirdNumber < firstNumber) {
  console.log(`The numbers are ${secondNumber}, ${thirdNumber}, ${firstNumber}`);
} else {
  console.log('There are equal numbers');
}
// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const newString: string = 'any String';

if (newString.length > 10) {
  console.log('String is more that 10 characters long');
} else {
  console.log('String is less that 10 characters long');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const capitalString: string = 'Obb';

if (capitalString.includes('B')) {
  console.log(`The string ${capitalString} contains the letter 'B'`);
} else {
  console.log(`The string ${capitalString} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const clientAge: number = 25;
const clientBestLap: number = 33.33;

if (clientAge >= 18 && clientAge < 65 && clientBestLap < 60) {
  console.log(
    `Client age is ${clientAge}, his best lap is ${clientBestLap} and he is allowed to compete`,
  );
} else {
  console.log(
    `Client age is ${clientAge}, his best lap is ${clientBestLap} and he is NOT allowed to compete`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let nameArray: string[] = ['Ivan', 'Todor', 'Mitko'];

let upperArray: string[] = nameArray.map((num) => num.toUpperCase());

console.log(upperArray);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let numberArr: number[] = [1, 3, 5, 7, 10];
let biggestNumber: number = numberArr.reduce((acc, num) => (acc > num ? acc : num), 0);
console.log(biggestNumber);

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

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
