// npx ts-node homework/katrin-kamenova/homework_02.ts
// Homework 02

// Exercise 1: Use a boolean as an if/else condition
let isMale: boolean = true;

if (isMale) {
  console.log('This person is male');
} else {
  console.log('This person is female');
}

// Exercise 2: Check if a number is between two other numbers
let num1: number = 2;
let num2: number = 6;
let num3: number = 10;

if (num1 > num2 && num1 < num3) {
  console.log(`The number ${num1} is between ${num2} and ${num3}`);
<<<<<<< HEAD
=======
  if (num2 < num3) {
    console.log(`The number ${num2} is between ${num1} and ${num3}`);
  }
>>>>>>> main
} else {
  console.log(`The number ${num1} is NOT between ${num2} and ${num3}`);
}

// Exercise 3: Multiple number comparison
let a: number = 5;
let b: number = 9;
let c: number = 3;

let first: number, second: number, third: number;

// Проверяваме коя е най-малката
if (a <= b && a <= c) {
  first = a;
  second = b <= c ? b : c;
  third = b <= c ? c : b;
} else if (b <= a && b <= c) {
  first = b;
  second = a <= c ? a : c;
  third = a <= c ? c : a;
} else {
  first = c;
  second = a <= b ? a : b;
  third = a <= b ? b : a;
}

console.log(first, second, third);

// Exercise 4: Check if a string has more than 10 characters
const str: string = 'Hello, World!';

if (str.length > 10) {
  console.log(`The string ${str} is more than 10 characters long.`);
} else {
  console.log(`The string ${str} is not more than 10 characters long.`);
}

// Exercise 5: Check if a string contains the letter 'B'
let str1: string = 'Banana';

if (str1.includes('B')) {
  console.log(`The string: '${str1}' contains the letter 'B'`);
<<<<<<< HEAD
=======
  str1.toLowerCase().includes('b')
    ? console.log(`The string: '${str1}' contains the letter 'b'`)
    : console.log(`The string: '${str1}' does NOT contain the letter 'b'`);
>>>>>>> main
} else {
  console.log(`The string: '${str1}' does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.

const clientAge: number = 21; // try with higher than 65 and lower than 18 to test the conditions
const bestLapTime: number = 57.9; //try with higher and lower values to test the conditions

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(`Client is allowed to complete.`);
  console.log(`Client's age: ${clientAge}`);
  console.log(`Client's best lap time is: ${bestLapTime}`);
} else {
  console.log(`Client is NOT allowed to complete.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)

let array: string[] = ['Apple', 'Kiwi', 'Avocado', 'Cherry'];
let upperCaseArr: string[] = array.map((str) => str.toUpperCase());
console.log(upperCaseArr);

let lowerCaseArr: string[] = array.map((str1) => str1.toLowerCase());
console.log(lowerCaseArr);

// Exercise 8: Filter Long Words (filter)

let arrayOfWords: string[] = ['Tiger', 'Cat', 'Giragffe'];
let longWords: string[] = arrayOfWords.filter((word) => word.length > 5);
console.log(longWords);
