// npx ts-node homework/biyana-levkova/homework-04.ts
// Homework 04

// Part 1: OOP

// Exercise 1 - Employee Info System (Class Basics)
// Step 1: Define a class named "Employee":
// Properties - name: string, age: number, position: string
// Constructor - requires a parameter name: string
// Methods - getName(): string
// Methods - changeName(newName: string): void
// Step 2: Create an object of the class Employee.
// Step 3: Call the method getName() and print the result to the console.
// Step 4: Call the method changeName() and pass a new name as a parameter.
// Step 5: Call the method getName() and print the result to the console.
class Employee {
  name: string;
  age!: number;
  position!: string;

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  changeName(newName: string): void {
    this.name = newName;
  }
}
const newEmployee = new Employee("Stoyan");
newEmployee.age = 25;
newEmployee.position = "manager";
console.log(newEmployee.getName());
newEmployee.changeName("Petar");
console.log(newEmployee.getName());
console.log(newEmployee);

// Exercise 2 - User ID System (Interface Basics)
// Step 1: Define an interface named "WithID" with a property id: number.
// Step 2: Define an interface named "User" that inherits from the "WithID" interface and adds properties name: string, age: number.
// Step 3: Create an object of the interface User and assign values to all properties.
// Step 4: Print the object to the console.
interface WithID {
  id: number;
}
interface User extends WithID {
  name: string;
  age: number;
}
const newUser: User = {
  id: 516256,
  name: "Bob",
  age: 21,
};
console.log(newUser);

// Exercise 3 - Car Rental Service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The value of the carType property should not be changeable.
// Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.

class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }
  public setCostPerDay(costPerDay: number): void {
    this.costPerDay = costPerDay;
  }
  //   public getCostPerDay(): number {
  //     return this.costPerDay;
  //   }

  public rentCar(days: number): void {
    let totalCost: number = this.costPerDay * days;
    console.log(
      `Renting a ${this.carType} for ${days} days will cost: $${totalCost}`,
    );
  }
}
const rental1 = new CarRental("SUV", 100);
const rental2 = new CarRental("Sedan", 80);
const rental3 = new CarRental("Hatchback", 60);

rental1.rentCar(5);
rental2.rentCar(2);
rental3.rentCar(7);

rental1.setCostPerDay(120);
rental1.rentCar(5);

// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
// Step 2: "Teakwood" should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

class Furniture {
  furniture: string;
  constructor(furniture?: string) {
    this.furniture = "Teakwood";
  }
}
class Chair extends Furniture {
  private readonly legsCount: number = 4;

  constructor(furniture?: string) {
    super(furniture);
  }

  changeFurniture(f: string) {
    this.furniture = f;
  }

  getLegsCount() {
    return this.legsCount;
  }
}
const chair1 = new Chair();
console.log(
  `Chair1: Type: ${chair1.furniture}, Legs: ${chair1.getLegsCount()}`,
);

const chair2 = new Chair();
chair2.changeFurniture("Oak");
console.log(
  `Chair2: Type: ${chair2.furniture}, Legs: ${chair2.getLegsCount()}`,
);

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

abstract class Instrument {
  public abstract playMusic();
}
class Piano extends Instrument {
  public playMusic() {
    console.log("I'm playing the piano");
  }
}
class Guitar extends Instrument {
  public playMusic() {
    console.log("I'm playing the guitar");
  }
}

const instrument1 = new Piano();
const instrument2 = new Guitar();
instrument1.playMusic();
instrument2.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// Constructor that takes a name parameter and assigns it to a property called name.
// Method "eat" that logs "{name} eats food".
// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.

class Mammal {
  name: string = "";
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eats food`);
  }
}
class Carnivore extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a carnivore and eats meat`);
  }
}
class Herbivore extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a herbivore and eats plants`);
  }
}
const wolf = new Carnivore("Wolf");
const deer = new Herbivore("Deer");
wolf.eat();
deer.eat();
const idk = new Mammal("idk");
idk.eat();

// Part 2: Asynchronous Operations and Error Handling

// Exercise 7 - Basic Promise with setTimeout
// Step 1: Create a function named "waitTwoSeconds".
// Step 2: Make the function return a Promise<string>.
// Step 3: Inside the Promise, use setTimeout to delay for 2000 milliseconds.
// Step 4: After the delay, resolve the Promise with the message "Done waiting!".
// Step 5: Call the function and log the result using .then().

function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, 2000);
  });
}
waitTwoSeconds().then((result) => console.log(result));

// Exercise 8 - Using async/await
// Step 1: Use the "waitTwoSeconds" function from Exercise 1.
// Step 2: Create an async function named "runTask".
// Step 3: Inside the function, use await to wait for "waitTwoSeconds".
// Step 4: Store the result in a variable.
// Step 5: Print the result to the console.
// Step 6: Call the "runTask" function.

async function runTask() {
  const result = await waitTwoSeconds();
  console.log(result);
}
runTask();

// Exercise 9 - Simulating API Call
// Step 1: Create a function named "fetchUser".
// Step 2: Make it return a Promise with type { id: number; name: string }.
// Step 3: Use setTimeout to delay execution for 1500 milliseconds.
// Step 4: Resolve the Promise with an object: { id: 1, name: "Alice" }.
// Step 6: Use await to get the result.
// Step 7: Print the user's name to the console.

async function fetchUser(): Promise<{ id: number; name: string }> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1500);
  });
}
async function runFetchUser() {
  console.log((await fetchUser()).name);
}

runFetchUser();
// Exercise 10 - Error Handling with async/await
// Step 1: Create a function named "fetchWithError".
// Step 2: Make it return a Promise<string>.
// Step 3: Use setTimeout with a delay of 1000 milliseconds.
// Step 4: Inside setTimeout, randomly decide:
//         - Resolve with "Success!" OR
//         - Reject with "Something went wrong".
// Step 5: Create an async function to call "fetchWithError".
// Step 6: Use try/catch to handle the result.
// Step 7: Print the success message if resolved.
// Step 8: Print the error message if rejected.

async function fetchWithError(): Promise<string> {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success!");
      } else {
        reject("Something went wrong!");
      }
    }, 1000),
  );
}
async function callFetchWithError() {
  try {
    console.log(await fetchWithError());
  } catch (error) {
    console.error(error);
  }
}
callFetchWithError();

// Exercise 11 - Sequential Async Tasks
// Step 1: Create a function named "stepOne" that returns a Promise<string>.
// Step 2: Inside it, use setTimeout to resolve "Step 1 done" after 1000 ms.
// Step 3: Create another function named "stepTwo" that returns a Promise<string>.
// Step 4: Inside it, use setTimeout to resolve "Step 2 done" after 1000 ms.
// Step 5: Create an async function named "runSteps".
// Step 6: Use await to call "stepOne" and store the result.
// Step 7: Print the result.
// Step 8: Use await to call "stepTwo" and store the result.
// Step 9: Print the result.
// Step 10: Call the "runSteps" function.

async function stepOne(): Promise<string> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Step 1 done");
    }, 1000),
  );
}
async function stepTwo(): Promise<string> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Step 2 done");
    }, 1000),
  );
}
async function runSteps() {
  let resultOne = await stepOne();
  let resultTwo = await stepTwo();
  console.log(resultOne);
  console.log(resultTwo);
}
runSteps();
