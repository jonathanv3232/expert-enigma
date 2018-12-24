let s = "ADOBECODEBANC";
let t = "ABC";
function aCharWeLookFor(char, t) {
    if(t.includes(char)) return true;
    return false;
}
function pointersHaveLetters(left, right, charsInStr, t) {
    let contains = 0;
    //t contains all the letters that we want
    for(let i = 0; i < t.length; i++) {
        //indices is an array with indices of the letters we want
        let indices = charsInStr.get(t[i]); 
        for(let j = 0; j < indices.length; j++) {
            let index = indices[j];
           if(left <= index && right >= index) {
               contains++;
               break;
           } else {
               continue;
           }
        }
    }
    return contains >= t.length;
}
function minWindow(s, t) {
    let charsInStr = new Map();
    //creates a map of the characters and their indices
    for(let i = 0; i < s.length; i++) {
        if(charsInStr.has(s[i])) {
            let toUpdate = charsInStr.get(s[i]);
            toUpdate.push(i);
            charsInStr.set(s[i], toUpdate);
        } else {
            charsInStr.set(s[i], [i]);
        }
    }

    console.log(pointersHaveLetters(0, s.length - 1, charsInStr, t));
    for(let i = 0; i < t.length; i++) {
        if(!charsInStr.has(t[i])) return "";
    }

    let minLeft = 0;
    let minRight = s.length - 1;
    let left = 0;
    let right = s.length - 1;
    while (left + t.length <= right) {
        while(!aCharWeLookFor(s[left], t)) {
           left++;
        }
        while(!aCharWeLookFor(s[right], t)) {
           right--;
        }

        if(pointersHaveLetters(left + 1, right, charsInStr, t)) {
            left++;
        }
        if(pointersHaveLetters(left, right - 1, charsInStr, t)) {
            right--;
        }

        if(pointersHaveLetters(left, right, charsInStr, t)) {
            if(minLeft == left && minRight == right) {
                break;
            }
            minLeft = left;
            minRight = right;
        } else {
            break;
        }
    }
    return s.substring(minLeft, minRight + 1); 
}
console.log(minWindow(s, t));
