// ==============================
// Part 2 — Booleans
// ==============================

// Exercise 6: Login check

const isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log('Exercise 6 - Welcome!');
} else {
  console.log('Exercise 6 - Please log in');
}

// Exercise 7: Entry permission

const hasTicket: boolean = true;
const isAdult: boolean = true;

const canEnter: boolean = hasTicket && isAdult;

console.log(`Exercise 7 - Can user enter -> ${canEnter}`);
