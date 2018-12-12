function canPartition(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  let target = sum / 2;  
  //if(!Number.isInteger(target)) return false;
  let cache = {};
  function _helper(i, sum) {
    if(sum === target) return true; 
    if(sum > target) return false;
    if(i >= arr.length) return false;
    let ck = i + ',' + sum; 
    if(typeof cache[ck] != 'undefined') return cache[ck];
    let res = _helper(i + 1, sum + arr[i]); 
    res = res || _helper(i + 1, sum);
      
    return cache[ck] = res;
  }
  
  let ans = _helper(0,0);
  console.log(cache);
  return ans;
}

let arr = [55,12,96,65,70,64,80,17,98,12,75,11,55,56,77,58,69,17,28,53,49,45,87,89,86,19,40,5,80,85,14,27,94,38,12,71,45,51,49,38,35,5,68,95,96,49,84,56,74,18,45,56,41,84,46,64,75,17,15,51,96,79,94,26,85,51,23,65,53,81,59,46,35,69,32,3,33,33,71,72,1,18,9,8,66,14,99,50,61,78,52,60,39,20,34,89,73,17,68,1];
let ans = canPartition(arr);
console.log(ans);
