export {};

// Homework 03 - Collections and Loops
console.log("\nHomework 03 - Collections and Loops");

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
console.log(
  "\nExercise 1: Loop over an array and log items only if the item's length is over 4 characters",
);
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
const colors: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "black",
];
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    // Step 3: Log the item if the condition is met
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log(
  "\nExercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop",
);
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
console.log(
  "\nExercise 3: Write a script to construct the following pattern using a nested for loop",
);
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
for (let row = 1; row <= 5; row++) {
  let stars: string = "";
  for (let column = 1; column < row + 1; column++) {
    stars += "* ";
  }
  console.log(stars.trim());
}
for (let row = 4; row >= 1; row--) {
  let stars: string = "";
  for (let column = 1; column < row + 1; column++) {
    stars += "* ";
  }
  console.log(stars.trim());
}

// Exercise 4: Phone number area code substitution
console.log("\nExercise 4: Phone number area code substitution");
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
const arrayWithPhoneNumber: string[] = [
  "0376829209",
  "04239982009",
  "0536829299",
];
const arrayWithUpdatedNumber: string[] = [];
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
for (let i = 0; i < arrayWithPhoneNumber.length; i++) {
  arrayWithUpdatedNumber.push("359" + arrayWithPhoneNumber[i].slice(1));
}
// Step 3: Log the original and the new phone numbers in the console
console.log(arrayWithPhoneNumber);
console.log(arrayWithUpdatedNumber);

// Exercise 5: Decide on an evening activity
console.log("\nExercise 5: Decide on an evening activity");
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person
// is sick (boolean)
const name: string = "Ralitsa";
const hour: number = 22;
const money: number = 30.5;
const isSick: boolean = true;
let activity: string = "";
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
if (!isSick && money >= 20) {
  activity = "go to the cinema";
  // - If the person is not sick and has less than 20 money, the activity is "go to the park"
} else if (!isSick && money < 20) {
  activity = "go to the park";
  // - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24),
  // the activity is "watch a movie"
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = "watch a movie";
  // - If the person is sick, the activity is "stay at home and go to bed"
} else if (isSick) {
  activity = "stay at home and go to bed";
}
// Step 3: Log the person's details and the decided activity
if (isSick) {
  console.log(
    `${name} has ${money} euros but is sick and decided to ${activity} at ${hour} o'clock`,
  );
} else {
  console.log(
    `${name} is feeling well, has ${money} euros and decided to ${activity} at ${hour} o'clock`,
  );
}

// Exercise 6: Use an Enum, Object type, and Arrays
console.log("\nExercise 6: Use an Enum, Object type, and Arrays");
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
enum AccountTypes {
  "Current" = 1,
  "FlexSave" = 4,
  "Deposit" = 2,
}
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
const client1 = {
  name: "John Doe",
  accountType: AccountTypes.Current,
};
const client2 = {
  name: "John Doe 2",
  accountType: AccountTypes.Deposit,
};
const client3 = {
  name: "John Doe 3",
  accountType: AccountTypes.FlexSave,
};
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the
// name and account type of each client in the console
let arrayOfClients = [];
arrayOfClients.push(client1);
arrayOfClients.push(client2);
arrayOfClients.push(client3);
for (let i = 0; i < arrayOfClients.length; i++) {
  console.log(
    `Client name: ${arrayOfClients[i].name}, Account type: ${arrayOfClients[i].accountType}`,
  );
}

// Functions

// Exercise 7:
console.log(
  "\nExercise 7: Fix the following code to print the same message each time the function is called.",
);
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

//add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log("Printing the row");
  console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, "Driver smoked", "Ivan", "Petko", 2523);

// Exercise 8:
console.log("\nExercise 8: Fix the errors in the code below:");
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));
function sum_2_numbers(number_1: number, number_2: number) {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
console.log("\nExercise 9: Define a function that prints a person's name:");
// Step 1: Define a function that prints in the console a person's First Name, Middle Name,
// and Last Name, where the Middle Name is optional
function printName(
  firstName: string,
  lastName: string,
  middleName?: string,
): string {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
  }
}

// Step 2: Use JSDoc to add a description to the function. Example:

/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} The product of a and b
 */

// function multiply(a: number, b: number): number {
//     return a * b;
// }

// Step 3: Call the function with and without a Middle Name to verify it works correctly
printName("Ralitsa", "Kaneva", "Petrova");
printName("Ralitsa", "Kaneva");

// Exercise 10:
console.log(
  "\nExercise 10: Define a function that returns a person's information:",
);
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
/**
 * Person Information
 * @param {string} firstName - the first name of the person
 * @param {string} lastName - the last name of the person
 * @param {number} age - the age of the person
 * @returns {string} The concatenated string of the person's information
 */
function printPersonInfo(
  firstName: string = "John",
  lastName: string = "Doe",
  age: number = 0,
): string {
  // Step 2: Use JSDoc to add a description to the function

  // Step 3: If the function is not called with arguments, it should return default values and the
  // message: "Missing one or all arguments - first name, last name, or age"
  if (!firstName || !lastName || !age) {
    return `${firstName} ${lastName}, ${age} -> Missing one or all arguments - first name, last name, or age`;
  } else {
    return `${firstName} ${lastName}, ${age}`;
  }
}
// Step 4: Console log calls of the function once with all arguments and a few times with
// missing arguments to verify it works correctly
console.log(printPersonInfo("Ralitsa", "Kaneva", 30));
console.log(printPersonInfo("Ralitsa", "Kaneva"));
console.log(printPersonInfo("Ralitsa"));
console.log(printPersonInfo());

// Exercise 11:
console.log("\nExercise 11: Define a function that accepts 2 named parameters");
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment,
// and prints in the console a message: "I love {programming language} because {compliment}"

/**
 * Prints a message about loving a programming language
 * @param {string} programmingLanguage - the programming language to love
 * @param {string} compliment - the compliment about the programming language
 */
function printLoveMessage(programmingLanguage: string, compliment: string) {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works
// correctly
printLoveMessage("TypeScript", "it has great type safety");
printLoveMessage("JavaScript", "it is versatile");
printLoveMessage("Python", "it is great for data science");

// Exercise 12:
console.log(
  "\nExercise 12: Define a function that accepts a string and calculates the number of uppercase and lowercase letters:",
);
// Step 1: Define a function that accepts a string and calculates the number of uppercase and
// lowercase letters
function countUpperAndLowerCase(inputString: string): {
  uppercase: number;
  lowercase: number;
} {
  let uppercaseCount: number = 0;
  let lowercaseCount: number = 0;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char === char.toUpperCase() && char >= "A" && char <= "Z") {
      uppercaseCount++;
    } else if (char === char.toLowerCase() && char >= "a" && char <= "z") {
      lowercaseCount++;
    }
  }
  console.log("Uppercase:", uppercaseCount);
  console.log("Lowercase:", lowercaseCount);
  return { uppercase: uppercaseCount, lowercase: lowercaseCount };
}
countUpperAndLowerCase("Hello World");

// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

// Exercise 7 Hints:
// The order of the arguments in the "add_item_in_form" function call or the order of the parameters in the function should be fixed

// Exercise 8 Hints:
// 1. Missing closing bracket in the console log statement
// 2. A return statement is missing inside the function

// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts
