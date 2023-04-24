//Binary Tree class has:
//  -data
//  -a depth value, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a 
//   level somewhere lower in the tree
//  -a left pointer that points to a left child which is itself a binary tree, and must have a data lesser 
//  than the root node’s data
//  -a right pointer that points to a right child which is itself a binary tree, and must have a data greater 
//  than the root node’s data
//  -Retrieval: O(log n)

class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  //Insert new value: 
  // If the new value is less than the root node's value
  //   If a left child node doesn't exist 
  //     Create a new BinaryTree with the new value at a greater depth and assign it to the left pointer
  //   Else
  //     Recursively call .insert() on the left child node  
  // Else
  //   If a right child node doesn't exist
  //     Create a new BinaryTree with the new value at a greater depth and assign it to a right pointer
  //   Else
  //     Recursively call .insert() on the right child node

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }

  //Retrieval of Value
  // If target value is the same as the current node value (base case)
  //   Return the current node
  // Else (recursive case)
  //   If target value is less than the root node's value and there is a left child node
  //     Recursively search from the left child node
  //   Else if there is a right child node
  //     Recursively search from the right child node
  
  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if ((this.left) && (value < this.value)) {
        return this.left.getNodeByValue(value);
    } else if (this.right) {
        return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  //Depth-First Traversal
  //With depth-first traversal, we always traverse down each left-side branch of a tree fully before 
  //proceeding down the right branch. However, there are three traversal options:
  //  -Preorder is when we perform an action on the current node first, followed by its left child node 
  //  and its right child node
  //  -Inorder is when we perform an action on the left child node first, followed by the current node 
  //  and the right child node
  //  -Postorder is when we perform an action on the left child node first, followed by the right child 
  //  node and then the current node
  //This implementation is the inorder option. The advantage of this option is that the data is displayed 
  //in a sorted order from the smallest to the biggest.

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }

};