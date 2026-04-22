interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user: User = {
  id: 1,
  name: 'Alex',
  age: 33,
};

console.log(user);
