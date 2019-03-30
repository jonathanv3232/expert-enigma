/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/* FIRST ATTEMPT 
//didn't consider the case where 
//s: aaa
//p: a*a

var isMatch = function(s, p) {
    let i = 0;
    let j = 0;
    while(i < s.length && j < p.length) {
        console.log('comparing', s[i], 'and', p[j]);
        if(p[j] === "*") {
            //if we hit an * then grab the prev letter and and keep moving the s pointer until it no longer matches. 
            let letterToMatch = p[j - 1];
            while((s[i] === letterToMatch || letterToMatch === ".") && i < s.length) {
                i++;
            }
            j++;
        } else if(p[j] === "." || s[i] === p[j]) {
            //chars match check the other ones
            i++;
            j++;
        } else if(p[j + 1] === "*") {
            //chars mismatched but there is an asteriks after
            //move the j one
            j++;
        } else {
            return false;
        }
    }
    return j === p.length && i === s.length;
};
*/

function isMatch(s, p) {

    function _helper(i = 0, j = 0) {
        console.log(s.substring(i), p.substring(j));
        if(i === s.length && j === p.length) return true;
        if(i > s.length || j > p.length) return false;

        if(p[j] === '*') {
            if(p[j - 1] === "." || p[j - 1] === s[i]) {
                   //keep matching      don't match any longer
                if(_helper(i + 1, j) || _helper(i, j + 1)) return true;
            } 
        } else if(p[j] === '.' || s[i] === p[j]) {
            //if you match or p is a dot continue
            if(_helper(i + 1, j + 1, null)) return true;
        } else if(p[j + 1] === "*") {
            //there is a mismatch 
            //the only thing that may fix this is a "*" that doesn't match anything
            if(_helper(i, j + 2, null)) return true;
        }
        return false;
    }

    return _helper();
}
//True
//let s = "aab";
//let p = "c*a*b";

//False
//let s = "mississippi";
//let p = "mis*is*p*.";

//True
let s = "ab";
let p = ".*";

//let s = "aa";
//let p = "a*";

//let s = "aaa";
//let p = "a*a";

console.log(isMatch(s, p));
