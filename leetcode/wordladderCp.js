//Input:
//beginWord = "hit",
//endWord = "cog",
//wordList = ["hot","dot","dog","lot","log","cog"]
//
//Output: 5
//
//Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
//return its length 5.

function oneEditAway(word1, word2) {
	let diff = 0;
	for(let i = 0; i < word1.length; i++) {
		if(diff > 1) return false;
		if(word1[i] != word2[i]) diff++;			
	}
	return diff === 1;
} 

function bfs(graph, startingNode, target, startingDistance) {
	let q = [startingNode];
	let visited = new Set(); 
	let distance = {};
	distance[startingNode] = startingDistance;
	visited.add(startingNode);
	console.log('starting distance at ' + startingDistance);
	while(q.length != 0) {
		let node = q.shift();
		console.log('saw word ' + node + ' at distance ' + distance[node]);
		if(node === target) return distance[node];
		//neighbor list
		let list = graph[node];
		for(let i = 0; i < list.length; i++) {
			if(visited.has(list[i])) continue;
			visited.add(list[i]);	
			distance[list[i]] = distance[node] + 1;
			q.push(list[i]);
		} 
		console.log('queue now contains ' + q);
	}
	return 0;
}

function ladderLength(beginWord, endWord, arr) {
	let endWordExists = false;
	let startingNodes = [];
	//build the graph by making the connections
	let connections = {};
	for(let i = 0; i < arr.length; i++) {
		if(oneEditAway(arr[i], beginWord)) startingNodes.push(arr[i]);
		if(arr[i] === endWord) endWordExists = true;
		for(let j = 0; j < arr.length; j++) {
			if(i === j) continue;
			if(oneEditAway(arr[i], arr[j])) {
				if(connections[arr[i]]) {
					connections[arr[i]].push(arr[j]);
				} else {
					connections[arr[i]] = [arr[j]];
				}
			}	
		}
	}
	console.log(connections);
	if(!endWordExists) return 0;
	let min = Infinity;
    if(startingNodes.length === 0) return 0;
    if(connections[beginWord]) {
        return bfs(connections, beginWord, endWord, 1);
    } else {
        for(let i = 0; i < startingNodes.length; i++) {
            let res = bfs(connections, startingNodes[i], endWord, 2); 
            if(res < min) min = res;
        }
        return min; 
    }
}

//"hit"
//"cog"
//["hot","cog","dot","dog","hit","lot","log"]
let x = ladderLength('hit', 'cog', ["hot","cog","dot","dog","hit","lot","log"]);
console.log(x);


