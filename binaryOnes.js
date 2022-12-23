//Hackerrank: https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true

//solution:
function binaryOnes(n) {  
  let binary = [];
  let quotient = n;
  
  while (quotient > 0) {
      binary.unshift(quotient%2);
      quotient = Math.floor(quotient/2);
  }
  
  const binaryString = binary.join("");
  const ones = binaryString.split("0");
  const sortedOnes = ones.sort();
  const result = sortedOnes.pop().length;
  
  console.log(result);
}