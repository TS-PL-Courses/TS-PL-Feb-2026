class Furniture {
  woodType: string = 'Teakwood';
}

class Chair extends Furniture {
  private readonly legs: number;

  constructor(legs: number, woodType?: string) {
    super()
    this.legs = legs

    if (woodType !== undefined) {
      this.woodType = woodType;
    }
  }

  public getDetails() {
    return `Type - ${this.woodType}, Legs - ${this.legs}`
  }
}

const chair1 = new Chair(4)
console.log(`Chair 1: ${chair1.getDetails()}`)

const chair2 = new Chair(10, 'Walnut')
console.log(`Chair 2: ${chair2.getDetails()}`);

