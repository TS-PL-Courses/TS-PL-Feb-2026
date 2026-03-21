// npx ts-node typescript/special-types/unknown.ts

let value: unknown;

value = 42;
value = 'hello';
value = true;
value = { name: 'John' };

// You can assign anything to unknown, but you cannot use it directly.

let otherValue: unknown = 'hello';

// console.log(otherValue.length); // not allowed

// TypeScript requires type narrowing first.
// Type narrowing with typeof
let anotherValue: unknown = 'hello';

if (typeof anotherValue === 'string') {
  console.log(anotherValue.length); // allowed
}

// Using unknown in API responses
// A common real-world use.

function fetchData(): unknown {
  return JSON.parse('{"name": "Alice"}');
}

const data = fetchData();

if (typeof data === 'object' && data !== null) {
  console.log(data);
}

// This forces you to validate the data before using it.

// Using unknown with type assertion
let someValue: unknown = 'TypeScript';

let strLength = (someValue as string).length;

console.log(strLength);

// Here we assert the type manually.

// Using unknown in function parameters
function print(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log('Not a string');
  }
}

print('hello');
print(123);

// unknown vs any
let a: any = 'hello';
a.toUpperCase(); // allowed (unsafe)

let b: unknown = 'hello';
// b.toUpperCase(); // not allowed

// unknown forces safety checks.

// Using unknown in catch blocks
// Modern TypeScript uses unknown for errors.
try {
  throw new Error('Something went wrong');
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}
