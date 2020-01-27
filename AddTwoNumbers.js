
const traverseList = (listNode, callback) => {
  let currentNode = listNode;

  while(currentNode != null) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 1. Traverse nodes building a stack so that the numbers
  // are in the correct order.
  let stack1 = [];
  traverseList(l1, (node) => {
    stack1 = [node.val].concat(stack1);
  });

  let stack2 = [];
  traverseList(l2, (node) => {
    stack2 = [node.val].concat(stack2);
  });

  // We have the stacks in the order needed to add them (backwards of what we need for the res)
  const num1 = BigInt(stack1.join(""));
  const num2 = BigInt(stack2.join(""));

  const total = num1 + num2;

  console.info({ num1, num2 });
  
  // We have our total now we must reverse these numbers and
  // create a linked list.
  const totalArray = Array.from(total.toString());

  let list = null;

  for(let i = totalArray.length - 1; i >= 0; i--) {
    if(list == null) {
      list = {val: totalArray[i], next: null};
      continue;
    }

    insertNode({val: totalArray[i], next: null}, list);
  }
  return list;
};

// HELPERS
const insertNode = (listItem, rootItem) => {
  let current = rootItem;
  let previous;

  while(current != null) {
    previous = current;
    current = current.next
  }

  previous.next = listItem;
};

const generateLinkedList = (arr) => {
  let rootItem = null;

  for(num of arr) {
    if (rootItem == null) {
      rootItem = {val: num, next: null}
      continue
    }

    insertNode({val: num, next: null}, rootItem);
  }

  return rootItem;
};

const generateTest = (arr1, arr2) => {
  const listA = generateLinkedList(arr1);
  const listB = generateLinkedList(arr2);

  const res = addTwoNumbers(listA, listB);

  console.log(res);
};

// TESTS
// generateTest([1, 8], [0]);
// generateTest([0, 8], [2, 1]);
// generateTest([2, 4, 3], [1]);

generateTest([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]);