//npx ts-node homework/Ivan-panayotov/Typescript/homework-2

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

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

const firstNumber: number = 5;
const secondNumber: number = 2;
const thirdNumber: number = 9;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const firstNumber1: number = 5;
const secondNumber1: number = 2;
const thirdNumber1: number = 9;

let small: number;
let middle: number;
let large: number;

if (firstNumber1 <= secondNumber1 && firstNumber1 <= thirdNumber1) {
  small = firstNumber1;

  if (secondNumber1 <= thirdNumber1) {
    middle = secondNumber1;
    large = thirdNumber1;
  } else {
    middle = thirdNumber1;
    large = secondNumber1;
  }
} else if (secondNumber1 <= firstNumber1 && secondNumber1 <= thirdNumber1) {
  small = secondNumber1;

  if (firstNumber1 <= thirdNumber1) {
    middle = firstNumber1;
    large = thirdNumber1;
  } else {
    middle = thirdNumber1;
    large = firstNumber1;
  }
} else {
  small = thirdNumber1;

  if (firstNumber1 <= secondNumber1) {
    middle = firstNumber1;
    large = secondNumber1;
  } else {
    middle = secondNumber1;
    large = firstNumber1;
  }
}

console.log(`Ascending order: ${small}, ${middle}, ${large}`);

// Exercise 4: Check if a string has more than 10 characters

const someString: string = 'HelloTypescript';

if (someString.length > 10) {
  console.log('The string has more than 10 characters');
} else {
  console.log('The string has 10 or fewer characters');
}

// Exercise 5: Check if a string contains the letter 'B'

const shortString: string = 'aBc';

if (shortString.includes('B')) {
  console.log(`The string ${shortString} contains the letter 'B'`);
} else {
  console.log(`The string ${shortString} does NOT contain the letter 'B'`);
}

// Exercise 6: Karting competition check

const age: number = 25;
const bestLapTime: number = 58.4;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} - Allowed to compete`);
} else {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} - NOT allowed to compete`);
}

// Exercise 7: Convert Strings to Uppercase (map)

const words: string[] = ['hello', 'world', 'typescript'];

const uppercasedWords = words.map((word) => {
  return word.toUpperCase();
});

console.log(uppercasedWords);

// Exercise 8: Filter Long Words (filter)

const wordsList: string[] = ['apple', 'banana', 'kiwi', 'strawberry'];

const longWords = wordsList.filter((word) => {
  return word.length > 5;
});

console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)

const numbers: number[] = [3, 7, 2, 9, 5];

const maxNumber = numbers.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
});

console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: 'apple', price: 2, quantity: 3 },
  { name: 'banana', price: 1, quantity: 5 },
  { name: 'orange', price: 3, quantity: 2 },
];

const itemTotals = items.map((item) => {
  return item.price * item.quantity;
});

const totalPrice = itemTotals.reduce((total, current) => {
  return total + current;
}, 0);

console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)

const numbersWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbersWithDuplicates.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Ivan', age: 17 },
  { name: 'Maria', age: 22 },
  { name: 'Georgi', age: 30 },
];

const adultUsers = users.filter((user) => {
  return user.age > 18;
});

const adultNames = adultUsers.map((user) => {
  return user.name;
});

console.log(adultNames);
