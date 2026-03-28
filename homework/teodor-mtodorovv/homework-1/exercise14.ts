// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

// Step 1: Create a function called printId.
function printId(id: string | number) {
  // Step 2: The parameter id should accept string or number (string | number).
  console.log(id);
}

// Step 3: Inside the function, log the id value.
printId(7);
printId('Test');
