//npx ts-node typescript/functions/method-vs-function
//Example:

function welcome(): string {
  return 'Hello World';
}
console.log(welcome());

const greeter = {
  greet: () => 'Hello World',
};

console.log(greeter.greet());
