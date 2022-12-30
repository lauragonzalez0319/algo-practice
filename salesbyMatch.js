//Hackrank: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, ar) {
  const sockMap = {};
  let pairs = 0;
  
  for (let i=0; i < n; i++) {
      let sock = ar[i];
      if (sock in sockMap) {
          sockMap[sock]++;
      }
      else {
          sockMap[sock] = 1;
      }
  }
  
  for (let sock in sockMap) {
      pairs = pairs + Math.floor(sockMap[sock]/2)
  }

  return pairs;
}