//up to n numbers
//find all combinations of size k that add up to a target #

/*
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
*/


// var solution is an output param
// target and i are state params. these change the computed value if they change
// candidates is an input param
// input params, state params, output params
function combinations(candidates, target) {
  
  var cache = {};
  // we estimate our cache size to be max(target) * max(i) = candidates.length * target
  // = O(n*k) where n =candidates.length, k = target
  function _combs(candidates, target, i) {
    console.log(target, i);
    if(target === 0) {
      return 1;
    }
    
    // when target,i change, the output value of _combs changes so we cache using them
    // as our cache key
    var cache_key = target + ":" + i;
    
    if (typeof cache[cache_key] != "undefined") {
      return cache[cache_key];
    }
    
    if(target < 0 || i >= candidates.length) return 0;
    
    count = 0
    count += _combs(candidates, target, i+1);
    count += _combs(candidates, target - candidates[i], i);    
    
    cache[cache_key] = count;
    return count;
  }
  
  return _combs(candidates, target, 0);
}

let res = combinations([1,2,3,6,7], 7);
console.log(res);
