// Homework 04

//npx ts-node homework/georgi-payanev/typescript-homework/homework-04.ts

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

console.log('\nExercise 1:');

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string) {
    this.name = name;
    this.age = 0;
    this.position = '';
  }

  getName(): string {
    return this.name;
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

const employeeOne = new Employee('Payanev');
console.log(employeeOne.getName());
employeeOne.changeName('Pesho');
console.log(employeeOne.getName());

// Exercise 2 - User ID System (Interface Basics)
// Step 1: Define an interface named "WithID" with a property id: number.
// Step 2: Define an interface named "User" that inherits from the "WithID" interface and adds properties name: string, age: number.
// Step 3: Create an object of the interface User and assign values to all properties.
// Step 4: Print the object to the console.

console.log('\nExercise 2:');

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const admin: User = {
  id: 111,
  name: 'Pesho',
  age: 22,
};

console.log(admin);

// Exercise 3 - Car Rental Service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The value of the carType property should not be changeable.
// Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.

console.log('\nExercise 3:');

class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  public setCostPerDay(cost: number): void {
    this.costPerDay = cost;
  }

  public getcostPerDay(): number {
    return this.costPerDay;
  }

  public rentCar(days: number): void {
    console.log(
      `Renting a ${this.carType} for ${days} days will cost: $${this.costPerDay * days}.`,
    );
  }
}

const hatchback = new CarRental('Hatchback', 100);
const sedan = new CarRental('Sedan', 200);
const suv = new CarRental('SUV', 300);

hatchback.rentCar(5);
sedan.rentCar(10);
suv.rentCar(15);

hatchback.setCostPerDay(333);
hatchback.rentCar(5);

// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
// Step 2: "Teakwood" should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

console.log('\nExercise 4:');

class Furniture {
  public furnitureType: string = 'Teakwood';
}

class Chair extends Furniture {
  private legsNumber: number;
  private number: number;

  constructor(number: number, legs: number) {
    super();
    this.legsNumber = legs;
    this.number = number;
  }

  changeFurnitureType(newFurnitureType: string): string {
    return (this.furnitureType = newFurnitureType);
  }

  chairInfo(): void {
    console.log(`Chair ${this.number}: Type - ${this.furnitureType}, Legs - ${this.legsNumber}.`);
  }
}

const trippleChair = new Chair(1, 3);
trippleChair.chairInfo();

const newChair = new Chair(2, 12);
newChair.changeFurnitureType('Plastic');
newChair.chairInfo();

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

console.log('\nExercise 5:');

abstract class Instrument {
  public abstract playMusic(): void;
}

class Guitar extends Instrument {
  public playMusic(): void {
    console.log('Guitar is playing the music now.');
  }
}

class Piano extends Instrument {
  public playMusic(): void {
    console.log('Piano is playing the music now.');
  }
}

const guitar = new Guitar();
const piano = new Piano();

guitar.playMusic();
piano.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// Constructor that takes a name parameter and assigns it to a property called name.
// Method "eat" that logs "{name} eats food".
// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.

console.log('\nExercise 6:');

class Mammal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public eat(): void {
    console.log(`${this.name} eats food.`);
  }
}

class Carnivore extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a carnivore and eats meat.`);
  }
}

class Herbivore extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a herbivore and eats plants.`);
  }
}

const wolf = new Carnivore('Wolf');
const koala = new Herbivore('Koala');

wolf.eat();
koala.eat();

// Part 2: Asynchronous Operations and Error Handling

// Exercise 7 - Basic Promise with setTimeout
// Step 1: Create a function named "waitTwoSeconds".
// Step 2: Make the function return a Promise<string>.
// Step 3: Inside the Promise, use setTimeout to delay for 2000 milliseconds.
// Step 4: After the delay, resolve the Promise with the message "Done waiting!".
// Step 5: Call the function and log the result using .then().

console.log('\nExercise 7:');

function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

waitTwoSeconds().then((text) => {
  console.log(text);
});

// Exercise 8 - Using async/await
// Step 1: Use the "waitTwoSeconds" function from Exercise 1.
// Step 2: Create an async function named "runTask".
// Step 3: Inside the function, use await to wait for "waitTwoSeconds".
// Step 4: Store the result in a variable.
// Step 5: Print the result to the console.
// Step 6: Call the "runTask" function.

console.log('\nExercise 8:');

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
// Step 5: Create an async function to call "fetchUser".
// Step 6: Use await to get the result.
// Step 7: Print the user's name to the console.

console.log('\nExercise 9:');

function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log(user.name);
}

getUser();

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

console.log('\nExercise 10:');

function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random() > 0.5;
      if (number) {
        resolve('Success!');
      } else {
        reject('Something went wrong.');
      }
    }, 1000);
  });
}

async function fetchError(): Promise<void> {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchError();

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

console.log('\nExercise 11:');

function stepOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 1 done.');
    }, 1000);
  });
}

function stepTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 2 done.');
    }, 1000);
  });
}

async function runSteps(): Promise<void> {
  const firstResult = await stepOne();
  console.log(firstResult);
  const seondResult = await stepTwo();
  console.log(seondResult);
}

runSteps();
