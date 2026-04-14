// Homework 04

// Part 1: OOP

// Exercise 1 - Employee Info System (Class Basics)
// Step 1: Define a class named 'Employee':
// Properties - name: string, age: number, position: string
// Constructor - requires a parameter name: string
// Methods - getName(): string
// Methods - changeName(newName: string): void

class Employee {
  // Properties
  public name: string;
  public age: number;
  public position: string;

  constructor(name: string) {
    this.name = name;
    this.age = 0;
    this.position = 'Not assigned';
  }
  getName(): string {
    return this.name;
  }
  changeName(newName: string): void {
    this.name = newName;
  }
}
// Step 2: Create an object of the class Employee.
const employee1 = new Employee('Ivan Ivanov');

// Step 3: Call the method getName() and print the result to the console.
console.log(employee1.getName());

// Step 4: Call the method changeName() and pass a new name as a parameter.
employee1.changeName('Stefan Petrov');
console.log('--- Name has been changed ---');

// Step 5: Call the method getName() and print the result to the console.
console.log('Updated Employee Name:', employee1.getName());

// Exercise 2 - User ID System (Interface Basics)

// Step 1: Define an interface named 'WithID' with a property id: number.
interface WithID {
  id: number;
}
// Step 2: Define an interface named 'User' that inherits from the 'WithID' interface and adds properties name: string, age: number.
interface User extends WithID {
  name: string;
  age: number;
}

// Step 3: Create an object of the interface User and assign values to all properties.
const user1: User = {
  id: 106,
  name: 'Elena Popova',
  age: 30,
};

// Step 4: Print the object to the console.
console.log('User Details:', user1);

// Exercise 3 - Car Rental Service (Encapsulation)

// Step 1: Define a class named 'CarRental' with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The value of the carType property should not be changeable.
class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  public setCostPerDay(newCost: number): void {
    this.costPerDay = newCost;
  }

  public getCostPerDay(): number {
    return this.costPerDay;
  }

public rentCar(days: number): void {
    const totalCost = this.costPerDay * days;
    console.log(`Renting a ${this.carType} for ${days} days will cost: $${totalCost}`);
  }
}
// Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
const hatchback = new CarRental('Hatchback', 50);
const sedan = new CarRental('Sedan', 70);
const suv = new CarRental('SUV', 100);

// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: 'Renting a Hatchback for 3 days will cost: $150'
hatchback.rentCar(3);
sedan.rentCar(2);    
suv.rentCar(5);       

// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.
suv.setCostPerDay(120);
console.log('--- Price updated for SUV ---');
suv.rentCar(5);

// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called 'Chair' that inherits from the base class 'Furniture'.
// Step 2: 'Teakwood' should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class 'Chair'.
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.

class Furniture {
    public type: string = 'Teakwood'; 
}

class Chair extends Furniture {
    public readonly legs: number;

    constructor(legs: number, customType?: string) {
        super(); 
        this.legs = legs;
        if (customType) {
            this.type = customType;
        }
    }
}

// Step 5: Create an object of the class 'Chair' and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class 'Chair' with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: 'Chair 1: Type - Teakwood, Legs - 4'

const chair1 = new Chair(4);
console.log(`Chair 1: Type - ${chair1.type}, Legs - ${chair1.legs}`);

const chair2 = new Chair(3, 'Oak');
console.log(`Chair 2: Type - ${chair2.type}, Legs - ${chair2.legs}`);

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called 'Instrument' with a method 'playMusic'.
abstract class Instrument {
    abstract playMusic(): void;
}
// Step 2: Create two subclasses, 'Guitar' and 'Piano', that inherit from the base class 'Instrument'.
// Step 3: Implement the 'playMusic' method in both subclasses to log a message indicating which instrument is playing music.
class Guitar extends Instrument {
    playMusic(): void {
        console.log('Playing the guitar: Strumming the strings...');
    }
}

class Piano extends Instrument {
    playMusic(): void {
        console.log('Playing the piano: Pressing the keys...');
    }
}

// Step 4: Create an object of each subclass and call the 'playMusic' method to see the different outputs.
const myGuitar = new Guitar();
const myPiano = new Piano();
myGuitar.playMusic();
myPiano.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called 'Mammal' with:
// Constructor that takes a name parameter and assigns it to a property called name.
// Method 'eat' that logs '{name} eats food'.
class Mammal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public eat(): void {
        console.log(`${this.name} eats food.`);
    }
}

// Step 2: Create two subclasses, 'Carnivore' and 'Herbivore', that inherit from the base class 'Mammal'.
// Step 3: Override the 'eat' method in both subclasses to log a different message for each subclass.
// For example: '{name} is a carnivore and eats meat' or '{name} is a herbivore and eats plants'.
class Carnivore extends Mammal {
    public override eat(): void {
        console.log(`${this.name} is a carnivore and eats meat.`);
    }
}

class Herbivore extends Mammal {
    public override eat(): void {
        console.log(`${this.name} is a herbivore and eats plants.`);
    }
}
// Step 4: Create an object of each subclass and call the 'eat' method to see the different outputs.
const lion = new Carnivore('Lion');
const cow = new Herbivore('Cow');
lion.eat();
cow.eat();

// Part 2: Asynchronous Operations and Error Handling

// Exercise 7 - Basic Promise with setTimeout
// Step 1: Create a function named 'waitTwoSeconds'.
// Step 2: Make the function return a Promise<string>.
// Step 3: Inside the Promise, use setTimeout to delay for 2000 milliseconds.
// Step 4: After the delay, resolve the Promise with the message 'Done waiting!'.

function waitTwoSeconds(): Promise<string> {    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done waiting!');
        }, 2000); 
    });
}
// Step 5: Call the function and log the result using .then().
waitTwoSeconds().then((message) => {
    console.log(message);
});

// Exercise 8 - Using async/await
// Step 1: Use the 'waitTwoSeconds' function from Exercise 1.
// Step 2: Create an async function named 'runTask'.
// Step 3: Inside the function, use await to wait for 'waitTwoSeconds'.
// Step 4: Store the result in a variable.
// Step 5: Print the result to the console.

async function runTask() {
    try {
        const result = await waitTwoSeconds();
        console.log('Async Task Result:', result);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Step 6: Call the 'runTask' function.
runTask();

// Exercise 9 - Simulating API Call
// Step 1: Create a function named 'fetchUser'.
// Step 2: Make it return a Promise with type { id: number; name: string }.
// Step 3: Use setTimeout to delay execution for 1500 milliseconds.
// Step 4: Resolve the Promise with an object: { id: 1, name: 'Alice' }.

function fetchUser(): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Alice' });
        }, 1500);
    });
}
// Step 5: Create an async function to call 'fetchUser'.
// Step 6: Use await to get the result.
async function getUserData() {
    const user = await fetchUser();

// Step 7: Print the user's name to the console.
    console.log('Fetched User Name:', user.name);
}
getUserData();  

// Exercise 10 - Error Handling with async/await
// Step 1: Create a function named 'fetchWithError'.
// Step 2: Make it return a Promise<string>.
// Step 3: Use setTimeout with a delay of 1000 milliseconds.
// Step 4: Inside setTimeout, randomly decide:
//         - Resolve with 'Success!' OR
//         - Reject with 'Something went wrong'.

function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve('Success!');
            } else {
                reject('Something went wrong');
            }
        }, 1000);
    });
}
// Step 5: Create an async function to call 'fetchWithError'.
// Step 6: Use try/catch to handle the result.
// Step 7: Print the success message if resolved.
// Step 8: Print the error message if rejected.

async function handleFetch() {
    try {
        const result = await fetchWithError();
        console.log('Result:', result);
    } catch (error) {
        console.error('Error catch block:', error);
    }
}
handleFetch();

// Exercise 11 - Sequential Async Tasks

// Step 1: Create a function named 'stepOne' that returns a Promise<string>.
// Step 2: Inside it, use setTimeout to resolve 'Step 1 done' after 1000 ms.
function stepOne(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step 1 done');
        }, 1000);
    });
}
// Step 3: Create another function named 'stepTwo' that returns a Promise<string>.
// Step 4: Inside it, use setTimeout to resolve 'Step 2 done' after 1000 ms.

function stepTwo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step 2 done');
        }, 1000);
    });
}

// Step 5: Create an async function named 'runSteps'.
// Step 6: Use await to call 'stepOne' and store the result.
// Step 7: Print the result.

async function runSteps() {
    const result1 = await stepOne();
    console.log(result1);

// Step 8: Use await to call 'stepTwo' and store the result.
// Step 9: Print the result.
    const result2 = await stepTwo();
    console.log(result2);
} 
// Step 10: Call the 'runSteps' function.

runSteps();