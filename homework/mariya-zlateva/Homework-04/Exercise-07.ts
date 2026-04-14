//npx ts-node Exercise-07.ts
// Exercise 7 - Basic Promise with setTimeout
// Step 1: Create a function named "waitTwoSeconds".

function waitTwoSeconds(): Promise<string> {
  // Step 2: Make the function return a Promise<string>.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
      // Step 3: Inside the Promise, use setTimeout to delay for 2000 milliseconds.
      // Step 4: After the delay, resolve the Promise with the message "Done waiting!".
    }, 2000);
  });
}
// Step 5: Call the function and log the result using .then().
waitTwoSeconds().then((result) => {
  console.log(result);
});
