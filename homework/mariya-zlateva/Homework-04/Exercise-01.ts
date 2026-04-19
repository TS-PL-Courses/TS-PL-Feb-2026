//npx ts-node Exercise-01.ts

// Exercise 1 - Employee Info System (Class Basics)
// Step 1: Define a class named "Employee":
// Properties - name: string, age: number, position: string
// Constructor - requires a parameter name: string
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string) {
    this.name = name;
    this.age = 0; // default value for age
    this.position = ''; // default value for position
  }
  getName(): string {
    return this.name;
  }

  // Methods - changeName(newName: string): void
  changeName(newName: string): void {
    this.name = newName;
  }
}
// Step 2: Create an object of the class Employee.
const employee = new Employee('Lidiya');
// Step 3: Call the method getName() and print the result to the console.
console.log(employee.getName());
// Step 4: Call the method changeName() and pass a new name as a parameter.
employee.changeName('Johnatan');
// Step 5: Call the method getName() and print the result to the console.
console.log(employee.getName());
