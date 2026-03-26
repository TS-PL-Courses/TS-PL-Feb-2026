// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
const isMale: boolean = true;
if (isMale) {
    console.log("The person is male");
} else {
    console.log("The person is female");
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
const num1: number = 5;
const num2: number = 3;
const num3: number = 7;
if (num1 > num2 && num1 < num3) {
    console.log(`The number ${num1} is between ${num2} and ${num3}`);
} else {
    console.log(`The number ${num1} is NOT between ${num2} and ${num3}`);
};

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
const number1: number = 9;
const number2: number = 33;
const number3: number = 6;

if (number1 <= number2 && number1 <= number3) {
    if (number2 <= number3) {
        console.log(number1, number2, number3);
    } else {
        console.log(number1, number3, number2);
    }
} else if (number2 <= number1 && number2 <= number3) {
    if (number1 <= number3) {
        console.log(number2, number1, number3);
    } else {
        console.log(number2, number3, number1);
    }
} else {
    if (number1 <= number2) {
        console.log(number3, number1, number2);
    } else {
        console.log(number3, number2, number1);
    }
}
// Second alternative solution using sort method
const sortedNumber: number[] = [number1, number2, number3].sort((a, b) => a - b);
console.log(sortedNumber);

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
const myString: string = "Hello, World!";
if (myString.length > 10) {
    console.log("The string has more than 10 characters");
} else {
    console.log("The string does NOT have more than 10 characters");
}
// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
const myString2: String = "ABC";
if (myString2.includes('B')) {
    console.log(`The string ${myString2} contains the letter 'B'`);
} else {
    console.log(`The string ${myString2} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const clientAge: number = 25;
const bestLapTime: number = 55.5;
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
    console.log(`The client is ${clientAge} years old, has a best lap time of ${bestLapTime} seconds, and is allowed to compete.`);
} else {
    console.log(`The client is ${clientAge} years old , has a best lap time of ${bestLapTime} seconds and is NOT alloewd to compete.`)

};


// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const stringArray: string[] = ["hello", "bye", "good morning"];
const upperCaseArrayw: string[] = stringArray.map(str => str.toUpperCase());
console.log(upperCaseArrayw);
// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const wordsArray: string[] = ["hello", "bye", "good morning", "hi", "welcome"];
const longWordsArray: string[] = wordsArray.filter(word => word.length > 5);
console.log(longWordsArray);
// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
const arrayOfnumbers: number[] = [3, 7, 2, 9, 5];
const maxNumber: number = arrayOfnumbers.reduce((max, current) => {
    if (max > current) {
        return max;
    }else {
        return current;
    }
    
});
console.log(maxNumber);
// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.
type Item = {
    name:string;
    price: number;
    quantity: number;
}
const itemsArrays : Item[] = [
    { name : "Apple",price: 2, quantity: 3},
    { name : "Banana",price: 1, quantity: 5},
    { name : "Orange",price: 3, quantity: 2},
]
const itemtotalPrice:number[] = itemsArrays.map(item => item.price *item.quantity);
const totalPrice:number = itemtotalPrice.reduce((sum ,current) => sum + current,0);
console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
const numbersDulplicate:number[] = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumber:number[] = numbersDulplicate.reduce((unique:number[],current) => {
    if (!unique.includes(current)) {
        unique.push(current);
    }
    return unique;
}, []);
const uniqueNumber2:number[] = Array.from(new Set(numbersDulplicate));
console.log(uniqueNumber);
console.log(uniqueNumber2);
// Execise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
type User = {
    name: string;
    age: number;
}
const usersArray: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
]
const usersOver18: User[] = usersArray.filter(user => user.age > 18);
const userOver18Names:string[] = usersOver18.map(user => user.name);
console.log(usersOver18);
console.log(userOver18Names);
///