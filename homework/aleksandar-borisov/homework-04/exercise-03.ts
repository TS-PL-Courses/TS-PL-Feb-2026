class CarRental {
  readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  setCostPerDay(cost: number) {
    return (this.costPerDay = cost);
  }

  getCostPerDay() {
    return this.costPerDay;
  }

  rentCar(days: number) {
    return `Renting a ${this.carType} for ${days} days will cost: $${this.costPerDay * days}`
  }
}

const hatchback = new CarRental('Hatchback', 50)
const sedan = new CarRental('Sedan', 80)
const suv = new CarRental('SUV', 100)


console.log(hatchback.getCostPerDay())
hatchback.setCostPerDay(60)
console.log(hatchback.getCostPerDay())
console.log(hatchback.rentCar(3))

console.log(sedan.getCostPerDay())
console.log(suv.getCostPerDay())

