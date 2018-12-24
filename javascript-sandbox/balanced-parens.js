var isValid = function(s) {

    function parenMatches(paren1, paren2) {
        if(paren1 === '{' && paren2 === '}') return true;
        if(paren1 === '(' && paren2 === ')') return true;
        if(paren1 === '[' && paren2 === ']') return true;
        return false;
    }

    function stack(paren) {
        if(!stack.parenStack) {
            stack.parenStack = [];
        }
        if(paren === "{" || paren === "(" || paren === "[") {
            stack.parenStack.push(paren);
        } else {
            if(!parenMatches(stack.parenStack.pop(), paren) ){
              return false;
            }
        }
    }


//     if(s.length < 2) {
//         return false;
//     }

    for(let i = 0; i < s.length; i++) {
      if(!stack(s[i])) return false;
    }

    // if(stack.parenStack.length < 0) return false;
    return true;
};
console.log(isValid('[}'));
