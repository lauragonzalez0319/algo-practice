//Hacker Rank Question: https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true

function processData(input) {
  const inputArray =  input.split("\n");
  
  let evenString = "";
  let oddString = "";
  
  
  for (let i=0; i < inputArray[0]; i++) {
      let stringChars = inputArray[i+1].split("");
      
      for (let i=0; i < stringChars.length; i++) {
          i%2 === 0 ? evenString += stringChars[i] : oddString += stringChars[i];
      }
      
      console.log(evenString + " " + oddString)
      evenString = "";
      oddString = "";
  }
} 