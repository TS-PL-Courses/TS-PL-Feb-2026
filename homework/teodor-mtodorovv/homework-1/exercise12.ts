// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

// Step 1: Create an array with the numbers [10, 20, 30, 40].
const myNumbers: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the total product.
let totalProducts: number = 1;

// Step 3: Use a loop to multiply all numbers in the array.
for (let i = 0; i < myNumbers.length; i++) {
  totalProducts = totalProducts * myNumbers[i];
}

// Step 4: Log the final product.
console.log('The sum of all products: ', totalProducts);
