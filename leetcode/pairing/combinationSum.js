var combinationSum = function(candidates, target) {
    let combinations = [];
    backtrack(candidates, target, 0, combinations, []);
    return combinations;
};

var backtrack = function(cands, target, start, combs, sub) {
    if (target < 0) {
        return ;
    }
    if (target === 0) {
		console.log(sub, target);
        combs.push(sub.slice());
    } else {
        for (let i = start; i < cands.length; i++) {
			console.log(sub, target, 'about to use a ' + cands[i]);
            sub.push(cands[i]);
			console.log(sub);
            backtrack(cands, target - cands[i], i, combs, sub);
			console.log(sub, 'finished will no longer use ' + cands[i]);
            sub.pop();
			console.log(sub, target);
        }
    }
}


let comb = combinationSum([1,2], 3);
console.log(comb);
