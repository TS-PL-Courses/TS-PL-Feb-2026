// npx ts-node typescript/special-types/object.types.ts

// Syntax
const car: { type: string; model: string; year: number } = {
  type: 'BMW',
  model: 'X5',
  year: 2020,
};

console.log(car);

// optional properties
const truck: { type: string; mileage?: number } = {
  type: 'volvo',
};

console.log(truck);
