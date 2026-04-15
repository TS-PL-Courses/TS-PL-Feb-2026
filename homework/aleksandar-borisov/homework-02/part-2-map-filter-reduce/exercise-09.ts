const arr: number[] = [10, 20, 30, 100, 40];

const result = arr.reduce((total, x) => Math.max(total, x));

console.log(result);