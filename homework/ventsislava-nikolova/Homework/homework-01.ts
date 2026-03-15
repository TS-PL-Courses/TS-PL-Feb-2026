// Homework 01

// Part 1 — Numbers

// Exercise 1: Variable swapping
let a: number = 5;
let b: number = 10;

console.log('Original values:', a, b);

let temp = a;
a = b;
b = temp;

console.log('Swapped values:', a, b);

// Exercise 2: Check if a number is even or odd
let num: number = 8;
let isEven: boolean = num % 2 === 0;

console.log('Is even:', isEven);

// Exercise 3: Verify if a number is positive
let number: number = -3;
let isPositive: boolean = number > 0;

console.log('Is positive:', isPositive);

// Exercise 4: Total cost calculation
let price: number = 19.99;
let quantity: number = 3;

let totalCost: number = price * quantity;

console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
let celsius: number = 25;
let fahrenheit: number = (celsius * 9) / 5 + 32;

console.log('Temperature in Fahrenheit:', fahrenheit);

// Part 2 — Booleans

// Exercise 6: Login check
let isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
let hasTicket: boolean = true;
let isAdult: boolean = false;

let canEnter: boolean = hasTicket && isAdult;

console.log('Can enter:', canEnter);

// Part 3 — Strings

// Exercise 8: Check if a string is empty
let text: string = '';

let isEmpty: boolean = text === '';

console.log('Is empty:', isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
let nameStr: string = 'Alice';

let startsWithA: boolean = nameStr.startsWith('A');

console.log('Starts with A:', startsWithA);

// Exercise 10: String operations
let message: string = 'TypeScript is fun';

console.log('Length:', message.length);
console.log('Uppercase:', message.toUpperCase());
console.log('Lowercase:', message.toLowerCase());

let favoriteLanguage: string = 'TypeScript';

console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt

// Exercise 11: BigInt addition
let big1: bigint = 9007199254740991n;
let big2: bigint = 10n;

let bigSum: bigint = big1 + big2;

console.log('BigInt sum:', bigSum);

// Part 5 — Array

// Exercise 12: Product of an array
let numbers: number[] = [10, 20, 30, 40];

let product: number = 1;

for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i];
}

console.log('Product:', product);

// Exercise 13: Array of student objects
let students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

for (let student of students) {
  console.log(student.name);
}

// Part 6 — Functions

// Exercise 14: Function with a union type
function printId(id: string | number): void {
  console.log('ID:', id);
}

printId(101);
printId('ABC123');

// Exercise 15: QA testing time
let qaName: string = 'John';
let functionalities: number = 5;

let timePerFeature = 2;
let totalTime = functionalities * timePerFeature;

console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${functionalities} project/s.`,
);

// Exercise 16: Union in objects
type User = {
  id: number | string;
  name: string;
};

let user1: User = {
  id: 1,
  name: 'Alice',
};

let user2: User = {
  id: 'USR-001',
  name: 'Bob',
};

console.log(user1, user2);

// Optional Exercises

// Exercise 17: Remove duplicate numbers
let numbers1: number[] = [10, 20, 10, 30, 40];
let uniqueNumbers: number[] = [];

for (let i = 0; i < numbers1.length; i++) {
  if (!uniqueNumbers.includes(numbers1[i])) {
    uniqueNumbers.push(numbers1[i]);
  }
}

console.log(uniqueNumbers);

// Exercise 18: Difference between two arrays
let array1: number[] = [1, 2, 3, 4];
let array2: number[] = [3, 4, 5];

let difference: number[] = [];

// elements in array1 but not in array2
for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    difference.push(array1[i]);
  }
}

// elements in array2 but not in array1
for (let i = 0; i < array2.length; i++) {
  if (!array1.includes(array2[i])) {
    difference.push(array2[i]);
  }
}

console.log(difference);

// Exercise 19: Union of two arrays
let a1: number[] = [1, 2, 3, 4];
let a2: number[] = [3, 4, 5];

let union: number[] = [];

// add array1 elements
for (let i = 0; i < a1.length; i++) {
  if (!union.includes(a1[i])) {
    union.push(a1[i]);
  }
}

// add array2 elements
for (let i = 0; i < a2.length; i++) {
  if (!union.includes(a2[i])) {
    union.push(a2[i]);
  }
}

console.log(union);
