// ==============================
// Part 1: Map, Filter, Reduce
// ==============================

// Exercise 7: Convert Strings to Uppercase (map)

const animals: string[] = ['dog', 'cat', 'mouse'];

const animalsWithUpperCase = animals.map((item) => item.toUpperCase());

console.log(`Exercise 7 - All the animals are with upper case => ${animalsWithUpperCase}`);

// Exercise 8: Filter Long Words (filter)

const vegetables: string[] = ['cucumber', 'cabbage', 'leek'];

const vegetablesWithLongerThan5Characters = vegetables.filter((item) => item.length > 5);

console.log(
  `Exercise 8 - The words having more than 5 characters are => ${vegetablesWithLongerThan5Characters}`,
);

// Exercise 9: Find Maximum Number (reduce)

const numbers: number[] = [5, 50, 100, 9999];

let maxNumber: number;

maxNumber = numbers.reduce((acc, current) => {
  return current > acc ? current : acc;
}, -Infinity);

console.log(`Exercise 9 - The maximum number is => ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)

type Item = { name: string; price: number; quantity: number };

const items: Item[] = [
  { name: 'carrot', price: 2, quantity: 3 },
  { name: 'onion', price: 1, quantity: 5 },
];

const total = items.map((item) => item.price * item.quantity);
const finalTotal = total.reduce((acc, current) => acc + current, 0);

console.log(`Exercise 10 - The total price of the items is ${finalTotal}`);

// Exercise 11: Get Unique Values (reduce)

const digits: number[] = [5, 6, 6, 7, 7, 8];

const uniqueNumbers = digits.reduce((acc: number[], current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(`Exercise 11 - The unique numbers are => ${uniqueNumbers}`);

// Exercise 12: Filter + Transform Users (filter + map – advanced)

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Penka', age: 17 },
  { name: 'Mariika', age: 22 },
  { name: 'Ivancho', age: 30 },
];

const adultUserNames = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(`Exercise 12 - Adult users are => ${adultUserNames}`);
