/*
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

Output: ["eat","oath"]
*/

function TrieNode(char) {
  this.val = char;
  this.isWord = false;
  this.children = {};
  this.hasSeen = false;
}

TrieNode.prototype.insert = function(word, root) {
  let i = 0; 
  while(i < word.length) {
    
    if(!root.children[word[i]]){
      root.children[word[i]] = new TrieNode(root.children[word[i]]);
    }
    
    root = root.children[word[i]];
    i++;
  }
  //set as a word
  root.isWord = true;
}

function buildTrie(arrWords) {
  let trie = new TrieNode(null);
  for(let i = 0; i < arrWords.length; i++) {
    trie.insert(arrWords[i], trie);
  }
  return trie;
}

function findWords(words, matrix) {
  if(matrix.length == 0 || matrix[0].length == 0)
    return [];
  
  let ans = [];
  let trie = buildTrie(words);
      
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      dfs(matrix, ans, i, j, trie, "");
    }
  }
  
  return ans;
}

function dfs(matrix, arr, i, j, trie, word){
  if(!isValid(matrix.length, matrix[0].length, i, j) || !trie.children[matrix[i][j]])
    return;
  
  let char = matrix[i][j];
  let node = trie.children[char];
  word += char;
  
  if(node.isWord && !node.hasSeen) {
    arr.push(word);
	node.hasSeen = true;
  }
    
  matrix[i][j] = null;
  
  dfs(matrix, arr, i + 1, j, node, word);
  dfs(matrix, arr, i - 1, j, node, word);
  dfs(matrix, arr, i, j + 1, node, word);
  dfs(matrix, arr, i, j -1, node, word);
  
  matrix[i][j] = char;
}

function isValid(n, m, i, j){
  return i >= 0 && j >= 0 && i < n && j < m;
}

let words = [['o', 'a', 't', 'h'], ['p', 'e', 'a'], ['e', 'a', 't'], ['r', 'a', 'i', 'n']];
//let words = ["oath","pea","eat","rain"];
let board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

//this test case breaks it :)
//we can throw the word into a set and then turn the set into a list
/*
let words = ['a'];
let board = [
	['a', 'a', 'a', 'a'],
	['a', 'a', 'a', 'a'],
	['a', 'a', 'a', 'a'],
	['a', 'a', 'a', 'a']
];
*/

let arr = findWords(words, board);
console.log(arr);
