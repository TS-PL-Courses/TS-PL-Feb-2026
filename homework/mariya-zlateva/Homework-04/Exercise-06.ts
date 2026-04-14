//npx ts-node Exercise-06.ts
// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// Constructor that takes a name parameter and assigns it to a property called name.
class Mammal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method "eat" that logs "{name} eats food".
  eat(): void {
    console.log(`${this.name} eats food`);
  }
}
// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
class Carnivore extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a carnivore and eats meat`);
  }
}

// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
class Vegan extends Mammal {
  override eat(): void {
    console.log(`${this.name} is a herbivore and eats plants`);
  }
}

// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.
const tiger = new Carnivore('Tiger');
tiger.eat();
const rabit = new Vegan('Rabit');
rabit.eat();
