// Homework 04

// =====================
// Part 1: OOP
// =====================

// Exercise 1 - Employee Info System
class Employee {
  public age: number = 0;
  public position: string = 'Junior';

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

const emp = new Employee('John Doe');
console.log(emp.getName());
emp.changeName('Jane Smith');
console.log(emp.getName());

// Exercise 2

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const newUser: User = {
  id: 101,
  name: 'Alex',
  age: 25,
};

console.log(newUser);

// Exercise 3

class CarRental {
  readonly carType: string; // Step 2: Readonly ensures it cannot be changed outside
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  setCostPerDay(newCost: number): void {
    this.costPerDay = newCost;
  }

  getCostPerDay(): number {
    return this.costPerDay;
  }

  rentCar(days: number): void {
    console.log(`Renting a ${this.carType} for ${days} days will cost: $${this.costPerDay * days}`);
  }
}

const hatchback = new CarRental('Hatchback', 50);
const sedan = new CarRental('Sedan', 70);
const suv = new CarRental('SUV', 100);

hatchback.rentCar(3);
sedan.rentCar(2);
suv.rentCar(5);

sedan.setCostPerDay(80);
sedan.rentCar(2);

//Exercise 4

class Furniture {
  constructor(public type: string = 'Teakwood') {}
}

class Chair extends Furniture {
  private readonly legs: number = 4; // Property that cannot be altered outside

  constructor(type?: string) {
    super(type); // Uses default "Teakwood" if no type is passed
  }

  printInfo(label: string): void {
    console.log(`${label}: Type - ${this.type}, Legs - ${this.legs}`);
  }
}

const chair1 = new Chair();
chair1.printInfo('Chair 1');

const chair2 = new Chair('Oak');
chair2.printInfo('Chair 2');

//Exercise 5

abstract class Instrument {
  abstract playMusic(): void;
}

class Guitar extends Instrument {
  playMusic(): void {
    console.log('Strumming the guitar strings...');
  }
}

class Piano extends Instrument {
  playMusic(): void {
    console.log('Playing a melody on the piano...');
  }
}

const myGuitar = new Guitar();
const myPiano = new Piano();

myGuitar.playMusic();
myPiano.playMusic();

//Exercise 6

class Mammal {
  constructor(public name: string) {}

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

const lion = new Carnivore('Lion');
const cow = new Herbivore('Cow');

lion.eat();
cow.eat();

//Exercise 7 and 8
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

// Exercise 7 call
waitTwoSeconds().then((result) => console.log('Ex 7:', result));

// Exercise 8
async function runTask() {
  const result = await waitTwoSeconds();
  console.log('Ex 8:', result);
}

runTask();

//Exercise 9
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log('User name:', user.name);
}

getUser();

//Exercise 10
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      isSuccess ? resolve('Success!') : reject('Something went wrong');
    }, 1000);
  });
}

async function handleFetch() {
  try {
    const message = await fetchWithError();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

handleFetch();

//Exercise 11
function stepOne(): Promise<string> {
  return new Promise((res) => setTimeout(() => res('Step 1 done'), 1000));
}

function stepTwo(): Promise<string> {
  return new Promise((res) => setTimeout(() => res('Step 2 done'), 1000));
}

async function runSteps() {
  const res1 = await stepOne();
  console.log(res1);
  const res2 = await stepTwo();
  console.log(res2);
}

runSteps();
