// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

// npx ts-node homework/teodor-mtodorovv/homework-01/exercise1.ts

// Step 1: Declare 2 variables with numbers.
let a: number = 11;
let b: number = 22;

// set original value
const originalValueA = a;
const originalValueB = b;

// swapping
[a, b] = [b, a];

//print original and swapped values
console.log('Print original value a =', originalValueA);
console.log('Print original value b =', originalValueB);
console.log('Print swapped value a =', a);
console.log('Print swapped value b =', b);
