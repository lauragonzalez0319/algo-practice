//Time: O(n) (OPTIMAL) / Space: O(n) (optimal)
//Sorting with two pointer approach as opposed to built in sort to optimize time

function sortedSquaredArray(array) {
  //compare the abs value of beg and end of array values to determine what the
  //larger square will be to be put in at the end of the result array. This
  //is done with two pointers: one at the start and one in the end. They are moved
  //if they have the larger square so one moves and the other doesnt.
  //Result array is constructed from back to front since we are looking for
  //largest squares. Then it is returned at the end.

  const result = [];
  let lp = 0;
  let rp = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const lpVal = array[lp]**2;
    const rpVal = array[rp]**2;

    if (rpVal > lpVal) {
      result[i] = rpVal;
      rp--;
    } else {
      result[i] = lpVal;
      lp++;
    }
  }

  return result;
}