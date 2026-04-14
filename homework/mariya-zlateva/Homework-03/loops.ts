//npx ts-node loops.ts
// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    // Step 3: Log the item if the condition is met
    console.log(colors[i]);
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
//Upper part of the figure
for (let i = 1; i <= 5; i++) {
  let symbol = '';
  for (let j = 1; j <= i; j++) {
    symbol += '*';
  }
  console.log(symbol);
}
//Bottom part of the figure
for (let i = 4; i >= 1; i--) {
  let symbol = '';
  for (let j = 1; j <= i; j++) {
    symbol += '*';
  }
  console.log(symbol);
}
// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
const phones: string[] = ['0376829209', '04239982009', '0536829299'];
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
for (let i = 0; i < phones.length; i++) {
  const original = phones[i];
  const replaced = original.replace('0', '359');
  // Step 3: Log the original and the new phone numbers in the console
  console.log('Original numer:', original, 'converted number:', replaced);
}
