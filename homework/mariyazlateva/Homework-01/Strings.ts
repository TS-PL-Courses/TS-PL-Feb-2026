<<<<<<< HEAD
// npx ts-node Strings.ts
=======
// npx ts-node typescript/Homework-01/Strings.ts
>>>>>>> 732ef7e2f6e67dde7012fb406cc99f4d443c151d
//Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result
let x: string = "";
let isEmpty: boolean = x ==="";
console.log("Text:", x);
console.log("Is empty:", isEmpty);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result
let duma: string = "alabama";
let startsWithA: boolean = duma.toUpperCase().startsWith("A");
console.log("Text:", duma);
console.log("Starts with 'A' (case-insensitive):", startsWithA);


// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
<<<<<<< HEAD
let text: string = "TypeScript is fun";
=======
let text: string = "Norway";
>>>>>>> 732ef7e2f6e67dde7012fb406cc99f4d443c151d
console.log("Length", text.length);
console.log("Glavni bukvi", text.toUpperCase());
console.log("Malki bukvi", text.toLowerCase());
let favoriteLanguage: string = "Fortran";
console.log("My favorite programming language is", favoriteLanguage)