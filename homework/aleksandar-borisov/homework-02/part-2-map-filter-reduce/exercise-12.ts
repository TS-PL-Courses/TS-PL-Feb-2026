type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Pesho', age: 21 },
  { name: 'Maria', age: 17 },
  { name: 'Ivan', age: 33 },
];

const result = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(result);
