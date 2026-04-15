// npx ts-node homework/kremena-ivanova/homework-04.ts

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

console.log(`Printing output: Exercise 1):`);
class Employee {
  name: string;
  age: number = 0;
  position: string = '';

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

const employee1 = new Employee('Savina');
const employee2 = new Employee('Boyana');
console.log(employee1.getName()); //Savina
console.log(employee2.getName()); //Boyana
employee1.changeName('Peter');
employee2.changeName('Todor');
console.log(employee1.getName()); //Peter
console.log(employee2.getName()); //Todor

// Exercise 2 - User ID System (Interface Basics)
// Step 1: Define an interface named "WithID" with a property id: number.
// Step 2: Define an interface named "User" that inherits from the "WithID" interface and adds properties name: string, age: number.
// Step 3: Create an object of the interface User and assign values to all properties.
// Step 4: Print the object to the console

console.log(`Printing output: Exercise 2):`);

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user1: User = {
  id: 120,
  name: 'Nikola Kolev',
  age: 25,
};

const user2: User = {
  id: 121,
  name: 'Mira Baleva',
  age: 32,
};

console.log(user1);
console.log(user2);

// Exercise 3 - Car Rental Service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The value of the carType property should not be changeable.
// Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.

console.log(`Printing output: Exercise 3):`);

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
  public getCostPerDay(): number {
    return this.costPerDay;
  }

  public rentCar(days: number): void {
    console.log(`Renting a ${this.carType} for ${days} days will cost: $${this.costPerDay * days}`);
  }
}

const rentedCar1 = new CarRental('Hatchback', 120);
const rentedCar2 = new CarRental('Sedan', 175);
const rentedCar3 = new CarRental('SUV', 250);

rentedCar1.rentCar(5); //Renting a Hatchback for 5 days will cost: $600
rentedCar2.rentCar(3); //Renting a Sedan for 3 days will cost: $525
rentedCar3.rentCar(8); //Renting a SUV for 8 days will cost: $2000

rentedCar1.setCostPerDay(140);
rentedCar1.rentCar(5); //Renting a Hatchback for 5 days will cost: $700

// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
// Step 2: "Teakwood" should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

console.log(`Printing output: Exercise 4):`);

class Furniture {
  type: string = 'Teakwood';
}
class Chair extends Furniture {
  public id: number;
  private legs: number;

  constructor(id: number, legs: number) {
    super();
    this.id = id;
    this.legs = legs;
  }

  changeType(changedType: string): string {
    return (this.type = changedType);
  }

  printChairInfo(): void {
    console.log(`Chair ${this.id}: Type - ${this.type}, Legs - ${this.legs}`);
  }
}

const chair1 = new Chair(1, 4);
chair1.printChairInfo(); //Chair 1: Type - Teakwood, Legs - 4

const chair2 = new Chair(2, 3);
chair2.changeType('Beechwood');
chair2.printChairInfo(); //Chair 2: Type - Beechwood, Legs - 3

const chair3 = new Chair(3, 4);
chair3.changeType('Pinewood');
chair3.printChairInfo(); //Chair 3: Type - Pinewood, Legs - 4

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

console.log(`Printing output: Exercise 5):`);

abstract class Instrument {
  public abstract playMusic(): void;
}

class Guitar extends Instrument {
  public playMusic(): void {
    console.log(`Guitar is playing a melody using strings.`);
  }
}

class Piano extends Instrument {
  public playMusic(): void {
    console.log(`Piano is producing music using keys.`);
  }
}

const guitar1 = new Guitar();
const piano1 = new Piano();
const piano2 = new Piano();

guitar1.playMusic(); //Guitar is playing a melody using strings.
piano1.playMusic(); //Piano is producing music using keys.
piano2.playMusic(); //Piano is producing music using keys.

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// Constructor that takes a name parameter and assigns it to a property called name.
// Method "eat" that logs "{name} eats food".
// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.

console.log(`Printing output: Exercise 6):`);

class Mammal {
  constructor(public name: string) {}
  public eat(): void {
    console.log(`${this.name} eats food`);
  }
}

class Carnivore extends Mammal {
  public override eat(): void {
    console.log(`${this.name} is a carnivore and eats meat`);
  }
}

class Herbivore extends Mammal {
  public override eat(): void {
    console.log(`${this.name} is a herbivore and eats plants`);
  }
}

const tiger = new Carnivore('Tiger');
const wolf = new Carnivore('Wolf');
const goat = new Herbivore('Goat');
const cow = new Herbivore('Cow');

tiger.eat(); //Tiger is a carnivore and eats meat
wolf.eat(); //Wolf is a carnivore and eats meat
goat.eat(); //Goat is a herbivore and eats plants
cow.eat(); //Cow is a herbivore and eats plants

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
      resolve('Done waiting!');
    }, 2000);
  });
}
// waitTwoSeconds().then((result) => {
//   console.log(`Printing output: Exercise 7):`);
//   console.log(result);
// });  [PRINT TOGETHER ex. 7, 8, 9, 10, 11 - at the end]

// Exercise 8 - Using async/await
// Step 1: Use the "waitTwoSeconds" function from Exercise 1.
// Step 2: Create an async function named "runTask".
// Step 3: Inside the function, use await to wait for "waitTwoSeconds".
// Step 4: Store the result in a variable.
// Step 5: Print the result to the console.
// Step 6: Call the "runTask" function.

async function runTask(): Promise<void> {
  const result = await waitTwoSeconds();
  console.log(`Printing output: Exercise 8):`);
  console.log(result);
}
//runTask(); [PRINT TOGETHER ex. 7, 8, 9, 10, 11 - at the end]

// Exercise 9 - Simulating API Call
// Step 1: Create a function named "fetchUser".
// Step 2: Make it return a Promise with type { id: number; name: string }.
// Step 3: Use setTimeout to delay execution for 1500 milliseconds.
// Step 4: Resolve the Promise with an object: { id: 1, name: "Alice" }.
// Step 5: Create an async function to call "fetchUser".
// Step 6: Use await to get the result.
// Step 7: Print the user's name to the console.

function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function runFetchUser(): Promise<void> {
  const user = await fetchUser();
  console.log(`Printing output: Exercise 9):`);
  console.log(user.name);
}
//runFetchUser(); [PRINT TOGETHER ex. 7, 8, 9, 10, 11 - at the end]

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
// Step 8: Print the error message if rejected

function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve('Success!');
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}

async function runFetchWithError(): Promise<void> {
  console.log(`Printing output: Exercise 10):`);

  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log((error as Error).message);
  }
}

//runFetchWithError() [PRINT TOGETHER ex. 7, 8, 9, 10, 11 - at the end]

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

function stepOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 1 done');
    }, 1000);
  });
}

function stepTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 2 done');
    }, 1000);
  });
}

async function runSteps(): Promise<void> {
  console.log(`Printing output: Exercise 11):`);
  const result1 = await stepOne();
  console.log(result1);
  const result2 = await stepTwo();
  console.log(result2);
}

//runSteps(); PRINT TOGETHER ex. 7, 8, 9, 10, 11 - at the end]

// Printing output for ex. 7, 8, 9, 10, 11:
waitTwoSeconds()
  .then((result) => {
    console.log(`Printing output: Exercise 7):`);
    console.log(result);
  }) // Calls [Exercise 7) output],
  .then(() => runTask()) // then calls [Exercise 8) output],
  .then(() => runFetchUser()) // then calls [Exercise 9) output],
  .then(() => runFetchWithError()) // then calls [Exercise 10) output],
  .then(() => runSteps()); // then calls [Exercise 11) output]
