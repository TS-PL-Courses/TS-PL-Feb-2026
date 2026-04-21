class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  getName(): string {
    return this.name;
  }

  changeName(newName: string): string {
    this.name = newName;
    return this.name;
  }
}

const employee = new Employee('Alex', 33, 'QA');

console.log(employee.getName());

employee.changeName('Petar');

console.log(employee.getName());
