// ==============================
// Part 2: Functions
// ==============================

// Exercise 7:

function addItemInForm(
  tableRow: number,
  complain: string,
  clientName: string,
  carNumber: number,
  driverName: string,
): void {
  console.log('Printing the row');
  console.log(`${tableRow}, ${complain}, ${clientName}, ${carNumber}, ${driverName}`);
}

console.log('Exercise 7:');
addItemInForm(2556, 'Driver smoked', 'Ivan', 2523, 'Petko');

// Exercise 8:

function sum2Numbers(number1: number, number2: number): number {
  return number1 + number2;
}

console.log('Exercise 8:');
console.log(sum2Numbers(2, 3));

// Exercise 9:

/**
 * Returns a person's full name.
 *
 * @param {string} firstName - the first name of the person
 * @param {string} lastName - the last name of the person
 * @param {string} middleName - the middle name of the person (optional)
 * @returns {string} The full person name
 */
function printPersonName(firstName: string, lastName: string, middleName?: string): string {
  if (middleName) {
    return firstName + ' ' + middleName + ' ' + lastName;
  }

  return firstName + ' ' + lastName;
}

console.log('Exercise 9:');
console.log('Person with middle name - ' + printPersonName('Georgi', 'Kostadinov', 'Vasilev'));
console.log('Person without middle name - ' + printPersonName('Georgi', 'Kostadinov'));

// Exercise 10:

/**
 * Returns a person's full information.
 * If one or more arguments are missing, default values are used.
 *
 * @param {string} firstName - person's first name
 * @param {string} lastName - person's last name
 * @param {number} age - person's age
 * @returns {string} Full info string
 */
function personFullInfo(
  firstName: string = 'Unknown',
  lastName: string = 'Unknown',
  age: number = 0,
): string {
  if (firstName === 'Unknown' || lastName === 'Unknown' || age === 0) {
    return `Missing one or all arguments - first name, last name, or age. Default values: ${firstName} ${lastName} ${age}`;
  }

  return `${firstName} ${lastName} ${age}`;
}

console.log('Exercise 10:');
console.log(personFullInfo('Georgi', 'Kostadinov', 35));
console.log(personFullInfo());
console.log(personFullInfo('Georgi'));
console.log(personFullInfo('Georgi', 'Kostadinov'));

// Exercise 11:

/**
 * Returns a sentence about a favourite programming language and why it is loved.
 *
 * @param {string} programmingLanguage - the programming language
 * @param {string} compliment - the reason why it is loved
 * @returns {string} A full sentence with the programming language and compliment
 */
function buildLoveSentence(programmingLanguage: string, compliment: string): string {
  return `I love ${programmingLanguage} because ${compliment}`;
}

console.log('Exercise 11:');
console.log(buildLoveSentence('TypeScript', 'it helps catch errors early'));
console.log(buildLoveSentence('JavaScript', 'it is flexible and powerful'));
console.log(buildLoveSentence('Python', 'it is easy to read'));

// Exercise 12:

/**
 * Counts the number of uppercase and lowercase letters in a string.
 *
 * @param {string} text - the input text
 * @returns {{ uppercase: number; lowercase: number }} Object containing both counts
 */
function countLetters(text: string): { uppercase: number; lowercase: number } {
  let uppercase = 0;
  let lowercase = 0;

  for (const char of text) {
    if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else if (char >= 'a' && char <= 'z') {
      lowercase++;
    }
  }

  return {
    uppercase,
    lowercase,
  };
}

console.log('Exercise 12:');

const result = countLetters('Hello World');

console.log(`Number of uppercase characters: ${result.uppercase}`);
console.log(`Number of lowercase characters: ${result.lowercase}`);
