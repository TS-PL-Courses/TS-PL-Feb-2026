// npx ts-node homework/stefanSlavov/typescript/homework_01.ts

// Exercise 1: Variable swapping
let firstNumber: number = 5;
let secondNumber: number = 10;
let temp: number;

console.log(`Original values are: ${firstNumber} and ${secondNumber}`);

temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

console.log(`Swapped values are: ${firstNumber} and ${secondNumber}`);

// Exercise 2: Check if a number is even or odd
const variable: number = 44;
let isEven: boolean = variable % 2 === 0;
console.log(`The number ${variable} is even: ${isEven}`);

// Exercise 3: Verify if a number is positive
const negativeNumber: number = -23;
let isPositive: boolean = negativeNumber > 0;
console.log(`The number ${negativeNumber} is positive: ${isPositive}`);

// Exercise 4: Total cost calculation
const price: number = 19.9;
const quantity: number = 3;
const totalCost = price * quantity;
console.log(`Total cost is: ${totalCost}`);

// Exercise 5: Celsius to Fahrenheit converter
const celsius: number = 35;
const fahrenheit: number = (celsius * 9) / 5 + 32;
console.log(`If it's ${celsius} degrees Celsius, it's ${fahrenheit} degrees in Fahrenheit`);

// Exercise 6: Login check
let isLoggedIn: boolean;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Entry permission
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult ? true : false;
console.log(canEnter);

// Exercise 8: Check if a string is empty (an empty string is "")
const veryNotEmptyString: string = 'this is a string';
let isStringEmpty: boolean = veryNotEmptyString.length > 0 ? false : true;
console.log(`The string is empty: ${isStringEmpty}`);

// Exercise 9: Determine if a string starts with the letter 'A'
const stringToCheck: string = 'blabla';
let startsWithA: boolean = stringToCheck.charAt(0) === 'A' ? true : false;
console.log(`String starts with 'A': ${startsWithA}`);

// Exercise 10: String operations
let isFun: string = 'TypeScript is fun';
console.log(isFun.length);
console.log(isFun.toLowerCase());
console.log(isFun.toUpperCase());
const favoriteLanguage: string = 'C++';
console.log(`My favoriteMy favorite programming language is ${favoriteLanguage}`);

// Exercise 11: BigInt addition
const bigIntEdno: bigint = 32323213123n;
const bigIntDve: bigint = 32132321321312n;
console.log(bigIntDve + bigIntEdno);

// Exercise 12: Product of an array
const arr: number[] = [10, 20, 30, 40];
let total: number[] = arr.map((num) => num * 5);
console.log(total);

// Exercise 13: Array of student objects
let students: object[] = [
  { name: 'Kiro Breika', grade: 99 },
  { name: 'Kiro nebreika', grade: 88 },
  { name: 'Kiro hiksa', grade: 77 },
];
students.forEach((student) => {
  const firstEntry = Object.entries(student)[0];
  const [key, value] = firstEntry;
  console.log(value);
});

// Exercise 14: Function with a union type
function printId(id: string | number) {
  console.log(id);
}

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
const qaName: string = 'Ivan4o';
const numberOfFunctionalities: number = 4;
console.log(
  `The QA ${qaName} will need ${numberOfFunctionalities * 2} hours to complete ${numberOfFunctionalities} project/s.`,
);

// Exercise 16: Union in objects
type User = {
  name: string;
  id: string | number;
};

let user1 = {
  name: 'Gesha',
  id: 5,
};

let user2 = {
  name: 'Gesha2',
  id: '6',
};

// Exercise 17: Remove duplicate numbers from an array
let numbersArray: number[] = [10, 20, 10, 30, 40];
let result: number[] = [];
numbersArray.forEach((number) => {
  if (!result.includes(number)) {
    result.push(number);
  }
});
console.log(result);

// Exercise 18: Find the difference between two arrays
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];
let difference: number[] = [];

for (const val of arr1) {
  if (arr2.indexOf(val) === -1) difference.push(val);
}

for (const val of arr2) {
  if (arr1.indexOf(val) === -1) difference.push(val);
}
