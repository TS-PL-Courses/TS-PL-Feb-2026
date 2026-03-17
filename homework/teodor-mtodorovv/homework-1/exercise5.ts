// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

// npx ts-node homework/teodor-mtodorovv/homework-1/exercise5.ts

// Step 1: Create a variable for the temperature in Celsius.
let temperatureCelsius: number = 32.2;

// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
const temperatureFahrenheit: number = (temperatureCelsius * 9) / 5 + 32;

// Step 3: Store the result in a variable.
let result: number = temperatureFahrenheit;

// Step 4: Log the temperature in Fahrenheit.
console.log('`Temperature in Fahrenheit: ', result);
