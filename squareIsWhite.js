var squareIsWhite = function(coordinates) {
  // approach: split coordinates into letter and number. Assign chessboard
  // letters to numbers 1,2,3,.. . Check for the following scenarios in the
  // truth table below:
  //  letter  number  output
  //  odd     odd    false
  //  odd     even    true
  //  even    odd     true
  //  even    even     false

  const split = coordinates.split("");
  const letter = split[0];
  const num = split[1];
  const letterValues = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8}
  let output = false;

  if (letterValues[letter]%2 === 1) {
      num%2 === 1 ? output = false : output = true; 
  } else if (letterValues[letter]%2 === 0) {
      num%2 === 1 ? output = true : output = false; 
  }

  return output;     
}; 