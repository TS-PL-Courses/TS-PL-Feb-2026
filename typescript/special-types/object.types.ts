//npx ts-node typescript/special-types/./object.types.ts

// syntax

const car: { type: string; model: string; year: number } = {
  type: 'BMW',
  model: 'X5',
  year: 2020,
};

console.log(car);

const truck: { type: string; milage?: number } = {
  type: 'volvo',
  milage: 2000,
};

console.log(truck);
