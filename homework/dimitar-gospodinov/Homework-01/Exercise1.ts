// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

const x: number = 12;
const y: number = 76;
console.log(`Original values: x = ${x}, y = ${y}`);

let temp: number = x;
const newX: number = y;
const newY: number = temp;
console.log(`New values: x = ${newX}, y = ${newY}`);
