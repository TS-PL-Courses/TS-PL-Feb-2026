// Homework 02

//npx ts-node homework/georgi-payanev/typescript-homework/homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

console.log('\nExercise 1:');
const isMale: boolean = true;
if (isMale) {
  console.log('Male.');
} else {
  console.log('Female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

console.log('\nExercise 2:');

const firstNumber: number = 5;
const secondNumber: number = 10;
const thirdNumber: number = 15;

if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}.`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}.`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

console.log('\nExercise 3:');

const firstValue: number = 10;
const secondValue: number = 100;
const thirdValue: number = 30;

if (firstValue > secondValue) {
  if (secondValue > thirdValue) {
    console.log(thirdValue, secondValue, firstValue);
  } else if (firstValue > thirdValue) {
    console.log(secondValue, thirdValue, firstValue);
  } else {
    console.log(secondValue, firstValue, thirdValue);
  }
} else if (secondValue > thirdValue) {
  if (firstValue > thirdValue) {
    console.log(thirdValue, firstValue, secondValue);
  } else if (firstValue < thirdValue) {
    console.log(firstValue, thirdValue, secondValue);
  }
} else {
  console.log(firstValue, secondValue, thirdValue);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

console.log('\nExercise 4:');

let text: string = 'automationcourse';
if (text.length > 10) {
  console.log('The text is more than 10 characters long.');
} else {
  console.log('The text is less than 10 characters long.');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

console.log('\nExercise 5:');

const newText: string = 'Burgas';

if (newText.includes('B')) {
  console.log(`The string ${newText} contains the letter 'B'.`);
} else {
  console.log(`The string ${newText} does NOT contain the letter 'B'.`);
}
// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

console.log('\nExercise 6:');

const age: number = 35;
const bestLapTime: number = 49;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(
    `The client's age is: ${age}. The best lap time is: ${bestLapTime} seconds. So the client is allowed to compete.`,
  );
} else {
  console.log(
    `The client's age is: ${age}. The best lap time is: ${bestLapTime} seconds. So the client is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('\nExercise 7:');

let array1: string[] = ['text', 'oldtext', 'newtext'];
let newArray: string[] = array1.map((x) => x.toUpperCase());

console.log(newArray);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('\nExercise 8:');

let arrayOfWords: string[] = ['register', 'variable', 'character', ' text'];
let newArrayOfWords: string[] = arrayOfWords.filter((word) => word.length > 5);

console.log(newArrayOfWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

console.log('\nExercise 9:');

let numbersArray: number[] = [1, 2, 3, 4, 5];
let largestNumberOfArray: number = numbersArray.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
}, numbersArray[0]);

console.log(largestNumberOfArray);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

console.log('\nExercise 10:');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const itemArray: Item[] = [
  { name: 'ball', price: 10, quantity: 10 },
  { name: 'desk', price: 20, quantity: 20 },
  { name: 'notebook', price: 3, quantity: 30 },
];

const totalPerItem: number[] = itemArray.map((item) => item.price * item.quantity);
const totalValue: number = totalPerItem.reduce((sum, current) => sum + current, 0);
console.log(`The total value of all items is: ${totalValue}.`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

console.log('\nExercise 11:');

let arrayOfNumbersDuplicates: number[] = [1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 6, 7, 7, 8, 8];
const arrayOfUniques: number[] = arrayOfNumbersDuplicates.reduce(
  (uniqueValues: number[], currentNumber: number) => {
    if (uniqueValues.includes(currentNumber)) {
      return uniqueValues;
    } else {
      uniqueValues.push(currentNumber);
      return uniqueValues;
    }
  },
  [],
);

console.log(arrayOfUniques);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

console.log('\nExercise 12:');

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Gosho', age: 15 },
  { name: 'Pesho', age: 16 },
  { name: 'Ivan', age: 33 },
  { name: 'Asparuh', age: 39 },
];

let oldUsers: User[] = users.filter((users) => users.age >= 18);
let oldUsersNames: string[] = oldUsers.map((user) => user.name);
console.log(oldUsersNames);
