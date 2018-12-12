function populateGraphWith(words, graph, word, target, seen) {
	for(let i = 0; i < word.length; i++) {
		for(let j = 97; j <= 122; j++) {
			let letter = String.fromCharCode(j);
			//word generated
			let newWord = word.substring(0, i) + letter + word.substring(i + 1);

			if(words.has(newWord) && newWord != word) {
				if(graph[word] && (!seen.has(newWord) || newWord === target)) {
					seen.add(newWord);
					graph[word].push(newWord);
				} else {
					if(!seen.has(newWord) || newWord === target) {
						seen.add(newWord);
						graph[word] = [newWord];
					}
				}
			}
			
		}
	}
}

var findLadders = function(beginWord, endWord, wordList) {
	let words = new Set(); 
	for(let i = 0; i < wordList.length; i++) {
		words.add(wordList[i]);
	}

	let graph = {};
	let seen = new Set();
	seen.add(beginWord);

	let graphMaking = new Set();
	let minHops = Infinity;
	function makeGraph(word) {
		let q = [beginWord];	
		let hops = 1;

		while(q.length > 0) {
			let word = q.shift();
			if(word === endWord) {
				if(hops < minHops) minHops = hops;
				return;
			}
			populateGraphWith(words, graph, word, endWord, graphMaking);	
			let neiList = graph[word] || [];
			if(neiList.length > 0) hops++;
			for(let i = 0; i < neiList.length; i++) {
				if(seen.has(neiList[i])) continue;
				seen.add(neiList[i]);	
				q.push(neiList[i]);
			}
		}
	}

	makeGraph(beginWord);
	console.log(minHops);
	console.log(graph);
	
	return bfsAllPaths(graph, beginWord, endWord, minHops);
}

function bfsAllPaths(graph, beginWord, target, maxHops) {
	//set for bfs no repeats	
	let seen = new Set();
	seen.add(beginWord);

	let allPaths = [];
	let path = [];
	//we take in the starting word and the path taken so far
	function bfsOnePath(word, hops) {
		//start with the word in the queue
		let q = [word];
		while(q.length > 0) {
			let currWord = q.shift();		
			//process node
			path.push(currWord);

			if(currWord === target) {
				allPaths.push(path.slice());
				return;
			}
			if(hops >= maxHops) return;

			let nei = graph[currWord] || [];

			for(let i = 0; i < nei.length; i++) {
				if(seen.has(nei[i])) continue;
				seen.add(nei[i]);
				bfsOnePath(nei[i], hops + 1);
				seen.delete(nei[i]);
				path.pop();
			}
		}
	}

	bfsOnePath(beginWord, 0);
	return allPaths; 
}


//let ans = findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
//let arr = ["hot","dot","dog","lot","log"];
//let arr = ['hot', 'dot', 'dog'];
let ans = findLadders('a', 'c', ['a', 'b', 'c']);
//let ans = findLadders('hot', 'dog', arr);
console.log(ans);
