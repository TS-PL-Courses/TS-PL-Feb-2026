// Homework 02

//npx ts-node homework/temenuga-koleva/homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isMale = false;
if (isMale) {
  console.log("The person is male.");
} else {
  console.log("The person is female.");
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const num1 = 5;
const num2 = 22;
const num3 = 4;

if (num1 > num2 && num1 < num3) {
  console.log(`The number ${num1} is between ${num2} and ${num3}`);
} else {
  console.log(`The number ${num1} is NOT between ${num2} and ${num3}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const a = 21;
const b = 35;
const c = 18;
if (a <= b && a <= c) {
  if (b <= c) {
    console.log(`${a}, ${b}, ${c}`);
    } else {
    console.log(`${a}, ${c}, ${b}`);
    }
} else if (b <= a && b <= c) {
  if (a <= c) {
    console.log(`${b}, ${a}, ${c}`);
    } else {
    console.log(`${b}, ${c}, ${a}`);
    }
} else {
  if (a <= b) {
    console.log(`${c}, ${a}, ${b}`);    
    } else {
    console.log(`${c}, ${b}, ${a}`);
    }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const text = "Hi, alabala";
if (text.length > 10) {
  console.log("The string has more than 10 characters.");
} else {
  console.log("The string has 10 or fewer characters.");
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const myLetters = "MLN";
if (myLetters.includes("B")) {
  console.log(`The string ${myLetters} contains the letter 'B'`);
} else {
  console.log(`The string ${myLetters} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const age = 19;
const lapTime = 55.5;

if (age >= 18 && age < 65 && lapTime < 60) {
  console.log(`Client age: ${age}, Best lap time: ${lapTime} seconds. The client is allowed to compete.`);
} else {
  console.log(`Client age: ${age}, Best lap time: ${lapTime} seconds. The client is NOT allowed to compete.`);
}   


// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const words = ["One", "Two", "Three", "Four", "Five"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords);


// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const initialWords = ["Green", "Yellow", "Blue", "Black", "Red", "Purple"];
const longWords = initialWords.filter(word => word.length > 5);
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers = [3, 127, 2, 19, 51];
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log(maxNumber); 

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = {
  name: string;
  price: number;
  quantity: number;
};
const items: Item[] = [
  { name: "Apple", price: 2.50, quantity: 2.0 },
  { name: "Banana", price: 3.15, quantity: 1.5 },  
  { name: "Orange", price: 5.00, quantity: 3.0 }
];
const totalPrice = items
  .map(item => item.price * item.quantity)
  .reduce((total, current) => total + current, 0);
console.log(totalPrice);


// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const duplicateNumbers = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = duplicateNumbers.reduce((unique, current) => {
  if (!unique.includes(current)) {
    unique.push(current);
    }
    return unique;
}, [] as number[]);
console.log(uniqueNumbers);

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
    { name: "Anna", age: 25 },
    { name: "Boris", age: 17 },
    { name: "Ivan", age: 30 },
    { name: "David", age: 15 }
];
const userNames = users
  .filter(user => user.age > 18)
  .map(user => user.name);
console.log(userNames);