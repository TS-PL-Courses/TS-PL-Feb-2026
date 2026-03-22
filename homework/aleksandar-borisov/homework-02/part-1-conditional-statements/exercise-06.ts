const age: number = 17;
const lapTime: number = 1.18;

console.log(`Client is ${age} years old`);
console.log(`Client's best lap time is ${lapTime}`);

if (age >= 18 && age < 65 && lapTime < 1) {
  console.log('Client is allowed to compete');
} else {
  console.log('Client is NOT allowed to compete');
}
