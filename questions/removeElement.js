function removeElement(nums, val) {

  for (let i=0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1);
          i--;
      } 
  }

  return nums;
};

console.log(removeElement([1,2,3,3,4], 3));
// console.log(removeElement([2,1,1,1,4,1], 1));