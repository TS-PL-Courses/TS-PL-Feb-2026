// npx ts-node typescript/operators/spread.ts

// Assume arr1 is something like: [1, 2, 3]
const arr1: number[] = [1, 2, 3];

// Using the spread operator (...) to copy elements from arr1
// and append new values (4 and 5)
const newArr: number[] = [...arr1, 4, 5];

console.log(newArr);
// Output: [1, 2, 3, 4, 5]

// Two separate objects
const a = { x: 1 };
const b = { y: 2 };

// Merging objects using spread operator
// Properties from both objects are combined into a new object
// If keys overlap, later ones overwrite earlier ones
const merge = { ...a, ...b };

console.log(merge);
// Output: { x: 1, y: 2 }

// Function expecting exactly 3 number arguments
function sum(a: number, b: number, c: number) {
  return a + b + c;
}

// 'as const' makes the array:
// - readonly (cannot be changed)
// - treated as a tuple [1, 2, 3] instead of number[]
const nums = [1, 2, 3] as const;

// typeof nums at runtime is still "object"
// (because arrays are objects in JavaScript)
console.log(typeof nums);
// Output: "object"

// Using spread operator to pass array elements as arguments
// Equivalent to: sum(1, 2, 3)
// This works because nums is a tuple of exactly 3 values
console.log(sum(...nums));
// Output: 6
