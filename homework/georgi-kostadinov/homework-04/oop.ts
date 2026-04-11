// ==============================
// Part 1: OOP
// ==============================

// Exercise 1 - Employee Info System (Class Basics)

class Employee {
  name: string;
  age: number = 25;
  position: string = 'Senior Automation QA';

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

const employee = new Employee('Georgi');

console.log('Exercise 1: \n');

console.log(`Employee name is ${employee.getName()}`);

employee.changeName('Ivan');

console.log(`The new employee name is ${employee.getName()}`);

// Exercise 2 - User ID System (Interface Basics)

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user: User = {
  id: 1,
  name: 'Toshko',
  age: 33,
};

console.log(`\nExercise 2:\n`);

console.log(user);

// Exercise 3 - Car Rental Service (Encapsulation)

class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  setCostPerDay(newCostPerDay: number): void {
    this.costPerDay = newCostPerDay;
  }

  getCostPerDay(): number {
    return this.costPerDay;
  }

  rentCar(numberOfDays: number): number {
    return this.getCostPerDay() * numberOfDays;
  }
}

const hatchback = new CarRental('Hatchback', 50);
const sedan = new CarRental('Sedan', 80);
const suv = new CarRental('SUV', 40);

console.log('\nExercise 3:\n');

console.log(`Renting a ${hatchback.carType} for 3 days will cost: $${hatchback.rentCar(3)}`);

console.log(`Renting a ${sedan.carType} for 3 days will cost: $${sedan.rentCar(3)}`);

console.log(`Renting a ${suv.carType} for 3 days will cost: $${suv.rentCar(3)}`);

suv.setCostPerDay(60);

console.log(`Updated ${suv.carType} rental price: $${suv.rentCar(3)}`);

// Exercise 4 - Furniture Factory (Inheritance)

class Furniture {
  type: string;

  constructor(type: string = 'Teakwood') {
    this.type = type;
  }
}

class Chair extends Furniture {
  private legs: number = 4;

  constructor(type: string = 'Teakwood') {
    super(type);
  }

  getLegs(): number {
    return this.legs;
  }
}

const chair1 = new Chair();
const chair2 = new Chair('Oakwood');

console.log('\nExercise 4:\n');

console.log(`Chair 1: Type - ${chair1.type}, Legs - ${chair1.getLegs()}`);
console.log(`Chair 2: Type - ${chair2.type}, Legs - ${chair2.getLegs()}`);

// Exercise 5 - Music Instruments (Abstraction)

abstract class Instrument {
  abstract playMusic(): void;
}

class Guitar extends Instrument {
  playMusic(): void {
    console.log('Guitar music instrument is playing');
  }
}

class Piano extends Instrument {
  playMusic(): void {
    console.log('Piano music instrument is playing');
  }
}

console.log('\nExercise 5:\n');

const guitar = new Guitar();
guitar.playMusic();

const piano = new Piano();
piano.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)

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

const tiger = new Carnivore('Tiger');
const rabbit = new Herbivore('Rabbit');

console.log('\nExercise 6:\n');

tiger.eat();
rabbit.eat();
