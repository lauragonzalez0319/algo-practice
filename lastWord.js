var lengthOfLastWord = function(s) {
  return lastWord = s.trim().split(" ").pop().length
};

console.log(lengthOfLastWord("hi i am laura"));
console.log(lengthOfLastWord("hi i am dog  "));
console.log(lengthOfLastWord("hi i am ok"));