// ==============================
// Optional exercises
// ==============================

// Exercise 17: Remove duplicate numbers from an array

const numbers: number[] = [10, 20, 10, 30, 40];
const uniqueNumbers: number[] = [];

for (const num of numbers) {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

console.log(`Exercise 17 - Unique numbers: ${uniqueNumbers}`);

// Exercise 18: Find the difference between two arrays

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
const difference: number[] = [];

for (const num of arr1) {
  if (!arr2.includes(num)) {
    difference.push(num);
  }
}

for (const num of arr2) {
  if (!arr1.includes(num)) {
    difference.push(num);
  }
}

console.log(`Exercise 18 - Difference: ${difference}`);

// Exercise 19: Find the union of two arrays

const union: number[] = [];

for (const num of arr1) {
  if (!union.includes(num)) {
    union.push(num);
  }
}

for (const num of arr2) {
  if (!union.includes(num)) {
    union.push(num);
  }
}

console.log(`Exercise 19 - Union: ${union}`);
