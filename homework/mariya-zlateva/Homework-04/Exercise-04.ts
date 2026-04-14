//npx ts-node Exercise-04.ts
// Exercise 4 - Furniture Factory (Inheritance)
// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
// Step 2: "Teakwood" should be the default type of furniture used by all furniture.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"
// Base class: Furniture
class Furniture {
  type: string;

  constructor(type: string = 'Teakwood') {
    this.type = type;
  }
}

// Subclass: Chair
class Chair extends Furniture {
  private legs: number;

  constructor(type?: string) {
    super(type ?? 'Teakwood'); // default furniture type
    this.legs = 4; // cannot be changed from outside
  }

  // Getter so we can read legs but NOT modify it
  getLegs(): number {
    return this.legs;
  }
}

// Step 5: First chair with default type
const chair1 = new Chair();
console.log(`Chair 1: Type - ${chair1.type}, Legs - ${chair1.getLegs()}`);

// Step 6: Second chair with custom type
const chair2 = new Chair('Rosewood');
console.log(`Chair 2: Type - ${chair2.type}, Legs - ${chair2.getLegs()}`);
