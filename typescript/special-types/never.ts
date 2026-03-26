// npx ts-node typescript/special-types/never.ts

// never effectively throws an error whenever it is defined
// const x: never = true; // Error: Type 'boolean' is not assignable to type 'never'
// console.log(x); // Error: This expression is not callable. Type 'never' has no call signatures.

// never is rarely used, especially by itself, its primary use is in advanced generics

// Function that never returns
// function that always throws or never finishes has return type never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

/**
 * TypeScript allows developers to prevent certain properties
 * from being used in an object type by assigning them the type `never`.
 *
 * The `never` type represents a value that should never occur.
 * In other words, no value can ever be assigned to a variable
 * or property typed as `never`.
 *
 * In this example we define a type called `WithoutId`.
 * This type represents an object that must contain a `name`
 * property but must NOT contain an `id` property.
 */
type WithoutId = {
  id?: never;
  name: string;
};

/**
 * Creating an object that conforms to the `WithoutId` type.
 *
 * This object is valid because:
 * - It includes the required `name` property.
 * - It does not include the forbidden `id` property.
 */
const user: WithoutId = {
  name: 'John',
  // id: 123 // This would cause a TypeScript error because `id` cannot exist.
};

/**
 * Logs a simple message to the console.
 *
 * The return type of this function is `void`.
 *
 * In TypeScript, `void` indicates that the function does not
 * return any meaningful value. The function performs an action
 * (a side effect) instead of producing data.
 */
function logMessage(): void {
  console.log('hello');
}
