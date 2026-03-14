//npx ts-node homework/rosen-leonidov/homework-01.ts

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

// Exercise 4: Check if a string is empty
let text: string = 'Hello';
let isEmpty: boolean = text === '';
console.log(`The string "${text}" is empty: ${isEmpty}`);

// Exercise 5: Determine if a string starts with the letter 'A'
let word: string = 'Awesome';
let startsWithA: boolean = word[0] === 'A';
console.log(`The string "${word}" starts with 'A': ${startsWithA}`);

// Exercise 6: Calculate the time a QA engineer needs to test functionalities
let qaName: string = 'Rosen';
let numberOfFunctionalities: number = 5;
let timePerFunctionality: number = 2;
let totalTime: number = numberOfFunctionalities * timePerFunctionality;
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`,
);
