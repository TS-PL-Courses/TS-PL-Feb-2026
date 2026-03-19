// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.

// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = { id: number | string; name: string };

// Step 4: Create one user object with a numeric id.
const numUser = { id: 1, name: 'Petko' };

// Step 5: Create another user object with a string id.
const strUser = { id: 'user123', name: 'Gosho' };

console.log(numUser);
console.log(strUser);
