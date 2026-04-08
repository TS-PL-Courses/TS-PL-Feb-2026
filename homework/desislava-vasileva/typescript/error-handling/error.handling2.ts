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
console.log('EXAMPLE1\n');

try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  console.log(error.message);
}

console.log('EXAMPLE1-a\n');
// throw new Error('Running fragile operation failed');
// throw new Error('Is this printed by itself?');

// #2: Don’t lose your stack trace
// wrong example:

console.log('EXAMPLE2\n');

/*try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  throw new Error(`Running fragile operation failed: ${error.message}`);
}
  **/

// correct example:
console.log('EXAMPLE3\n');

const error1 = new Error('Network error');
const error2 = new Error('The update failed', { cause: error1 }); // chaining always errors keeps stack trace

console.log(error2);

console.log('EXAMPLE4\n');
