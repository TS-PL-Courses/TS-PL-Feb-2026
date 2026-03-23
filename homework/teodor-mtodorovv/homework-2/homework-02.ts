// Homework 02

// npx ts-node homework/teodor-mtodorovv/homework-2/homework-02.ts

// Part 1: Conditional Statements
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
let isMale: boolean = false;

// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
if (isMale) {
  console.log(`This person is male`);
} else {
  console.log(`This person is female`);
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
const firstNumber: number = 2;
const secondNumber: number = 1;
const thirdNumber: number = 3;

// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
if (firstNumber > secondNumber && thirdNumber > firstNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
const number1: number = 20;
const number2: number = 10;
const number3: number = 30;

// Step 2: Log the numbers in ascending order using if-else statements.
if (number1 <= number2 && number1 <= number3) {
  if (number2 <= number3) {
    console.log(`${number1}, ${number2}, ${number3}`);
  } else {
    console.log(`${number1}, ${number3}, ${number2}`);
  }
} else if (number2 <= number1 && number2 <= number3) {
  if (number1 <= number3) {
    console.log(`${number2}, ${number1}, ${number3}`);
  } else {
    console.log(`${number2}, ${number3}, ${number1}`);
  }
} else {
  if (number1 <= number2) {
    console.log(`${number3}, ${number1}, ${number2}`);
  } else {
    console.log(`${number3}, ${number2}, ${number1}`);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
const varLength: string = 'Elephant';

// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

if (varLength.length > 10) {
  console.log(`The string ${varLength} string contains more than 10 symbols`);
} else {
  console.log(`The string ${varLength} string contains less than 10 symbols`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
const secondText = 'ABC';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
if (secondText.includes('B')) {
  console.log(`The string ${secondText} contains the letter 'B'`);
} else {
  console.log(`The string ${secondText} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
const clientAge: number = 22;
const clientBestTime: number = 67.3;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
if (clientAge >= 18 && clientAge < 65 && clientBestTime < 60) {
  console.log(
    `Client age: ${clientAge}, client best time: ${clientBestTime}, and he is allowed to participate in the competition`,
  );
} else {
  console.log(
    `Client age: ${clientAge}, client best time: ${clientBestTime}, and he is NOT allowed to participate in the competition`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
const words: string[] = ['my', 'type', 'script', 'course'];
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
const upperCaseWords: string[] = words.map((word) => word.toUpperCase());
// Step 4: Log the result.
console.log(upperCaseWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
const footballTeams: string[] = ['Ajax', 'Barcelona', 'Milan', 'AEK'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
const shortTeams: string[] = footballTeams.filter((team) => team.length < 5);
// Step 4: Log the result.
console.log(shortTeams);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
const numberArray: number[] = [1, 2, 3, 4];
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
const maxNumber: number = numberArray.reduce(
  (max, current) => (current > max ? current : max),
  numberArray[0],
);
// Step 4: Log the result.
console.log(`The maximum number is: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};
// Step 2: Create an array of items.
const itemsArray: Item[] = [
  { name: 'car', price: 20000, quantity: 1 },
  { name: 'mobile', price: 105.5, quantity: 11 },
  { name: 'pen', price: 1.2, quantity: 150 },
];
// Step 3: Use map() to calculate price × quantity for each item.
const itemsPrice: number[] = itemsArray.map((item) => item.price * item.quantity);
// Step 4: Use reduce() to sum all values.
const sumValues = itemsPrice.reduce((sum, current) => sum + current, 0);
// Step 5: Log the total.
console.log(itemsPrice);
console.log(sumValues);

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
