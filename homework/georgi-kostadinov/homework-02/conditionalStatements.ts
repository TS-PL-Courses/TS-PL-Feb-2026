// ==============================
// Part 1: Conditional Statements
// ==============================

// Exercise 1: Use a boolean as an if/else condition

const isMale: boolean = true;

if (isMale) {
  console.log(`Exercise 1 - Toshko is male`);
} else {
  console.log(`Exercise 1 - Toshko is female`);
}

// Exercise 2: Check if a number is between two other numbers

const firstNumber: number = 3;
const secondNumber: number = 2;
const thirdNumber: number = 4;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(
    `Exercise 2 - The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`,
  );
} else {
  console.log(
    `Exercise 2 - The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`,
  );
}

// Exercise 3: Multiple number comparison

const a: number = 5;
const b: number = 7;
const c: number = 9;

if (a < b && a < c) {
  if (b < c) {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${a}, ${b}, ${c}`,
    );
  } else {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${a}, ${c}, ${b}`,
    );
  }
} else if (b < a && b < c) {
  if (a < c) {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${b}, ${a}, ${c}`,
    );
  } else {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${b}, ${c}, ${a}`,
    );
  }
} else {
  if (a < b) {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${c}, ${a}, ${b}`,
    );
  } else {
    console.log(
      `Exercise 3 - The ascending order of the numbers is the following => ${c}, ${b}, ${a}`,
    );
  }
}

// Exercise 4: Check if a string has more than 10 characters

const word: string = 'Programming';
let isWordLongEnough: boolean;

if (word.length > 10) {
  isWordLongEnough = true;
  console.log(
    `Exercise 4 - Is the length of the word greater than 10 characters => ${isWordLongEnough}`,
  );
} else {
  isWordLongEnough = false;
  console.log(
    `Exercise 4 - Is the length of the word greater than 10 characters => ${isWordLongEnough}`,
  );
}

// Exercise 5: Check if a string contains the letter 'B'

const text: string = 'cBa';

if (text.includes('B')) {
  console.log(`Exercise 5 - The string ${text} contains the letter 'B'`);
} else {
  console.log(`Exercise 5 - The string ${text} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.

const age: number = 20;
const bestLapTime: number = 60.5;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(
    `Exercise 6 - The age of the client is ${age}, his best lap time is ${bestLapTime} and he is allowed to compete`,
  );
} else {
  console.log(
    `Exercise 6 - The age of the client is ${age}, his best lap time is ${bestLapTime} and he is NOT allowed to compete`,
  );
}
