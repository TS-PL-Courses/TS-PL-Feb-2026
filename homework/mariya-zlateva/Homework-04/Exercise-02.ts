//npx ts-node Exercise-02.ts

// Exercise 2 - User ID System (Interface Basics)
// Step 1: Define an interface named "WithID" with a property id: number.
interface WithID {
  id: number;
}

// Step 2: Define an interface named "User" that inherits from the "WithID" interface and adds properties name: string, age: number.
interface User extends WithID {
  name: string;
  age: number;
}
// Step 3: Create an object of the interface User and assign values to all properties.
const user: User = {
  id: 1,
  name: 'Papi',
  age: 30,
};
// Step 4: Print the object to the console.
console.log(user);
