// Homework 02

// Part 1: Conditional Statements

// Exercise 1


const isMale: boolean = true;

if (isMale) {
  console.log("The person is male");
} else {
  console.log("The person is female");
}

// Exercise 2
const firstNum: number = 5;
const secondNum: number = 1;
const thirdNum: number = 10;

if (firstNum > secondNum && firstNum < thirdNum) {
  console.log(`The number ${firstNum} is between ${secondNum} and ${thirdNum}`);
} else {
  console.log(`The number ${firstNum} is NOT between ${secondNum} and ${thirdNum}`);
}

// Exercise 3
let a: number = 3;
let b: number = 1;
let c: number = 2;

if (a > b) [a, b] = [b, a];
if (a > c) [a, c] = [c, a];
if (b > c) [b, c] = [c, b];

console.log(`Ascending order: ${a}, ${b}, ${c}`);

// Exercise 4
const myString: string = "HelloWorld123";

if (myString.length > 10) {
  console.log("The string has more than 10 characters");
} else {
  console.log("The string has 10 or fewer characters");
}

// Exercise 5
const shortString: string = "ABc";

if (shortString.includes("B")) {
  console.log(`The string ${shortString} contains the letter 'B'`);
} else {
  console.log(`The string ${shortString} does NOT contain the letter 'B'`);
}

// Exercise 6
const age: number = 25;
const bestLapTime: number = 58.5;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} → Allowed to compete`);
} else {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} → NOT allowed to compete`);
}


// Part 2: Map, Filter, Reduce

// Exercise 7
const words: string[] = ["hello", "world", "typescript"];

const upperWords = words.map(word => word.toUpperCase());

console.log(upperWords);

// Exercise 8
const wordList: string[] = ["apple", "banana", "kiwi", "strawberry"];

const longWords = wordList.filter(word => word.length > 5);

console.log(longWords);

// Exercise 9
const numbers: number[] = [10, 5, 20, 8];

const maxNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(maxNumber);

// Exercise 10
type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: "Apple", price: 2, quantity: 5 },
  { name: "Banana", price: 1, quantity: 10 },
  { name: "Orange", price: 3, quantity: 4 }
];

const totalPrice = items
  .map(item => item.price * item.quantity)
  .reduce((sum, value) => sum + value, 0);

console.log(totalPrice);

// Exercise 11
const numsWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numsWithDuplicates.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

// Exercise 12
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];

const adultNames = users
  .filter(user => user.age > 18)
  .map(user => user.name);

console.log(adultNames);