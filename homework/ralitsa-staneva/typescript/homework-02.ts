//npx ts-node homework/ralitsa-staneva/typescript/homework-02.ts
// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
let isMale: boolean = true;
if (isMale) {
  console.log('1) The person is male.');
} else {
  console.log('1) The person is female.');
}
// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
let num1: number = 5;
let num2: number = 1;
let num3: number = 10;
if (num1 > num2 && num1 < num3) {
  console.log(`2) The number ${num1} is between ${num2} and ${num3}.`);
} else {
  console.log(`2) The number: ${num1} is NOT between ${num2} and ${num3}.`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
num1 = 6;
num2 = 5;
num3 = 10;
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`3) Ascending order: ${num1}, ${num2}, ${num3}.`);
  } else {
    console.log(`3) Ascending order: ${num1}, ${num3}, ${num2}.`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`3) Ascending order: ${num2}, ${num1}, ${num3}.`);
  } else {
    console.log(`3) Ascending order: ${num2}, ${num3}, ${num1}.`);
  }
} else {
  if (num3 <= num2 && num3 <= num1) {
    if (num1 <= num2) {
      console.log(`3) Ascending order: ${num3}, ${num1}, ${num2}.`);
    } else {
      console.log(`3) Ascending order: ${num3}, ${num2}, ${num1}.`);
    }
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

let str: string = 'I wish I were at the beach instead of working on this homework.';
if (str.length > 10) {
  console.log(`4) The string "${str}" has more than 10 characters.`);
} else {
  console.log(`4) The string "${str}" does not have more than 10 characters.`);
}
// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

let string: string = 'ABC';
if (string.indexOf('B') !== -1) {
  console.log(`5) The string "${string}" contains the letter 'B'.`);
} else {
  console.log(`5) The string "${string}" does NOT contain the letter 'B'.`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
let age: number = 35;
let bestLapTime: number = 55.6;
if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(
    `6) The client is ${age} years old and has best lap time of ${bestLapTime} seconds. The client is allowed to compete in the karting competition.`,
  );
} else {
  console.log(
    `6) The client is ${age} years old and has best lap time of ${bestLapTime} seconds. The client is NOT allowed to compete in the karting competition.`,
  );
}
// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
let months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let uppercaseMonths: string[] = months.map((month) => month.toUpperCase());
console.log(`7) Uppercase months: ${uppercaseMonths.join(', ')}`);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let listOfWords: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let longWordsList: string[] = listOfWords.filter((word) => word.length > 5);
console.log(`8) List with words longer than 5 chars is: ${longWordsList.join(', ')}`);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let numbers: number[] = [3, 7, 2, 9, 5];
let maxNumber: number = numbers.reduce((max, number) => {
  if (number > max) {
    return number;
  }
  return max;
}, numbers[0]);

console.log(`9) The maximum number is: ${maxNumber}`);

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
let listOFItems: Item[] = [
  { name: 'apple', price: 1.2, quantity: 5 },
  { name: 'banana', price: 0.8, quantity: 3 },
  { name: 'cherry', price: 2.5, quantity: 2 },
];
let totalSumOfEachItem: number[] = listOFItems.map((item) => item.price * item.quantity);
let totalAmount: number = totalSumOfEachItem.reduce((total, sum) => total + sum, 0);
console.log(`10) The total price is: ${totalAmount}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
let numbersWithDuplicates: number[] = [1, 2, 3, 2, 4, 1, 5];
let uniqueNumbers: number[] = numbersWithDuplicates.reduce((uniques: number[], current: number) => {
  if (!uniques.includes(current)) {
    uniques.push(current);
  }
  return uniques;
}, []);

console.log(`11) Unique numbers: ${uniqueNumbers.join(', ')}`);

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
let listOfUsers: User[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];
let usersOver18: User[] = listOfUsers.filter((user) => user.age > 18);
let userNamesOver18: string[] = usersOver18.map((user) => user.name);
console.log(`12) Users over 18: ${userNamesOver18.join(', ')}`);
