// Homework 02

// Part 1: Conditional Statements

// Exercise 1
const isMale: boolean = true;

if (isMale) {
  console.log('The person is male');
} else {
  console.log('The person is female');
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
const a: number = 7;
const b: number = 3;
const c: number = 5;

let smallest: number;
let middle: number;
let largest: number;

if (a <= b && a <= c) {
  smallest = a;
  if (b <= c) {
    middle = b;
    largest = c;
  } else {
    middle = c;
    largest = b;
  }
} else if (b <= a && b <= c) {
  smallest = b;
  if (a <= c) {
    middle = a;
    largest = c;
  } else {
    middle = c;
    largest = a;
  }
} else {
  smallest = c;
  if (a <= b) {
    middle = a;
    largest = b;
  } else {
    middle = b;
    largest = a;
  }
}

console.log(`Ascending order: ${smallest}, ${middle}, ${largest}`);

// Exercise 4
const someString: string = 'HelloWorld123';

if (someString.length > 10) {
  console.log('The string has more than 10 characters');
} else {
  console.log('The string has 10 or fewer characters');
}

// Exercise 5
const shortString: string = 'aBc';

if (shortString.includes('B')) {
  console.log(`The string ${shortString} contains the letter 'B'`);
} else {
  console.log(`The string ${shortString} does NOT contain the letter 'B'`);
}

// Exercise 6
const age: number = 25;
const bestLapTime: number = 58.7;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} -> Allowed to compete`);
} else {
  console.log(`Age: ${age}, Lap Time: ${bestLapTime} -> NOT allowed to compete`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7
const words: string[] = ['hello', 'world', 'typescript'];

const upperWords = words.map((word) => word.toUpperCase());

console.log(upperWords);

// Exercise 8
const wordsList: string[] = ['apple', 'banana', 'kiwi', 'strawberry', 'pear'];

const longWords = wordsList.filter((word) => word.length > 5);

console.log(longWords);

// Exercise 9
const numbers: number[] = [10, 25, 5, 40, 15];

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
  { name: 'Apple', price: 2, quantity: 5 },
  { name: 'Banana', price: 1, quantity: 10 },
  { name: 'Orange', price: 3, quantity: 4 },
];

const totalPrice = items
  .map((item) => item.price * item.quantity)
  .reduce((sum, value) => sum + value, 0);

console.log(totalPrice);

// Exercise 11
const numsWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

const uniqueNums = numsWithDuplicates.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueNums);

// Exercise 12
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Ivan', age: 20 },
  { name: 'Maria', age: 17 },
  { name: 'Georgi', age: 30 },
];

const adultNames = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(adultNames);
