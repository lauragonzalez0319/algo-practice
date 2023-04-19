
var isAnagram = function(s, t) {
  const sLettersArray = s.split("")
  const tLettersArray = t.split("")
  
  if (s.length !== t.length) {
    return false;
  }

  return sLettersArray.sort().join("") === tLettersArray.sort().join("");
};

console.log(isAnagram("hello", "hello"))
console.log(isAnagram("hello", "ello"))
console.log(isAnagram("hello", "elloh"))