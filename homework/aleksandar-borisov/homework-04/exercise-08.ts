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
