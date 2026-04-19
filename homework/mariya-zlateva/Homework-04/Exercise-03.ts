//npx ts-node Exercise-03.ts

// Exercise 3 - Car Rental Service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
class CarRental {
  carType: string;
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

  // Step 2: carType should be visible outside the class, but costPerDay should be private.
  //         All methods should be visible outside the class.
  //         The value of the carType property should not be changeable.
  // Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
  public rentCar(days: number): string {
    const totalCost = this.costPerDay * days;
    return `Renting a ${this.carType} for ${days} days will cost: $${totalCost}`;
  }
}
// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.

// Part 2: Asynchronous Operations and Error Handling
