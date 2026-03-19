// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let a: number = 5;
let b: number = 10;
let c: number;
console.log(`EXERCISE 1: \nThe initial value of a is ${a}`);
console.log(`The initial value of b is ${b}`);
c = a;
a = b;
b = c;
console.log(`The final values of a is ${a}`);
console.log(`The final value of b is ${b}`);

//Excercise 1: Alternative way of swapping without third variable - back to the initial values. 
// But it has to be changed because it doens't take into account the sign of the number.
b = b*a;
a = b/a;
b = b/a;

console.log(`Back to the initial values: initial value of a ia ${a}, initial value of b is ${b}\n\n`);




// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if the first variable is even.
// Step 3: Log the result.


const anyNumber: number = -100;
const remainder: number = anyNumber % 1;
if (remainder !== 0)
    {
        console.log(`EXERCISE 2: \nNumber ${anyNumber} is not an integer\n`);
    }
else if ( anyNumber % 2 === 0)
    {
        console.log(`EXERCISE 2: \nNumber ${anyNumber} is even\n`) ;
    }
else 
    {
        console.log(`EXERCISE 2: \nNumber ${anyNumber} is odd\n`); 
    }

//Excercise 2: Alternative approach - with boolean variable

const isOdd: boolean = anyNumber % 1 === 0 && anyNumber % 2 === 0;
if (isOdd)
    {
        console.log(`Alternative approach results:\nNumber ${anyNumber} is even`) ;
    }
else if (anyNumber % 1 !==0)
    {
        console.log(`Number ${anyNumber} is not an integer`);
    }
else if (anyNumber % 2 !==0)
    {
        console.log(`Number ${anyNumber} is odd\n\n`);
    }






// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if the first variable is greater than 0.
// Step 3: Log the result.
const checkPositive: number = 100.2;
const isPositive: boolean = checkPositive > 0;
if (isPositive)
    {
        console.log(`\nEXERCISE 3:\nNumber ${checkPositive} is a positive number`);
    }
else
    {
        console.log(`\nEXERCISE 3:\nNumber ${checkPositive} is not a positive number\n\n`);
    }



// Exercise 4: Total cost calculation
// Step 1: Create a variable called price with the value 19.99.
// Step 2: Create another variable called quantity with the value 3.
// Step 3: Calculate the total cost by multiplying price and quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
const quantity: number = 3;
console.log(`\nEXERCISE 4:\nThe total price is ${price*quantity}\n\n`);





// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

const tempCelsius: number = 19;
const tempFarenheit: number = (tempCelsius*9)/5 + 32;
console.log(`\nEXERCISE 5:\nThe temperature is ${tempFarenheit} °F`)



// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".


const isLoggedIn: boolean = true;
if (isLoggedIn)
 {
    console.log('\n\nEXERCISE 6:\nWelcome!');
 }
 else
  {
    console.log('\n\nEXERCISE 6:\nPlease log in.')
  }


// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;
console.log(`\n\nEXERCISE 7: \nThe value of canEnter is ${canEnter}`);




// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.

const anyString: string = "Hello world!";
const isEmpty: boolean = anyString.length === 0;
if (isEmpty)
    {
        console.log(`\n\nEXERCISE 8:\nThe string is empty.`)
    }
else
    {
        console.log(`\n\nEXERCISE 8:\nThe string "${anyString}" is not empty`);
    }



// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.

let startWith: string = "Alf came to town!";
let startWithA: boolean = startWith.charAt(0) === "A";
if (startWithA)
    {
        console.log(`\n\nEXERCISE 9:\nThe string "${startWith}" starts with "A"`);
    }
else
    {
        console.log(`\n\nEXERCISE 9:\nThe string "${startWith}" doesn't start with "A"`);
    }




// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".


let message: string = "Typescript is fun!";

console.log(`\n\nEXERCISE 10:\nThe string legth is ${message.length} symbols`);
//console.log(`The string in Uppercase: ${message.toUpperCase}` );
console.log(`The string in UPPER CASE: ${message.toUpperCase()}`);
console.log(`The string in lower case: ${message.toLowerCase()}`);

let favoriteLanguage: string = "Fortran77";
console.log(`My favourite programming language is ${favoriteLanguage}.`);



// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.

// find how big is the big integer

const bigInt1: bigint = 9834759237459843827592347598n;
const bigInt2: bigint = 24985732497529347598324759347n;
const sum: bigint = bigInt1 + bigInt2;
console.log(`\n\nEXERCISE 11:\nThe sum of ${bigInt1} and ${bigInt2} is ${sum}`);




// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.

//I couldn't find in the lectures "loops" topic but guessed there would be "do while" cycling in typescript
const numberArray: number[] = [10, 20, 30, 40];
let arrayProduct: number = 1;
if (numberArray.length > 0)
    {
        while (numberArray.length > 0)
        {
        arrayProduct = numberArray.pop()*arrayProduct;
        }
        console.log(`\n\nEXERCISE 12:\nThe Product of the array is ${arrayProduct}`);
    }

else

    {
        console.log(`The array is empty`);
    }




// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.


type student =
{
    name: string;
    grade: number;
}
const arrayStudents: student[] = [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}];

if (arrayStudents.length > 0)
    {
        while (arrayStudents.length > 0)
        {
        console.log('\n\nEXERCISE 13:\n',arrayStudents.pop());
        }
    }

else

    {
        console.log(`\n\nEXERCISE 13:\nThe array is empty`);
    }





// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number)
    {
        console.log(id);
    }
printId("Minka");
printId(100.9);




// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."


const qaName: string = "Minka";
const numFunct: number = 5.2;
// Take only the whole part from the number of functionalities in case it's a real number
const numFunctInt: number = numFunct - (numFunct % 1);
const speedTest: number = 2;
const totalTestTime: number = numFunctInt*speedTest;
console.log(`\n\nEXERCISE 15:\nThe QA ${qaName} will need ${totalTestTime} hours to complete testing of ${numFunct} functionalities in project/s.`)



// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

type usertype = 
{
    id: number | string;
    name: string;
}

const user1: usertype = {id: 2022, name: "Minka"};
const user2: usertype = {id: "a234fc", name: "Mincho"};

console.log(`\n\n\nEXERCISE 16:\nuser1: ${user1.id}, ${user1.name}; user2: ${user2.id}, ${user2.name}`);




// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].


//quite a dirty decision but it works
const array1: number[] = [10, 20, 10, 30, 40];
const array2: number[] = [];
let i: number = 0;
let j: number = 1;


if (array1.length > 1)
    {
        array1.sort();

        while (i <= array1.length - 2)
        {
            array2.push(array1[i]);
        while (j <= array1.length-1)
            {
                if (array1[i] === array1[j])
                {
                    array1.splice(j,1);
                    j--;
                
                }

                j++;
            
            }
            i++;
            j = i + 1;
        }  

if (i <= array1.length-1)
    {
         array2.push(array1[i]);
    }      
         console.log('\n\nEXERCISE 17: The initial array without duplicates:', array1);
         console.log('The new array with uniqie values:', array2);
    }
else
    {
        console.log("\n\nEXERCISE 17:\nThe array is either empty or has only 1 element.")
    }


// the above code as a function to remove duplicates

function remDupl(arrF: number[], arrS: number[] = []): number[]
{

    let ii: number = 0;
    let jj: number = 1;
    if (arrF.length > 1)
        {
            arrF.sort();

            while (ii <= arrF.length - 2)
            {
                arrS.push(arrF[ii]);
            while (jj <= arrF.length-1)
                {
                    if (arrF[ii] === arrF[jj])
                    {
                        arrF.splice(jj,1);
                        jj--;                    
                    }

                    jj++;
                
                }
                ii++;
                jj = ii + 1;
            }  

    if (ii <= arrF.length-1)
        {
            arrS.push(arrF[ii]);
        }      
 //           console.log('The initial array without duplicates:', arrF);
  //          console.log('The second array:', arrS);
        }
    else
        {
            console.log("The array is either empty or has only 1 element.")
        }
return arrS;
       

}


//Call Remove Duplicates - test
// remDupl([12, 12, 42, 324, 10, 20, 12, 69, 34, 324, 12]);




// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5];
let diff: number[] = [];
let diff1: number[] = []; // temporary array

// Removing eventual duplicates in the source arrays - arr1 and arr2
arr1 = remDupl(arr1);
arr2 = remDupl(arr2);

//Use the temporary array "diff1" to store in it the duplicated values in arr1 and arr2
i = 0;
j = 0;

while (i <= arr1.length -1)
    {
        while (j <= arr2.length-1)
            {
                if (arr1[i] == arr2[j])
                    {
                        diff1.push(arr1[i]);
                    }
                    j++;
            }
            i++;
            j=0;
    }

console.log('\n\EXERCISE 18: \nThe identical elements in both matrices are: ', diff1);

// find the unique elements from arr1 and push them into the "diff" array
i = 0;
j = 0;
let flag: boolean = true;

while (i <= arr1.length - 1)
    {
        flag = true;
        while (j <= diff1.length -1 && flag == true)
            {
                if (arr1[i] == diff1[j])
                    {
                        flag = false;
                    }
                j++;
            }
            if (flag == true)
                {
                    diff.push(arr1[i]);
                }
            i++;
            j = 0;
    }




// find the unique elements from arr2 and push them into the "diff" array
i = 0;
j = 0;

while (i <= arr2.length - 1)
    {
        flag = true;
        while (j <= diff1.length -1 && flag == true)
            {
                if (arr2[i] == diff1[j])
                    {
                        flag = false;
                    }
                j++;
            }
            if (flag == true)
                {
                    diff.push(arr2[i]);
                }
            i++;
            j = 0;
    }
//Print the unique elements in the arr1 and arr2 matrices
console.log('The unique elements in both matrices are: ', diff,'\n');  



// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

arr1.length = 0;
arr2.length = 0;
let arr3: number[] = [];

arr1 = [1, 2, 3, 4];
arr2 = [3, 4, 5];
arr3 = arr1.concat(arr2);

console.log('EXERCISE 19: \nThe union of the two matrices: ', arr3);
arr3 = remDupl(arr3);
console.log('The union of the two matrices with removed duplicate: ', arr3, '\n\n');
//console.log(remDupl(arr3));
