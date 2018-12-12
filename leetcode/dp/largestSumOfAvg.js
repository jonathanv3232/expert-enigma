function buildPrefixSum(arr) {
	let prefixSum = [arr[0]];
	for(let i = 1; i < arr.length; i++) {
		prefixSum[i] = prefixSum[i - 1] + arr[i];
	}
	return prefixSum;
}

function avgSum(arr, start, end) {
	let elems = end - start + 1;
	let sum;
	//subtract one from i so that it can include this in the sum
	if(start - 1 === -1) {
		return (arr[end] / elems);
	}
	if(elems > 0) {
		sum = (arr[end] - arr[start - 1]) / elems;
	}
	return sum;
}

function largestSumOfAverages(A, K) {
	
	let prefixSum = buildPrefixSum(A);
	let cache = {};
	console.log(prefixSum);

	function _helper(i, L, partitions, numsTaken) {
		console.log(i, L, partitions, numsTaken);
		if(partitions === K && i === A.length) return -Infinity;
		if((partitions === 0 || i === A.length) && numsTaken != A.length) {
			console.log('not a valid partition');
			return -Infinity;
		}	
		if(i === A.length || partitions === 0) {
			console.log('valid paritioning');
			return 0;
		}

		let ck = i + ',' + L + ',' + partitions;
		if(typeof cache[ck] != 'undefined') return cache[ck];

		let x, y;
		x = y = -Infinity;

		let sum = avgSum(prefixSum, L, i);

		//partition here
		y = _helper(i + 1, i + 1, partitions - 1, numsTaken + 1) + sum;
		//don't partition: keep my last partition index
		x = _helper(i + 1, L, partitions, numsTaken + 1);

		return cache[ck] = Math.max(x, y);
	}
	//start at the first index, include the first number in the first partition
	//pass in the numbers of available partitions and don't take any number yet
	return _helper(0, 0, K, 0);
	/*
	console.log(avgSum(prefixSum, 0, 0));
	console.log(avgSum(prefixSum, 1, 3));
	console.log(avgSum(prefixSum, 4, 4));
	*/
}

//let arr = [1,2,3];
//let arr = [1,2,3,4];
//let arr = [9,1,2,3,9];
//let arr = [1,2,3,4,5,6,7];
let arr = [4,1,7,5,6,2,3];
let ans = largestSumOfAverages(arr, 4);
console.log(ans);

