function firstValidNode(graph) {
    for(let i = 0; i < graph.length; i++) {
        if(graph[i].length > 0) return i;
    }
}

let graph = [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]; 

function isBipartite(graph) {
    if(graph.length === 0) return true;
    let firstNode = firstValidNode(graph); 
    let q = [firstNode];
    let visited = []; 
    let colors = [];
    colors[firstNode] = 0;
    visited[firstNode] = true;
    let color = true;
    while(q.length > 0) {
        let qSize = q.length;
        let i = 0;
        while(i < qSize) {
            let node = q.shift();
            let nodeNeighbors = graph[node]; 
            for(let i = 0; i < nodeNeighbors.length; i++) {
                let currNeighbor = nodeNeighbors[i];
                if(visited[currNeighbor]) {
                    if(colors[currNeighbor] === colors[node]) {
                        console.log(node, currNeighbor);
                        return false;
                    }
                    continue;
                }
                visited[currNeighbor] = true;
                if(color) colors[currNeighbor] = 1;
                else colors[currNeighbor] = 0;
                q.push(currNeighbor);
            }
            i++;
        }
        color = !color; 
    }
    return true;
}
let bool = isBipartite(graph);
console.log('the answer is ' + bool);
