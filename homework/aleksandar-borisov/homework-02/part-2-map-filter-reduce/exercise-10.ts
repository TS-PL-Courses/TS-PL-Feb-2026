type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: 'keyboard', price: 150, quantity: 10 },
  { name: 'mouse', price: 50, quantity: 5 },
  { name: 'monitor', price: 300, quantity: 1 },
];

const price = items.map((item) => item.price * item.quantity);

console.log(price);

const total = price.reduce((total, x) => total + x);

console.log(total);

