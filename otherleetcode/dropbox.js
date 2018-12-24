let graph = [[1,0,1,0,0],
            [0,1,0,1,0],
            [1,0,1,0,0],
            [0,1,0,1,1],
            [0,0,0,1,1]];

function dfs(graph, node, currColor, colors, numberOfNodes) {
    if(colors[node]) return; 
    colors[node] = currColor; 
    numberOfNodes[0]++;
    let list = graph[node];
    for(let i = 0; i < list.length; i++) {
        dfs(graph, list[i], currColor, colors, numberOfNodes);
    }
    return numberOfNodes[0];
}

function biggestNetwork(graph, nodes) {
    let adjList = {}; 
    
    let biggestNetworkSize = 0;
    let entry = null; 

    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[i].length; j++) {
            if(graph[i][j] === 1) {
                if(adjList[i]) {
                    adjList[i].push(j);
                } else {
                    adjList[i] =  [j];
                }
            }
        }
    }

    let componentSize = []; 
    let colors = [];
    let currColor = 1;

    for(let key in Object.keys(adjList)) {
        let result = dfs(adjList, key, currColor, colors, [0]); 
        if(result > 0) {
            componentSize[currColor] = result;
            currColor++;
        }
    }

    for(let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let nodeColor = colors[node];
        let nodeSize = componentSize[nodeColor];

        if(nodeSize > biggestNetworkSize) {
            biggestNetworkSize = nodeSize;
            entry = node;
        }
    }

    return [entry, biggestNetworkSize];
}

console.log(biggestNetwork(graph, [0, 4]));
