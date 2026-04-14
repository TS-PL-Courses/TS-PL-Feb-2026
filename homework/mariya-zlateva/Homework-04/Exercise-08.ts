//npx ts-node Exercise-08.ts

// Exercise 8 - Using async/await
// Step 1: Use the "waitTwoSeconds" function from Exercise 1.
// Step 2: Create an async function named "runTask".
// Step 3: Inside the function, use await to wait for "waitTwoSeconds".
// Step 4: Store the result in a variable.
// Step 5: Print the result to the console.
// Step 6: Call the "runTask" function.
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

async function runTask() {
  const result = await waitTwoSeconds();
  console.log(result);
}

runTask();
