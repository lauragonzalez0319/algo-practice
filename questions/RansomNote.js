//Hacker Rank Question: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

//Code
function checkMagazine(magazine, note) {
  // Write your code here
  
  if (magazine.length < note.length) {
      console.log("No");
      return;
  }
  
  const magazineMap = {};
  
  for (let i=0; i<magazine.length; i++) {
      let word = magazine[i];
      if (word in magazineMap) {
          magazineMap[word] += 1;
      } else {
          magazineMap[word] = 1;
      }
  }
  
  for (let i=0; i<note.length; i++) {
      let word = note[i];
      if (magazineMap[word]) {
          magazineMap[word] -= 1;
      } else {
         console.log("No");
         return;
      }
  }
  
  
  for (const word in magazineMap) {
      if (magazineMap[word] < 0) {
          console.log("No");
          return;
      }
  }
  
  console.log("Yes");
}