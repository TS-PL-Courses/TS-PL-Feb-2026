// ==============================
// Part 3 — Strings
// ==============================

// Exercise 8: Check if a string is empty (an empty string is "")

const name: string = 'Georgi';
const isEmptyString: boolean = name.length === 0;

console.log(`Exercise 8 - Is the string "${name}" empty -> ${isEmptyString}`);

// Exercise 9: Determine if a string starts with the letter 'A'

const country: string = 'Austria';
const startsWithA: boolean = country.startsWith('A');

console.log(`Exercise 9 - Does "${country}" start with 'A' -> ${startsWithA}`);

// Exercise 10: String operations

const message: string = 'TypeScript is fun';

console.log(`Exercise 10 - The length of "${message}" is ${message.length} letters`);
console.log(`Exercise 10 - "${message}" in uppercase is ${message.toUpperCase()}`);
console.log(`Exercise 10 - "${message}" in lowercase is ${message.toLowerCase()}`);

const favoriteLanguage: string = 'TypeScript';

console.log(`Exercise 10 - My favorite programming language is ${favoriteLanguage}`);
