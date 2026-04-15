//npx ts-node Exercise-05.ts
// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

// Step 1: Abstract class
abstract class Instrument {
  abstract playMusic(): void;
}

// Step 2: Subclass Guitar
class Guitar extends Instrument {
  playMusic(): void {
    console.log('The guitar is playing: Drun, drun');
  }
}

// Step 2: Subclass Piano
class Piano extends Instrument {
  playMusic(): void {
    console.log('The piano is playing: Taradam,taradam');
  }
}

// Step 4: Create objects and call playMusic
const myGuitar = new Guitar();
myGuitar.playMusic();

const myPiano = new Piano();
myPiano.playMusic();
