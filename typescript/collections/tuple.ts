// npx ts-node typescript/collections/tuple.ts

// npx ts-node lesson-5-collections/tuple.ts

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array
const ourTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2]);
console.log(ourTuple);

// initialized incorrectly which throws an error:
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// const ourTuple2: [number, boolean, string] = [false, "Coding God was mistaken", 5];
// console.log(ourTuple2);

// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values
// We have no type safety in our tuple for indexes 3+
// ourTuple.push("Something new and wrong");
// console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2], typeof ourTuple[3]);
// console.log(ourTuple[3]);
// console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);

// Named tuples allow us to provide context for our values at each index
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

// Since tuples are arrays we can also destructure them
const vehicles: [string, string, string] = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
// which is the same as:
// const car = vehicles[0];
// const truck = vehicles[1];
// const1 suv = vehicles[2];

console.log(vehicles);
console.log(car, truck, suv);

// Function returning a tuple: [string, number]
// This means the function must always return exactly two elements:
// first a string, second a number
function getUserInfo(): [string, number] {
  return ['Alice', 30]; // valid tuple matching the defined return type
}

// Destructuring the tuple into separate variables
// 'name' gets the first element, 'age' gets the second
const [name, age] = getUserInfo();

console.log(`Name: ${name}, Age: ${age}`);
// Output: Name: Alice, Age: 30

// Tuple with an optional second element
// The second value (number) may or may not be present
let secondCar: [string, number?] = ['Honda'];

console.log(secondCar);
// Output: ['Honda'] (only one element, which is allowed)

// Tuple used as a function parameter
// The function expects exactly a [string, number] tuple
function printUser(user: [string, number]) {
  // Access tuple elements by index
  console.log(`User: ${user[0]}, Age: ${user[1]}`);
}

// Passing a tuple directly into the function
printUser(['Bob', 25]);
// Output: User: Bob, Age: 25

// Enum definition
// Enums assign numeric values by default starting from 0
enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}

// Tuple combining a string and an enum value
const person: [string, Role] = ['Alice', Role.Admin];

// Tuples have a fixed length (in type system)
console.log(person.length);
// Output: 2

// Tuple of numbers
let tuple: [number, number] = [1, 2];

// Using array methods like map() on tuples
// NOTE: TypeScript will often widen the result to number[]
// because map() doesn't preserve tuple length/types strictly
let result = tuple.map((num) => num + 2);

console.log(result);
// Output: [3, 4]
// Type: number[] (not [number, number])

// Nested tuple
// First element: number
// Second element: another tuple [string, boolean]
let nestedTuple: [number, [string, boolean]] = [42, ['Hello', true]];

console.log(nestedTuple);
// Output: [42, ['Hello', true]]

// Named tuple type (improves readability)
// Labels (x, y) are for clarity
type Point = [x: number, y: number];

// Using the Point tuple
let p: Point = [10, 20];

console.log(p);
// Output: [10, 20]
