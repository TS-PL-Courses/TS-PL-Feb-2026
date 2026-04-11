// Run this file with ts-node (TypeScript runner)
// npx ts-node typescript/summary.ts

// This is a string variable (text)
let name: string = 'Toshko';
console.log(`1) Name: ${name}`); // print the name

// These are number variables
let num1: number = 37;
let num2: number = 50;

// Add the two numbers
let sum = num1 + num2;
console.log(`2) Sum: ${sum}`); // print result

// Check if a number is even (divisible by 2)
let checkIfEvenNumber: number = 2;
let isEven: boolean = checkIfEvenNumber % 2 === 0;
console.log(`3) isEven: ${isEven}`);

// Two strings (words)
let firstWord: string = 'Maria';
let secondWord: string = 'Ivanova';

// Combine (concatenate) them with a space
console.log(`4) ${firstWord} ${secondWord}`);

// If / else condition
let age: number = 21;

// Check if user is 18 or older
if (age >= 18) {
  console.log(`5) User is adult`);
} else {
  console.log(`5) User is NOT adult`);
}

// Switch statement (multiple conditions)
let day: string = 'Saturday';

switch (day) {
  // Work days
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('6) Work day');
    break;

  // Weekend days
  case 'Saturday':
  case 'Sunday':
    console.log('6) Weekend');
    break;

  // If value is not valid
  default:
    console.log('6) Invalid day');
}

// Array (list of numbers)
let numbers: number[] = [1, 2, 3, 4, 5];

// Variable to store total
let total: number = 0;

// Loop through array and add all numbers
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(`7) Total: ${total}`);

// While loop (countdown)
let i: number = 5;

while (i >= 1) {
  // Stop loop when i becomes 3
  if (i === 3) {
    i--;
    break;
  }

  console.log(`8) Countdown: ${i}`);
  i--;
}

// Function with JSDoc comment
/**
 * Multiply two numbers
 */
function multiply(a: number, b: number): number {
  return a * b; // return result
}

console.log('9) Multiply:', multiply(6, 7));

// Arrow function (short function syntax)
// Returns square of a number
let square = (value: number): number => {
  return value * value;
};

console.log('10) Square:', square(3));

// Array for advanced methods
const arrayNumbers: number[] = [1, 2, 3, 4, 5, 6];

// Filter: keep only even numbers
const evenNumbers: number[] = arrayNumbers.filter((x) => x % 2 === 0);
console.log('11) Even numbers', evenNumbers);

// Map: create new array with doubled values
const doubleNumbers: number[] = arrayNumbers.map((x) => x * 2);
console.log('12) Double numbers', doubleNumbers);

// Reduce: sum all numbers
const sumNumbers: number = arrayNumbers.reduce((sum, num) => sum + num, 0);
console.log('13) Sum:', sumNumbers);

// Tuple (fixed types and order)
const person: [string, number] = ['Ivan', 42];
console.log(`14) Person: ${person[0]} Age: ${person[1]}`);

// Enum (predefined constant values)
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// Use enum value
const myDirection: Direction = Direction.Up;
console.log(`15) Direction: ${myDirection}`);

// Function with union type (string OR number)
function formatId(id: string | number): string {
  // If id is string
  if (typeof id === 'string') {
    return `ID-${id.toUpperCase()}`; // make uppercase
  }

  // If id is number
  return `ID-${id}`;
}

console.log(`16) Formatted ID: ${formatId('ab12')}`);
console.log(`16) Formatted ID: ${formatId(12)}`);

// unknown type (we don't know the type yet)
const valueFromApi: unknown = '42';

// Check type before using it
if (typeof valueFromApi === 'string') {
  console.log(`17) Length: ${valueFromApi.length}`);
}

// Safe JSON parsing function
function parseJsonSafty(text: string): unknown {
  try {
    // Try to parse JSON string
    return console.log(JSON.parse(text));
  } catch (error) {
    // If error happens
    console.log(`18) Invalid JSON: ${error}`);
  }
}

// Example call
parseJsonSafty('18) {"name": null}');

// Interface (structure for object)
interface IUser {
  id: number;
  name: string;
  isAdult: boolean;
  getUserData(): object;
}

// Class that implements the interface
class User implements IUser {
  id: number;
  name: string;
  isAdult: boolean;

  constructor(id: number, name: string, isAdult: boolean) {
    this.id = id;
    this.name = name;
    this.isAdult = isAdult;
  }

  // Method that returns user data
  getUserData(): object {
    return {
      id: this.id,
      name: this.name,
      isAdult: this.isAdult,
    };
  }
}

// Create new user object
const user = new User(1, 'Ivan', true);

// Print user data
console.log('19) User:', user.getUserData());
