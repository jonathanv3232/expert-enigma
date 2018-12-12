function alienOrder(words) {
    var graph = {};
    words.forEach(w => w.split('').forEach(ch => graph[ch] = new Set()));
    words.reduce((prev, curr) => {
        for (var i = 0; i < Math.min(prev.length, curr.length); i++) {
            if (prev[i] !== curr[i]) {
                graph[prev[i]].add(curr[i]);
                break;
            }
        }
        return curr;
    });
    
    var marked = {}, visited = {};
    var str = '';
    var hasCycle = false;
    
    Object.keys(graph).map(visit);
    return hasCycle ? '' : str;
    
    function visit(n) {
        if (marked[n]) return;
        
        if (visited[n]) {
            hasCycle = true;
            return;
        }
        
        visited[n] = true;
        graph[n].forEach(visit);
        marked[n] = true;
        str = n + str;
    }
}
let words = ["bad", "battery", "beg", "crayon", "cry"];
let res = alienOrder(words);
console.log(res);
