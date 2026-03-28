//npx ts-node MapFilterReduce.ts
// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
let dumi: string[] = ['dog', 'horse', 'donKey', 'gato'];
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
let uppercaseDumi: string[] = dumi.map((dumi) => dumi.toUpperCase());
// Step 4: Log the result.
console.log(uppercaseDumi);
//Variant with function

function convertToUppercase(dumite: string[]): string[] {
  return dumite.map((word) => word.toUpperCase());
}
let result1 = convertToUppercase(['hello', 'map', 'Globe']);
console.log(result1);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
let words: string[] = ['dog', 'horse', 'donKey', 'gato'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
let longWords: string[] = words.filter((word) => word.length > 5);
// Step 4: Log the result.
console.log(longWords);
// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
let chisla: number[] = [12, 3.14, 20.5, 32, 1];
// Step 2: Use the reduce() method to find the largest number.
let maxChislo: number = chisla.reduce((currentMax, currentChislo) => {
  if (currentChislo > currentMax) {
    // Step 3: Store the result in a variable.
    return currentChislo;
  }
  return currentMax;
});
// Step 4: Log the result.
console.log('The biggest number is:', maxChislo);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
let chislaSecond: number[] = [12, 3.14, 20.5, 32, 1, 12, 3.14];
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
let uniquenumbers: number[] = chislaSecond.reduce((uniques, currentValue) => {
  if (!uniques.includes(currentValue)) {
    uniques.push(currentValue);
  }
  return uniques;
}, []);
// Step 4: Log the result.
console.log('Уникални числа:', uniquenumbers);
// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};
// Step 2: Create an array of users.
let users: User[] = [
  { name: 'Mariya', age: 13 },
  { name: 'Mark', age: 57 },
  { name: 'Dolores', age: 33 },
  { name: 'Kristina', age: 21 },
];
// Step 3: Use filter() to keep only users over 18.
let elderly: User[] = users.filter((users) => users.age >= 18);
// Step 4: Use map() to extract their names.
let adultsnames: string[] = elderly.map((person) => person.name);
// Step 5: Log the result.
console.log('The adults names are:', adultsnames);
