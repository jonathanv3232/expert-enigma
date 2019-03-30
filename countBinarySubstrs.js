function countBinarySubstrings(s) {
    for(let i = 0; i < s.length; i++) {
        let currIsOne = false;
        let currIsZero = false;
        let numOfZeroes = 0;
        let numOfOnes = 0;
        let alreadyFlipped = false;
        let firstChar = null;
        let substr = "";
        for(let j = 0; j < i; j++) {
            if(substr.length === 1) firstChar = substr[0];
            if(substr.length > 1 && alreadyFlipped && substr[i - 1] != substr[i]) {
                break;
            }
            if(substr[i] 
            if(substr.length > 1 && substr[i - 1] != substr[i]) {
                alreadyFlipped = true;
            }
            substr += s[j];
        }
    }
    //build all substrings
    //as you have the substring start counting the 1s or 0s
    //when you flip then you start counting again
    //if you flip again before having the same number then break
    //as soon as you have the same number of 0s or 1s increase the count and break
}
