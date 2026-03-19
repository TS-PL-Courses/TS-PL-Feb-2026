// Homework 01 - Simple Types

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.
console.log('===============Exercise 1 : Variable swapping===============');
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
console.log('\n=============== Exericise 2: Even or odd===============');
const numToCheck: number = 6;
const isEven: boolean = numToCheck % 2 === 0;
console.log(`Number :${numToCheck}`);
console.log(`Is even : ${isEven}`);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result
console.log('\n=============== Exercise 3: Positive number ===============');
const numberToVerify: number = -3;
const isPositive: boolean = numberToVerify > 0;
console.log(`Number :${numberToVerify}`);
console.log(`Is Positive: ${isPositive}`);
// Exercise 4: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result
console.log('\n=============== Exercise 4: Empty string ===============');
const textCheck: string = '';
const isEmpty: boolean = textCheck === '';
console.log(`Text: ${textCheck}`);
console.log(`Is empty : ${isEmpty}`);
// Exercise 5: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result
console.log("\n=============== Exercise 5: Starts with 'A' ===============");
const nameToCheck: string = 'Krasir Petkov Petkov';
const StartWithA: boolean = nameToCheck.startsWith('A');
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
console.log('\n=============== Exercise 6: QA time calculation ===============');
const qaName: string = 'Krasimir';
const functionalitiesCount: number = 400;
const hoursperFunctionalities: number = 2;

const totalHourseNeeded: number = functionalitiesCount * hoursperFunctionalities;
console.log(
  `The QA ${qaNamee} will need ${totalHours} hours to complete ${functionalitiesCounts} project/s.`,
);
