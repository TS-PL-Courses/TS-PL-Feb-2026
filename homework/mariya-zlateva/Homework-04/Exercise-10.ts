//npx ts-node Exercise-10.ts
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
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      const success = randomNumber > 0.5;

      console.log('Generated number:', randomNumber);

      if (success) {
        resolve('Success!');
      } else {
        reject('Something went wrong');
      }
    }, 1000);
  });
}

async function runOnce(runNumber: number) {
  try {
    const result = await fetchWithError();
    console.log(`Run ${runNumber}:`, result);
  } catch (error) {
    console.log(`Run ${runNumber}:`, error);
  }
}

// Изпълняваме няколко пъти
async function runMultipleTimes() {
  for (let i = 1; i <= 5; i++) {
    console.log('-----');
    await runOnce(i);
  }
}

runMultipleTimes();
