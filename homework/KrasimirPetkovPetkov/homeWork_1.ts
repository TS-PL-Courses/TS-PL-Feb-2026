// Homework 01 - Simple Types

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.
console.log("===============Exercise 1 : Variable swapping===============");
let a: number = 10;
let b: number = 25;

const originalA: number = a;
const originalB: number = b;

const temp: number = a;
a = b;
b = temp;
console.log(`Original values -> a:${originalA} , b:${originalB}`);
console.log(`Final Values : a:${a} , b:${b}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check
// if first variable is even.
// Step 3: Log the result
console.log("\n=============== Exericise 2: Even or odd===============");
const numToCheck: number = 6;
const isEven: boolean = numToCheck % 2 === 0;
console.log(`Number :${numToCheck}`);
console.log(`Is even : ${isEven}`);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result
console.log("\n=============== Exercise 3: Positive number ===============");
const numberToVerify: number = -3;
const isPositive: boolean = numberToVerify > 0;
console.log(`Number :${numberToVerify}`);
console.log(`Is Positive: ${isPositive}`);
// Exercise 4: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result
console.log("\n=============== Exercise 4: Empty string ===============");
const textCheck: string = "";
const isEmpty: boolean = textCheck === "";
console.log(`Text: ${textCheck}`);
console.log(`Is empty : ${isEmpty}`);
// Exercise 5: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result
console.log("\n=============== Exercise 5: Starts with 'A' ===============");
const nameToCheck: string = "Krasir Petkov Petkov";
const StartWithA: boolean = nameToCheck.startsWith("A");
console.log(`Text: ${nameToCheck}`);
console.log(`Start with A latter : ${StartWithA}`);
// Exercise 6: Write code calculating the ammount of time a
//  QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string),
//  number of functionalities (whole number),
// lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test
//  all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete
//  {number of functionalities} project/s."
console.log(
  "\n=============== Exercise 6: QA time calculation ===============",
);
const qaName: string = "Krasimir";
const functionalitiesCountt: number = 400;
const hoursperFunctionalities: number = 2;

const totalHourseNeeded: number =
  functionalitiesCountt * hoursperFunctionalities;
console.log(
  `The QA ${qaName} will need ${totalHourseNeeded} hours to complete ${functionalitiesCountt}`,
);

// =========================
// Exercise 5: Celsius to Fahrenheit converter
// =========================
console.log("=== Exercise 5: Celsius to Fahrenheit ===");

const celsius: number = 25;
const fahrenheit: number = (celsius * 9) / 5 + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

// =========================
// Part 2 — Booleans
// Exercise 6: Login check
// =========================
console.log("\n=== Exercise 6: Login check ===");

const isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please log in");
}

// =========================
// Exercise 7: Entry permission
// =========================
console.log("\n=== Exercise 7: Entry permission ===");

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;

console.log(`Can enter: ${canEnter}`);

// =========================
// Part 3 — Strings
// Exercise 8: Check if a string is empty
// =========================
console.log("\n=== Exercise 8: Empty string check ===");

const strToCheck: string = "";
const isStrEmpty: boolean = strToCheck === "";

console.log(`String: "${strToCheck}"`);
console.log(`Is empty: ${isStrEmpty}`);

// =========================
// Exercise 9: Starts with 'A'
// =========================
console.log("\n=== Exercise 9: Starts with 'A' ===");

const strStarts: string = "Anna";
const startsWithA: boolean = strStarts.startsWith("A");

console.log(`String: "${strStarts}"`);
console.log(`Starts with 'A': ${startsWithA}`);

// =========================
// Exercise 10: String operations
// =========================
console.log("\n=== Exercise 10: String operations ===");

const message: string = "TypeScript is fun";

console.log(`Length: ${message.length}`);
console.log(`Uppercase: ${message.toUpperCase()}`);
console.log(`Lowercase: ${message.toLowerCase()}`);

const favoriteLanguage: string = "TypeScript";
console.log(`My favorite programming language is ${favoriteLanguage}`);

// =========================
// Part 4 — BigInt
// Exercise 11: BigInt addition
// =========================
console.log("\n=== Exercise 11: BigInt addition ===");

const big1: bigint = 1000000000000000000n;
const big2: bigint = 2222222222222222222n;
const bigSum: bigint = big1 + big2;

console.log(`BigInt sum: ${bigSum}`);

// =========================
// Part 5 — Array
// Exercise 12: Product of an array
// =========================
console.log("\n=== Exercise 12: Product of an array ===");

const numbers: number[] = [10, 20, 30, 40];
let product: number = 1;

for (const num of numbers) {
  product *= num;
}

console.log(`Product: ${product}`);

// =========================
// Exercise 13: Array of student objects
// =========================
console.log("\n=== Exercise 13: Students array ===");

type Student = { name: string; grade: number };

const students: Student[] = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
];

for (const student of students) {
  console.log(student.name);
}

// =========================
// Part 6 — Functions
// Exercise 14: Function with a union type
// =========================
console.log("\n=== Exercise 14: printId function ===");

function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId(123);
printId("ABC-123");

// =========================
// Exercise 15: QA time calculation
// =========================
console.log("\n=== Exercise 15: QA time calculation ===");

const qaNamee: string = "Krasimir";
const functionalitiesCounts: number = 12;
const hoursPerFunctionality: number = 2;

const totalHours: number = functionalitiesCounts * hoursPerFunctionality;

console.log(
  `The QA ${qaNamee} will need ${totalHours} hours to complete ${functionalitiesCounts} project/s.`,
);

// =========================
// Exercise 16: Union in objects
// =========================
console.log("\n=== Exercise 16: Union in objects ===");

type User = {
  id: number | string;
  name: string;
};

const user1: User = { id: 101, name: "Ivan" };
const user2: User = { id: "USR-202", name: "Maria" };

console.log(user1);
console.log(user2);

// =========================
// Optional Exercises
// Exercise 17: Remove duplicate numbers from an array
// =========================
console.log("\n=== Exercise 17: Remove duplicates ===");

const numsWithDuplicates: number[] = [10, 20, 10, 30, 40];
const uniqueNums: number[] = Array.from(new Set(numsWithDuplicates));

console.log(uniqueNums); // [10, 20, 30, 40]

// =========================
// Exercise 18: Difference between two arrays
// =========================
console.log("\n=== Exercise 18: Difference between two arrays ===");

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const onlyInArr1: number[] = arr1.filter((x) => !arr2.includes(x));
const onlyInArr2: number[] = arr2.filter((x) => !arr1.includes(x));

const difference: number[] = [...onlyInArr1, ...onlyInArr2];

console.log(difference); // [1, 2, 5]

// =========================
// Exercise 19: Union of two arrays
// =========================
console.log("\n=== Exercise 19: Union of two arrays ===");

const union: number[] = Array.from(new Set([...arr1, ...arr2]));

console.log(union); // [1, 2, 3, 4, 5]
