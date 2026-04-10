// ==============================
// Part 1: Collections and Loops
// ==============================

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let index = 0; index < colors.length; index++) {
  const color = colors[index];

  if (color.length > 4) {
    console.log(`Exercise 1 - The color ${color} has more than 4 characters`);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let number = 1; number <= 100; number++) {
  console.log(`Exercise 2 - The number is ${number}`);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:

for (let row = 1; row <= 9; row++) {
  let line = '';
  let starsCount: number;

  if (row <= 5) {
    starsCount = row;
  } else {
    starsCount = 10 - row;
  }

  for (let col = 1; col <= starsCount; col++) {
    line += '* ';
  }

  console.log(`Exercise 3 - ${line}`);
}

// Exercise 4: Phone number area code substitution

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let index = 0; index < phoneNumbers.length; index++) {
  const originalPhoneNumber = phoneNumbers[index];
  let newPhoneNumber = originalPhoneNumber;

  if (originalPhoneNumber.startsWith('0')) {
    newPhoneNumber = newPhoneNumber.replace('0', '+359');
  }

  console.log(`Exercise 4 - The original phone number is ${originalPhoneNumber}`);

  console.log(`Exercise 4 - The new phone number is ${newPhoneNumber}`);
}

// Exercise 5: Decide on an evening activity

const name: string = 'Georgi';
const hour: number = 22;
const money: number = 25.5;
const isPersonSick: boolean = false;

let activity: string;

if (isPersonSick) {
  activity = 'stay at home and go to bed';
} else if (!isPersonSick && money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (!isPersonSick && money >= 20) {
  activity = 'go to the cinema';
} else {
  activity = 'go to the park';
}

console.log(
  `Exercise 5 - Name: ${name}, Hour: ${hour}, Money: ${money}, Sick: ${isPersonSick}, Activity: ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays

enum Account {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

const clients = [
  { name: 'Ivan', accountType: Account.Current },
  { name: 'Toshko', accountType: Account.FlexSave },
  { name: 'Mariq', accountType: Account.Deposit },
];

for (let index = 0; index < clients.length; index++) {
  const client = clients[index];

  console.log(
    `Exercise 6 - The client name is ${client.name} and their card account type is ${Account[client.accountType]}`,
  );
}
