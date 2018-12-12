function createSubsets(arr) {
	let subsets = [];
	let subset = [];
	function _helper(k) {
		if(k === arr.length) {
			subsets.push(subset.slice());
			return;
		}
		subset.push(arr[k]);
		_helper(k + 1);
		subset.pop();
		_helper(k + 1);
	}
	_helper(0);
	return subsets;
}
let ans = createSubsets([1,2,3]);
console.log(ans);
