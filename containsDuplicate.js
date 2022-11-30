function containsDuplicate(nums) {
  const seen = {};

  for (i=0; i < nums.length; i++) {
    if (nums[i] in seen) {
      return true;
    } else {
      seen[nums[i]] = 1;
    }
  }

  return false;
}

console.log(containsDuplicate([1,2,4,1]));