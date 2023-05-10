//given array of integers and target integer. write a function that moves all instances of that integer to the end of the
//array and returns that array
//function should mutate the input array, you dont have to maintain order of other integers 

// array1 = [1,3,2,5,4] target = 5
// array2 = [5,1] target = 5
// array3 = [5] target = 5

function endOfArray(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left !== right) {
    if (array[right] === target) {
      right--;
    } else if (array[left] !== target) {
      left++;
    } else {
      array[left] = array[right];
      array[right] = target;
    }
  }

  return array;
}

console.log(endOfArray(array = [1,3,2,5,4], target = 5));
console.log(endOfArray(array = [5, 1], target = 5));
console.log(endOfArray(array = [1,5,2,5,4,6], target = 5));
console.log(endOfArray(array = [1,2,5,4,5], target = 5));