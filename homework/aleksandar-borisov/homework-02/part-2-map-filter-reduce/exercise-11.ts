const arr: number[] = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9];

const result = arr.reduce((acc: number[], curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(result);
