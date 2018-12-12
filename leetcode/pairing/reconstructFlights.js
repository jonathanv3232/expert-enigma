//if we see an error we are fucked
let visited = new Set();
let order = []

function dfs(graph, node) {
	if(visited.has(node)) return;

	//process
	visited.add(node)
	order.push(node)
	
	let list = graph[node];
	if(list) {
			list.sort();
			for(let i = 0; i < list.length; i++) {
				dfs(graph, list[i]);
			}	
	}
}

function findItenarary(tickets) {
	let graph = {};
	for(let i = 0; i < tickets.length; i++) {
		if(graph[tickets[i][0]]) graph[tickets[i][0]].push(tickets[i][1]);
		else graph[tickets[i][0]] = [tickets[i][1]];
    }
	console.log(graph);
	dfs(graph, 'JFK');
	return order;
}

//const tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
let tickets =[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItenarary(tickets))
