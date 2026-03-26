// npx ts-node typescript/functions/functions.ts

// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// syntax:
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// examples:

// simplest implementation: void function, no parameters:
function printHello(): void {
  console.log('Hello!');
}
// function invocation:
printHello();

/**
 * Multiply two numbers
 * @type {number} a - the first number to be multiplied
 * @type {number} b - the second number to be multiplied
 * @returns {number} the product of a and b
 */
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(5, 10)); // 50

// Optional Parameters - the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0); // if c is not provided, it will be undefined, so we use || to default to 0
}
console.log(add(5, 10));

// Default Parameters - for parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}
console.log(pow(5)); // 5^10 = 9765625

const numbersArr: number[] = [1, 2, 3, 4, 5, 6];

const filterCallback = function (num: number) {
  return num % 2 === 0;
};

// FILTER: get only even numbers (numbers divisible by 2 with no remainder)
// num % 2 === 0 → checks if the remainder when dividing by 2 is 0
// filter returns a NEW array and does not mutate the original one
const evenNumbers = numbersArr.filter((num) => num % 2 === 0);

// Same logic as above, but using an external callback function (filterCallback)
const evenNumbers2 = numbersArr.filter(filterCallback);

// Log the filtered results
console.log(evenNumbers);
console.log(evenNumbers2);

// Callback function for map
// Takes a number and returns it multiplied by 2
const mapCallback = function (num: number) {
  return num * 2;
};

// MAP: create a new array where each number is multiplied by 2
// map transforms each element in the array
const doubleNumbers = numbersArr.map((num) => num * 2);

// Same operation, but using a separate callback function
const doubleNumbers2 = numbersArr.map(mapCallback);

// Log the results
console.log(doubleNumbers);
console.log(doubleNumbers2);

// Callback for reduce when working with strings
// acc (accumulator) stores the accumulated result
// num is the current element in the array
const sumCallback = function (acc: string, num: string) {
  // Log current accumulator value
  // console.log('acc', acc);

  // Log current element
  // console.log('num', num);

  // concat joins strings together
  return acc.concat(num);
};

// REDUCE: calculate the sum of all numbers in the array
// acc starts at 0 (initial value)
// each iteration adds the current number to the accumulator
const sum = numbersArr.reduce((acc, num) => acc + num, 0);

const stringsArr: string[] = ['1', '2', '3', '4', '5', '6'];

// REDUCE with a string array:
// start with an empty string '' and concatenate all elements
const sum2 = stringsArr.reduce(sumCallback, '');

// Log final results
console.log(sum);
console.log(sum2);

const output = numbersArr
  .filter((num) => num > 2)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log('Output:', output);

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const users: User[] = [
  { name: 'Ivan', age: 25, isActive: true },
  { name: 'Maria', age: 30, isActive: false },
  { name: 'Georgi', age: 20, isActive: true },
];

// FILTER: Create a new array that includes ONLY users whose "isActive" property is true
// This does NOT modify the original "users" array
const activeUsers = users.filter((user) => user.isActive);

// Log the filtered list of active users to the console
console.log(activeUsers);

// MAP: Transform the "users" array into a new array containing ONLY user names
// Each element in the new array is the "name" property of each user object
const names = users.map((user) => user.name);

// Log the array of user names
console.log(names);

// REDUCE: Calculate the TOTAL age of all ACTIVE users
// Starts from 0 and accumulates each user's age into "sum"
const totalAge = activeUsers.reduce((sum, user) => sum + user.age, 0);

// Log the total combined age of active users
console.log(totalAge);
