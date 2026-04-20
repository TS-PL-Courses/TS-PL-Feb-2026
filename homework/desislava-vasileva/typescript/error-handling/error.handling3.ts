// try {
//   console.log('Run/Test this code');
//   throw 'Actual Error: ';
// } catch (err) {
//   console.log('Run this code when there is an error');
//   console.log(err);
// } finally {
//   console.log('Run this code always');
// }

// function throwNumber() {
//   throw 123;
// }

// try {
//   throwNumber();
// } catch (err) {
//   // type of err is 'number' not 'Error'
//   console.log(err); // 123
// }

// check if an error is an instance of Error
// function ensureError(value: unknown): Error {
//   if (value instanceof Error) return value;

//   let stringified = '[Unable to stringify the thrown value]';
//   try {
//     console.log('bla');

//     // stringified = JSON.stringify(value);
//   } catch (err) {
//     /* empty */
//     return err;
//   }

//   // const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
//   // return error;
// }

// // correct example:
// try {
//   throw new Error('Running fragile operation failed');
// } catch (err) {
//   const error = ensureError(err);

//   console.log(error.message);
// }

// console.log(ensureError('ffgdgdgdgdg').message);

function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {
    /* empty */
  }

  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  // const error = new Error(`This value was thrown as is, not through an Error: ${value}}`);
  return error;
}

// correct example:
try {
  throw new Error('Running fragile operation failed');
  //throw 'Minka';
} catch (err) {
  const error = ensureError(err);

  console.log(error.message, '\n');
}

try {
  throw new Error('Running fragile operation 2 failed');
  //throw '1,2,3';
} catch (err) {
  const error = ensureError(err);

  //throw new Error(`Running fragile operation 3 failed: ${error.message}`, { cause: error });
  //throw new Error(`Running fragile operation 3 failed:`, { cause: err });
  console.log(error.message, '\n');
}

// console.log("И кво става с'я?");

//correct example:
// const error1 = new Error('Network error');
// const error2 = new Error('The update failed', { cause: error1 }); // chaining always errors keeps stack trace

// console.log(error2);

//const a: object = { age: 101, name: 'Minka' };
// const b: String = ({ b: 1 });
// console.log(b);

// try {
//   throw { code: 504, minka: 101 };
// } catch (value) {
//   //const error = new Error(`Thrown value: ${value}`);
//   const error = new Error(`Thrown value: ${value as string}`);
//   //const error = new Error(`Thrown value: ${ensureError(value)}`);
//   // console.log('WITHOUT stringify:');
//   console.log(error.message);
// }

// try {
//   throw { reason: 'timeout', code: 504 };
// } catch (value) {
//   console.log('Casting:', value as string);
//   console.log('String():', String(value));
//   console.log('Template:', `${value}`);
//   console.log('JSON:', JSON.stringify(value));
// }

// try {
//   throw [1, 2, 3];
// } catch (value) {
//   console.log('Without stringify:', String(value));
//   console.log('With stringify:', JSON.stringify(value));
//   console.log(`Without stringify 2: ${value}`);
// }

// function ensureError2(value: unknown): Error {
//   if (value instanceof Error) return value;

//   let stringified = '[Cannot stringify]';
//   try {
//     stringified = JSON.stringify(value);
//   } catch {}

//   return new Error(`Unknown error: ${stringified}`);
// }

// async function fetchUser(userId: number) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     // ❗ API може да върне 404, 500 и т.н.
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     const error = ensureError2(err);

//     // 🔥 добавяме контекст + пазим оригиналната грешка
//     throw new Error(`Failed to fetch user ${userId}`, { cause: error });
//   }
// }

// // 🔽 използване
// (async () => {
//   try {
//     const user = await fetchUser(9999); // няма такъв user
//     console.log(user);
//   } catch (err) {
//     const error = ensureError2(err);

//     console.log('MESSAGE:', error.message);
//     console.log('CAUSE:', error.cause);
//   }
// })();

// const genericError = new Error('This is an error'); // create a new Error object
// console.log(genericError.name); // Output: Error
// console.log(genericError.message); // Output: This is an error
// throw genericError; // throw an Error object

const syntaxError = new SyntaxError('This is a syntax error'); // create a new SyntaxError object
throw syntaxError; // throw a SyntaxError object

// // Example of a syntax error
// const func = () =>
//     console.log(hello)
//     } // SyntaxError: Unexpected token -> an opening bracket is missing in the code, which invokes the Syntax error
