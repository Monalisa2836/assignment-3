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

const changeTaka = [];
const totalCost = 10;
console.log(canPay(changeTaka, totalCost));

//  [1, 2, 5]
// [1,5,5]
