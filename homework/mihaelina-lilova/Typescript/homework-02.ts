// npx ts-node homework/mihaelina-lilova/Typescript/homework-02.ts

// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isMale: boolean = false;

if (isMale) {
  console.log('The person is male');
} else {
  console.log('The person is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

let num1: number = 2;
let num2: number = 6;
let num3: number = 10;

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
  console.log(`The number ${num1} is between ${num2} and ${num3}`);
} else {
  console.log(`The number ${num1} is NOT between ${num2} and ${num3}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

let numberOne: number = 1;
let numberTwo: number = 3;
let numberThree: number = 2;

if (numberOne > numberTwo) {
  if (numberTwo > numberThree) {
    console.log(numberThree, numberTwo, numberOne);
  } else if (numberOne > numberThree) {
    console.log(numberTwo, numberThree, numberOne);
  } else {
    console.log(numberTwo, numberOne, numberThree);
  }
} else if (numberTwo > numberThree) {
  if (numberOne > numberThree) {
    console.log(numberThree, numberOne, numberTwo);
  } else {
    console.log(numberOne, numberThree, numberTwo);
  }
} else {
  console.log(numberOne, numberTwo, numberThree);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

let randomString: string = 'This is a random string';

if (randomString.length > 10) {
  console.log('This string is longer than 10 symbols');
} else {
  console.log('This string is NOT longer than 10 symbols');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

let threeSymbolVariable: string = 'aBc';

if (threeSymbolVariable.includes('B')) {
  console.log(`The string ${threeSymbolVariable} contains the letter 'B'`);
} else {
  console.log(`The string ${threeSymbolVariable} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

let age: number = 19;
let bestLapTime: number = 59.9;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(
    `The client's age is ${age}. The client's best lap time is ${bestLapTime}. The client is allowed to compete.`,
  );
} else {
  console.log(
    `The client's age is ${age}. The client's best lap time is ${bestLapTime}. The client is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let newString: string[] = ['ajfDfppr djdWef', 'djgT', 'Thdd', 'djfgM', 'djg73m'];
let finalString = newString.map((num) => num.toUpperCase());

console.log(finalString);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let arrOfWords: string[] = [
  'apple',
  'banana',
  'pineapple',
  'grapes',
  'orange',
  'egg',
  'cherry',
  'pear',
];
let longerTnanFiveChars = arrOfWords.filter((num) => num.length > 5);
console.log(longerTnanFiveChars);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let arrOfNumbers: number[] = [1, 7, 12, 3, 9, 10];
let largestNumber = arrOfNumbers.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
});

console.log(largestNumber);

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

const arrOfItems: Item[] = [
  { name: 'Laptop', price: 1250, quantity: 10 },
  { name: 'Mouse', price: 50, quantity: 150 },
  { name: 'Keyboard', price: 150, quantity: 50 },
  { name: 'Headphone', price: 60, quantity: 85 },
];

let finalPrice = arrOfItems.map((item) => item.price * item.quantity);
let totalSum = finalPrice.reduce((acc, item) => acc + item, 0);

console.log(`The total sum is ${totalSum}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

let arrayOfNumbers: number[] = [1, 5, 2, 10, 1, 14, 10, 3, 2];

let newArrayNoDuplicates = arrayOfNumbers.reduce((acc: number[], num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(newArrayNoDuplicates);

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

const allUsers: User[] = [
  { name: 'John', age: 20 },
  { name: 'Paola', age: 13 },
  { name: 'Sam', age: 48 },
  { name: 'Jack', age: 30 },
  { name: 'Samantha', age: 82 },
  { name: 'Even', age: 10 },
];

let adults = allUsers.filter((element) => element.age >= 18);

console.log(adults.map((user) => user.name));
