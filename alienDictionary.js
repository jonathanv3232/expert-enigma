let x = {
     'b': ['a', 'd'],
     'a': ['c'],
     'd': ['a'],
 }

function findThePath(adjList, path) {
    //O(V + E)
    if(Object.keys(adjList).length === 1) {
        let onlyNode = null;
        for(let node in adjList) {
            onlyNode = node;    
        }
        path.push(onlyNode);
        //because there is only one there is no incoming edge, any of the elements in this list yields a topological sort
        path.push(adjList[onlyNode][0]);
        return path;
    }

    let startingNode = null;
    let allNodesWithIncomingEdges = [];
    //build an array with with incoming edges
    for(let node in adjList) {
        //O(V + E)
        allNodesWithIncomingEdges = allNodesWithIncomingEdges.concat(adjList[node]);  
    }

    for(let node in adjList) {
        //we want to find some node with no incoming edge
        //O(V + E)
        if(allNodesWithIncomingEdges.indexOf(node) === -1) {
          startingNode = node;
        }
    }
    
    //if there is either a cycle or there is no elems in the list this will be caught
    if(startingNode === null) {
        throw 'Input not valid!';
    }

    path.push(startingNode);
    delete adjList[startingNode];

    //repeat O(E) times so total runtime is O((V + E) * E) 
    return findThePath(adjList, path);
}

let ans = findThePath(x, []);

console.log(ans);

