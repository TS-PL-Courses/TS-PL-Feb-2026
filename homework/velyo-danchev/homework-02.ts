// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

let isMale: boolean = true;

if (isMale) {
    console.log('It\'s a Male.')}
    else {
    console.log('It\'s not a Male.')
};

//-------------------------------------------------------------------------------//


// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

let firstNumber: number = 7;
let secondNumber: number = 7;
let thirdNumber: number = 15;

if (
    (firstNumber > secondNumber && firstNumber < thirdNumber) ||
    (firstNumber > thirdNumber && firstNumber < secondNumber)
) {
    console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
    console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

//-------------------------------------------------------------------------------//

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

let numOne: number = 2;
let numTwo: number = 22;
let numThree: number = 21;

if (numOne <= numTwo && numTwo <= numThree) {
    console.log(numOne, numTwo, numThree);
} 
else if (numOne <= numThree && numThree <= numTwo) {
    console.log(numOne, numThree, numTwo);
} 
else if (numTwo <= numOne && numOne <= numThree) {
    console.log(numTwo, numOne, numThree);
} 
else if (numTwo <= numThree && numThree <= numOne) {
    console.log(numTwo, numThree, numOne);
} 
else if (numThree <= numOne && numOne <= numTwo) {
    console.log(numThree, numOne, numTwo);
} 
else {
    console.log(numThree, numTwo, numOne);
}


//-------------------------------------------------------------------------------//

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

let theWord: string = 'GooodBoyS';

if (theWord.length <10) {
    console.log(`The length of ${theWord} is less than 10 symbols.`)}
    else if (theWord.length === 10) {
        console.log(`The length of ${theWord} is exactly 10 symbols`);
    } else 
        console.log(`The lenght of ${theWord} is greater than 10 symbols.`);


//-------------------------------------------------------------------------------//

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const randomString: string = 'Harkonens';

if (randomString.includes('b')) {
    console.log(`The string ${randomString} contains the letter 'B'.`);
} else 
    console.log(`The string ${randomString} does NOT contain the letter 'B'.`);

//-------------------------------------------------------------------------------//

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

let clientAge: number = 18;
let bestLapTime: number = 50.77;

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
    console.log(`Client age is ${clientAge} and best lap time is ${bestLapTime}, client is allowed to compete.`);
}
else if (clientAge < 18) {
    console.log(`Client age is ${clientAge}. Client must be at least 18 to compete.`);
}
else if (clientAge >= 65) {
    console.log(`Client age is ${clientAge}. Client must be below 65 to compete.`);
}
else if (bestLapTime >= 60) {
    console.log(`Best lap time is ${bestLapTime}. Lap time must be below 60 seconds.`);
}

//-------------------------------------------------------------------------------//

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let arrayOne: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let transformedArrayOne: string[] = arrayOne.map(word => word.toUpperCase());

console.log(`This is the original array ${arrayOne}, and this is the transfomed into UPPER case array ${transformedArrayOne}`);

//-------------------------------------------------------------------------------//

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let arrayTwo: string[] = ['Happy', 'Happier', 'Happiest', 'Positive', 'Smilling'];
let filteredArrayTwo: string[] = arrayTwo.filter((word) => word.length > 5);

console.log(`These are the words with length greater than 5 ${filteredArrayTwo}`);

//-------------------------------------------------------------------------------//

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

let arrayThree: number[] = [1, 7, 15, 27, 57, 33];
let initialValue: number = Infinity;
let arrayMLargestNumber: number = arrayThree.reduce((acc, value) => { 
    if (acc < value) {
        return value
    } else 
        return acc

}, initialValue); 


console.log(`This is the Largest number ${arrayMLargestNumber}`);

//-------------------------------------------------------------------------------//

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = {
    name:string, 
    price: number, 
    quantity: number
};

let itemsArray: Item[] = [
    {
        name: 'Delicate Ruby',
        price: 70,
        quantity: 7
    },
    {
        name: 'Living Ruby',
        price: 240,
        quantity: 5
    },
    {
        name: 'Golden Draenite',
        price: 4,
        quantity: 140
    }
];


let totalPrice: number[] = itemsArray.map((item) => {
    return item.price * item.quantity
});


let sum: number = totalPrice.reduce((acc, value) => {
    return acc + value
});

console.log(`The amount of all Total prices is: ${sum}.`);

//-------------------------------------------------------------------------------//

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

let arrayFour: number[] = [10, 20, 10, 20, 40, 50, 60, 60, 50, 90, 80, 90, 80];

let uniqueArrayValues: number[] = arrayFour.reduce((acc: number[], value) => {
    if (!acc.includes(value)) {
        return [...acc, value];
    }
    return acc;
}, []);

console.log(uniqueArrayValues);

//-------------------------------------------------------------------------------//

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User = {
    name: string, 
    age: number
}

let usersArray: User[] = [
    {name: 'Valent', age: 37},
    {name: 'Rem', age: 17},
    {name: 'Romul', age: 15},
    {name: 'Comodos', age: 25},
    {name: 'Konstantine', age: 28},
    {name: 'Nero', age: 23}
];

const filteredUsers = usersArray.filter((user) => user.age > 18);
const filteredArrayNames = filteredUsers.map((user) => user.name);

console.log(`The names of the user that are above 18 years are: ${filteredArrayNames.join(', ')}`);