function findNode(root, node) {
    //dfs
    if(!node) return;
    if(root.val === node) {
             
    }
    findNode(node.left, node);
    findNode(node.right, node);
                        
}

function lowestCommonAncestor(root, a, b) {
    findNode(a);        
    let node = findNode(b);
    return node;
}
