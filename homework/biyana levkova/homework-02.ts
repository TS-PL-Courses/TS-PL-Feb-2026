// npx ts-node "homework/biyana levkova/homework-02.ts"

// Homework 02

// Part 1: Conditional Statements
// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isFemale: boolean = false;
if (isFemale) {
  console.log('This is a female');
} else {
  console.log('This is a Male');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstNumber: number = 9;
const secondNumber: number = 11;
const thirdNumber: number = 1;
if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const num1: number = 11;
const num2: number = 1;
const num3: number = 6;
let smallest: number = 0;
let mid: number = 0;
let largest: number = 0;

if (num1 <= num2 && num1 <= num3) {
  smallest = num1;
  if (num2 <= num3) {
    mid = num2;
    largest = num3;
  } else {
    mid = num3;
    largest = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;
  if (num1 <= num3) {
    mid = num1;
    largest = num3;
  } else {
    mid = num3;
    largest = num1;
  }
} else if (num3 <= num1 && num3 <= num2) {
  smallest = num3;
  if (num1 >= num2) {
    mid = num2;
    largest = num1;
  } else {
    mid = num1;
    largest = num2;
  }
}
console.log(smallest, mid, largest);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
let myString: string = 'notebook';
if (myString.length > 10) {
  console.log(`${myString} has more than 10 characters.`);
} else if (myString.length === 10) {
  console.log(`${myString} has exactly 10 characters`);
} else {
  console.log(`${myString} has less than 10 characters`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

let threeCharString: string = 'oBs';
if (threeCharString.toLowerCase().includes('b')) {
  console.log(`The string ${threeCharString} contains the letter 'B'`);
} else {
  console.log(`The string ${threeCharString} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const clientAge: number = 64;
const bestLapTime: number = 59;
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(`${clientAge}, ${bestLapTime} - client is allowed to compete!`);
} else {
  console.log(`${clientAge}, ${bestLapTime} - client is NOT allowed to compete!`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const lowercase: string[] = ['convert', 'string', 'to', 'uppercase'];
const uppercase: string[] = [];
for (let i = 0; i < lowercase.length; i++) {
  uppercase.push(lowercase[i].toUpperCase());
}
console.log(lowercase);
console.log(uppercase);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const longWords: string[] = ['filter', 'long', 'words'];
const filteredLongWords: string[] = longWords.filter((word) => word.length > 5);
console.log(longWords);
console.log(filteredLongWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
const numberArray: number[] = [10, 20, 80, 40, 50];
//const sumNumberArray: number = numberArray.reduce((acc, num) => acc + num, 0);
let largestNum: number = numberArray.reduce((acc, num) => {
  if (num > acc) {
    return num;
  } else {
    return acc;
  }
}, numberArray[0]);

console.log(largestNum);

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
let pen: Item = {
  name: 'schneider',
  price: 1.99,
  quantity: 5,
};
let notebook: Item = {
  name: 'planner',
  price: 6.5,
  quantity: 1,
};
let backpack: Item = {
  name: 'school backpack',
  price: 45,
  quantity: 2,
};

const ItemsInCart: Item[] = [pen, notebook, backpack];

const total = ItemsInCart.map((Items) => Items.price * Items.quantity).reduce(
  (acc, num) => acc + num,
  0,
);
console.log(total);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
const numDuplicates: number[] = [12, 15, 18, 15, 35, 18];

const uniqueValues: number[] = numDuplicates.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, [] as number[]);

console.log(uniqueValues);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User12 = {
  name: string;
  age: number;
};

let user121: User12 = {
  name: 'Simon',
  age: 19,
};
let user122: User12 = {
  name: 'Hristina',
  age: 16,
};
let user123: User12 = {
  name: 'Alex',
  age: 21,
};
let user124: User12 = {
  name: 'Boris',
  age: 18,
};
const Users12arr: User12[] = [user121, user122, user123, user124];
console.log(Users12arr.filter((user) => user.age > 18).map((user) => user.name));
