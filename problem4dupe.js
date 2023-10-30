function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  const address = street + "," + house + "," + society;

  return address;
}
console.log(findAddress({street: 10}));

// { street: 10, house: "15A", society: "Earth Perfect" }
// { street: 10, society: " Earth Perfect" }
// {street: 10}
