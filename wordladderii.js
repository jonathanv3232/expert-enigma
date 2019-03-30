/* ****** WORD LADDER II **************8

Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

let graph = {
	hit: ["hot"],
    dot: ["dog", "lot"],
    cog: ["dog", "log"], 
    log: ["cog", "dog"],
    hot: ["dot", "lot"],
    dog: ["cog", "log"],
    lot: ["log", "dot", "hot"]
};
Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

************/

function allWordsWithOneChange(word, listOfWords) {
    let ret = [];
	let allWords = new Set(listOfWords);	
    
    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < 26; j++) {
        	let charCode = 97 + j;    
            let letter = String.fromCharCode(charCode);
            let newWord = word.substring(0, i) + letter + word.substring(i + 1, word.length);
            console.log(newWord);
            if(allWords.has(newWord) && newWord !== word) {
                ret.push(newWord);
            }
        }
    }
    return ret;
}
//1) build the graph between words where only one char changes
function buildGraph(listOfWords) {
    let graph = {};
    for(let i = 0; i < listOfWords.length; i++) {
        graph[listOfWords[i]] = allWordsWithOneChange(listOfWords[i], listOfWords);
    }
    return graph;
}
//2) Find the shortest path between the begin word and the end word (BFS)
	//as soon as I hit the end word I am going to begin backtracking to get all paths
	//with this same length

//BFS will return the shortest path length or an empty array if there is no path
function BFS(graph, beginWord, endWord) {
    let queue = [[beginWord, 1]];
    let visited = new Set();
    visited.add(beginWord);
	while(queue.length) {
    	let node = queue.pop();    
        //process it
        //console.log(node);
        if(node[0] === endWord) {
            return node[1];
        }
        
        let list = graph[node[0]] || [];
        
        for(let i = 0; i < list.length; i++) {
        	let nei = list[i];
            if(!visited.has(nei)) {
                queue.push([nei, node[1] + 1]);
                visited.add(nei);
            }
        }
    }
    return [];
}

function calculateAllPaths(graph, maxLenPath, path, paths, start, targetWord, visited) {
    if(path.length === maxLenPath) {
        if(path[maxLenPath - 1] === targetWord) {
            paths.push(path.slice());
        }
    	return;
    }
   	let list = graph[start] || []; 
	for(let i = 0; i < list.length; i++) {
        let word = list[i];
        if(visited.has(word)) continue;
        
        //for every node visit it's node neighbors until you hit the maxLenPath
        path.push(word);
        visited.add(word);
        calculateAllPaths(graph, maxLenPath, path, paths, word, targetWord, visited);
        visited.delete(word);
        path.pop(word);
    }
}

let paths = [];
let beginWord = "hit";
let endWord = "cog";
/*
let graph = {
	hit: ["hot"],
    dot: ["dog", "lot"],
    cog: ["dog", "log"], 
    log: ["cog", "dog"],
    hot: ["dot", "lot"],
    dog: ["cog", "log"],
    lot: ["log", "dot", "hot"]
};
*/

let listOfWords = ["hot","dot","dog","lot","log","cog"];
listOfWords.push(beginWord);
let graph = buildGraph(listOfWords);
console.log(graph);

let pathLen = BFS(graph, beginWord, endWord);
console.log(pathLen);
let dfsVisited = new Set();
calculateAllPaths(graph, pathLen, [beginWord], paths, beginWord, endWord, dfsVisited);
console.log(paths);
            
