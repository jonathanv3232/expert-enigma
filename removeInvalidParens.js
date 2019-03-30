var removeInvalidParentheses = function(s) {
    let res = [];
    function isValid(str) {
        let openingCount = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] === "(") openingCount++;
            else if(str[i] === ")" && openingCount > 0) openingCount--; 
            else if(str[i] === ")") return false;
        }
        if(openingCount === 0) return true;
        return false;
    }
    let maxRemoves = Infinity; 
    let solutions = 0;
    function _helper(path, i, removed) {
        if(s.length === i && isValid(path)) {
            if(solutions === 0) {
                maxRemoves = removed;
                solutions++;
            }
            res.push(path);
            return;
        } 
        if(removed > maxRemoves) return;
        if(s.length === i) return; 
       //always take something that is not a paren 
    
        if(s[i] != "(" && s[i] != ")") {
            _helper(path + s[i], i + 1, removed);
        } else {
            //keep the paren backtrack later this should give us the min number of removes
            _helper(path + s[i], i + 1, removed); 
            _helper(path, i + 1, removed + 1);
        }
    }    

    _helper("", 0, 0);
    let deDupped = new Set(res);
    return Array.from(deDupped);
};

let example = "(a)())()";
let ans = removeInvalidParentheses(example);
console.log(ans);
