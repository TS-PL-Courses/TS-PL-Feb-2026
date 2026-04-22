abstract class Instrument {
  public abstract playMusic(); 
  
}

class Guitar extends Instrument {
  public playMusic(): string {
    return 'Guitar is playing';
  }
}

class Piano extends Instrument {
  public playMusic(): string {
    return 'Piano is playing';
  }
}

const guitar = new Guitar();
const piano = new Piano();

console.log(guitar.playMusic())
console.log(piano.playMusic())


