class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  //addChild: 
  //If child is an instance of TreeNode
  //  Add child to the end of the children array
  //Else
  //  Create a TreeNode instance for it before adding it to the children array.

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }
  
  //removeChild: 
  //If target child is an instance of TreeNode,
  //  Compare target child with each child in the children array
  //  Update the children array if target child is found
  //Else 
  //  Compare target child with each child's data in the children array
  //  Update the children array if target child is found
  //If target child is not found in the children array
  //  Recursively call .removeChild() for each grandchild.

  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return child.data !== childToRemove;
      }
    });

    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }
  
  //depthFirstTraversal:
  //For each node
  //  Display its data
  //  For each child in children, call itself recursively

  //15                            =>        15
  // -- 3                                   3
  // -- -- 6                                6
  // -- -- 9                                9
  // -- 12                                  12  
  // -- -- 19                               19
  // -- -- 8                                8
  // -- 0                                   0
  // -- -- 10                               10
  // -- -- 19                               19

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }

  //breadthFirstTraversal:
  //Assign an array to contain the current root node
  //While the array is not empty
  //  Extract the first tree node from the array
  //  Display tree node's data
  //  Append tree node's children to the array
  
  //15                            =>        15
  // -- 3                                   3
  // -- -- 6                                12
  // -- -- 9                                0
  // -- 12                                  6 
  // -- -- 19                               9
  // -- -- 8                                19
  // -- 0                                   8
  // -- -- 10                               10
  // -- -- 19                               19

  breadthFirstTraversal() {
    let queue = [ this ];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
};

module.exports = TreeNode;