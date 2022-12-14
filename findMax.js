//Find max value in an array of integers

//Sol 1: Brute Force using built-in array function .max()
// O(n)

function findMax1(input) {
  input.max();
}

//Sol 2: 
//O(n)

function findMax2(input) {
  let maxValue = input[0];

  for (let i=0; i < input.length; i++) {
    if (maxValue < input[i+1]) {
      maxValue = input[i] 
    } 
  }
  
  return maxValue;
}
