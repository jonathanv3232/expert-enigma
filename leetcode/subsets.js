var subsets = function(nums) {
	let subsets = [[]];
	for(let i = 0; i < nums.length; i++) {
		let len = subsets.length;
		for(let j = 0; j < len; j++) {
			subsets.push(subsets[j].concat(nums[i]));
		}
	}
	console.log(subsets);
}
subsets([1,2,3]);
//[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]
