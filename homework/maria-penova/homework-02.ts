// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition

// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
let isMale: boolean = true;

// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers

// Step 1: Declare 3 number variables.
let firstNumber: number = 5;
let secondNumber: number = 1;
let thirdNumber: number = 10;

// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison

// Step 1: Declare 3 number variables.
let num1: number = 7;
let num2: number = 3;
let num3: number = 5;

// Step 2: Log the numbers in ascending order using if-else statements.
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 <= num2) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num3}, ${num2}, ${num1}`);
  }
}

// Exercise 4: Check if a string has more than 10 characters

// Step 1: Declare a variable and assign any string to it.
let myString: string = 'Hello, World!';

// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (myString.length > 10) {
  console.log(`The string "${myString}" has more than 10 characters.`);
} else {
  console.log(`The string "${myString}" does NOT have more than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'

// Step 1: Declare a variable and assign a 3-character string to it.
let shortString: string = 'Bob';
let anotherShortString: string = 'Tom';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
if (shortString.includes('B')) {
  console.log(`The string "${shortString}" contains the letter 'B'`);
} else {
  console.log(`The string "${shortString}" does NOT contain the letter 'B'`);
}

if (anotherShortString.includes('B')) {
  console.log(`The string "${anotherShortString}" contains the letter 'B'`);
} else {
  console.log(`The string "${anotherShortString}" does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.

// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
let clientAge: number = 25;
let bestLapTime: number = 55.5;
let anotherClientAge: number = 17;
let anotherBestLapTime: number = 65.0;

// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const isFirstAllowedToCompete: boolean = clientAge >= 18 && clientAge < 65 && bestLapTime < 60;
const isSecondAllowedToCompete: boolean = anotherClientAge >= 18 && anotherClientAge < 65 && anotherBestLapTime < 60;

if (isFirstAllowedToCompete) {
  console.log(`Client age: ${clientAge}, Lap time: ${bestLapTime}. Result: Allowed to compete!`);
} else {
  console.log(`Client age: ${clientAge}, Lap time: ${bestLapTime}. Result: NOT allowed.`);
}

if (isSecondAllowedToCompete) {
  console.log(`Client age: ${anotherClientAge}, Lap time: ${anotherBestLapTime}. Result: Allowed to compete!`);
} else {
  console.log(`Client age: ${anotherClientAge}, Lap time: ${anotherBestLapTime}. Result: NOT allowed.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)

// Step 1: Declare a variable and assign an array of strings to it.
let fruits: string[] = ['apple', 'banana', 'cherry', 'date'];

// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
let uppercaseFruits: string[] = fruits.map(fruit => {
  return fruit.toUpperCase();
});

// Step 4: Log the result.
console.log(uppercaseFruits);

// Exercise 8: Filter Long Words (filter)

// Step 1: Declare a variable and assign an array of words to it.
let words: string[] = ['short', 'medium', 'longer', 'tiny', 'lengthy'];

// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
let longWords: string[] = words.filter((word) => {
  return word.length > 5;
});
// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)

// Step 1: Declare a variable and assign an array of numbers to it.
let numbers: number[] = [3, 17, 2, 23, 56, 41];

// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
const maxNumber: number = numbers.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
}, numbers[0]);

// Step 4: Log the result.
console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)

// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};

// Step 2: Create an array of items.
const items: Item[] = [
  { name: 'Book', price: 12.99, quantity: 2 },
  { name: 'Pen', price: 1.5, quantity: 10 },
  { name: 'Notebook', price: 5.25, quantity: 3 },
  { name: 'Monitor', price: 300, quantity: 2 },
];

// Step 3: Use map() to calculate price × quantity for each item.
const subTotals: number[] = items.map((item) => {
  return item.price * item.quantity;
});

// Step 4: Use reduce() to sum all values.
const total: number = subTotals.reduce((sum, current) => sum + current, 0);

// Step 5: Log the total.
console.log('Sub-totals for each item:', subTotals);
console.log(`Total price of the cart: $${total}`);

// Exercise 11: Get Unique Values (reduce)

// Step 1: Declare a variable and assign an array of numbers with duplicates.
let numbersWithDuplicates: number[] = [1, 2, 2, 3, 2, 4, 4, 4, 1, 5, 6, 6];

// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
const uniqueNumbers: number[] = numbersWithDuplicates.reduce(
  (accumulator: number[], currentValue: number) => {
    if (accumulator.includes(currentValue)) {
      return accumulator;
    } else {
      accumulator.push(currentValue);
      return accumulator;
    }
  },
  [],
);

// Step 4: Log the result.
console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)

// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};

// Step 2: Create an array of users.
const users: User[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 16 },
  { name: 'Maria', age: 28 },
  { name: 'Ivan', age: 17 },
  { name: 'Elena', age: 35 },
  { name: 'Stefan', age: 15 },
  { name: 'Alex', age: 19 },
];

// Step 3: Use filter() to keep only users over 18.
const adults: User[] = users.filter((user) => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
});

// Step 4: Use map() to extract their names.
const adultUserNames: string[] = adults.map((user) => user.name);

// Step 5: Log the result
console.log(adultUserNames);
