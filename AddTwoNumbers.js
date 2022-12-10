const { ConstructionOutlined } = require("@mui/icons-material");

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let sum = 0, carry = 0, pointer1 = l1, pointer2 = l2, valL1 = 0, valL2 = 0, resultListNode = new ListNode(), currentNode = resultListNode;

    while (pointer1 || pointer2) {
        pointer1 ? valL1 = pointer1.val : valL1 = 0;
        pointer2 ? valL2 = pointer2.val : valL2 = 0;

        sum = valL1 + valL2 + carry;

        if (sum > 9) {
            carry = 1;
            currentNode.next = new ListNode(sum - 10);
            currentNode = currentNode.next;
        } else {
            carry = 0;
            currentNode.next = new ListNode(sum);
            currentNode = currentNode.next;
        }

        if (pointer1) {
            pointer1 = pointer1.next
        }
        
        if (pointer2) {
            pointer2 = pointer2.next;
        }
    }

    if (carry === 1) {
        currentNode.next = new ListNode(carry);
    }

    return resultListNode.next;
};

// const l1 = new ListNode(val=2,next=4);
// const l1currentNode = l1;
// currentNode.next = new ListNode(val=3, next=null);

// const l2 = new ListNode(val=5,next=6);
// const currentNode = l2;
// currentNode.next = new ListNode(val=4, next=null);

// console.log(l2)

// console.log(addTwoNumbers(, ))