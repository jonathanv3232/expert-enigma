//How do I get a cleaner return
//if I want to return the min or max from a function is this the cleanest way to do it?
//recursion and returning between two functions
/*
var minimumDeleteSum = function(s1, s2) {
	let cache = {};
    function shortenString(s1, s2, sum) {
		let min = Infinity;
		let ck = s1;
        for(let i = 0; i < s1.length; i++) {
            let newStr = s1.substring(0, i) + s1.substring(i+1);        
            let addThis = s1[i].charCodeAt();     
            let res = _helper(newStr, s2, sum + addThis);
			if(res < min) min = res;
        }
		return cache[ck] = min;
    }
    
    function _helper(s1, s2, sum) {
        if(s1 === s2) {
			return sum;
		}
	
		let x = y = Infinity;
        if(s1.length > s2.length) {
            x = shortenString(s1, s2, sum);
        } else {
            y = shortenString(s2, s1, sum);    
        }    
		return Math.min(x, y);
    }

    return _helper(s1, s2, 0);
};
*/

function lettersSum(str, i) {
	let sum = 0; 
	for(let char = 0; char <= i; char++) {
		sum += str.charCodeAt(char);
	}
	console.log(sum);
	return sum;
}

function minimumDeleteSum(s1, s2) {
	let cache = {};
	function _helper(i, j) {
		if(i === -1 && j === -1) return 0; 
		if(i === -1) return lettersSum(s2, j);
		if(j === -1) return lettersSum(s1, i);
		let ck = i + ',' + j;
		if(typeof cache[ck] != 'undefined') return cache[ck];
		if(s1[i] === s2[j]) {
			return _helper(i - 1, j - 1);
		} else if(s1[i] != s2[j]) {
			return cache[ck] = Math.min(_helper(i, j - 1) + s2.charCodeAt(j), _helper(i - 1, j) + s1.charCodeAt(i));
		}
	}
	return _helper(s1.length - 1, s2.length - 1);
}

let s1 = "ccaccjp";
let s2 = "fwosarcwge";
//let s1 = 'delete';
//let s2 = 'leet';
let ans = minimumDeleteSum(s1,s2); 
console.log(ans);
