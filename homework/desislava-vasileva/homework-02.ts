// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

console.log('\n\nEXERCISE 1:');
const isMale: boolean = false;
if (isMale) {
  console.log("It's a boy!");
} else {
  console.log("It's a girl!");
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

console.log('\n\nEXERCISE 2:');
const a: number = 5;
const b: number = 15;
const c: number = 10;
if ((a > b && a < c) || (a > c && a < b)) {
  console.log(`${a} is between ${b} and ${c}.`);
} else {
  console.log(`${a} is not between ${b} and ${c}.`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const a1: number = -3;
const b1: number = 2;
const c1: number = 1;

console.log('\n\nEXERCISE 3:');

if (a1 <= b1 && b1 <= c1) {
  console.log(`${a1},${b1},${c1}`);
} else if (a1 <= c1 && c1 <= b1) {
  console.log(`${a1},${c1},${b1}`);
} else if (b1 <= a1 && a1 <= c1) {
  console.log(`${b1},${a1},${c1}`);
} else if (b1 <= c1 && c1 <= a1) {
  console.log(`${b1},${c1},${a1}`);
} else if (c1 <= b1 && b1 <= a1) {
  console.log(`${c1},${b1},${a1}`);
} else if (c1 <= a1 && a1 <= b1) {
  console.log(`${c1},${a1},${b1}`);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

console.log(`\n\nEXERCISE 4:`);
const stringEx4: string = '"Sweets in my pocket"';
if (stringEx4.length > 10) {
  console.log(`The length of the string ${stringEx4} is bigger than 10 symbols`);
} else {
  console.log(`The length of the string ${stringEx4} is less than 10 symbols`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

console.log(`\n\nEXERCISE 5:`);
const stringEx5: string = 'Bot';
if (stringEx5.includes('B')) {
  console.log(`The string ${stringEx5} contains the letter "B"`);
} else {
  console.log(`The string ${stringEx5} doesn't contain the letter "B"`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

console.log(`\n\nEXERCISE 6:`);
const age: number = 65;
const lapTime: number = 59.67;
if (age >= 18 && age < 65 && lapTime < 60) {
  console.log('The client is allowed to participate in the competition.');
} else {
  console.log('The client is not allowed to participate in the competion.');
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log(`\n\nEXERCISE 7:`);
const arrEx7: string[] = ['Minka', 'Country', 'Eggs', 'TV', 'block'];
const arrUpp = arrEx7.map((a) => a.toUpperCase(), 0);
console.log('Before: ', arrEx7);
console.log('After: ', arrUpp);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log(`\n\nEXERCISE 8:`);
const arrEx8: string[] = [
  'consitution',
  'Тотю',
  'конституция',
  'Kate Bush',
  'Jimi Hendrix',
  'fish',
  "Don't stop me now",
  'жираф',
];
let arrSort: string[] = [...arrEx8];
arrSort = arrSort.filter((a) => a.length > 5, 0);
console.log('Before: ', arrEx8);
console.log('After', arrSort);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

console.log(`\n\nEXERCISE 9:`);
const arrEx9: number[] = [2, 5, 78, 102, 0, -5, 16, -278];
const max: number = arrEx9.reduce((a, b) => (a > b ? a : b), 0);
console.log(`Най-голямото число в масива ${arrEx9} e ${max} \n`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

console.log(`\n\nEXERCISE 10:`);

type item = { name: string; price: number; quantity: number };

const store: item[] = [
  { name: 'apple', price: 20, quantity: 100 },
  { name: 'pear', price: 50, quantity: 100 },
  { name: 'vinegar', price: 25, quantity: 150 },
  { name: 'bread', price: 25, quantity: 200 },
];
const perItem = store.map((a) => a.price * a.quantity, 0);
const sum = perItem.reduce((sum, a) => sum + a, 0);
console.log(sum);
console.log(store);
console.log(perItem);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

console.log(`\n\nEXERCISE 11:`);
const arrEx11: number[] = [2, 3, 8, 21, 101, 2, 3, 101.5, 7, 8, 101, 21];
console.log('Initial array: ', arrEx11);
const arrNoDupl = arrEx11.reduce((arr, a) => (arr.includes(a) ? arr : [...arr, a]), []);
console.log('Second array with unique values only: ', arrNoDupl);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

console.log(`\n\nEXERCISE 12:`);

type user = { name: string; age: number };
const users: user[] = [
  { name: 'Totka', age: 101 },
  { name: 'Malinka', age: 56 },
  { name: 'Ivanka', age: 28 },
  { name: 'Vute', age: 101 },
  { name: 'Pencho', age: 12 },
  { name: 'Ahmed', age: 14 },
];

console.log('All users: ', users);
const usrFltr = users.filter((a) => a.age > 18);
console.log('Users over 18: ', usrFltr);
