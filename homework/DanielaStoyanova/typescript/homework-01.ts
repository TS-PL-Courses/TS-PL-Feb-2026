// Homework 01 - Simple Types
// npx ts-node homework-01.ts

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
let a: number = 1;
let b: number = 2;
// Step 2: Swap their values.
[a, b] = [b, a];
// Step 3: Log the original values and the final values.
console.log("original a = " , a ,"original b = ", b ,", after swap a = ", a ,"and b = ", b);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it
let c: number = 111;
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
let isEven: boolean;
if  (c % 2 === 0) 
     {isEven = true;}
else {isEven = false;}
// Step 3: Log the result
if (isEven)
    {console.log("The Number c is even");}
else {console.log("The Number c is odd");}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
let c2: number = 111;
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
let isPositive: boolean;
if  (c2 % 2 === 0) 
     {isPositive = true;}
else {isPositive = false;}
// Step 3: Log the result
if (isPositive)
     {console.log("Number c2 is positive");}
else {console.log("Number c2 is negative");}

// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
let price: number = 19.99;
// Step 2: Create another variable called quantity with the value 3.
let quantity: number = 3;
// Step 3: Calculate the total cost by multiplying price and quantity.
let multipl: number = price * quantity;
// Step 4: Log the total cost.
console.log("the total cost is = ", multipl,)

// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
let tempC: number = 0;
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
let tempF: number = (tempC*9/5 + 32);
// Step 4: Log the temperature in Fahrenheit.
console.log("the temp in F is = ", tempF,)

// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".
let isLoggedIn: boolean;
if (isLoggedIn)
     {console.log("Welcome!");}
else {console.log("Please log in");}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with value true.
// Step 2: Create a boolean variable isAdult with value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = false;
if (isAdult && hasTicket)
   {canEnter = true}
console.log("Value of canEnter is", canEnter,);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result
let mystring: string = "Daniela St";
let checkifempty: boolean = false;
if (mystring === "")
   {checkifempty = true}
console.log("The statement that the string is empty is", checkifempty,);

// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result
let newstring: string = "Daniela St";
let firstisA: boolean = false;
if (newstring[0] === "a")
   {firstisA = true}
console.log("The statement that the string's first letter is A is", firstisA,);

// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
let fun: string = "TypeScript is fun";
console.log("length = ", fun.length,);
console.log("uppercase = ", fun.toUpperCase(),);
console.log("lowercase = ", fun.toLowerCase(),);
let favoriteLanguage: string = "TypeScript"
let favoriteLanguage2: string = "My favorite programming language is"
console.log(favoriteLanguage2, favoriteLanguage,);

// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.
let BigInt1: bigint = 12345678901234567899n;
let BigInt2: bigint = 87654321098765432101n;
let sum3 : bigint = BigInt1 + BigInt2
console.log("Sum of big ints = ", sum3,);

// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.
let myarray: number[] = [10, 20, 30, 40];
let totalProd: number = 1;
for (let i = 0; i < myarray.length; i++) {
    totalProd = totalProd * myarray[i];
}
console.log("Result of multipling all numbers in the array = ", totalProd,);

// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
let students: { name: string; grade: number } [] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 } 
]
for (let i = 0; i < students.length; i++) {
    console.log("The student's name is", students[i].name,);
}

// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
function printId (id: string | number) {
    console.log("ID:", id);
}
printId("OK-ex14");

// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

// Exercise 15: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

let QAname: string = "D St";
let numberOfFunc: number = 5;
let timeneeded1: number = 10;
let timeNeededAll: number = numberOfFunc * timeneeded1;
console.log("The QA" , QAname ,"will need", timeNeededAll ,"hours to complete", numberOfFunc ,"project/s.");

// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

type User = {
    id: number | string;
    name: string;
};
let userA: User = { id: 1, name: "D St number" };
let userB: User = { id: "One", name: "D st string" };
console.log(userA, userB);

// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array which should look like [10, 20, 30, 40].

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result which should be [1, 2, 5].

// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result which should be [1, 2, 3, 4, 5].