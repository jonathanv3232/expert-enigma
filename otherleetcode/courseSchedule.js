function dfs(graph, node, color) {
    if(color[node] === 1) return false;
    if(color[node] === 2) return true;
    color[node] = 1;
    let list = graph[node] || [];
    console.log(list);
    for(let i = 0; i < list.length; i++) {
        if(!dfs(graph, list[i], color)) return false;
    }
    color[node] = 2;
    return true;
}

var canFinish = function(numCourses, preReqs) {
    if(preReqs.length === 0) return true;
    let graph = {};
    //build the graph    
    for(let i = 0; i < preReqs.length; i++) {
        if(graph[preReqs[i][1]]) graph[preReqs[i][1]].push(preReqs[i][0]);   
        else graph[preReqs[i][1]] = [preReqs[i][0]];
    }
    console.log(graph);
    let color = new Array(numCourses).fill(0);
    //run a dfs on all the nodes if you havent visited them
    for(let i = 0; i < preReqs.length; i++) {
        if(!dfs(graph, preReqs[i][1], color)) {
            return false;
        }
    } 
   return true; 
};
let result = canFinish(2, [[1,0]]);
console.log(result);
