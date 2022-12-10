//Hacker Rank Question: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

//Code
/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
  //edge case: s1 and s2 are the same string, meaning mapping is not necessary because we know they are substrings of each       other.
  if (s1 === s2) {
      return "YES";
  }
  
  //edge case: s1 or s2 is empty, meaning mapping is not necessary because we know the empty string cannot be a substring        of a non-empty string.
  if (s1 === "" || s2 === "") {
      return "NO";
  }
  
  const s1Chars = s1.split("");
  const s2Chars = s2.split("");
  
  const s1Map = {};
  
  for (let i = 0; i < s1Chars.length; i++) {
      let s1Char = s1Chars[i];
      if (s1Char in s1Map) {
          s1Map[s1Char] += 1;
      } else {
          s1Map[s1Char] = 1;
      }
  }
  
  for (let i = 0; i < s2Chars.length; i++) {
      let s2Char = s2Chars[i];
      if (s2Char in s1Map) {
          return "YES";
      }
  }
  
  return "NO";
}