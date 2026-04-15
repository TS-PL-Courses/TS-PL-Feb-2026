// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

let num1: number = 13;
let num2: number = 8;
let num3: number = 10;

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 <= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}
