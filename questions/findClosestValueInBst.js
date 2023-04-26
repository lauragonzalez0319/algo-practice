//Time: O(log n) (OPTIMAL) | Space: O(1) (OPTIMAL)

//Time: avg case: O(log n), worst case: O(n) - tree with only one branch so if would have
//to search every node bc bst property is not making search more efficient by eliminating
//braches. 10 ->15->22->30

//Space: O(1) because it was solved iteratively. If solved resursively then we would have
//worst case n call stack frames so it would be O(n)

function findClosestValueInBst(tree, target) {
  //Call on helper function that performs depth first traversal

  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  //takes advantage of the fact that BST property tell us that every node on
  //left will be less than current node value and every node right will be greater
  //than current node value. This property allows us to eliminate the entire left
  //or right side of tree in that initial comparison of target value and current
  //node value. It continues to elimiate paths moving forward as well.

  //helper function has parameter closest that gets initialized as the first
  //value of the tree (root's value) to serve as the first comparison
  //set currentNode variable to traverse tree
  //search while currentNode is not null meaning there are still nodes to check
  //if the abs difference between closest's value and target is greater than abs diff
  // of target and currentNode's value, then closet value is updated to currentNode's value
  //and search contiues to look to see if there is a closer value in rest of tree
  //otherwise, closest is not updated but search also continues by using BST property
  //to explore left or right child over and over until either currentNode is null
  //or the edge case that target =  a value in bst in which loop breaks. 
  //closest value is returned

  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  
  return closest;
}

  
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}