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
  console.log('Ex7: ' + message);
});

// Exercise 8 - Using async/await
console.log('-----Exercise 8 - Using async/await-----');
async function runTask(): Promise<void> {
  const result = await waitTwoSeconds();
  console.log('Ex8: ' + result);
}
runTask();

// Exercise 9 - Simulating API Call
console.log('-----Exercise 9 - Simulating API Call-----');
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log('Ex9: ' + user.name);
}
getUser();

// Exercise 10 - Error Handling with async/await
console.log('-----Exercise 10 - Error Handling with async/await-----');
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Success!');
      } else {
        reject('Something went wrong');
      }
    }, 1000);
  });
}

async function runFetch() {
  try {
    const message = await fetchWithError();
    console.log('Ex10: ' + message);
  } catch (error) {
    console.log('Ex10: ' + error);
  }
}

runFetch();

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
