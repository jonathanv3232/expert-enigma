// sum to zero (using all numbers in array)
// knapsack & rod cutting
// longest palindrome substring
// max sum from root to any node in tree (easier version of the hard problem)
// given a list of rectangles and a single point, find the closest rectangle to that point


// using all the numbers in an array, can you sum to zero.
// you are allowed to negate a number, so if you have [a, b, c, d]
// you can evalute a + b + c + d or a - b + c -d and so on
// does any combination of pluses and minuses sum to zero
function canSumToZero(arr) {
    let cache = {};
    function _helper(idx, sum) {
        if(idx === arr.length) {
            if(sum === 0) return true;
            return false;
        };
        let ck = idx + ',' + sum;
        if(typeof cache[ck] != "undefined") return cache[ck];
        let bool = _helper(idx + 1, sum + arr[idx]) || _helper(idx + 1, sum - arr[idx]);
        return cache[ck] = bool;
    }
    return _helper(0, 0);
}
//console.log(canSumToZero([1,1,1,3]));

// you are given a rod of size N and you are given a list of prices:
// {1: 3, 2: 4, 3: 5} (for example) - maximize the value of the rods you can cut out of the original one.
// n = 3, then answer is [1, 2] (for rods to cut), value is 3+4 = 7
function rodCutting(N, values) {
    let cache = {};
    function _helper(n) {
       	if(n === 0) return 0; 
        if(n < 0) return -Infinity;
        if(typeof cache[n] != 'undefined') return cache[n];
        let a = 0;
        for(let piece in values) {
        	a = Math.max(a, _helper(n - piece) + values[piece]);
        }	    
        return cache[n] = a;
    }
    return _helper(N);
}

var values = {1: 1, 2: 5, 3: 8, 4: 9, 5: 10, 6: 17, 7: 17, 8: 20};
let logThis = rodCutting(8, values);
//console.log(logThis);

function findPalindrome(str, center1, center2 = null) {
    if(center1 === 0) return 1;
    let i, j;
    //center2 is not defined
    if(center2 === null) {
        i = center1;
        j = center1;
    } else {
        //center2 is defined
        i = center1;
        j = center2;
    }
    while(i > 0 && j < str.length && str[i] === str[j]) {
        i--;
        j++;
    }
    return j - i;
}

function longestPalindromeSubstring(str) {
    if(str.length === 0) return 0;
    let max = 1;
	for(let i = 0; i < 2 * str.length; i++) {
        if(i % 2 === 0) {
            let tmp = findPalindrome(str, i);
            if(tmp > max) max = tmp; 
        } else {
            let tmp = findPalindrome(str, i + 1);
            if(tmp > max) max = tmp; 
        }
    }	    
    return max;
}

console.log(longestPalindromeSubstring('baaaaa'));
console.log(longestPalindromeSubstring('baaaab'));
console.log(longestPalindromeSubstring('abcdef'));

