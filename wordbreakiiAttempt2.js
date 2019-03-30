// https://leetcode.com/problems/word-break-ii/


/*********** WORD BREAK **************

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]


**************************************/




//I should have constant time access to the words
//go through the string and if it is word then I can add it to the path array and process the other substring
//I can also skip this word and continue processing it to see if I can make another word
//base case
	//if I reach the end of my word then return
	//if I reach the end and it is a word add to the array and return


//maybe if i do this top down from the end of the end of the string then I can memoize this word at this index
//and when I revisit and index I know the word(s) I can make and just concat to my current solution

function wordBreakii(str, wordDict) {
	let validWords = new Set(wordDict);    
    let allSentences = [];
    let cache = {}; 
    let charsAdded = 0;
    
    //cache the index and the different possibilities that you can split this block up into words
    
   	//we are going to go straight from the bottom up 
    //if we find a word we add it to the arr
    //if we are in depth 2 or more we are just adding this to all the words
    
    function _helper(i, wordAdded) {
        if(i >= str.length) {
            if(charsAdded === str.length) {
                
            }
        }; 
       	//this only runs if this index is already cached 
        if(cache[i] !== undefined) {
            let ret = [];
            for(let j = 0; j < cache[i].length; j++) {
                ret.push(path.concat(cache[i][j]).reverse().join(" "));
            }
            return ret;
        } 
            
        let maybeWord = str.substring(i, end);

        if(validWords.has(maybeWord)) {
            charsAdded += maybeWord.length;
            path.push(maybeWord);   
            _helper(i - 1, i, path);
            path.pop();
            charsAdded -= maybeWord.length;
        }

        _helper(i - 1, end, path);
    }
    _helper(str.length - 1, str.length, []);
        
    return allSentences;
}

let s = "pineapplepenapple";
//let s = "pineapple";
//let list = ["pineapple", "pine", "apple"];
let list = ["apple", "pen", "applepen", "pine", "pineapple"];
let ans = wordBreakii(s, list);
console.log(ans);

