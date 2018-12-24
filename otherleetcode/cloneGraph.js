function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];
}

/*
       1
      / \
     /   \
    0 --- 2
         / \
         \_/
*/


let node1 = new UndirectedGraphNode(1);
let node0 = new UndirectedGraphNode(0);
let node2 = new UndirectedGraphNode(2);

node1.neighbors.push(node0, node2);
node0.neighbors.push(node1, node2);
node2.neighbors.push(node1, node0, node2);

let graph = node1;

function cloneGraph(graph) {
    if(graph === null) return null;

    let graphClone = new UndirectedGraphNode(graph.label);

    let neighbors = graph.neighbors; 
    let ref = new Map();
    for(let i = 0; i < neighbors.length; i++) {
        dfs(neighbors[i], graphClone);
    }

    function dfs(node, lastNode) {
        if(ref.has(node.label)) {
            let nodeRef = ref.get(node.label);
            lastNode.neighbors.push(nodeRef);
            return;
        }
        //process node
        let nodeClone = new UndirectedGraphNode(node.label);
        ref.set(node.label, nodeClone);
        //add this neighbor to the last node
        lastNode.neighbors.push(nodeClone);
        let list = node.neighbors;
        for(let i = 0; i < list.length; i++) {
            dfs(list[i], nodeClone);
        }
    }
  return graphClone;
}

// TESTING
let visited = new Set();
function dfs(node1, node2, visited) {
    if(visited.has(node1.label)) {
        console.log('----------');
        console.log('already saw node ' + node.label);
        console.log(node.neighbors);
        console.log('this node and the other node are '  + node1 === node2 + ' equal');
        console.log('----------');
        return;
    }
    visited.add(node1.label);
    console.log('----------');
    console.log('saw node ' + node1.label);
    console.log(node1.neighbors);
    console.log('this node and the other node are '  + node1 === node2 + ' equal');
    console.log('----------');
    let list1 = node.neighbors; 
    let list2 = node2.neighbors; 
    for(let i = 0; i < list.length; i++) {
        dfs(list[i], list2[i], visited);
    }
}
let clone = cloneGraph(graph);
console.log('\n\nnext graph =========\n\n');
dfs(clone, visited);
