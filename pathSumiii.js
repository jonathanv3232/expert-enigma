/*
var pathSum = function(root, target) {
    let count = 0;
    function _helper(node, sum) {
        if(!node) {
            console.log('We ended with this sum', sum);
            return;
        }
        console.log(node.val, sum);
        //all possible sums
        if(sum + node.val === target) {
            console.log('FOUND!');
            count++;
        }
        //the left subtree sum + this node
        _helper(node.left, sum + node.val);
        //skip this node and keep checking in subtrees
        _helper(node.left, 0);
        //the right subtree sum + this node
        _helper(node.right, sum + node.val);
        //skip this node and keep checking in subtrees
        _helper(node.right, 0);
        
    }
    _helper(root, 0);
    return count;    
};
*/

var pathSum = function(root, target) {
    //for every node in the tree start the sum at 0 and look for a sum in all the subtrees
    let count = 0;
    //take this entire tree and see if it has the sum
    function sumOrNot(node, sum) {
        if(!node) return;
        sum += node.val;
        if(sum === target) count++;
        sumOrNot(node.left, sum);
        sumOrNot(node.right, sum);
    }

    function dfs(root) {
        if(!root) return;
        sumOrNot(root, 0);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return count;
};

function Node(val) {
    this.val = val;
    this.right = null;
    this.left = null;
}

let node = new Node(1);
node.right = new Node(2);
node.right.right = new Node(3);
node.right.right.right = new Node(4);
node.right.right.right.right = new Node(5);

let ans = pathSum(node, 3);
console.log(ans);
