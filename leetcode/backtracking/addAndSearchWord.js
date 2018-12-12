function TrieNode(val) {
	this.val = val;
	this.children = {};
	this.isWord = false;
}

var WordDictionary = function() {
	this.root = new TrieNode(null);
}

WordDictionary.prototype.addWord = function(Word) {
	let currNode = this.root;	
	for(let i = 0; i < Word.length; i++) {
		if(currNode.children[Word[i]]) {
			currNode = currNode.children[Word[i]] 
		} else {
			currNode.children[Word[i]] = new TrieNode(Word[i]);
			currNode = currNode.children[Word[i]]; 
		}
	}
	currNode.isWord = true;
}

WordDictionary.prototype.search = function(word) {
	function _helper(word, node) {
		if(word.length === 0 && node.isWord === true) return true;
		for(let i = 0; i < word.length; i++) {
			if(word[i] === ".") {
				for(let n in node.children) {
					if(_helper(word.substring(i + 1), node.children[n])) return true;
				}
				return false;
			}
			if(!node.children[word[i]]) {
				return false;
			}
			else node = node.children[word[i]];
		}
		return node.isWord === true;
	}
	return _helper(word, this.root);
}

let wd = new WordDictionary();

wd.addWord('at');
//wd.addWord('ball');
//wd.addWord('dad');
//wd.addWord('mad');
//console.log(wd.search('pad'));
//console.log(wd.search('bad'));
//console.log(wd.search('.ad'));
//console.log(wd.search('b..'));
//console.log(wd.search('....'));
console.log(wd.search('..'));

