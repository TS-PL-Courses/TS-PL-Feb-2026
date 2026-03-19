// npx ts-node typescript/Homework-01/Booleans.ts
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