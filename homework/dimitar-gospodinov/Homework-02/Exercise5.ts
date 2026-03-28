// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

let myString: string = 'LNB';
if (myString.includes('B')) {
  console.log(`The string ${myString} contains the letter 'B'`);
} else {
  console.log(`The string ${myString} does NOT contain the letter 'B'`);
}
