async function fetchUser(): Promise<{ id: number; name: string }> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

async function runFetchUser() {
  console.log((await fetchUser()).name);
}

runFetchUser();
