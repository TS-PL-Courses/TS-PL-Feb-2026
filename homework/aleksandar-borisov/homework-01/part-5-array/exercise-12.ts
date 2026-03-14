const numbers: number[] = [10, 20 , 30, 40];
let products: number = 1;

for (let index = 0; index < numbers.length; index++) {
    products = numbers[index] * products;
}

console.log(products);