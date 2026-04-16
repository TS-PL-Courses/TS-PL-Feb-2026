// Homework 02
// npx ts-node homework/stanislav-antonov/homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition

// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
let isMale: boolean = false;

// Step 2: Use the boolean variable as a condition in an if/else statement.
if (isMale) {
  console.log('This person is male');
} else {
  console.log('This person is female');
}

// Step 3: Log both possible results.

// Exercise 2: Check if a number is between two other numbers

// Step 1: Declare 3 number variables.

let number1: number = 6;
let number2: number = 10;
let number3: number = 3;

// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

if ((number1 > number2 && number1 < number3) || (number1 > number3 && number1 < number2)) {
  console.log(`The number ${number1} is between ${number2} and ${number3}`);
} else {
  console.log(`The number ${number1} is NOT between ${number2} and ${number3}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
let num1: number = 5;
let num2: number = 2;
let num3: number = 8;

// Step 2: Log the numbers in ascending order using if-else statements.
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 <= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
let text: string = 'Welcome to Typescript';

// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (text.length > 10) {
  console.log('The string has more than 10 characters');
} else {
  console.log('The string has 10 or less characters');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
let text2: string = 'Aac';

// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

if (text2.includes('b')) {
  console.log(`The string ${text2} contains the letter 'B'`);
} else {
  console.log(`The string ${text2} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
let age: number = 60;
let bestlap: number = 50;

// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

if (age >= 18 && age < 65 && bestlap < 60) {
  console.log(`Client age: ${age}, lap time: ${bestlap}s → Allowed to compete`);
} else {
  console.log(`Client age: ${age}, lap time: ${bestlap}s → Not allowed to compete`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
let words: string[] = ['hello', 'world', 'typescript'];

// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let upperWords = words.map((word) => word.toUpperCase());
/*words.map(function(word) {
  return word.toUpperCase();
});*/
console.log(upperWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
let array1: string[] = ['apple', 'banana', 'kiwi', 'strawberry', 'grape'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.

// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let longArray = array1.filter((word) => word.length > 5);

console.log(longArray);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
let numbers = [5, 8, 4, 11, 2, 9];

// Step 2: Use the reduce() method to find the largest number.
let max = numbers.reduce((max, current) => {
  return current > max ? current : max;
});
// Step 3: Store the result in a variable.
// Step 4: Log the result.
console.log(max);

// Exercise 10: Calculate Total Price (map + reduce)

// Step 1: Declare a type Item with name, price, and quantity.
type item = {
  name: string;
  price: number;
  quantity: number;
};

// Step 2: Create an array of items.
let items: item[] = [
  { name: 'Apple', price: 2, quantity: 3 },
  { name: 'Banana', price: 1, quantity: 5 },
  { name: 'Orange', price: 3, quantity: 2 },
];

// Step 3: Use map() to calculate price × quantity for each item.

// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.
// Step 3: price * quantity
let totals = items.map((item) => item.price * item.quantity);
let totalPrice = totals.reduce((sum, value) => sum + value, 0);
console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

//Using for()
/*let numbers123 = [1, 2, 2, 3, 4, 4, 5];

let unique: number[] = [];

for (let i = 0; i < numbers123.length; i++) {
  if (!unique.includes(numbers123[i])) {
    unique.push(numbers123[i]);
  }
}

console.log(unique);
*/
//Using reduce()

let numbers1234: number[] = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = numbers1234.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, [] as number[]);

console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
type User2 = {
  name: string;
  age: number;
};

// Step 2: Create an array of users.
let users: User2[] = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];

// Step 3: Use filter() to keep only users over 18.
let filteredUsers = users.filter((user) => user.age > 18);

// Step 4: Use map() to extract their names.
let result = filteredUsers.map((user) => user.name);
// Step 5: Log the result.
console.log(result);
