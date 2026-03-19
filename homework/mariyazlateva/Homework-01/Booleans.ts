<<<<<<< HEAD
// npx ts-node Booleans.ts
=======
// npx ts-node typescript/Homework-01/Booleans.ts
>>>>>>> 732ef7e2f6e67dde7012fb406cc99f4d443c151d
// Exercise 6

let isLoggedIn: boolean = false;

if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please log in");
}

// Exercise 7
let hasTicket: boolean = true;
let isAdult: boolean = true;

let canEnter: boolean = hasTicket && isAdult;

console.log("Can enter:", canEnter);