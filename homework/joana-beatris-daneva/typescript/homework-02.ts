// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

console.log('Exercise 1');

let isMale = true;

if (isMale) {
  console.log('This person is male');
} else {
  console.log('This person is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

console.log('\nExercise 2');

let firstNumber: number = 15;
let secondNumber: number = 10;
let thirdNumber: number = 20;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

console.log('\nExercise 3');

let a: number = 15;
let b: number = 10;
let c: number = 20;

if (a <= b && a <= c) {
  if (b <= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b <= a && b <= c) {
  if (a <= c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a <= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

//solution with array, compare function & sort method
const numbers: number[] = [15, 10, 20];

numbers.sort((a, b) => a - b);

console.log(...numbers);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

console.log('\nExercise 4');

const greet: string = 'Hello';

if (greet.length > 10) {
  console.log(`"${greet}" is greater than 10 characters.`);
} else {
  console.log(`"${greet}" is NOT greater than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

console.log('\nExercise 5');

let word: string = 'Yes';
let letter: string = 'B';

if (word.includes(letter)) {
  console.log(`The string "${word}" contains the letter ${letter}`);
} else {
  console.log(`The string "${word}" does NOT contain the letter ${letter}`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

console.log('\nExercise 6');

const clientAge: number = 30;
const lapTime: number = 100.1;

if (clientAge >= 18 && clientAge <= 64 && lapTime < 60) {
  console.log(
    `The client's age is ${clientAge}, best time is ${lapTime}. Client is allowed to compete.`,
  );
} else {
  console.log(
    `The client's age is ${clientAge}, best time is ${lapTime}. Client is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('\nExercise 7');

const words: string[] = ['phone', 'tablet', 'glass'];

const mapCallback = function (input: string): string {
  return input.toUpperCase();
};

const upperWords: string[] = words.map(mapCallback);

console.log(...upperWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('\nExercise 8');

const allWords: string[] = ['phone', 'tablet', 'glass'];

const filterCallback = function (input: string): boolean {
  return input.length > 5;
};

const longWords: string[] = allWords.filter(filterCallback);

console.log(...longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

console.log('\nExercise 9');

const allNumbers: number[] = [2, 30, 100, 4000, 33];

const reduceCallback = function (acc: number, element: number): number {
  console.log(`Current max: ${acc}. Current element: ${element}`);
  if (acc < element) {
    return element;
  } else {
    return acc;
  }
};

const maxNumber: number = allNumbers.reduce(reduceCallback, allNumbers[0]);

console.log(`\nMax element: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

console.log('\nExercise 10');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const products: Item[] = [
  { name: 'bread', price: 1, quantity: 2 },
  { name: 'milk', price: 2, quantity: 3 },
];

const mapCalculate = function (input: Item): number {
  return input.price * input.quantity;
};

const subTotals: number[] = products.map(mapCalculate);

const reduceSum = function (total: number, subTotal: number): number {
  return total + subTotal;
};

const totalSum: number = subTotals.reduce(reduceSum, 0);

console.log(totalSum);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

//console.log('\nExercise 11');

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

console.log('\nExercise 12');

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Joana', age: 30 },
  { name: 'Stefan', age: 20 },
  { name: 'Jason', age: 18 },
  { name: 'Irena', age: 17 },
];

const filterAdults = function (user: User) {
  return user.age > 18;
};

const adults: User[] = users.filter(filterAdults);

//console.log(adults)

const mapAdults = function (user: User) {
  return user.name;
};

const names: string[] = adults.map(mapAdults);

console.log(names.join(', '));
