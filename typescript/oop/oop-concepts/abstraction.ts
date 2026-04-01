// npx ts-node typescript/oop/oop-concepts/abstraction.ts

// ABSTRACT CLASSES

// An abstract class is like a "blueprint" for other classes.
// You CANNOT create an object directly from it.
// Instead, other classes (called "child" or "derived" classes) extend it.

abstract class Polygon {
  // This is an ABSTRACT METHOD.
  // It has no implementation (no code inside).
  // Any class that extends Polygon MUST implement this method.
  public abstract getArea(): number;

  // This is a NORMAL (concrete) method.
  // It already has an implementation and can be used by child classes.
  public toString(): string {
    // this.getArea() will call the version implemented in the child class
    return `Polygon[area=${this.getArea()}]`;
  }
}

// Rectangle is a CHILD CLASS that extends Polygon
class Rectangle extends Polygon {
  // The constructor runs when we create a new Rectangle object
  // "protected" means these properties can be used inside this class
  // and also in subclasses (if any), but not from outside
  // "readonly" means their values cannot be changed after assignment
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {
    // Calls the constructor of the parent class (Polygon)
    super();
  }

  // We MUST implement getArea() because Polygon requires it
  public getArea(): number {
    // Area of rectangle = width × height
    return this.width * this.height;
  }
}

// Create a new Rectangle object with width=10 and height=20
const rect = new Rectangle(10, 20);

// Call toString(), which internally calls getArea()
console.log(rect.toString());

// Output:
// Polygon[area=200]
