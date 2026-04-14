// ==============================
// Part 2: Asynchronous Operations and Error Handling
// ==============================

// Exercise 7 - Basic Promise with setTimeout

function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

// Exercise 8 - Using async/await

async function runTask() {
  console.log('Waiting 2 seconds with async/await...');
  const result = await waitTwoSeconds();
  console.log(result);
}

// Exercise 9 - Simulating API Call

function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function runUserTask() {
  console.log('Fetching user...');
  const user = await fetchUser();
  console.log(user.name);
}

// Exercise 10 - Error Handling with async/await

function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve('Success!');
      } else {
        reject('Something went wrong');
      }
    }, 1000);
  });
}

async function runErrorTask() {
  console.log('Running error task...');
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log('Error:', error);
  }
}

// Exercise 11 - Sequential Async Tasks

function stepOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 1 done');
    }, 1000);
  });
}

function stepTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 2 done');
    }, 1000);
  });
}

async function runSteps() {
  console.log('Running sequential steps...');

  const resultOne = await stepOne();
  console.log(resultOne);

  const resultTwo = await stepTwo();
  console.log(resultTwo);
}

async function runExercises() {
  console.log('Exercise 7:\n');

  console.log('Waiting 2 seconds with Promise...');
  await waitTwoSeconds().then((result) => {
    console.log(result);
  });

  console.log('\nExercise 8:\n');
  await runTask();

  console.log('\nExercise 9:\n');
  await runUserTask();

  console.log('\nExercise 10:\n');
  await runErrorTask();

  console.log('\nExercise 11:\n');
  await runSteps();
}

runExercises();
