//npx ts-node Functions2part.ts
// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function

function personsInfo(firstName?: string, lastName?: string, age?: number): string {
  // Step 3: Check for missing values
  if (!firstName || !lastName || !age) {
    return 'Missing one or all arguments - first name, last name, or age';
  }
  //if arguments exist return concatenated string
  return `Person info: ${firstName} ${lastName} ${age}`;
}
// Step 4: Testing the different scenarios
//WHen all arguments are given
console.log(personsInfo('Johnatan', 'Livingston', 43));
//When an argument is missing

console.log(personsInfo('Ivan', 'Petrov'));
console.log(personsInfo('Elena'));
console.log(personsInfo());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
function compliment(language: string, compliment: string): string {
  return `I love ${language} because ${compliment}`;
}
//Test the function

console.log(compliment('TypeScript', 'it makes JavaScript safer'));
console.log(compliment('JavaScript', "it's flexible and powerful"));
console.log(compliment('Python', 'it reads like natural language'));
console.log(compliment('C#', "it's clean and fast"));

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
function calculateLetters(text: string): { upper: number; lower: number } {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    //Check upper case letters
    if (char >= 'A' && char <= 'Z') {
      upper++;
    }
    //Check lower case letters
    else if (char >= 'a' && char <= 'z') {
      lower++;
    }
  }
  return { upper, lower };
}
// Example: Sample string: "Hello World"
const result = calculateLetters('Hello World!');
console.log('Number of upper cases:', result.upper);
console.log('Number of lower cases:', result.lower);
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8
