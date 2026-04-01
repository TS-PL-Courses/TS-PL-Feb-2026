// npx ts-node typescript/oop/oop-concepts/encapsiulation.ts

// Class members can have modifiers that control who can access them:
//
// public    -> accessible from anywhere (inside and outside the class)
// private   -> accessible ONLY inside the class
// protected -> accessible inside the class AND in subclasses (child classes)

class Person {
  // This is a property (variable) inside the class
  // 'private' means it CANNOT be accessed directly outside this class
  private name: string;

  // The constructor runs when a new object is created
  // It receives a value (name) and assigns it to the class property
  public constructor(name: string) {
    // 'this' refers to the current object being created
    this.name = name;
  }

  // This is a method (function inside a class)
  // 'public' means it CAN be called from outside the class
  public getName(): string {
    // We return the private variable 'name'
    return this.name;
  }
}

// Create a new object (instance) of the Person class
const person = new Person('Jane');

// This will NOT work because 'name' is private
// console.log(person.name);

// This works because getName() is public
// It gives controlled access to the private data
console.log(person.getName());
