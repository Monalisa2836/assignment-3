/*
Write a function called sortMaker() which will take an array as parameter
 and the array will always include two numbers . 
 Now if both of these numbers are
 positive then return the array arranged in order from largest to smallest .
 And if both of these numbers are same then return “equal” .
 Also if any element is a negative number then return “Invalid Input”


*/

function sortMaker(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return "Please provide a valid array with exactly two input";
  }
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }
  if (arr[0] == arr[1]) {
    return "equal";
  } else {
    const maxNumber = Math.max(arr[0], arr[1]);
    const minNumber = Math.min(arr[0], arr[1]);
    return [maxNumber, minNumber];
  }
}

console.log(sortMaker([2,3]));

// [2,3] [3,2]
// [4,2] [4,2]
// [4,4] equal
// [1,2] [2,1]
// [4,-2] Invalid Input
