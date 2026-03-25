// npx ts-node homework/rosen-leonidov/typescript/homework-02.ts

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
const isMale: boolean = true;
// Step 2: Use the boolean variable as a condition in an if/else statement.
if (isMale) {
  console.log(`The person is male.`);
} else {
  console.log(`The person is female.`);
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
const firstNumber: number = 5;
const secondNumber: number = 1;
const thirdNumber: number = 10;
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
const num1: number = 7;
const num2: number = 3;
const num3: number = 5;
// Step 2: Log the numbers in ascending order using if-else statements.
if (num1 <= num2 && num1 <= num3) {
  console.log(num1);
  if (num2 <= num3) {
    console.log(num2);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  console.log(num2);
  if (num1 <= num3) {
    console.log(num1);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num1);
  }
} else {
  console.log(num3);
  if (num1 <= num2) {
    console.log(num1);
    console.log(num2);
  } else {
    console.log(num2);
    console.log(num1);
  }
}
// OR
const sortedNumbers: number[] = [num1, num2, num3].sort((a, b) => a - b);
console.log(`Sorted numbers: ${sortedNumbers.join(', ')}`);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
const myString: string = 'Hello, World!';
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
if (myString.length > 10) {
  console.log(`The string "${myString}" has more than 10 characters.`);
} else {
  console.log(`The string "${myString}" does NOT have more than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
const threeCharString: string = 'Bob';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
if (threeCharString.includes('B')) {
  console.log(`The string "${threeCharString}" contains the letter 'B'`);
} else {
  console.log(`The string "${threeCharString}" does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
const clientAge: number = 25;
const bestLapTime: number = 55.5;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(
    `The client is ${clientAge} years old and has a best lap time of ${bestLapTime} seconds. They are allowed to compete.`,
  );
} else {
  console.log(
    `The client is ${clientAge} years old and has a best lap time of ${bestLapTime} seconds. They are NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
const stringArray: string[] = ['hello', 'world', 'typescript'];
// Step 2: Use the map() method to transform each string to uppercase.
const uppercaseArray: string[] = stringArray.map((str) => str.toUpperCase());
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log(uppercaseArray);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
const words: string[] = ['short', 'medium', 'longer', 'tiny', 'lengthy'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
const longWords: string[] = words.filter((word) => word.length > 5);
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
const numberArray: number[] = [3, 7, 2, 9, 5];
// Step 2: Use the reduce() method to find the largest number.
const maxNumber: number = numberArray.reduce(
  (max, current) => (current > max ? current : max),
  numberArray[0],
);
// Step 3: Store the result in a variable.
// Step 4: Log the result.
console.log(`Maximum number: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};
// Step 2: Create an array of items.
const items: Item[] = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Mouse', price: 25, quantity: 5 },
  { name: 'Keyboard', price: 75, quantity: 3 },
];
// Step 3: Use map() to calculate price × quantity for each item.
const itemTotals: number[] = items.map((item) => item.price * item.quantity);
// Step 4: Use reduce() to sum all values.
const totalPrice: number = itemTotals.reduce((sum, current) => sum + current, 0);
// Step 5: Log the total.
console.log(`Total price: $${totalPrice}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
const numbersWithDuplicates: number[] = [1, 2, 3, 2, 4, 1, 5];
// Step 2: Use the reduce() method to return only unique values.
const uniqueNumbers: number[] = numbersWithDuplicates.reduce((unique, current) => {
  return unique.includes(current) ? unique : [...unique, current];
}, [] as number[]);
// Step 3: Store the result in a new array.
// Step 4: Log the result.
console.log(`Unique numbers: ${uniqueNumbers}`);
// OR
const uniqueNumbersSet: number[] = [...new Set(numbersWithDuplicates)];
console.log(`Unique numbers (using Set): ${uniqueNumbersSet}`);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};
// Step 2: Create an array of users.
const users: User[] = [
  { name: 'Ivan', age: 25 },
  { name: 'Petar', age: 17 },
  { name: 'Mariya', age: 30 },
  { name: 'Aleksandra', age: 16 },
];
// Step 3: Use filter() to keep only users over 18.
const filteredUsers: User[] = users.filter((user) => user.age > 18);
// Step 4: Use map() to extract their names.
const filteredUserNames: string[] = filteredUsers.map((user) => user.name);
// Step 5: Log the result.
console.log(`Filtered user names: ${filteredUserNames}`);
