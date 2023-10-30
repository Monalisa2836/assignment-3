/*
Write a function names cubeNumber() which will take a positive number as input.
Now return the input number as cube and also validate if the input is number.

*/

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a valid number";
  }
  const result = number * number * number;
  return result;
}

console.log(cubeNumber(0));
