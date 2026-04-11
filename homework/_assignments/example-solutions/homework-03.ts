
// Homework 03

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters

// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
const colors: string[] = ["red", "blue", "green", "yellow", "purple", "orange", "white", "black"];

// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
for (let i = 0; i < colors.length; i++) {
    const currentColor = colors[i];

// Step 3: Log the item if the condition is met
    if (currentColor.length > 4) {
        console.log(currentColor);
    }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let i = 1; i <= 100; i++) {
    console.log(i);
}   

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let pattern: string = "";
const maxSize: number = 5;
for (let i = 1; i <= maxSize; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = maxSize - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Exercise 4: Phone number area code substitution

// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
const phoneNumbers: string[] = ["0376829209", "04239982009", "0536829299"];

// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
for (let i = 0; i < phoneNumbers.length; i++) {
    const originalNumber = phoneNumbers[i];
      const newNumber = originalNumber.replace(/^0/, "+359");   
      
// Step 3: Log the original and the new phone numbers in the console
    console.log(`Original: ${originalNumber}, New: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity

// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
const name: string = "Maria";
const hour: number = 22;
const money: number = 50.5;
const isSick: boolean = false;  
  
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
let activity: string = "";
if (isSick) {
    activity = "stay at home and go to bed";
} else if (hour >= 21 && hour <= 24 && money > 20) {
    activity = "watch a movie";
} else if (money >= 20) {
    activity = "go to the cinema";
} else {
    activity = "go to the park";
}

// Step 3: Log the person's details and the decided activity
console.log(`--- Person Details ---`);
console.log(`Name: ${name}`);
console.log(`Hour: ${hour}:00`);
console.log(`Money: ${money.toFixed(2)}`);
console.log(`Is Sick: ${isSick ? "Yes" : "No"}`);
console.log(`Decided Activity: ${activity}`);

// Exercise 6: Use an Enum, Object type, and Arrays

// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
enum AccountType {
    Current = 1,
    Deposit = 2,
    FlexSave = 4
} 
interface Client {
    name: string;
    accountType: AccountType;
}

// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
const client1: Client = {
    name: "John Doe",
    accountType: AccountType.Current    
};
const client2: Client = {
    name: "Maria Penova", 
    accountType: AccountType.Deposit  
};  
const client3: Client = {
    name: "Alice Johnson", 
    accountType: AccountType.FlexSave  
};  
  
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
const clients: Client[] = [client1, client2, client3];
console.log("--- Client Account List ---");
for (let i = 0; i < clients.length; i++) {
    const client = clients[i];
    console.log(`Client Name: ${client.name}, Account Type: ${AccountType[client.accountType]}`);
} 

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

  function add_item_in_form(
    table_row: number, 
    complain: string, 
    client_name: string, 
    driver_name: string, 
    car_number: number
) {
    console.log("Printing the row");
    console.log(`Row: ${table_row}, Complain: ${complain}, Client: ${client_name}, Driver: ${driver_name}, Car No: ${car_number}`);
}

add_item_in_form(2556, "Driver smoked", "Ivan", "Petko", 2523);
add_item_in_form(2557, "Late arrival", "Maria", "Stefan", 8844);

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

function sum_2_numbers(number_1: number, number_2: number): number {
    const result = number_1 + number_2;
    return result; 
}
console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

/**
//* Multiply two numbers
//* @param {number} a - the first number to be multiplied
//* @param {number} b - the second number to be multiplied
//* @returns {number} The product of a and b
//*/
// function multiply(a: number, b: number): number {
//     return a * b;
// }
function printFullName(firstName: string, lastName: string, middleName?: string): void {
    if (middleName) {
        console.log(`Full Name: ${firstName} ${middleName} ${lastName}`);
    } else {
        console.log(`Full Name: ${firstName} ${lastName}`);
    } 
}

// Step 3: Call the function with and without a Middle Name to verify it works correctly
printFullName("Maria", "Penova", "Angelova");
printFullName("Maria", "Penova");  

// Exercise 10:

// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
/**
 * Returns concatenated strings: first name, last name, and age.
 * @param {string} [firstName] - The person's first name
 * @param {string} [lastName] - The person's last name
 * @param {number} [age] - The person's age
 * @returns {string} The formatted string with details or a default error message
 */
function getPersonInfo(
    firstName?: string,
    lastName?: string,
    age?: number
): string {
    if (!firstName || !lastName || age === undefined) {
        return "Missing one or all arguments - first name, last name, or age";
    }

    return `Name: ${firstName} ${lastName}, Age: ${age}`;
}
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly
console.log(getPersonInfo("Maria", "Penova", 25));
console.log(getPersonInfo());
console.log(getPersonInfo("Ivan"));
console.log(getPersonInfo("Ivan", "Ivanov"));

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
/**
 * @param {Object} options  - The options object containing the programming language and compliment
 * @param {string} options.language - The programming language
 * @param {string} options.compliment - The reason for loving the language  
 */

// Step 2: Use JSDoc to add a description to the function
/**
 * Expresses love for a programming language with a compliment.
 * @param {Object} options - The options object containing the programming language and compliment
 * @param {string} options.language - The programming language
 * @param {string} options.compliment - The reason for loving the language
 */

function expressLoveForLanguage({ language, compliment }: { language: string, compliment: string }): void {
    console.log(`I love ${language} because ${compliment}`);  
}  
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly
expressLoveForLanguage({ 
    language: "TypeScript", 
    compliment: "it has amazing type safety" 
});

expressLoveForLanguage({ 
    compliment: "it is the language of the web", 
    language: "JavaScript" 
});

expressLoveForLanguage({ 
    language: "Python", 
    compliment: "it's very readable and clean" 
});

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

/**
 * @param {string} text - The string to analyze
 * @returns {Object} An object containing the counts for uppercase and lowercase
 */
function getLetterCounts(text: string) {
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (/[a-zA-Z]/.test(char)) {
            if (char === char.toUpperCase()) {
                uppercaseCount++;
            } else {
                lowercaseCount++;
            }
        }
    }

    return {
        uppercase: uppercaseCount,
        lowercase: lowercaseCount
    };
}
const sample = "Hello World";
const result = getLetterCounts(sample);

console.log(`Sample string: "${sample}"`);
console.log(`Number of uppercase characters: ${result.uppercase}`);
console.log(`Number of lowercase characters: ${result.lowercase}`);

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
