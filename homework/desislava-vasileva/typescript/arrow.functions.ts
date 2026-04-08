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

/* function standardFunc(a: number, b: number): number {
  return a / b;
}

console.log(standardFunc(32423, 23423));
**/

//arrow function

/*const standardFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(standardFunc(4747, 65895875));
**/

const standardFunc = (a: number, b: number): number => a + b;

console.log(standardFunc(23423, 234));

// const triple = (x) => 3 * x;

const triple = (x: number): number => 3 * x;

console.log(triple(5));

const devide = (a: number, b: number): number => {
  if (b == 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

console.log(devide(5, 10));

const numbers = [1, 2, 1231.2312, 4, 324, 12, 15];
const newNum = numbers.map((x) => x * 2);
console.log(newNum);

const even = numbers.filter((x) => x % 2 === 0);

console.log(even);

const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);

const product = numbers.reduce((acc, x) => acc * x, 1);
console.log(product);

const max = numbers.reduce((acc, x) => (x > acc ? x : acc));
console.log(max);

let newArray2: number[] = [];
const newArray = numbers.reduce((acc, x) => newArray2.push(x), 1);

console.log(newArray2);

const newArray3 = numbers.reduce((acc, x) => {
  acc.push(x);
  return acc;
}, []);

console.log('array3: ', newArray3);

//const doubled = numbers.reduce((acc, x) => {acc.push(x * 2);return acc;}, [] as number[]);
/*const doubled = numbers.reduce((acc, x) => {
  acc.push(x * 2);
  return acc;
}, [] as number[]);
**/

//Won't work without return of acc
//const doubled = numbers.reduce((acc, x) => acc.push(x * 2), [] as number[]);

//const doubled = numbers.reduce((acc, x) => [...acc, x * 2],[] as number[]);
//const doubled1 = numbers.reduce((acc, x) => [...acc, x * 2], [] as number[]);
const doubled1 = numbers.reduce((acc, x) => [...acc, x * 2], [] as number[]);
console.log(doubled1);
const doubled = numbers.reduce((acc, x) => x * 2, 1);
console.log(doubled);
