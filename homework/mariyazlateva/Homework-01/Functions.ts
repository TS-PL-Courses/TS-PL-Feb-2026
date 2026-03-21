//npx ts-node Functions.ts
// Part 6 — Functions (function)

// Exercise 14: Function with union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept string or number (string | number).
// Step 3: Inside the function, log the id value.

function printId(id: string | number): void {
    console.log("ID value:", id);
}
printId(123);
printId("abc");

// Exercise 15: Write code calculating the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), let's accept time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

let qaName: string = "Mariya";         
let functionalitiesCount: number = 6;  
const hoursPerFunctionality: number = 2; 
let totalHours: number = functionalitiesCount * hoursPerFunctionality;
console.log(
  `The QA ${qaName} will need ${totalHours} hours to complete ${functionalitiesCount} project/s.`
);
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

const user1: User = {
  id: 1,        // number
  name: "IVan",
};
const user2: User = {
    id: "index1",
    name: "Goro",
}
console.log("User 1:", user1);
console.log("User 2:", user2)