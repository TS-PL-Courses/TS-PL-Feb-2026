// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

let clientAge: number = 14;
let bestLapTime: number = 51.45;

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60.0) {
  console.log(
    `The client is ${clientAge} years old, has a best lap time of ${bestLapTime} seconds, and is allowed to compete.`,
  );
} else {
  console.log(
    `The client is ${clientAge} years old, has a best lap time of ${bestLapTime} seconds, and is NOT allowed to compete.`,
  );
}
