// npx ts-node homework/petar-petrov/typescript-homeworks/homework-02.ts

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
let firstNum: number = 15;
let secondNum: number = 10;
let thirdNum: number = 20;

// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
if (firstNum > secondNum && firstNum < thirdNum) {
  console.log(`The number ${firstNum} is between ${secondNum} and ${thirdNum}`);
} else {
  console.log(`The number ${firstNum} is NOT between ${secondNum} and ${thirdNum}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
let x: number = 30;
let y: number = 10;
let z: number = 20;

// Step 2: Log the numbers in ascending order using if-else statements.
if (x <= y && x <= z) {
  if (y <= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y <= x && y <= z) {
  if (x <= z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else {
  if (x <= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
let myString: string = 'Hello, TypeScript!';

// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (myString.length > 10) {
  console.log(`"${myString}" has more than 10 characters.`);
} else {
  console.log(`"${myString}" does NOT have more than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
let str: string = 'Typescript';

// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
if (str.includes('B')) {
  console.log(`The string ${str} contains the letter 'B'`);
} else {
  console.log(`The string ${str} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
let age: number = 25;
let bestLapTime: number = 55.3;

// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`Age: ${age}, Best lap time: ${bestLapTime}s — allowed to compete.`);
} else {
  console.log(`Age: ${age}, Best lap time: ${bestLapTime}s — NOT allowed to compete.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
let upperFruits: string[] = fruits.map((fruit) => fruit.toUpperCase());

// Step 4: Log the result.
console.log(upperFruits);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
let words: string[] = ['cat', 'elephant', 'dog', 'butterfly', 'ant', 'tiger'];

// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
let longWords: string[] = words.filter((word) => word.length > 5);

// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
let nums: number[] = [3, 17, 8, 42, 5, 29];

// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// reduce() goes through each number and keeps track of the largest one seen so far.
let maxNum: number = nums.reduce((largest, current) => {
  if (current > largest) {
    return current;
  } else {
    return largest;
  }
});

// Step 4: Log the result.
console.log('Max number:', maxNum);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};

// Step 2: Create an array of items.
let items: Item[] = [
  { name: 'Apple', price: 1.5, quantity: 4 },
  { name: 'Bread', price: 2.0, quantity: 2 },
  { name: 'Milk', price: 1.2, quantity: 3 },
];

// Step 3: Use map() to calculate price × quantity for each item.
let itemTotals: number[] = items.map((item) => item.price * item.quantity);

// Step 4: Use reduce() to sum all values.
let totalPrice: number = itemTotals.reduce((sum, current) => sum + current, 0);

// Step 5: Log the total.
console.log('Total price:', totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
let numsWithDuplicates: number[] = [1, 2, 3, 2, 4, 1, 5, 3];

// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// reduce() builds a new array. For each number, we only add it if it's not already in the accumulator.
let uniqueNums: number[] = numsWithDuplicates.reduce((acc: number[], current: number) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

// Step 4: Log the result.
console.log(uniqueNums);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
type Person = {
  name: string;
  age: number;
};

// Step 2: Create an array of users.
let people: Person[] = [
  { name: 'Alex', age: 22 },
  { name: 'Petar', age: 16 },
  { name: 'Ina', age: 30 },
  { name: 'Maria', age: 15 },
];

// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
let adultNames: string[] = people.filter((person) => person.age > 18).map((person) => person.name);

// Step 5: Log the result.
console.log(adultNames);
