const arr: number[] = [10, 20, 10, 30, 40];

const unique = arr.filter((value, index) => index === arr.indexOf(value));

console.log(unique);
