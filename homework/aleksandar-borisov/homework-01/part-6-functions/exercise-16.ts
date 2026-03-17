type User = {
    id: number | string,
    name: string
}

const numUser: User = { id: 123, name: "Pesho" };
const strUser: User = { id: "asd", name: "Tisho"};

console.log(numUser);
console.log(strUser);

