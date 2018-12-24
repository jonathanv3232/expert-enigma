let s = "acbbaca"
let t = "aba"

function buildFilteredStr(s, map) {
    let ret = [];
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            ret.push([s[i], i]);
        }
    }
    return ret;
}

function minSubstring(s,t) {
    if(s.length === 0 || t.length === 0) return "";

    let letterCountInT = new Map();

    for(let i = 0; i < t.length; i++){
        letterCountInT.set(t[i], (letterCountInT.get(t[i]) || 0) + 1);
    }


    let filteredStr = buildFilteredStr(s, letterCountInT);


    if(filteredStr.length < t.length) return "";

    let windowCount = new Map();

    let minLeft = -Infinity;
    let minRight = Infinity;

    let left = 0;
    let right = -1;

    let charsInOurWindow = 0;
    let allCharsInOurWindow = false;

    while(right < filteredStr.length) {
        //move the right pointer until we have all of our desired characters in our window
        while(!allCharsInOurWindow) {
            right++;
            if(right === filteredStr.length) break;
            let rightChar = filteredStr[right][0];
            windowCount.set(rightChar, (windowCount.get(rightChar) || 0) + 1); 
            if(windowCount.size === letterCountInT.size && windowCount.get(rightChar) === letterCountInT.get(rightChar)) {
                charsInOurWindow++;
            }
            if(charsInOurWindow === letterCountInT.size) allCharsInOurWindow = true;
        }
        console.log(windowCount, letterCountInT);
        if(right === filteredStr.length) break;
        let rightIndex = filteredStr[right][1];
        let leftIndex = filteredStr[left][1];
        if(minRight - minLeft > rightIndex - leftIndex) {
            minRight = rightIndex;
            minLeft = leftIndex;
        }

        let leftChar = filteredStr[left][0];
        windowCount.set(leftChar, windowCount.get(leftChar) - 1);
        if(windowCount.size != letterCountInT.size || windowCount.get(leftChar) < letterCountInT.get(leftChar)){
            allCharsInOurWindow = false;
            charsInOurWindow--;
        }
        if(windowCount.get(leftChar) === 0) windowCount.delete(leftChar);
        left++;
    }

    return s.substring(minLeft, minRight + 1);
}
console.log(minSubstring(s, t));
