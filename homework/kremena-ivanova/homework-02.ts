// npx ts-node homework/kremena-ivanova/homework-02.ts

// Part 1: Conditional Statements
// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isFemale: boolean = true;
if (isFemale) {
  console.log(`1) This person is a woman.`);
} else {
  console.log(`1) This person is a man.`);
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

let a: number = 300;
let b: number = 0;
let c: number = 875;

if (b < a && a < c) {
  console.log(`2) The number ${a} is between ${b} and ${c}`);
} else {
  console.log(`2) The number ${a} is NOT between ${b} and ${c}`); //edge-case: if a=b||a=c => logged here
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

let p: number = 13;
let q: number = 1780;
let r: number = 55.2;

if (p <= q && p <= r) {
  if (q <= r) {
    console.log(`3) The numbers in ascending order: ${p}, ${q}, ${r}`);
  } else {
    console.log(`3) The numbers in ascending order: ${p}, ${r}, ${q}`);
  }
} else if (q <= p && q <= r) {
  if (p <= r) {
    console.log(`3) The numbers in ascending order: ${q}, ${p}, ${r}`);
  } else {
    console.log(`3) The numbers in ascending order: ${q}, ${r}, ${p}`);
  }
} else {
  if (p <= q) {
    console.log(`3) The numbers in ascending order: ${r}, ${p}, ${q}`);
  } else {
    console.log(`3) The numbers in ascending order: ${r}, ${q}, ${p}`);
  }
}
// alternative, but not using if-else:
// let arrSort: number[] = [p, q, r].sort((a, b) => a - b);
// console.log(`3) The numbers in ascending order: ${arrSort.join(', ')}`);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

let myText: string = 'Hello Tom!';
let textLen = myText.length;
if (textLen > 10) {
  console.log(`4) The text contains more than 10 symbols`);
} else if (textLen === 10) {
  console.log(`4) The text contains 10 symbols`);
} else if (textLen > 0 && textLen < 10) {
  console.log(`4) The text contains less than 10 symbols`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

function checkContainsB(input: string) {
  if (input.includes('B')) {
    console.log(`5) The text ${input} conatins the letter 'B'`);
  } else {
    console.log(`5) The text ${input} does NOT conatin the letter 'B'`);
  }
}
checkContainsB('Bee');
checkContainsB('abc');

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

function checkIsEligable(age: number, time: number) {
  if (age <= 0 || time <= 0) {
    console.log(`6) Invalid input data`);
  } else if (age >= 18 && age < 65 && time < 60) {
    console.log(
      `6) This client is ${age} years old, best lap time: ${time} seconds and IS allowed to compete`,
    );
  } else if (age < 18 || age >= 65 || time > 60) {
    console.log(
      `6) This client is ${age} years old, best lap time: ${time} seconds and IS NOT allowed to compete`,
    );
  }
}
checkIsEligable(22, 58.15); //This client is 22 years old, best lap time: 58.15 seconds and IS allowed to compete
checkIsEligable(27, 75.05); //This client is 27 years old, best lap time: 75.05 seconds and IS NOT allowed to compete
checkIsEligable(65, 55.02); //This client is 65 years old, best lap time: 55.02 seconds and IS NOT allowed to compete
checkIsEligable(-5, 55.02); //Invalid input data

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let arrMyList: string[] = ['Elena', 'Maria', 'Peter', 'Martin'];
let listCaps: string[] = arrMyList.map((x: string) => x.toUpperCase());
console.log(`7) List in uppercase: [${listCaps.join(', ')}]`); //List in uppercase: [ELENA, MARIA, PETER, MARTIN]

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let arrFruits: string[] = ['pineapple', 'lemon', 'orange', 'kiwi', 'strawberry', 'grapefruit'];
let longNames: string[] = arrFruits.filter((x: string) => x.length > 5);
console.log(`8) Fruits with names longer than 5 letters: [${longNames.join(', ')}]`);
//Fruits with name longer than 5 letters: [pineapple, orange, strawberry, grapefruit]

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let arrNums: number[] = [1, 1000, 7, 0, 200, 23.5, -7];
let maxNumber: number = arrNums.reduce((acc: number, curr: number) => {
  return acc > curr ? acc : curr;
});
console.log(`9) Largest number: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: 'Cup', price: 50, quantity: 15 },
  { name: 'Frying pan', price: 120, quantity: 10 },
  { name: 'Pot', price: 110, quantity: 7 },
  { name: 'Spoon', price: 22, quantity: 12 },
];

const subTotals: number[] = items.map((it) => {
  return it.price * it.quantity;
});
//console.log(`10) [${subTotals}]`);
const total: number = subTotals.reduce((sum, curr) => sum + curr, 0);
console.log(`10) The total price for all the items is ${total}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

let arrDuplicates: number[] = [50, 6, 7, 50, 1, 50, 7, 2, 99, 99];
let arrUniqueValues: number[] = arrDuplicates.reduce((ac: number[], curr: number) => {
  if (!ac.includes(curr)) {
    ac.push(curr);
  }
  return ac;
}, []);

console.log(`11) Unique values: [${arrUniqueValues.join(', ')}]`); //11) Unique values: [50, 6, 7, 1, 2, 99]

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Milena', age: 28 },
  { name: 'Anita', age: 15 },
  { name: 'Emil', age: 22 },
  { name: 'Teo', age: 20 },
];

let adultUsers: User[] = users.filter((u: User) => u.age > 18);
let adultNames: string[] = adultUsers.map((u: User) => u.name);
console.log(`12) Adult users: [${adultNames.join(', ')}]`);
