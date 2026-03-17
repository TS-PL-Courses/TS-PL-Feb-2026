// ==============================
// Part 1 — Numbers
// ==============================

// Exercise 1: Variable swapping

let firstNumber: number = 5;
let secondNumber: number = 10;

console.log(
  `Exercise 1 - BEFORE swap -> firstNumber: ${firstNumber}, secondNumber: ${secondNumber}`,
);

let temp: number = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

console.log(
  `Exercise 1 - AFTER swap -> firstNumber: ${firstNumber}, secondNumber: ${secondNumber}`,
);

// ==============================
// Part 2 — Booleans
// ==============================

// Exercise 2: Check if a number is even or odd

const numberToCheck: number = 4;
const isEven: boolean = numberToCheck % 2 === 0;

console.log(`Exercise 2 - Is ${numberToCheck} even -> ${isEven}`);

// Exercise 3: Verify if a number is positive

const positiveNumberToCheck: number = 5;
const isPositive: boolean = positiveNumberToCheck > 0;

console.log(`Exercise 3 - Is ${positiveNumberToCheck} positive -> ${isPositive}`);

// Exercise 4: Total cost calculation

const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;
const formattedTotal = totalCost.toFixed(2);

console.log(`Exercise 4 - The total cost of ${price} * ${quantity} = ${formattedTotal}`);

// Exercise 5: Celsius to Fahrenheit converter
const temperatureInCelsius: number = 30;
const temperatureInFahrenheit: number = temperatureInCelsius * (9 / 5) + 32;

console.log(
  `Exercise 5 - The temperature of ${temperatureInCelsius}°C = ${temperatureInFahrenheit}°F`,
);
