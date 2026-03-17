// npx ts-node homework/todor-todorov/homework01Todor.ts

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let firstNumber: number = 7;
let secondNumber: number = 14;

// I would print firstNumber and secondNumber here but it's written to be printed after the swap in Step 3.
// console.log(firstNumber);
// console.log(secondNumber);

const firstNumberSaved: number = firstNumber;

firstNumber = secondNumber;
secondNumber = firstNumberSaved;

console.log(firstNumberSaved);
console.log(firstNumber);

console.log(firstNumber);
console.log(secondNumber);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

let anyNumber: number = 887;
let evenNumber: boolean = true;

const remainderNumber = anyNumber % 2;

if (remainderNumber === 0) {
  evenNumber = true;
  console.log('Number is Even');
} else {
  console.log('Number is Odd');
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

let anyNumber1: number = 0;
let isPositive: boolean = true;

if (anyNumber1 < 0) {
  isPositive = false;
  console.log(isPositive);
} else if (anyNumber1 === 0) {
  console.log('Number is 0');
} else {
  console.log(isPositive);
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
let quantity: number = 3;
let totalPrice: number = price * quantity;

console.log(totalPrice);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

let temperatureInCelsius: number = 0;
let temperatureInFahrenheit: number = temperatureInCelsius * (9 / 5) + 32;
console.log(temperatureInFahrenheit);

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

let isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in!');
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

let hasTicket: boolean = true;
let isAdult: boolean = false;

let canEnter: boolean = hasTicket && isAdult;
console.log(canEnter);

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

const anyString: string = 'Hello World !';
let isEmptyString: boolean = anyString === '';
console.log(isEmptyString);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

const newString: string = 'Agronom';
let itStartsWithA: boolean = newString.charAt(0) === 'A';
console.log(itStartsWithA);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

const funString: string = 'TypeScript is fun';
const funStringLength: number = funString.length;
const funStringUpperCase: string = funString.toUpperCase();
const funStringLowerCase: string = funString.toLowerCase();
console.log(funStringLength);
console.log(funStringUpperCase);
console.log(funStringLowerCase);
let favoriteLanguage: string = 'TypeScript';
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

const bigIntNumber: bigint = 4223453532314n;
const bigIntSecondNumber: bigint = 136563634573n;
let sumOfBigInts: bigint = bigIntNumber + bigIntSecondNumber;
console.log(sumOfBigInts);

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

const firstArray: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;
for (const num of firstArray) {
  totalProduct *= num;
}

console.log(totalProduct);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

let students = [
  { name: 'Todor', grade: 100 },
  { name: 'Ani', grade: 95 },
  { name: 'Krisi', grade: 2000 },
  { name: 'Ivan', grade: 35 },
];

let names: string[] = [];

for (const student of students) {
  names.push(student.name);
}

console.log(names);

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

function printId(values: string | number): void {
  console.log('The id is', values);
}

printId('66');
