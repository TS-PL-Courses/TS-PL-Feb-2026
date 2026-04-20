
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

waitTwoSeconds().then((result) => console.log(result));
