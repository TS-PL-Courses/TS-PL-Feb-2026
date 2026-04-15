export {};

// Homework 02
console.log("\nHomework 02");

// Part 1: Conditional Statements
console.log("\nPart 1: Conditional Statements");

// Exercise 1: Use a boolean as an if/else condition
console.log("\nExercise 1: Use a boolean as an if/else condition");
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or
// false.
let gender: string;
let isFemale: boolean = true;
// Step 2: Use the boolean variable as a condition in an if/else statement.
if (isFemale) {
  gender = "The person gender is Female";
} else {
  gender = "The person gender is Male";
}
// Step 3: Log both possible results.
console.log(gender);

// Exercise 2: Check if a number is between two other numbers
console.log("\nExercise 2: Check if a number is between two other numbers");
// Step 1: Declare 3 number variables.
const num1: number = 150;
const num2: number = 368;
const num3: number = 2;
let message: string;
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
if ((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)) {
  message = `The number ${num1} is between ${num2} and ${num3}`;
} else {
  message = `The number ${num1} is NOT between ${num2} and ${num3}`;
}
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
console.log(message);

// Exercise 3: Multiple number comparison
console.log("\nExercise 3: Multiple number comparison");
// Step 1: Declare 3 number variables.
const num4: number = 2;
const num5: number = 1;
const num6: number = 2;
// Step 2: Log the numbers in ascending order using if-else statements.
let firstNumber: number = 0;
let secondtNumber: number = 0;
let thirdNumber: number = 0;
if (num4 <= num5 && num4 <= num6) {
  firstNumber = num4;
  if (num5 <= num6) {
    secondtNumber = num5;
    thirdNumber = num6;
  } else {
    secondtNumber = num6;
    thirdNumber = num5;
  }
} else if (num5 <= num4 && num5 <= num6) {
  firstNumber = num5;
  if (num4 <= num6) {
    secondtNumber = num4;
    thirdNumber = num6;
  } else {
    secondtNumber = num6;
    thirdNumber = num4;
  }
} else if (num6 <= num4 && num6 <= num5) {
  firstNumber = num6;
  if (num4 <= num5) {
    secondtNumber = num4;
    thirdNumber = num5;
  } else {
    secondtNumber = num5;
    thirdNumber = num4;
  }
}
console.log(`${firstNumber}\n${secondtNumber}\n${thirdNumber}`);

// Exercise 4: Check if a string has more than 10 characters
console.log("\nExercise 4: Check if a string has more than 10 characters");
// Step 1: Declare a variable and assign any string to it.
const myText: string = "I am a randome text";
let message2: string;
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
if (myText.length > 10) {
  message2 = `"${myText}" string has more than 10 characters`;
} else if (myText.length < 10) {
  message2 = `"${myText}" string has less than 10 characters`;
} else {
  message2 = `"${myText}" string has 10 characters`;
}
// Step 3: Log the result.
console.log(message2);

// Exercise 5: Check if a string contains the letter 'B'
console.log("\nExercise 5: Check if a string contains the letter 'B'");
// Step 1: Declare a variable and assign a 3-character string to it.
const threeCharacterVariable: string = "ABC";
let message3: string;
// Step 2: Check if the string contains the letter 'B' using if/else statements.
if (
  threeCharacterVariable[0] == "B" ||
  threeCharacterVariable[1] == "B" ||
  threeCharacterVariable[2] == "B"
) {
  message3 = `The string ${threeCharacterVariable} contains the letter 'B'`;
} else {
  message3 = `The string ${threeCharacterVariable} does NOT contain the letter 'B'`;
}
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
console.log(message3);

// Exercise 6: Check if a client will be allowed in a karting competition.
console.log(
  "\nExercise 6: Check if a client will be allowed in a karting competition.",
);
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
const ClientAge: number = 32;
const ClientBestLapTimeInSeconds = 58.9;
const bestLapTimeinSeconds: number = 60;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time
// less than 60 seconds, using if-else statements.
if (
  ClientAge >= 18 &&
  ClientAge < 65 &&
  ClientBestLapTimeInSeconds < bestLapTimeinSeconds
) {
  // Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
  console.log(
    `The client with age = ${ClientAge} and best lap time = ${ClientBestLapTimeInSeconds} minutes is allowed to compete.`,
  );
} else {
  console.log(
    `The client with age = ${ClientAge} and best lap time = ${ClientBestLapTimeInSeconds} minutes is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce
console.log("\nPart 2: Map, Filter, Reduce");

// Exercise 7: Convert Strings to Uppercase (map)
console.log("\nExercise 7: Convert Strings to Uppercase (map)");
// Step 1: Declare a variable and assign an array of strings to it.
const myArray: string[] = ["apple", "banana", "pear", "strawberry"];
// Step 2: Use the map() method to transform each string to uppercase.
const myArrayUpperCase = myArray.map((item) => item.toUpperCase());
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log(myArrayUpperCase);

// Exercise 8: Filter Long Words (filter)
console.log("\nExercise Exercise 8: Filter Long Words (filter)");
// Step 1: Declare a variable and assign an array of words to it.
const myWordsArray: string[] = ["apple", "banana", "pear", "strawberry"];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
const arrayWithWordsLongerThanFiveCharacters = myWordsArray.filter(
  (word) => word.length > 5,
);
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log(arrayWithWordsLongerThanFiveCharacters);

// Exercise 9: Find Maximum Number (reduce)
console.log("\nExercise 9: Find Maximum Number (reduce)");
// Step 1: Declare a variable and assign an array of numbers to it.
const myNumbersArray: number[] = [
  1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 7, 8, 9, 10,
];
// Step 2: Use the reduce() method to find the largest number.
const maxNumber = myNumbersArray.reduce(
  (max, current) => (current > max ? current : max),
  -9007199254740991,
);
// Step 3: Store the result in a variable.
// Step 4: Log the result.
console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
console.log("\nExercise 10: Calculate Total Price (map + reduce");
// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};
// Step 2: Create an array of items.
const arrayOfItems: Item[] = [
  { name: "chocolate", price: 6.4, quantity: 3 },
  { name: "toilet paper", price: 29.4, quantity: 39 },
];
// Step 3: Use map() to calculate price × quantity for each item.
const totalPriceArray = arrayOfItems.map((item) => item.price * item.quantity);
// Step 4: Use reduce() to sum all values.
const sumItemsTotalPrice = totalPriceArray.reduce(
  (total, current) => total + current,
  0,
);
// Step 5: Log the total.
console.log(sumItemsTotalPrice);

// Exercise 11: Get Unique Values (reduce)
console.log("\nExercise 11: Get Unique Values (reduce)");
// Step 1: Declare a variable and assign an array of numbers with duplicates.
const arrayOfNumbersWithDuplicates: number[] = [1, 2, 2, 3, 3, 4, 5, 5];
// Step 2: Use the reduce() method to return only unique values.
const arrayOfNumbersWithUniqueValues = arrayOfNumbersWithDuplicates.reduce(
  (unique, current) => {
    if (!unique.includes(current)) {
      unique.push(current);
    }
    return unique;
  },
  [] as number[],
);
// Step 3: Store the result in a new array.
// Step 4: Log the result.
console.log(arrayOfNumbersWithUniqueValues);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
console.log(
  "\nExercise 12: Filter + Transform Users (filter + map – advanced)",
);
// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};
// Step 2: Create an array of users.
const arrayOfUsers: User[] = [
  { name: "Ralitsa", age: 36 },
  { name: "Daniela", age: 39 },
  { name: "Maria", age: 14 },
  { name: "Mihaela", age: 10 },
];
// Step 3: Use filter() to keep only users over 18.
const arrayOfUsersOverEighteen = arrayOfUsers.filter((user) => user.age > 18);
// Step 4: Use map() to extract their names.
const arrayOfUsersOverEighteenNames = arrayOfUsersOverEighteen.map(
  (user) => user.name,
);
// Step 5: Log the result.
console.log(arrayOfUsersOverEighteenNames);
