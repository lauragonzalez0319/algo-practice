//Time: O(n + m) (OPTIMAL) | Space: O(1) (OPTIMAL)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

//EDGE CASES: list of length 1 or 2

//APPROACH:
  //We know we have the same number of nodes from the intersection point onwards
  //so for lists of unequal length we will put our pointers starting position
  //such that they arrive at the first intersection node at the same time. The
  //intersection is found by checking if both nodes' values are equal. First we
  //have to loop through lists to find their length and which list is bigger in
  //order to implement this approach.

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let pointer1 = linkedListOne;
  let pointer2 = linkedListTwo;
  let count1 = 0;
  let count2 = 0;

  while (pointer1 !== null) {
    count1++;
    pointer1 = pointer1.next;
  }

  while (pointer2 !== null) {
    count2++;
    pointer2 = pointer2.next;
  }
  const diff = Math.abs(count1 - count2);
  let biggerListPointer = count1 > count2 ? linkedListOne : linkedListTwo;
  let smallerListPointer = count1 > count2 ? linkedListTwo : linkedListOne;

  for (let i = 0; i < diff; i++) {
    biggerListPointer = biggerListPointer.next;
  }

  while (biggerListPointer !== smallerListPointer) {
    biggerListPointer = biggerListPointer.next;
    smallerListPointer = smallerListPointer.next;
  }

  return biggerListPointer;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;