//given a nonempty array of distinct integers (not sorted) and a target sum. find all triplets that sum to target sum
//return in these triplets in ascending in a 2d array where there are 3 columns and each row is a triple.
//if no triplets found then return an empty array

function sumTriplets(array, targetSum) {
  //[1,2,3] targetSum = 3
  //[2,1,0]

  // let sum2 = new Map();

  // for (let i=0; i < array.length; i++) {
  //   let diff = targetSum - array[i];
  //   sum2[diff] = i;
  // }

  let result = [];

  console.log(array);
  array.sort((a,b) => a - b);
  console.log(array);

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          let triplet = [array[i], array[j], array[k]];
          result.push(triplet);
        }
      }
    }
  }

  return result;
}

console.log(sumTriplets(array = [12,3,1,2,-6,5,-8,6], targetSum = 0));