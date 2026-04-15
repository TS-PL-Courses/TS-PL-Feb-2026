const name: string = 'Pesho';
const hour: number = 20;
const money: number = 100;
const isSick: boolean = true;

let activity: string = "";

if (!isSick && money >= 20 && hour >= 21) {
  activity = 'watch a movie';
} else if (!isSick && money >= 20) {
  activity = 'go to the cinema';
} else if (!isSick && money < 20) {
  activity = 'go to the park';
} else if (isSick) {
  activity = 'stay at home and go to bed';
}


console.log(
  `Name: ${name}\nHour: ${hour}\nMoney: ${money}\nisSick: ${isSick}\nActivity: ${activity}`,
);
