// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let a: number = 10;
let b: number = 50;

console.log("Before Swap "+a,b);

let c: number = b;
// console.log(a,b)
// console.log(c)
b = a;
// console.log(b)
a = c;
console.log("After Swap "+a,b);


