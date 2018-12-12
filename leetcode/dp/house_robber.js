function rob(arr) {
	let cache = [];
	function _helper(i) {
		if(i >= arr.length) return 0;
		if(cache[i]) {
			console.log('cache used');
			return cache[i];
		}
		return cache[i] = Math.max(_helper(i + 1), _helper(i + 2) + arr[i]);
	}
	return _helper(0);
}

let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
console.log(rob(arr));
