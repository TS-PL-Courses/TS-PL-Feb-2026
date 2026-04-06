// npx ts-node homework/katrin-kamenova/homework_04.ts
console.log('Homework 04');
console.log('\nExercise 1 - Employee Info System (Class Basics)');
class Employee {
  name: string;
  age: number;
  position: string;

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
let employee1 = new Employee('Jane Doe');
console.log(`Employee old name:` + employee1.getName());
employee1.changeName('Johnny Bravo');
console.log(`Employee new name:` + employee1.getName());

console.log(`\nExercise 2 - User ID System (Interface Basics)`);

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

let user1 = {
  id: 1,
  name: 'Keanu Reeves',
  age: 35,
};
console.log(user1);

console.log(`\nExercise 3 - Car Rental Service (Encapsulation)`);

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

  public rentCar(daysRented: number): number {
    const totalCost = this.costPerDay * daysRented;
    console.log(`Renting a ${this.carType} for ${daysRented} days will cost: $${totalCost}`);
    return totalCost;
  }
}
let carType1 = new CarRental('Hatchback', 35);
let carType2 = new CarRental('Sedan', 40);
let carType3 = new CarRental('SUV', 75);

carType3.setCostPerDay(80);

console.log(`New cost per day for ${carType3.carType}: $${carType3.getCostPerDay()}`);

carType1.rentCar(3);
carType2.rentCar(5);
carType3.rentCar(2);

console.log(`\nExercise 4 - Furniture Factory (Inheritance)`);
class Furniture {
  furnitureType: string;
  constructor(furnitureType: string = 'Teakwood') {
    this.furnitureType = furnitureType;
  }
}
class Chair extends Furniture {
  private chairLegs: number;

  constructor(furnitureType: string, chairLegs: number) {
    super(furnitureType);
    this.furnitureType = furnitureType;
    this.chairLegs = chairLegs;
  }
  getLegs(): number {
    return this.chairLegs;
  }
  changeTypeOfFurniture(newFurnitureType: string) {
    this.furnitureType = newFurnitureType;
  }
}

const chair1 = new Chair('Teakwood', 4);
console.log(`Chair 1: Type - ${chair1.furnitureType}, Number of legs: ${chair1.getLegs()}`);

const chair2 = new Chair('Teakwood', 4);
chair2.changeTypeOfFurniture('Birch'); // Change of the furniture wood type

console.log(`Chair 2: Type - ${chair2.furnitureType}, Number of legs: ${chair2.getLegs()}`); // Prints out the type of wood for chair 2 after the value has changed

console.log(`\nExercise 5 - Music Instruments (Abstraction)`);
abstract class Instrument {
  playMusic() {}
}

class Guitar extends Instrument {
  override playMusic() {
    console.log(`Guitar is playing music`);
  }
}
class Piano extends Instrument {
  override playMusic() {
    console.log(`Piano is playing music`);
  }
}

let guitar = new Guitar();
let piano = new Piano();
guitar.playMusic();
piano.playMusic();

console.log(`\nExercise 6 - Animal Kingdom (Polymorphism)`);
class Mammal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + ` eats food`);
  }
}

class Carnivore extends Mammal {
  override eat(): void {
    console.log(this.name + ' is carnivore and eats meat');
  }
}

class Herbivore extends Mammal {
  override eat(): void {
    console.log(this.name + ' is herbivore and eats plants');
  }
}

let cat = new Carnivore('Tom');
let rabbit = new Herbivore('Bunny');
cat.eat();
rabbit.eat();

console.log(`\nExercise 7 - Basic Promise with setTimeout`);
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}
waitTwoSeconds().then((result) => {
  console.log(result);
});

console.log(`Exercise 8 - Using async/await`);
async function runTask() {
  const result = await waitTwoSeconds();
  console.log(result);
}
runTask();

console.log(`Exercise 9 - Simulating API Call`);
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log(`User's name: ${user.name}`);
}
getUser();

console.log(`Exercise 10 - Error Handling with async/await`);
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Success!`);
      } else {
        reject(`Something went wrong`);
      }
    }, 1000);
  });
}

async function getWithError() {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getWithError();

console.log(`Exercise 11 - Sequential Async Tasks`);
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

async function runSteps() {
  const result1 = await stepOne();
  console.log(result1);
  const result2 = await stepTwo();
  console.log(result2);
}
runSteps();
