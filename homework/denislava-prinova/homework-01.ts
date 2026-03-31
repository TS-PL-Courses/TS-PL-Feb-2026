// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
let a: number = 5;
let b: number = 10;

console.log('Before swap:', a, b);

let temp: number = a;
a = b;
b = temp;

console.log('After swap:', a, b);

// Exercise 2: Check if a number is even or odd
let num: number = 7;
let isEven: boolean = num % 2 === 0;

console.log('Is even:', isEven);

// Exercise 3: Verify if a number is positive
let numberCheck: number = -3;
let isPositive: boolean = numberCheck > 0;

console.log('Is positive:', isPositive);

// Exercise 4: Total cost calculation
let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;

console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
let celsius: number = 25;
let fahrenheit: number = (celsius * 9) / 5 + 32;

console.log('Fahrenheit:', fahrenheit);

// Part 2 — Booleans (boolean)

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

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty
let text: string = '';
let isEmpty: boolean = text === '';

console.log('Is empty:', isEmpty);

// Exercise 9: Determine if a string starts with 'A'
let word: string = 'Apple';
let startsWithA: boolean = word.startsWith('A');

console.log('Starts with A:', startsWithA);

// Exercise 10: String operations
let message: string = 'TypeScript is fun';

console.log('Length:', message.length);
console.log('Uppercase:', message.toUpperCase());
console.log('Lowercase:', message.toLowerCase());

let favoriteLanguage: string = 'TypeScript';

console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
let big1: bigint = 100n;
let big2: bigint = 200n;
let bigSum: bigint = big1 + big2;

console.log('BigInt sum:', bigSum);

// Part 5 — Array (array)

// Exercise 12: Product of an array
let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;

for (let n of numbers) {
  product *= n;
}

console.log('Product:', product);

// Exercise 13: Array of student objects
type Student = {
  name: string;
  grade: number;
};

let students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

for (let student of students) {
  console.log('Student name:', student.name);
}

// Part 6 — Functions (function)

// Exercise 14: Function with a union type
function printId(id: string | number): void {
  console.log('ID:', id);
}

printId(123);
printId('ABC');

// Exercise 15: QA testing time calculation
let qaName: string = 'John';
let functionalities: number = 5;
let timePerFeature: number = 2;

let totalTime: number = functionalities * timePerFeature;

console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${functionalities} project/s.`,
);

// Exercise 16: Union in objects
type User = {
  id: number | string;
  name: string;
};

let user1: User = { id: 1, name: 'Alice' };
let user2: User = { id: 'abc123', name: 'Bob' };

console.log(user1, user2);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
let arrDup: number[] = [10, 20, 10, 30, 40];
let uniqueArr: number[] = [...new Set(arrDup)];

console.log('Unique array:', uniqueArr);

// Exercise 18: Find the difference between two arrays
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];

let difference: number[] = [
  ...arr1.filter((x) => !arr2.includes(x)),
  ...arr2.filter((x) => !arr1.includes(x)),
];

console.log('Difference:', difference);

// Exercise 19: Find the union of two arrays
let union: number[] = [...new Set([...arr1, ...arr2])];

console.log('Union:', union);
