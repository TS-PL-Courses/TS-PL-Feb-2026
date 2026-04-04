//npx ts-node Functions.ts
// Functions
// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")
//Fixed function
function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, driver_name, car_number);
}
add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);
// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works
// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }
// console.log(sum_2_numbers(2, 3));

//Fixed
function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
}
console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

/**
 * Prints a person's full name in the console.
 *
 * @param {string} firstName - The person's first name
 * @param {string} lastName - The person's last name
 * @param {string} [middleName] - The optional middle name (this field may be omitted)
 * @returns {void} This function prints the name to the console and does not return a value
 */

function personsFullname(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`Full name: ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Full name: ${firstName} ${lastName}`);
  }
}
personsFullname('Maria', 'Zlateva', 'Petrova'); // с Middle Name
personsFullname('Ivan', 'Ivanov'); // без Middle name
