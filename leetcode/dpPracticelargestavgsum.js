// https://leetcode.com/problems/largest-sum-of-averages/

/*
We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

  Example:
  Input: 
  A = [9,1,2,3,9]
  K = 3
  Output: 20
  Explanation: 
    The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
    We could have also partitioned A into [9, 1], [2], [3, 9], for example.
    That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
*/

let arr = [9,1,2,3,9];

// not valid: 9/ 1/ 2/ 3/ 9

// not valid: 9, 1 / 2/ 3/ 9

// valid: 9, 1, 2/ 3 / 9

// valid: 9, 1, 2/ 3, 9

// valid: 9/ 1, 2, 3/ 9

// valid: 9/ 1, 2/ 3,9


// this is O(N) cost but should be O(1)
function calcSum(arr, start, end) {
  if(start === end) return 0;
  let sum = 0;
  for(let i = start; i < end; i++) {
    sum += arr[i];  
  }
  return sum / (end - start);
}

// A is input param, won't change
// K is state param and can change
// i is current index and can change
// start = start of current partition

let ITERS = 0;
function partition(A, K, i, start, cache) {
  let cacheKey = K + ',' + i + ',' + start;
  if(typeof cache[cacheKey] != "undefined") return cache[cacheKey];
  if(K === 0) return -Infinity;
  
  ITERS++;
  if(i === A.length) return calcSum(A, start, i);

  let avgSum = calcSum(A, start, i);
  // make a partition from start..i,
  let left = partition(A, K-1, i+1, i, cache) + avgSum;
  
  // continue building our partition
  let right = partition(A, K, i+1, start, cache);
  
  let r = Math.max(left, right);
  cache[cacheKey] = r;
  console.log("K", A, K, i, start, "returning", r);
  
  return r;
}

function largestPartitionSum(A, K) {
  let cache = {};
  return partition(A, K, 0, 0, cache);
}

let res = largestPartitionSum(arr, 3);
console.log(res);
console.log('ITERS', ITERS);

