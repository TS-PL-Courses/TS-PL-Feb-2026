// npx ts-node typescript/oop/oop-concepts/inheritance.ts

// An "interface" defines a contract (a shape of an object)
// It says: any class that implements Shape MUST have a getArea() method
interface Shape {
  getArea: () => number; // function that returns a number
}

// Rectangle class implements the Shape interface
// That means it MUST provide a getArea() method
class Rectangle implements Shape {
  // The constructor runs when we create a new Rectangle
  // "protected" means these properties can be used in this class
  // and also in classes that extend it (like Square)
  // "readonly" means they cannot be changed after initialization
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  // This method calculates the area of the rectangle
  // Area = width × height
  public getArea(): number {
    return this.width * this.height;
  }
}

// Create a new Rectangle with width = 10 and height = 20
const rect = new Rectangle(10, 20);

// Call the getArea() method and print the result
console.log(rect.getArea()); // 200

// Square class extends (inherits from) Rectangle
// That means Square automatically gets all properties and methods of Rectangle
class Square extends Rectangle {
  // A square has equal width and height
  public constructor(width: number) {
    // Call the parent (Rectangle) constructor
    // We pass the same value for width and height
    super(width, width);
  }

  // We DO NOT need to write getArea()
  // because Square inherits it from Rectangle
  // and it already works correctly
}

// Create a new Square with side = 10
const square = new Square(10);

// Call the inherited getArea() method
console.log(square.getArea()); // 100
