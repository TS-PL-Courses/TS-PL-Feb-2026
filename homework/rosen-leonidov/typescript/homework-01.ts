//npx ts-node homework/rosen-leonidov/typescript/homework-01.ts

// Exercise 1: Variable swapping
let firstNumber: number = 5;
let secondNumber: number = 10;
console.log(`Original values: firstNumber = ${firstNumber}, secondNumber = ${secondNumber}`);

let temp: number = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
console.log(`Swapped values: firstNumber = ${firstNumber}, secondNumber = ${secondNumber}`);

// Exercise 2: Check if a number is even or odd
let num: number = 42;
let isEven: boolean = num % 2 === 0;
console.log(`The number ${num} is even: ${isEven}`);

// Exercise 3: Verify if a number is positive
let value: number = -7;
let isPositive: boolean = value > 0;
console.log(`The number ${value} is positive: ${isPositive}`);

// Exercise 4: Total cost calculation
let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log(`Total cost: ${totalCost}`);

// Exercise 5: Celsius to Fahrenheit converter
let celsius: number = 25;
let fahrenheit: number = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

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
console.log(`Can enter: ${canEnter}`);

// Exercise 8: Check if a string is empty
let text: string = 'Hello';
let isEmpty: boolean = text === '';
console.log(`The string "${text}" is empty: ${isEmpty}`);

// Exercise 9: Determine if a string starts with the letter 'A'
let word: string = 'Awesome';
let startsWithA: boolean = word[0] === 'A';
console.log(`The string "${word}" starts with 'A': ${startsWithA}`);

// Exercise 10: String operations
let message: string = 'TypeScript is fun';
console.log(`Length: ${message.length}`);
console.log(`Uppercase: ${message.toUpperCase()}`);
console.log(`Lowercase: ${message.toLowerCase()}`);
let favoriteLanguage: string = 'TypeScript';
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Exercise 11: BigInt addition
let bigNum1: bigint = 9007199254740991n;
let bigNum2: bigint = 1234567890123456789n;
let bigSum: bigint = bigNum1 + bigNum2;
console.log(`BigInt sum: ${bigSum}`);

// Exercise 12: Product of an array
let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;
for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i];
}
console.log(`Product: ${product}`);

// Exercise 13: Array of student objects
let students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Exercise 14: Function with a union type
function printId(id: string | number): undefined {
  console.log(`ID: ${id}`);
}
printId(101);
printId('abc-202');

// Exercise 15: Calculate the time a QA engineer needs to test functionalities
const calculateQaTime = (
  qaName: string,
  numberOfFunctionalities: number,
  timePerFunctionality: number,
): string => {
  const totalTime: number = numberOfFunctionalities * timePerFunctionality;
  return `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`;
};
console.log(calculateQaTime('Rosen', 5, 2));

// Exercise 16: Union in objects
type User = {
  id: number | string;
  name: string;
};
const createUser = (id: number | string, name: string): User => {
  return { id, name };
};
const user1: User = createUser(1, 'Alice');
const user2: User = createUser('user-42', 'Bob');
console.log(user1);
console.log(user2);

// Exercise 17: Remove duplicate numbers from an array
let duplicateNumbers: number[] = [10, 20, 10, 30, 40];
let uniqueNumbers: number[] = [...new Set(duplicateNumbers)];
console.log(uniqueNumbers);

// Exercise 18: Find the difference between two arrays
let array1: number[] = [1, 2, 3, 4];
let array2: number[] = [3, 4, 5];
let difference: number[] = [];

for (let num of array1) {
  if (!array2.includes(num)) {
    difference.push(num);
  }
}

for (let num of array2) {
  if (!array1.includes(num)) {
    difference.push(num);
  }
}
console.log(difference);

// Exercise 19: Find the union of two arrays
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];
let union: number[] = [...new Set([...arr1, ...arr2])];
console.log(union);
