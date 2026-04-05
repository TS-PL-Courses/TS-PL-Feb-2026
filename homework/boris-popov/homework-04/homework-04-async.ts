// Homework 04
// npx ts-node homework/boris-popov/homework-04/homework-04-async.ts

// Part 2: Asynchronous Operations and Error Handling

// Exercise 7 - Basic Promise with setTimeout
console.log('-----Exercise 7 - Basic Promise with setTimeout-----');
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

waitTwoSeconds().then((message) => {
  console.log(message);
});

// Exercise 8 - Using async/await
console.log('-----Exercise 8 - Using async/await-----');
async function runTask(): Promise<void> {
  const result = await waitTwoSeconds();
  console.log(result);
}
runTask();

// Exercise 9 - Simulating API Call
// Step 1: Create a function named "fetchUser".
// Step 2: Make it return a Promise with type { id: number; name: string }.
// Step 3: Use setTimeout to delay execution for 1500 milliseconds.
// Step 4: Resolve the Promise with an object: { id: 1, name: "Alice" }.
// Step 5: Create an async function to call "fetchUser".
// Step 6: Use await to get the result.
// Step 7: Print the user's name to the console.

// Exercise 10 - Error Handling with async/await
// Step 1: Create a function named "fetchWithError".
// Step 2: Make it return a Promise<string>.
// Step 3: Use setTimeout with a delay of 1000 milliseconds.
// Step 4: Inside setTimeout, randomly decide:
//         - Resolve with "Success!" OR
//         - Reject with "Something went wrong".
// Step 5: Create an async function to call "fetchWithError".
// Step 6: Use try/catch to handle the result.
// Step 7: Print the success message if resolved.
// Step 8: Print the error message if rejected.

// Exercise 11 - Sequential Async Tasks
// Step 1: Create a function named "stepOne" that returns a Promise<string>.
// Step 2: Inside it, use setTimeout to resolve "Step 1 done" after 1000 ms.
// Step 3: Create another function named "stepTwo" that returns a Promise<string>.
// Step 4: Inside it, use setTimeout to resolve "Step 2 done" after 1000 ms.
// Step 5: Create an async function named "runSteps".
// Step 6: Use await to call "stepOne" and store the result.
// Step 7: Print the result.
// Step 8: Use await to call "stepTwo" and store the result.
// Step 9: Print the result.
// Step 10: Call the "runSteps" function.
