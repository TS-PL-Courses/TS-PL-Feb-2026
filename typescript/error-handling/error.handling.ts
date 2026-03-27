//npx ts-node typescript/error-handling/error.handling.ts

// Why handle errors?
// Errors are a part of programming, and they can occur for various reasons, such as network issues, invalid user input, or unexpected conditions in the code. Handling errors allows you to gracefully manage these situations, providing a better user experience and preventing crashes or unexpected behavior in your application.
// By catching and handling errors, you can log them, display user-friendly messages, or take corrective actions, ensuring that your application remains robust and reliable even in the face of unexpected issues.

// How to handle errors in TypeScript:
// the try catch statement allows you to test a block of code for errors:

try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
  throw 'Error occurred: ' + err.message; // throw a custom error message
} finally {
  // Block of code to be executed regardless of the try / catch result
}

// example
try {
  console.log('Run/Test this code');
} catch (err) {
  console.log('Run this code when there is an error');
  throw 'Actual Error: ' + err.message; // throw a custom error message
} finally {
  console.log('Run this code always');
}

// The 5 rules of Error Handling in TypeScript:

// #1: Make sure Errors are, well… Errors
// In the magnificent JavaScript (Typescript) world, you might not be aware, but you can throw anything, not only Error instances.
// wrong example:
function throwNumber() {
  throw 123;
}

try {
  throwNumber();
} catch (err) {
  // type of err is 'number' not 'Error'
  console.log(err); // 123
}

// check if an error is an instance of Error
function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {
    /* empty */
  }

  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  return error;
}

// correct example:
try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  console.log(error.message);
}

// #2: Don’t lose your stack trace
// wrong example:
try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  throw new Error(`Running fragile operation failed: ${error.message}`);
}

// correct example:
const error1 = new Error('Network error');
const error2 = new Error('The update failed', { cause: error1 }); // chaining always errors keeps stack trace

console.log(error2);
