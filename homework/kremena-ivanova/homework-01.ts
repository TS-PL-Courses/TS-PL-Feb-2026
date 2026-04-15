// npx ts-node homework/kremena-ivanova/homework-01.ts

// Part 1 — Numbers (number)
// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

let a: number = 20;
let b: number = 8;
console.log(`1) Original values: a = ${a} , b = ${b}`);
let temp: number = a;
a = b;
b = temp;
console.log(`1) Swapped values: a = ${a} , b = ${b}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.

let numA: number = 17;
let numB: number = 300;
let isEvenNumA: boolean = numA % 2 === 0;
let isEvenNumB: boolean = numB % 2 === 0;
console.log(`2) Is ${numA} even? It is ${isEvenNumA}.`);
console.log(`2) Is ${numB} even? It is ${isEvenNumB}.`);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.

let numC: number = 300;
let numD: number = -30;
let isPositiveNumC: boolean = numC > 0;
let isPositiveNumD: boolean = numD > 0;
console.log(`3) Is it true: ${numC} is a positive number? It is ${isPositiveNumC}.`);
console.log(`3) Is it true: ${numD} is a positive number? It is ${isPositiveNumD}.`);

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log(`4) Total cost: ${totalCost}`);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

let tempCels: number = 32;
let tempFar: number = (tempCels * 9) / 5 + 32;
console.log(`5) Temperature ${tempCels} °C equals ${tempFar} °F`);

// Part 2 — Booleans (boolean)
// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".

let isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log(`6) Welcome!`);
} else {
  console.log(`6) Please log in`);
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable  with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called  that is true only if both variables are true.
// Step 4: Log the result of canEnter.

let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = true;
if (isAdult && hasTicket) {
  canEnter = true;
} else {
  canEnter = false;
}
console.log(`7) Is allowed to enter is ${canEnter}.`);

// Part 3 — Strings (string)
// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

let textHasContent: string = 'Short text.';
let emptyText: string = '';
let isFirstTextEmpty: boolean = textHasContent === '';
let isSecondTextEmpty: boolean = emptyText === '';
console.log(`8) Is the text empty? It is ${isFirstTextEmpty}. The content is: "${textHasContent}"`);
console.log(`8) Is the text empty? It is ${isSecondTextEmpty}.`);

//Variant with function (Exercise 8):
function checkText(input: string): void {
  if (input === '') {
    console.log(`8) The text is empty.`);
  } else {
    console.log(`8) The text is not empty. The content is: "${input}"`);
  }
}
checkText('My short sentence');
checkText('');

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

function checkIfStartsWithA(input: string): void {
  if (input.startsWith('A')) {
    console.log(`9) Yes, the word ${input} starts with "A".`);
  } else {
    console.log(`9) No, the word ${input} does not start with "A".`);
  }
}
checkIfStartsWithA('Flying');
checkIfStartsWithA('Amazing');

// Exercise 10: : String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".

let message: string = 'TypeScript is fun';
console.log(`10) Length of the message: ${message.length}`);
console.log(`10) Uppercase: ${message.toUpperCase()}`);
console.log(`10) Lowercase: ${message.toLowerCase()}`);
let favoriteLanguage: string = 'TypeScript';
console.log(`10) My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)
// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

let bigIntA: bigint = 1234567890123456789012345678901234567890n;
let bigIntB: bigint = 9876543210987654321098765432109876543210n;
let bigIntSum: bigint = bigIntA + bigIntB;
console.log(`11) The sum of the big integers is: ${bigIntSum}`);

// Part 5 — Array (array)
// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

let arr: number[] = [10, 20, 30, 40];
let productOfNums: number = 1;
for (let i = 0; i < arr.length; i++) {
  productOfNums *= arr[i];
  //console.log(productOfNums);
}
console.log(`12) Total product: ${productOfNums}.`);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

let students: { name: string; grade: number }[] = [
  { name: 'Anna', grade: 6 },
  { name: 'Tom', grade: 8 },
  { name: 'Paul', grade: 5 },
  { name: 'Jane', grade: 10 },
];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(`13) Student ${i + 1} name: ${student.name}`);
}

// Part 6 — Functions (function)
// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number) {
  console.log(`14) ID: ${id}`);
}
printId('MT0015PZ');
printId(175);

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

let qaName: string = 'Peter';
let numOfFunct: number = 17;
let totalTime: number = numOfFunct * 2;
console.log(
  `15) The QA ${qaName} will need ${totalTime} hours to complete ${numOfFunct} project/s.`,
);

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

type User = {
  id: number | string;
  name: string;
};

const user1: User = {
  id: 1315,
  name: 'Elian',
};

const user2: User = {
  id: 'NV-1700',
  name: 'Jane Smith',
};
console.log(`16) User1: id: ${user1.id}, name: ${user1.name}`);
console.log(`16) User2: id: ${user2.id}, name: ${user2.name}`);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

let arrNums: number[] = [10, 20, 10, 30, 40];
const uniqueNums = new Set(arrNums);
//console.log(uniqueNums);
let arrUniqueNums: number[] = Array.from(uniqueNums);
console.log(`17) The unique numbers are: ${arrUniqueNums}`);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];
let difference: number[] = [
  ...arr1.filter((num: number) => !arr2.includes(num)),
  ...arr2.filter((num: number) => !arr1.includes(num)),
];
console.log(`18) The unique numbers are: [${difference}]`);

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

let arrA: number[] = [1, 2, 3, 4];
let arrB: number[] = [3, 4, 5];
let combined = arrA.concat(arrB);
let unique = new Set(combined);
let union = Array.from(unique);
console.log(`19) The extraced unique numbers from the two arrays are: [${union}]`);
