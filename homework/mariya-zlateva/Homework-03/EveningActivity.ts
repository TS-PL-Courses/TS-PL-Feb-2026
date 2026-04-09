//npx ts-node EveningActivity.ts
// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
let name: string = 'Mariya';
let hour: number = 22;
let money: number = 21;
let isSick: boolean = false;
let activity: string = '';
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
if (isSick) {
  activity = 'stay at home and go to bed';
} else if (money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (money >= 20) {
  activity = 'go to the cinema';
} else if (money < 20) {
  activity = 'go to the park';
}
// Step 3: Log the person's details and the decided activity
console.log('The person:', name);
console.log('Hour:', hour);
console.log('Money:', money);
console.log('Is sick:', isSick);
console.log('Activity:', activity);

//More beautifull variant with funcyion
function decideActivity(name: string, hour: number, money: number, isSick: boolean): string {
  if (isSick) {
    return `${name} should stay at home and go to bed`;
  }
  if (money > 20 && hour >= 21 && hour <= 24) {
    return `${name} should watch a move`;
  }
  if (money >= 20) {
    return `${name} should go to cinema`;
  }
  return `${name} should go to the park`;
}
console.log(decideActivity('Maria', 22, 15.5, false));
