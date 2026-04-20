class Mammal {
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(name: string) {
    return `${name} eats food.`;
  }
}

class Carnivore extends Mammal {
  override eat(name: string): string {
    return `${name} is Carnivore and eats only meat`;
  }
}

class Herbivore extends Mammal {
  override eat(name: string): string {
    return `${name} is Herbivore and eats only plants`;
  }
}

const lion = new Carnivore('Simba');
const boar = new Herbivore('Pumba');

console.log(lion.eat('Simba'));
console.log(boar.eat('Pumba'));
