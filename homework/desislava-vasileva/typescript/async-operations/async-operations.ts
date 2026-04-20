//npx ts-node typescript/async-operations/async-operations.ts

// console.log('A');
// console.log('B');
// console.log('C');

// console.log('Start');

// setTimeout(() => {
//   console.log('Async operation');
// }, 2000);

// console.log('End');

// function setTimeouts() {
//   setTimeout(() => {
//     console.log('3 seconds delay');
//   }, 3000);

//   setTimeout(() => {
//     console.log('1 seconds delay');
//   }, 1000);

//   setTimeout(() => {
//     console.log('2 seconds delay');
//   }, 2000);
// }

// setTimeouts();

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await delay(3000);
  console.log('3 seconds delay');

  await delay(2000);
  console.log('2 seconds delay');

  await delay(1000);
  console.log('1 seconds delay');
}

async function demo2() {
  await delay(3000);
  console.log('3 seconds delay');

  await delay(2000);
  console.log('2 seconds delay');

  await delay(1000);
  console.log('1 seconds delay');
}

demo2();

setTimeout(() => {
  console.log('Async operation');
}, 3000);
