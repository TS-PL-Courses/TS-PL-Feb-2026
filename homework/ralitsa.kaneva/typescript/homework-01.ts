// Homework 01 - Simple Types

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
let number1: number = 10;
let number2: number = 20;
console.log(
  `Exercise 1: Variable swapping\nOriginal values: number1 = ${number1}, number2 = ${number2}`,
);
// Step 2: Swap their values.
let helper: number = number1;
number1 = number2;
number2 = helper;
console.log(`Swapped values: number1 = ${number1}, number2 = ${number2}\n`);
// Step 3: Log the original values and the final values.
//Logged in the previous steps

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
let a: number = 15;
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
let isEven: boolean = a % 2 === 0;
// Step 3: Log the result
console.log("Exercise 2: Check if a number is even or odd.");
if (isEven) {
  console.log(`The number ${a} is even.\n`);
} else {
  console.log(`The number ${a} is odd.\n`);
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
let b: number = 8;
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
let isPositive: boolean = b > 0;
// Step 3: Log the result
console.log("Exercise 3: Verify if a number is positive.");
if (isPositive) {
  console.log(`The number ${b} is positive.\n`);
} else {
  console.log(`The number ${b} is negative.`);
}

// Exercise 4: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
let str1: string = "";
// Step 2: Declare a boolean variable and check if first variable is an empty string.
let isEmpty: boolean = str1 === "";
// Step 3: Log the result
console.log("Exercise 4: Check if a string is empty.");
if (isEmpty) {
  console.log(`The string "str1" is empty.\n`);
} else {
  console.log(`The string "str1" is not empty. Its value is "${str1}".\n`);
}

// Exercise 5: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
let str2: string = "Apple";
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
let isFirstLetterA: boolean = str2.startsWith("A");
// Step 3: Log the result
console.log("Exercise 5: Determine if a string starts with the letter 'A'.");
if (isFirstLetterA) {
  console.log(`The string "${str2}" starts with the letter "A".\n`);
} else {
  console.log(`The string "${str2}" does not start with the letter "A".`);
}

// Exercise 6: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
type QAInfo = {
  qaName: string;
  numberOfFunctionalities: number;
  timePerFunctionality: number;
};

const QA: QAInfo = {
  qaName: "Ralitsa Kaneva",
  numberOfFunctionalities: 8,
  timePerFunctionality: 2,
};

function calculateTotalTimeForTesting({
  numberOfFunctionalities,
  timePerFunctionality,
}: QAInfo): number {
  return numberOfFunctionalities * timePerFunctionality;
}
// Step 2: Calculate the total time needed to test all functionalities.
const totalTimeForTesting = calculateTotalTimeForTesting(QA);
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
console.log("Exercise 6: Calculate the time needed for testing.");
console.log(
  `The QA ${QA.qaName} will need ${totalTimeForTesting} hours to complete ${QA.numberOfFunctionalities} project/s.`,
);

