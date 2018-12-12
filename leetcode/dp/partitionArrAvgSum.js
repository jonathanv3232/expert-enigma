//solution equals [9] [2,3,1] [9]
//let arr = [9,1,2,3,4,5,6,7,8,9];
let arr = [9,1,2,3,9];
/*
function partition(A, K) {
	//let cache = {}; 
	function _helper(index, partitions, sum, numsInPartition, partialSum) {
		//console.log(index, partitions, sum, numsInPartition, partialSum);
		if(index >= A.length && partitions === 0) return -Infinity;
		if(partitions > K) return sum;
		if(index >= A.length) {
			if(numsInPartition === 0) return sum;
			return sum + (partialSum / numsInPartition);
		}
		//let ck = index + ',' + (K - partitions) + ',' + sum;
		//if(cache[ck]) {
		//	console.log('used cache');
		//   	return cache[ck];
		//}
		let newPartitionSum;  
		if(numsInPartition === 0) {
			newPartitionSum = 0;
		} else {
			newPartitionSum = partialSum / numsInPartition;
		}
		
		return Math.max(
			_helper(index + 1, partitions + 1, sum + newPartitionSum, 0, 0),
			_helper(index + 1, partitions, sum, numsInPartition + 1,  partialSum + A[index])
		);
	}
	return _helper(0, 0, 0, 0, 0);
}
*/
function canPartition(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  let target = sum / 2;  
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
  return _helper(0,0);
}

console.log(partition(arr, 3));
