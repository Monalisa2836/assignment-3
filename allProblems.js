function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a valid number";
  }
  const result = number * number * number;
  return result;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide valid string";
  }
  return string1.includes(string2);
}

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

function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  const address = street + "," + house + "," + society;

  return address;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Please provide a valid array";
  }
  let totalChange = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalChange += changeArray[i];
  }
  if (totalChange >= totalDue) {
    return true;
  } else {
    return false;
  }
}
