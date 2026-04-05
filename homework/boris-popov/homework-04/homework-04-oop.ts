// Homework 04
// npx ts-node homework/boris-popov/homework-04/homework-04-oop.ts

// Part 1: OOP

// Exercise 1 - Employee Info System (Class Basics)
console.log('-----Exercise 1 - Employee Info System (Class Basics)-----');
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
const employee1 = new Employee('Ivan');
console.log('Initial name:', employee1.getName());
employee1.changeName('Petar');
console.log('Updated name:', employee1.getName());

// Exercise 2 - User ID System (Interface Basics)
console.log('-----Exercise 2 - User ID System (Interface Basics)-----');
interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user1: User = {
  id: 1,
  name: 'Ivan',
  age: 25,
};

console.log(user1);

// Exercise 3 - Car Rental Service (Encapsulation)
console.log('-----Exercise 3 - Car Rental Service (Encapsulation)-----');
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

const car1 = new CarRental('Hatchback', 50);
const car2 = new CarRental('Sedan', 70);
const car3 = new CarRental('SUV', 100);

car1.rentCar(3);
car2.rentCar(2);
car3.rentCar(5);
car1.setCostPerDay(60);
car1.rentCar(3);

// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
// Step 2: "Teakwood" should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// Constructor that takes a name parameter and assigns it to a property called name.
// Method "eat" that logs "{name} eats food".
// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.
