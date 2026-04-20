async function stepOne(): Promise<string> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Step 1 done');
    }, 1000),
  );
}
async function stepTwo(): Promise<string> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Step 2 done');
    }, 1000),
  );
}
async function runSteps() {
  const resultOne = await stepOne();
  const resultTwo = await stepTwo();
  console.log(resultOne);
  console.log(resultTwo);
}
runSteps();
