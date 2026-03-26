// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
// Step 2: Create a boolean variable isAdult with value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

// Step 1: Create a boolean variable hasTicket with value true.
const hasTicket: boolean = true;

// Step 2: Create a boolean variable isAdult with value false.
const isAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both variables are true.
const canEnter: boolean = hasTicket && isAdult;

// Step 4: Log the result of canEnter.
if (hasTicket) {
  console.log('Please go through');
} else {
  console.log('You cannot enter');
}
