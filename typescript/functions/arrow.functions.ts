// npx ts-node typescript/functions/arrow.functions.ts

// Arrow Functions - allow us to write shorter function

// syntax
const myFunctionArrFn = (a: number, b: number) => a * b;
console.log(myFunctionArrFn(2, 3)); // 6

const myFunction = function (a: number, b: number) {
  return a * b;
};

console.log(myFunction(2, 3));

// arrow function
const multiLineCodeBlockFn = () => {
  console.log('Multi-line code block');

  return 'Hello World';
};

console.log(multiLineCodeBlockFn());

// arrow function
const helloWorld = () => {
  return 'Hello World';
};

console.log(helloWorld());

// even shorter!
const helloWorldFn = () => 'Hello World';

console.log(helloWorldFn());

// arrow function with a parameter
const helloAgain = (txt: string) => {
  return 'Hello ' + txt;
};

console.log(helloAgain('Text'));

// shorter! arrow function with a parameter
const helloAgainArrFn = (txt: string) => 'Hello ' + txt;

console.log(helloAgainArrFn('Text'));
