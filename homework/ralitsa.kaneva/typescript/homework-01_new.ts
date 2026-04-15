// Homework 01

// Part 1 — Numbers (number)

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
const a: number = 15;
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
const isEven: boolean = a % 2 === 0;
// Step 3: Log the result
console.log("Exercise 2: Check if a number is even or odd.");
if (isEven) {
  console.log(`The number ${a} is even.\n`);
} else {
  console.log(`The number ${a} is odd.\n`);
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
const b: number = 8;
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
const isPositive: boolean = b > 0;
// Step 3: Log the result
console.log("Exercise 3: Verify if a number is positive.");
if (isPositive) {
  console.log(`The number ${b} is positive.\n`);
} else {
  console.log(`The number ${b} is negative.\n`);
}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
const price: number = 19.0;
// Step 2: Create another variable called quantity with the value 3.
const quantity: number = 3;
// Step 3: Calculate the total cost by multiplying price and quantity.
const totalCoast: number = price * quantity;
// Step 4: Log the total cost.
console.log("Exercise 4: Total cost calculation.");
console.log(`The total cost is: ${totalCoast}\n`);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
let celsius: number = 24;
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
let farenheit = (celsius * 9) / 5 + 32;
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.
console.log("Exercise 5: Celsius to Fahrenheit converter.");
console.log(
  `${celsius} degrees Celsius are equal to ${farenheit} degrees Fahrenheit.\n`,
);

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean = true;
// Step 2: If isLoggedIn is true, log "Welcome!".
console.log("Exercise 6: Login check.");
if (isLoggedIn) {
  console.log('"Welcome!".\n');
} else {
  console.log('"Please log in".\n');
}
// Step 3: If isLoggedIn is false, log "Please log in".
//Logged in the previous steps

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
let hasTicket: boolean;
hasTicket = true;
// Step 2: Create a boolean variable isAdult with value false.
let isAdult: boolean;
isAdult = false;
// Step 3: Create a variable called canEnter that is true only if both variables are true.
let canEnter: boolean;
if (hasTicket && isAdult) {
  canEnter = true;
} else {
  canEnter = false;
}
// Step 4: Log the result of canEnter.
console.log("Exercise 7: Entry permission.");
if (canEnter) {
  console.log(`Entry permissions granted.\n`);
} else {
  console.log(`Entry permissions denied.\n`);
}

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
const str1: string = "";
// Step 2: Declare a boolean variable and check if first variable is an empty string.
const isEmpty: boolean = str1 === "";
// Step 3: Log the result
console.log("Exercise 8: Check if a string is empty.");
if (isEmpty) {
  console.log(`The string "str1" is empty.\n`);
} else {
  console.log(`The string "str1" is not empty. Its value is "${str1}".\n`);
}

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
const str2: string = "Apple";
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
const isFirstLetterA: boolean = str2.startsWith("A");
// Step 3: Log the result
console.log("Exercise 9: Determine if a string starts with the letter 'A'.");
if (isFirstLetterA) {
  console.log(`The string "${str2}" starts with the letter "A".\n`);
} else {
  console.log(`The string "${str2}" does not start with the letter "A".`);
}

// Exercise 10: String operations
console.log("Exercise 10: String operations.");
// Step 1: Create a string variable message with the value "TypeScript is fun".
const message: string = "TypeScript is fun";
// Step 2: Log the length of the string.
let messageLength: number = message.length;
console.log(`The message length is: ${messageLength}.`);
// Step 3: Log the string in uppercase.
let messageInUpperCase: string = message.toUpperCase();
console.log(`The message in uppercase is: ${messageInUpperCase}.`);
// Step 4: Log the string in lowercase.
let messageInLowerCase: string = message.toLowerCase();
console.log(`The message in lowercase is: ${messageInLowerCase}.`);
// Step 5: Create a variable called favoriteLanguage.
const favoriteLanguage: string = "Bulgarian";
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
console.log(`My favorite programming language is ${favoriteLanguage}.\n`);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
console.log("Exercise 11: BigInt addition.");
// Step 1: Create two bigint numbers.
const bigInt1: bigint = 1007199254740991n;
const bigInt2: bigint = 8000000000000000n;
// Step 2: Add the two bigint numbers together.
const bigIntSum: bigint = bigInt1 + bigInt2;
// Step 3: Log the result.
console.log(`The sum of the two big integers is: ${bigIntSum}.\n`);

// Part 5 — Array (array)

// Exercise 12: Product of an array
console.log("Exercise 12: Product of an array.");
// Step 1: Create an array with the numbers [10, 20, 30, 40].
const numbers: number[] = [10, 20, 30, 40];
// Step 2: Create a variable to store the total product.
let totalProduct: number = 1;
// Step 3: Use a loop to multiply all numbers in the array.
for (let i = 0; i < numbers.length; i++) {
  totalProduct *= numbers[i];
}
// Step 4: Log the final product.
console.log(
  `The multiplication result of all numbers in the array is: ${totalProduct}.\n`,
);

// Exercise 13: Array of student objects
console.log("Exercise 13: Array of student objects.");
// Step 1: Create an array called students.
let students: string[] = [];
// Step 2: Each object should contain name and grade.
const studentsObject: { name: string; grade: number }[] = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
];
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
for (let i = 0; i < studentsObject.length; i++) {
  students.push(studentsObject[i].name);
}
// Step 5: Log each student's name.
console.log(`Students names are: ${students.join(", ")}.\n`);

// Part 6 — Functions (function)

// Exercise 14: Function with union type
console.log("Exercise 14: Function with union type.");
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.
function printID(id: string | number): void {
  console.log(`ID = ${id}.\n`);
}
printID(12345);

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
console.log(
  "Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities.",
);
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
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

const totalTimeForTesting = calculateTotalTimeForTesting(QA);
console.log(
  `The QA ${QA.qaName} will need ${totalTimeForTesting} hours to complete ${QA.numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
console.log("Exercise 16: Union in objects.");
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
  id: 6,
  name: "Ralitsa",
};
const user2: User = {
  id: "6A",
  name: "Kaneva",
};
console.log(`User 1: id = ${user1.id}, name = ${user1.name}.`);
console.log(`User 2: id = ${user2.id}, name = ${user2.name}.\n`);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
console.log("Exercise 17: Remove duplicate numbers from an array.");
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].
let arrayNumbers: number[] = [10, 20, 10, 30, 40];
const uniqueArrayNumbers: number[] = [];
let isDuplicate = false;

for (let i = 0; i < arrayNumbers.length; i++) {
  for (let j = i + 1; j < arrayNumbers.length; j++) {
    if (arrayNumbers[i] === arrayNumbers[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArrayNumbers.push(arrayNumbers[i]);
  }
  isDuplicate = false;
}
console.log(`Array without duplicates: [${uniqueArrayNumbers.sort()}].\n`);

// Exercise 18: Find the difference between two arrays
console.log("Exercise 18: Find the difference between two arrays.");
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
let isInArr1andArr2: boolean;
let difference: number;
let inArr1AndArr2: number[] = [];

inArr1AndArr2 = [
  ...arr1.filter((item) => !arr2.includes(item)),
  ...arr2.filter((item) => !arr1.includes(item)),
];

console.log(`The unique elements from both arrays are: [${inArr1AndArr2}].\n`);

// Exercise 19: Find the union of two arrays
console.log("Exercise 19: Find the union of two arrays.");
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].
const arr3: number[] = [1, 2, 3, 4];
const arr4: number[] = [3, 4, 5];
let combinedArrays: number[] = [];
let unionArray: number[] = [];
let isDuplicated = false;

combinedArrays = arr3.concat(arr4);

for (let m = 0; m < combinedArrays.length; m++) {
  for (let n = m + 1; n < combinedArrays.length; n++) {
    if (combinedArrays[m] === combinedArrays[n]) {
      isDuplicated = true;
      break;
    }
  }
  if (!isDuplicated) {
    unionArray.push(combinedArrays[m]);
  }
  isDuplicated = false;
}
console.log(`The union of two arrays is: [${unionArray}].\n`);
