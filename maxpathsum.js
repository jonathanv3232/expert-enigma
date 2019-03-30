/*
Input: [-10,9,20,null,null,15,7]

       -10
       / \
      9  20
        /  \
       15   7

    Output: 42
*/
//When you visit a node, calc Max if you go left + root.val, calc MAX if you go right sum + root.val, or right + left sum + root.val, or just this root.val
//
//
//
//
let calcMaxMax = -Infinity;
function calcMax(root) {
    // to calc the max just go left or right or stop here
    if(!root) return 0;
    return Math.max(calcMax(root.left), calcMax(root.right), 0) + root.val;
}

function Node(val) {
    this.val = val;
    this.right = this.left = null;
}

let root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

function maxPathSum(root, tookLeftAndRight) {
    if(!root) return 0;
    //check the max
    let max = -Infinity;
    //by going left and taking this
    let leftMax = Math.max(max, maxPathSum(root.left) + root.val);
    //by going to the right and taking this
    let rightMax = Math.max(max, maxPathSum(root.right) + root.val);

    if(!tookLeftAndRight) {
        max = Math.max(max, leftMax + rightMax);
        tookLeftAndRight = true;
    }

    max = Math.max(leftMax, rightMax, maxPathSum(root.left, tookLeftAndRight),
                   maxPathSum(root.right, tookLeftAndRight));
        
    return max;
}

let ans = maxPathSum(root, false);
console.log(ans);
