// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
const isFemale: boolean = true;
if (isFemale) {
  console.log('Person is female.');
} else {
  console.log('Person is male.');
}
// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
const first: number = 3;
const second: number = 10;
const third: number = 5;

if (first > second && first < third) {
  console.log(`The number ${first} is between ${second} and ${third}`);
} else {
  console.log(`The number ${first} is NOT between ${second} and ${third}`);
}
// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
const num1: number = 6;
const num2: number = 4;
const num3: number = 9;

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 <= num2) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num3}, ${num2}, ${num1}`);
  }
}
// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
const unicornExtension: string = 'Unicorn flower';
if (unicornExtension.length > 10) {
  console.log('String has more than 10 symbols');
} else {
  console.log('String has less than 10 symbols');
}
// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
const randomString: string = 'ABC';
if (randomString.includes('B')) {
  console.log(`The string ${randomString} contains the letter 'B'`);
} else {
  console.log(`The string ${randomString} does NOT contains the letter 'B'`);
}
// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const age: number = 17;
const lapTime: number = 56.5;

if (age >= 18 && age < 65 && lapTime < 60) {
  console.log(`Age: ${age}, Lap time: ${lapTime}, Allowed`);
} else {
  console.log(`Age: ${age}, Lap time: ${lapTime}, Not Allowed`);
}
// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const arr1 = ['unicorn', 'extension', 'flower'];
const upperCaseArr = arr1.map((string) => string.toUpperCase());
console.log(upperCaseArr);
// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const arr2 = ['unicorn', 'extension', 'flower', 'UnicornNaistina'];
const longerThan5 = arr2.filter((string) => string.length > 5);
console.log(longerThan5);
// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
const arr3 = [1, 2, 3, 4, 5, 6, 7];
const result = arr3.reduce((max, current) => (current > max ? current : max), arr3[0]);
console.log(result);
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
  { name: 'Unicorn Extension1', price: 5, quantity: 5 },
  { name: 'Unicorn Extension2', price: 6, quantity: 3 },
  { name: 'Unicorn Extension3', price: 7, quantity: 2 },
];

const itemPrices = items.map((item) => item.price * item.quantity);
const total = itemPrices.reduce((price, total) => price + total, 0);
console.log(itemPrices, total);
// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
const variables = [1, 2, 3, 1, 2, 3, 5, 6, 7, 8];
const uniqueValues: number[] = variables.reduce((unique: number[], current) => {
  if (!unique.includes(current)) {
    unique.push(current);
  }
  return unique;
}, []);
console.log(uniqueValues);
// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Users = {
  name: string;
  age: number;
};

const users = [
  { name: 'Moshten', age: 20 },
  { name: 'Extension', age: 22 },
  { name: 'Baby', age: 16 },
];
const over18 = users.filter((user) => user.age > 18);
const names = over18.map((user) => user.name);
console.log(names);
