// ==============================
// Part 6 - Functions (functions)
// ==============================

// Exercise 14: Function with a union type

function printId(id: string | number): void {
  console.log(`Exercise 14 - The id value is ${id}`);
}

printId(15);

// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities

function calculateTestingTime(
  qaName: string,
  numberOfFunctionalities: number,
  hoursPerFunctionality: number,
): void {
  const totalTime = numberOfFunctionalities * hoursPerFunctionality;

  console.log(
    `Exercise 15 - The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} functionalities.`,
  );
}

calculateTestingTime('Toshko', 10, 2);

// Exercise 16: Union in objects

type User = {
  id: string | number;
  name: string;
};

const userWithNumberId: User = {
  id: 1,
  name: 'Georgi',
};

const userWithStringId: User = {
  id: 'ABC123',
  name: 'Toshko',
};

console.log(
  `Exercise 16 - User with number id -> id: ${userWithNumberId.id}, name: ${userWithNumberId.name}`,
);

console.log(
  `Exercise 16 - User with string id -> id: ${userWithStringId.id}, name: ${userWithStringId.name}`,
);
