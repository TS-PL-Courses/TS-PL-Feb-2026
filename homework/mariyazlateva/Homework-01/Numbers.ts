// npx ts-node typescript/Homework-01/Numbers.ts
//Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
let a = 5;
let b = 9;
console.log('Първоначални стойности:', { a, b });
// Step 2: Swap their values.
let x = a;
a = b;
b = x;
// Step 3: Log the original values and the final values.
console.log('След размяна:', { a, b });

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
let num = 10;
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
let isEven = num % 2 === 0;
// Step 3: Log the result
console.log('Number:', num);
console.log('Is even:', isEven);
console.log('Is odd:', !isEven);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
let y: number = -12;
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
let isPositive = y > 0;
// Step 3: Log the result
console.log('Number:', y);
console.log('Is positive:', isPositive);

//Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
let price = 19.99;
// Step 2: Create another variable called quantity with the value 3.
let quantity = 3;
// Step 3: Calculate the total cost by multiplying price and quantity.
let totalCost = price * quantity;
// Step 4: Log the total cost.
console.log('Total cost:', totalCost);

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
let celsius = 26;
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.

// Step 3: Store the result in a variable.
let fahrenheit = (celsius * 9) / 5 + 32;
// Step 4: Log the temperature in Fahrenheit.
console.log('Temperature in Celsius:', celsius);
console.log('Temperature in Fahrenheit:', fahrenheit);
