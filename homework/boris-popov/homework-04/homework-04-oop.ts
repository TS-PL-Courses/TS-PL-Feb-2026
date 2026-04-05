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
console.log('-----Exercise 4 - Furniture Factory (Inheritance)-----');
class Furniture {
  public type: string;

  constructor(type: string = 'Teakwood') {
    this.type = type;
  }
}

class Chair extends Furniture {
  private legs: number;

  constructor(type?: string) {
    super(type);
    this.legs = 4;
  }

  public getLegs(): number {
    return this.legs;
  }
}

const chair1 = new Chair();
console.log(`Chair 1: Type - ${chair1.type}, Legs - ${chair1.getLegs()}`);

const chair2 = new Chair('Oakwood');
console.log(`Chair 2: Type - ${chair2.type}, Legs - ${chair2.getLegs()}`);

// Exercise 5 - Music Instruments (Abstraction)
console.log('-----Exercise 5 - Music Instruments (Abstraction)-----');
abstract class Instrument {
  abstract playMusic(): void;
}

class Guitar extends Instrument {
  playMusic(): void {
    console.log('Guitar is playing music');
  }
}

class Piano extends Instrument {
  playMusic(): void {
    console.log('Piano is playing music');
  }
}

const guitar = new Guitar();
const piano = new Piano();

guitar.playMusic();
piano.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)
console.log('-----Exercise 6 - Animal Kingdom (Polymorphism)-----');
class Mammal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
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

let rabbit = new Mammal('Rabbit');
let tiger = new Carnivore('Tiger');
let cow = new Herbivore('Cow');

rabbit.eat();
tiger.eat();
cow.eat();
