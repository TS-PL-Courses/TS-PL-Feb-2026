// Homework 02
// npx ts-node homework/boris-popov/homework-02-boris-popov.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
console.log('-----Exercise 1: Use a boolean as an if/else condition-----');
let isMale: boolean = false;
if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers
console.log('-----Exercise 2: Check if a number is between two other numbers-----');
let firstNumber: number = 350;
let secondNumber: number = 400;
let thirdNumber: number = 180;
let isBetween: boolean =
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber);

if (isBetween) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
console.log('-----Exercise 3: Multiple number comparison-----');
let firstNumber2: number = 5;
let secondNumber2: number = 4;
let thirdNumber2: number = 1;

//Option 1: Using if/else statements
if (firstNumber2 > secondNumber2 && secondNumber2 > thirdNumber2) {
  console.log(`The order of the numbers is: ${thirdNumber2}, ${secondNumber2}, ${firstNumber2}`);
} else if (firstNumber2 < secondNumber2 && secondNumber2 < thirdNumber2) {
  console.log(`The order of the numbers is: ${firstNumber2}, ${secondNumber2}, ${thirdNumber2}`);
} else if (firstNumber2 > secondNumber2 && secondNumber2 < thirdNumber2) {
  if (firstNumber2 > thirdNumber2) {
    console.log(`The order of the numbers is: ${secondNumber2}, ${thirdNumber2}, ${firstNumber2}`);
  } else {
    console.log(`The order of the numbers is: ${secondNumber2}, ${firstNumber2}, ${thirdNumber2}`);
  }
} else if (firstNumber2 < secondNumber2 && secondNumber2 > thirdNumber2) {
  if (firstNumber2 > thirdNumber2) {
    console.log(`The order of the numbers is: ${thirdNumber2}, ${firstNumber2}, ${secondNumber2}`);
  } else {
    console.log(`The order of the numbers is: ${firstNumber2}, ${thirdNumber2}, ${secondNumber2}`);
  }
}

//Option 2: Using array and sort method
const numbers = [firstNumber2, secondNumber2, thirdNumber2];
numbers.sort((a, b) => a - b);
console.log(`The order of the numbers is: ${numbers[0]}, ${numbers[1]}, ${numbers[2]}`);

// Exercise 4: Check if a string has more than 10 characters
console.log('-----Exercise 4: Check if a string has more than 10 characters-----');
let stringToCheck: string = 'This is my string';

if (stringToCheck.length > 10) {
  console.log(`The string "${stringToCheck}" has MORE than 10 characters.`);
} else if (stringToCheck.length === 10) {
  console.log(`The string "${stringToCheck}" has EXACTLY 10 characters.`);
} else {
  console.log(`The string "${stringToCheck}" has LESS than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
console.log('-----Exercise 5: Check if a string contains the letter "B"-----');
let stringToCheck2: string = 'aBc';

if (stringToCheck2.includes('B')) {
  console.log(`The string "${stringToCheck2}" contains the letter 'B'.`);
} else {
  console.log(`The string "${stringToCheck2}" does NOT contain the letter 'B'.`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
console.log('-----Exercise 6: Check if a client will be allowed in a karting competition-----');
let clientAge: number = 35;
let clientBestLapTime: number = 55.5;

if (clientAge >= 18 && clientAge < 65 && clientBestLapTime < 60) {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${clientBestLapTime}. The client is allowed to compete.`,
  );
} else {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${clientBestLapTime}. The client is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
console.log('-----Exercise 7: Convert Strings to Uppercase (map)-----');
let stringArray: string[] = ['testing', 'uppercase', 'strings'];
let uppercaseArray: string[] = stringArray.map((str) => str.toUpperCase());
console.log(uppercaseArray);

// Exercise 8: Filter Long Words (filter)
console.log('-----Exercise 8: Filter Long Words (filter)-----');
let wordArray: string[] = [
  'asl',
  'ggnore',
  'lllllooooonnnnnggggg',
  'boo',
  'another long one',
  'glhf',
  'lorem ipsum',
];
let longWordsArray: string[] = wordArray.filter((word) => word.length > 5);
console.log(longWordsArray);

// Exercise 9: Find Maximum Number (reduce)
console.log('-----Exercise 9: Find Maximum Number (reduce)-----');
let numberArray: number[] = [5, 10, 3, 18, 2];
let maxNumber: number = numberArray.reduce(
  (max, current) => (current > max ? current : max),
  numberArray[0],
);
console.log(`The largest number is: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
console.log('-----Exercise 10: Calculate Total Price (map + reduce)-----');
type Item = {
  name: string;
  price: number;
  quantity: number;
};
let items: Item[] = [
  { name: 'Item 1', price: 10, quantity: 2 },
  { name: 'Item 2', price: 5, quantity: 5 },
  { name: 'Item 3', price: 15, quantity: 1 },
];
let totalPrice: number = items
  .map((item) => item.price * item.quantity)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`The total price is: ${totalPrice}`);

// Exercise 11: Get Unique Values (reduce)
console.log('-----Exercise 11: Get Unique Values (reduce)-----');
let initialNumbers: number[] = [1, 20, 3, 20, 4, 1, 5, 3, 2, 5, 6];

let uniqueNumbers = initialNumbers.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(`The initial numbers are: ${initialNumbers}`);
console.log(`The unique numbers are: ${uniqueNumbers}`);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
console.log('-----Exercise 12: Filter + Transform Users (filter + map – advanced)-----');
type User = {
  name: string;
  age: number;
};
let users: User[] = [
  { name: 'Bilbo', age: 25 },
  { name: 'Eomer', age: 17 },
  { name: 'Gandalf', age: 30 },
  { name: 'Faramir', age: 15 },
];
let filteredUsers = users.filter((user) => user.age > 18);
let userNames = filteredUsers.map((user) => user.name);
console.log(`The names of users over 18 are: ${userNames}`);
