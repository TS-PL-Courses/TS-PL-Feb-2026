/**
 * Returns a formatted full name string
 * @param {string} firstName - the person's first name
 * @param {string} lastName - the person's last name
 * @param {string} [middleName] - the person's middle name (optional)
 * @returns {string} The formatted full name
 */

function fullName(firstName: string, lastName: string, middleName?: string) {
  const middle = middleName ? `\nMiddle Name: ${middleName}` : '';
  return `First Name: ${firstName}${middle}\nLast Name: ${lastName}`;
}

console.log(fullName('Georgi', 'Hristov', 'Ivanov'));
