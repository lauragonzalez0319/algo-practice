//Time: O(n) (OPTIMAL) (two four loops in parallel iterating n times where
//n is the length of the string) | Space: O(1) (Though we are using map that
//will be size n length of the string, there are only 26 possible characters
//so O(26) which reduces to O(1)) (OPTIMAL)

function firstNonRepeatingCharacter(string) {
  //edge case: no nonrepeating characters
  //loop through string
    //use map to keep track of characters seen frequency where key is character
    //and value is frequency
  //find first frequency of 1 in map and return that character. If frequency of 1
  //is not found then return -1

  const charsFreq = new Map();

  for (let i = 0; i < string.length; i++) {
    if (string[i] in charsFreq) {
      charsFreq[string[i]] += 1;
    } else {
      charsFreq[string[i]] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (charsFreq[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}