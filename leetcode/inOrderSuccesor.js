function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

//let root = new TreeNode(2);
//root.left = new TreeNode(1);
//root.right = new TreeNode(3);
let root = new TreeNode(5);
let three = new TreeNode(3);
let six = new TreeNode(6);
root.left = three;
root.right = six;
let two = new TreeNode(2);
let four = new TreeNode(4);
three.left = two;
three.right = four;
two.left = new TreeNode(1);

function processNode(node, target, nextIsIt) {
    if(nextIsIt[0]) return node.val;
    if(node.val === target) {
        nextIsIt[0] = true;
    }
}

function inOrderT(node, target, nextIsIt) {
	if(node === null) return;
        let res = inOrderT(node.left, target, nextIsIt);
	if(res) return res;
        let result = processNode(node, target, nextIsIt);
        if(result != undefined) return result;
        let res2 = inOrderT(node.right, target, nextIsIt);        
	if(res2) return res2;
}

var inorderSuccessor = function(root, p, nextIsIt) {
    let successor = inOrderT(root, p, nextIsIt);
	if(successor)
		return successor;
	else return null;
};

let x = inorderSuccessor(root, 2, [false]);
console.log(x);
