/*
Write a function called “findAddress()” which will take an object as an parameter.
The object will always have three property like this {street: 10,house: 15A,society: “Earth
Perfect”}.
Now return all the object values .
If any of the property is missing then replace the missing property value with double underscore.

*/

function findAddress(obj) {
  const address = [];
  if (obj.street) {
    address.push(obj.street);
  } else {
    address.push("__");
  }
  if (obj.house) {
    address.push(obj.house);
  } else {
    address.push("__");
  }
  if (obj.society) {
    address.push(obj.society);
  } else {
    address.push("__");
  }
  return address;
}

const input = { street: 10, house: "15A", society: "Earth Perfect" };

console.log(findAddress(input));

// { street: 10, house: "15A", society: "Earth Perfect" }
// { street: 10, society: " Earth Perfect" }
// {street: 10}

// write a function called findAddress which will take an object as parameter .
//  This is the object  { street: 10, house: "15A", society: "Earth Perfect" } .
//   Now get the object values individually and push them in an empty array .
//   And add an if condition if  any of the property is missing then replace
//   the missing property value with double underscore
