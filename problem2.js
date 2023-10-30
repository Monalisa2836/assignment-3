/*
Write a function called “matchFinder()” which will take two string as parameters
 and the strings are “John Doe”, “ohn” . If you find a complete match of the second string with 
 any part of the first string, then return true.
  And if you can't find the full match, return false .
 Also validate if both of the parameter are strings or not .

*/

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide valid string";
  }
  return string1.includes(string2);
}

console.log(matchFinder('Peter Parker','pet' ));

// 'John Doe', 'ohn'
// “JavaScript”,“Code”
// “Peter Parker”,“Pen”
// “Peter Parker”,”pet”