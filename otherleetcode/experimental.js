var minWindow = function(s, t) {
    function updateMin(left, right) {
        if(minRight - minLeft > right - left) {
            minRight = right;
            minLeft = left;
        }
    }
    if(s.length === 0 || t.length === 0) return "";
    //these are the letters that we care about
    let letterCountInT = new Map();
    for(let i = 0; i < t.length; i++) {
        letterCountInT.set(t[i], (letterCountInT.get(t[i]) || 0) + 1);
    }
    
    let left = 0; 
    let right = -1;
    let windowCount = new Map();
    let allInWindow = false; 
    let metLetterCount = 0;
    let minLeft = 0;
    let minRight = Infinity; 
    while(right < s.length) {
        //at every point we only move one pointer either left or right 
        if(allInWindow) {
            //update left
           
            //update mins
            updateMin(left, right);
            //remove the letter if needed 
            if(letterCountInT.has(s[left])) {
                windowCount.set(s[left], windowCount.get(s[left]) - 1)
                if(letterCountInT.get(s[left]) > windowCount.get(s[left])) {
                    metLetterCount--;
                    allInWindow = false;
                }
            }
            //move the left pointer 
            left++;
        } else {
            //update right
            right++;
            if(letterCountInT.has(s[right])) {
                windowCount.set(s[right], (windowCount.get(s[right]) || 0) + 1);
                if(letterCountInT.get(s[right]) === windowCount.get(s[right])) {
                   metLetterCount++; 
                }
                if(metLetterCount === letterCountInT.size) {
                    allInWindow = true;
                }
            } 
        }
        console.log(s.substring(left, right + 1));
    }
    return s.substring(minLeft, minRight + 1);
};
let result = minWindow("adobecodebanc", "abc");
console.log(result);
