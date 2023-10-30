function findAddress(obj) {
    let address = "";
  
    if (obj.street) {
      address += obj.street;
    } else {
      address += "__";
    }
  
    if (obj.house) {
      address += "," + obj.house;
    } else {
      address += ",__";
    }
  
    if (obj.society) {
      address += "," + obj.society;
    } else {
      address += ",__";
    }
  
    return address; 
  }
  
  const input = {street: 10};
  
  const addressString = findAddress(input);
  
  console.log(addressString); // Output: 10,15A,Earth Perfect
//   console.log(typeof addressString); // Output: string
  