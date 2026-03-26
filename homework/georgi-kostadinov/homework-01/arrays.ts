// ==============================
// Part 5 - Array (array)
// ==============================

// Exercise 12: Product of an array

const numbers: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;

for (const num of numbers) {
  totalProduct *= num;
}

console.log(`Exercise 12 - The total product is ${totalProduct}`);

// Exercise 13: Array of student objects

const students: { name: string; grade: number }[] = [
  { name: 'CatWoman', grade: 90 },
  { name: 'Batman', grade: 85 },
];

for (const student of students) {
  console.log(`Exercise 13 - Student name is ${student.name}`);
}
