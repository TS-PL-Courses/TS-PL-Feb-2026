// npx ts-node homework/Ivan-panayotov/Typescript/homework.ts

// Step 1: Declare 2 variables with numbers
let a: number = 5;
let b: number = 10;

// Step 2: Save original values
const originalA: number = a;
const originalB: number = b;

// Step 3: Swap values
let temp: number = a;
a = b;
b = temp;

// Step 4: Log results
console.log('Original values:');
console.log('a =', originalA);
console.log('b =', originalB);

console.log('After swapping:');
console.log('a =', a);
console.log('b =', b);

// Step 1: Declare a variable and assign any number to it
let num: number = 7;

// Step 2: Check if the number is even
let isEven: boolean = num % 2 === 0;

// Step 3: Log the result
console.log('Number:', num);
console.log('Is even:', isEven);

// Step 1: Declare a variable and assign any number to it
let number: number = -3;

// Step 2: Check if the number is positive
let isPositive: boolean = number > 0;

// Step 3: Log the result
console.log('Number:', number);
console.log('Is positive:', isPositive);

// Step 1: Declare a variable and assign any string to it
let text1: string = 'Hello';

// Step 2: Check if the string is empty
let isEmpty: boolean = text1 === '';

// Step 3: Log the result
console.log('Text:', text1);
console.log('Is empty:', isEmpty);

// Step 1: Declare a variable and assign any string to it
let text: string = 'Apple';

// Step 2: Check if the string starts with "A"
let startsWithA: boolean = text[0] === 'A';

// Step 3: Log the result
console.log('Text:', text);
console.log('Starts with A:', startsWithA);

// Step 1: Declare variables
let qaName: string = 'Ivan';
let functionalities: number = 5;
let timePerFunctionality: number = 2;

// Step 2: Calculate total time
let totalTime: number = functionalities * timePerFunctionality;

// Step 3: Log the result
console.log(
  `The QA ${qaName} will need ${totalTime} hours to complete ${functionalities} project/s.`,
);
