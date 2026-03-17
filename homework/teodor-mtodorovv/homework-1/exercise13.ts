// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.

// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Ivan', grade: 95 },
];

// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
for (const student of students) {
  console.log(`Student: ${student.name}`);
}
