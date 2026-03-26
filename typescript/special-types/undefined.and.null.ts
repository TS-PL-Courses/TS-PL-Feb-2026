// npx ts-node typescript/special-types/undefined.and.null.ts

// undefined and null are types that refer to the JavaScript primitives undefined and null respectively
const y: undefined = undefined;
const z: null = null;
console.log(y);
console.log(z);

// NULL
let selectedUser: string | null = 'Alice';
selectedUser = null; // intentionally cleared

// UNDEFINED
// Optional parameters
function greet(name?: string) {
  console.log(name);
}

greet(); // name === undefined

// Uninitialized variable
let value: number | undefined;
console.log(value); // undefined

// Optional object property
type User = {
  name: string;
  age?: number; // possibly undefined
};
