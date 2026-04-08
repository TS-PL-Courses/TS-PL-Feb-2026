// npx ts-node typescript/oop/oop-concepts/polymorphism.ts

// This is an interface (a contract).
// It says: any "Shape" must have a method called getArea that returns a number.
interface Shape {
  getArea: () => number;
}

// This is a class called Rectangle that follows (implements) the Shape interface.
class Rectangle implements Shape {
  // The constructor runs when we create a new Rectangle.
  // It takes width and height as inputs.
  // "protected" means child classes can access these values.
  // "readonly" means they cannot be changed after being set.
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  // This method calculates the area of the rectangle.
  public getArea(): number {
    return this.width * this.height;
  }

  // This method returns a text description of the rectangle.
  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

// Create a new Rectangle and print its description.
console.log(new Rectangle(10, 20).toString());

// This is a class called Square that extends (inherits from) Rectangle.
class Square extends Rectangle {
  // A square only needs one value because width = height.
  public constructor(width: number) {
    // Call the parent (Rectangle) constructor with same width and height.
    super(width, width);
  }

  // "override" means we are replacing the parent class method.
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// Create a new Square and print its description.
console.log(new Square(10).toString());
