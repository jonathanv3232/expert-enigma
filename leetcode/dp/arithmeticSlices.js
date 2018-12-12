/*
 
1 3 5 7 9 9 9 9 10
1 3 5 7 9
1 3 5
  3 5 7
    5 7 9
1 3 5 7
  3 5 7 9
  		9 9 9 9
		9 9 9 
		  9 9 9
6 	+ 	3     = 9
*/
//failed recursive solution come back to this
/*
function sliceCount(num) {
	console.log(num);
	if(num === 5) return 6;
	if(num === 4) return 3;
	return 0;
}

function arithmeticSlices(arr) {
	let count = 0;
	function _helper(i, diff, nums) {
		console.log(i, diff, nums);
		if(arr[i] - arr[i - 1] != diff && nums < 3) return 0;	 		
		if(i >= arr.length && nums > 2 && diff === arr[i] - arr[i - 1]) return sliceCount(nums);
		if(i >= arr.length) return 0;
		if(arr[i] - arr[i - 1] != diff && nums >= 3) return sliceCount(nums);
		_helper(i + 1, diff, 1);
	}
	return count += _helper(1, arr[1] - arr[0], 2);
}

*/
function sliceCount(len) {
	if(len < 3) return 0;
	len -= 2;
	if(len === 0) return 1;
	return (len * (len + 1)) / 2
}

function arithmeticSlices(arr) {
	if(arr.length < 3) return 0;
	let count = 0;
	let diff = arr[1] - arr[0]; 
	let sliceLen = 2;
	arr.push(null);
	for(let i = 2; i < arr.length; i++) {
		if(arr[i] - arr[i - 1] != diff) {
			count += sliceCount(sliceLen);
			sliceLen = 2;
			diff = arr[i] - arr[i - 1];
		} else {
			sliceLen++;
		}
	}
	return count;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
//let arr = [1,3,5,7,9,9,9,9,10];
let ans = arithmeticSlices(arr);
console.log(ans);
