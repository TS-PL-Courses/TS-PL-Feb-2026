//npx ts-node Exercise-09.ts
// Exercise 9 - Simulating API Call
// Step 1: Create a function named "fetchUser".
// Step 2: Make it return a Promise with type { id: number; name: string }.
// Step 3: Use setTimeout to delay execution for 1500 milliseconds.
// Step 4: Resolve the Promise with an object: { id: 1, name: "Alice" }.
// Step 5: Create an async function to call "fetchUser".
// Step 6: Use await to get the result.
// Step 7: Print the user's name to the console.
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function run() {
  const user = await fetchUser();
  console.log(user.name);
}

run();
