/*
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.lright = null;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

function processNode(currNode, arr) {
  arr.push(currNode);
  
}

function preOrder(currNode, arr) {
  if(!currNode) return;
  processNode(currNode, arr);
  preOrder(currNode.left, arr);
  preOrder(currNode.right, arr);    

}

function flattenTree(root) {
  //preorder
  let order = [];
  preOrder(root, order);
  for(let i = 1; i < order.length; i++) {
    let prevNode = order[i - 1];
    let currNode = order[i];
    prevNode.left = null;
    prevNode.right = currNode;
    currNode.left = null;
  }
  
}

/*
while(curr) {
  console.log(curr.val);
  curr = curr.right;
}
*/

function prePrint(node) {
  if(!node) return;
  console.log(node.val);
  prePrint(node.left);
  prePrint(node.right);
}

function flattenTreeInPlace(root, prevNode) {
  if (!root) {
    return prevNode;
  }
  if(prevNode) {
      prevNode.link = root;
      console.log("LINKING", prevNode.val, "TO", root.val);
  }
  
  console.log(root.val ? root.val : null, prevNode ? prevNode.val : null);
  prevNode =  flattenTreeInPlace(root.left, root);
  if(prevNode) {
    prevNode = flattenTreeInPlace(root.right, prevNode);    
  }
  // return something here
  return prevNode;
}

function setRightRef(root) {
  let curr = root
  while(curr) {
    curr.right = curr.link;
    curr.left = null;
    curr = curr.link;
  }
  return root;
}

function mainFunc(root) {
   flattenTreeInPlace(root, null);
   root = setRightRef(root);
   
  //prePrint(root);
}

mainFunc(root);

