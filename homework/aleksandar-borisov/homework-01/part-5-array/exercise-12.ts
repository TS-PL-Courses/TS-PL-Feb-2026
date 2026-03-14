const numbers: number[] = [10, 20 , 30, 40];
let product: number = 1;

for (let index = 0; index < numbers.length; index++) {
    product = numbers[index] * product;
}

console.log(product);