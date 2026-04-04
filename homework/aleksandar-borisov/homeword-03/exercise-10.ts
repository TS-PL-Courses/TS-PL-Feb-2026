/**
 * Returns a concatenated string of a person's first name, last name, and age.
 * If any argument is missing, returns a default message instead.
 * @param {string} [firstName] - The person's first name
 * @param {string} [lastName] - The person's last name
 * @param {number} [age] - The person's age
 * @returns {string} Concatenated first name, last name, and age, or a message if arguments are missing
 */

function nameAndAge(firstName?: string, lastName?: string, age?: number): string {
  if (!firstName || !lastName || age === undefined) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  return `${firstName} ${lastName}, age: ${age}`;
}

console.log(nameAndAge('Petar', 'Ivanov', 30));
console.log(nameAndAge('Maria'));
console.log(nameAndAge());
console.log(nameAndAge('Gosho', 'Petrov'));
