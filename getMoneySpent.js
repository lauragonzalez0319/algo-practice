//Hackerrank: https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, b) {
  let maxSpent = 0;
  
  for (let i=0; i<keyboards.length; i++) {
      for (let j=0; j<drives.length; j++) {
          let cost = keyboards[i] + drives[j];
          if (cost <= b) {
              if (maxSpent === 0) {
                  maxSpent = cost;
              } else if (cost > maxSpent) {
                  maxSpent = cost;
              }
          }
      }
  }
  
  if (maxSpent === 0) {
      return -1;
  } else {
      return maxSpent;
  }
}