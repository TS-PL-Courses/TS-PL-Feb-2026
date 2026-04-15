const firstNumber: number = 20;
const secondNumber: number = 10;
const thirdNumber: number = 30;

if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
  console.log(firstNumber);
  if (secondNumber <= thirdNumber) {
    console.log(secondNumber);
    console.log(thirdNumber);
  } else {
    console.log(thirdNumber);
    console.log(secondNumber);
  }
} else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
  console.log(secondNumber);
  if (firstNumber <= thirdNumber) {
    console.log(firstNumber);
    console.log(thirdNumber);
  } else {
    console.log(thirdNumber);
    console.log(firstNumber);
  }
} else {
  console.log(thirdNumber);
  if (firstNumber <= secondNumber) {
    console.log(firstNumber);
    console.log(secondNumber);
  } else {
    console.log(secondNumber);
    console.log(firstNumber);
  }
}
