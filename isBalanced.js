/*
var isBalanced = function(root) {
    if(!root) return false;
    //we can have a max of two difference depths that differ only by one
    function _helper(root) {
        if(!root) return 0;
        //figure out if two nodes have the same depth
        left = _helper(root.left);
        right = _helper(root.right);
    }
    let x = _helper(root);
    console.log(left, right);
    return x;
};
*/

function maxDepth(root) {
    if(!root) return 0;    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function isBalanced(root) {
    if(!root) return true;
    //find the max height
    isBalanced(root.left);
    let leftDepth = maxDepth(root.left); 
    //find the min height
    let rightDepth = maxDepth(root.right);
    
    if(Math.abs(leftDepth - rightDepth) > 1) return false;
    return isBalanced(root.right);
}

function Node(val) {
    this.val = val;
    this.right = null;
    this.left = null;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(3)
root.right.left = new Node(3);
root.right.right = new Node(3);
root.left.left.left = new Node(4);
root.left.left.right = new Node(4);
root.left.right.left = new Node(4);
root.left.right.right = new Node(4);
root.right.left.left = new Node(4);
root.right.left.right = new Node(4);
//special one
root.left.left.left.left = new Node(5);

let ans = isBalanced(root);
console.log(ans);
