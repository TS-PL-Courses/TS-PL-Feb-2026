//npx ts-node Arrays.ts
// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.
let numbers: number[] = [10, 20, 30, 40];
let totalProduct: number = 1;
for (const z of numbers) {
  totalProduct = totalProduct * z;
}
console.log('Numbers:', numbers);
console.log('Total product:', totalProduct);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

let students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 }, // пример 1
  { name: 'Bob', grade: 85 }, // пример 2
  { name: 'Борис', grade: 78 }, // добавяме още един за практика
];
for (const student of students) {
  console.log('Student name:', student.name);
}
