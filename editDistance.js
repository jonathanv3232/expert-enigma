// [1,3,2,2,1];
// [1,2,2,2,2];

// 2
// longest increasing subsequence
//[1,2,3]
//1,2,3
//1,2
//2,3
//1
//2
//3

function allSubArrays(arr) {
    ret = [];
    for (var i = 0; i < arr.length; i++) {
        var sub = [arr[i]];
        for (var j = i+1; j < arr.length; j++) {
            sub.push(arr[j]);
            ret.push(arr.slice()); // O(n)
        }
    }
}
function longestSeq(arr) {
    if(arr.length === 0) return 0;
    let cache = {};
    function seq(index, lastIndex) {
        if(index === arr.length) return 0;
        if(lastIndex != -Infinity && typeof cache[lastIndex] !== "undefined") return cache[lastIndex]
        
        let a = 0, b = 0;
       	if(lastIndex === -Infinity || arr[index] > arr[lastIndex]) {
            a = seq(index + 1, index) + 1;
        }
        
        b = seq(index + 1, lastIndex);
        
        return cache[lastIndex] = Math.max(a, b);
    }
    return seq(0, -Infinity);
}

let arr = [-5, -4, -3, 1, 0, -2, -3, 10, -1, 0, -5]; //6
console.log(longestSeq(arr));


// edit distance
// goal: solve within 20 minutes

// your edits allowed are:
// insert a char in str1,
// delete a char in str1
// change a char in str1

// if i == 0 return j
// if j == 0 return i
// k = s1[i] == s2[j] ? 0 : 1;
// a = returnDist(i - 1, j - 1) + k
// b = returnDist(i-1, j) + 1;
// c = returnDist(i, j-1) + 1;
// return min(a, b, c);

// edit distance from cant -> want is 1
// edit distance from dog -> first is 5 (change 3 chars, insert 2)
function editDistance(str1, str2) {
    function returnDist(str1Idx, str2Idx) {
        //if both strings are empty return 0
        if(str1Idx === str1.length && str2Idx === str2.length) return 0;
        //if either string is empty and the other is not return the length of that str
        if(str1Idx === str1.length) return str2.length - (str2Idx);
        if(str2Idx === str2.length) return str1.length - (str1Idx);
        let min = Infinity;
       	let a = Infinity;
       	let b = Infinity;
       	let c = Infinity;
       	let d = Infinity;
        //if the char in str1 and str2 is the same then move both indexes
        if(str1[str1Idx] === str2[str2Idx]) {
            a = returnDist(str1Idx + 1, str2Idx + 1);
        } else {
            //DELETE one from str1
            if(str1.length - str1Idx > str2.length - str2Idx) {
            	b = returnDist(str1Idx + 1, str2Idx) + 1;    
            }
            //CHANGE it to str2 and advance one
            c = returnDist(str1Idx + 1, str2Idx + 1) + 1;
            //if str1 < str2 then I can insert
            //INSERT
            if(str1.length - str1Idx < str2.length - str2Idx) {
                d = returnDist(str1Idx, str2Idx + 1) + 1;
            }
        }
        return Math.min(a, b, c, d);
    }
    return returnDist(0, 0); 
} 
console.log(editDistance('dog', 'first'));


//longest increasing subsequence
// [1, 2,3 ]
// what is Math.max(undefined, 10);
function longestIncreasingSeq(arr) {
    let cache = {};
	function _helper(idx = 0, lastIdx = null) {
        if(arr.length === idx) return 0;
       	if(typeof cache[lastIdx] !== 'undefined') return cache[lastIdx]; 
       	//take the value if it is greater than the lastValue 
        //we want the max from all of these
        let a = 0, b = 0;
        if(lastIdx === null || arr[idx] >= arr[lastIdx]) {
            a = _helper(idx + 1, idx) + 1; 
        }
        b = _helper(idx + 1, lastIdx);
        return cache[lastIdx] = Math.max(a, b);
    }		    
    return _helper(0, null);
}
// console.log(longestIncreasingSeq([-3,-3, -2,-2, 0, -5, -7, 100, 12]));

function editDistance(str1, str2) {
    let cache = {};
	function _helper(idx1 = str1.length - 1, idx2 = str2.length - 1) {
    	if(idx1 === -1 && idx2 === -1) return 0;   // there's still one char in string
        if(idx1 === -1) return idx2 + 1;
        if(idx2 === -1) return idx1 + 1;
        
        let ck = idx1 + ',' + idx2;
        if(typeof cache[ck] !== 'undefined') return cache[ck];
       
        var k = str1[idx1] === str2[idx2] ? 0 : 1;
        //change
        var a = _helper(idx1 - 1, idx2 - 1) + k;
        //delete
        var b = _helper(idx1 - 1, idx2) + 1;
        //insert
        var c = _helper(idx1, idx2 - 1) + 1;
        
       	return cache[ck] = Math.min(a, b, c); 
        
    }    
    return _helper();
}
console.log(editDistance('dog', 'first'));


// longest common subsequence
// given s1, s2 - calculate max amount of chars in common

// a = 'abcdef'
// b = 'degf'
// LCS = 3


function lcs(str1, str2) {
    let cache = {};
    function longestCS(idx1, idx2) {
    	if(idx1 === str1.length || idx2 === str2.length) return 0;
        let ck = idx1 + ',' + idx2;
        if(typeof cache[ck] !== "undefined") return cache[ck];
        let a = 0;
        let b = 0;
        let c = 0;
        //if they match count it as one
        if(str1[idx1] === str2[idx2]) {
        	a = longestCS(idx1 + 1, idx2 + 1) + 1;   
        }
        //if they don't keep checking
        b = longestCS(idx1 + 1, idx2);
        c = longestCS(idx1, idx2 + 1);
        return cache[ck] = Math.max(a, b, c);
    }
    return longestCS(0, 0);
}

// let a = 'abcdefalota';
// let b = 'degfall';
// console.log(lcs(a, b));
