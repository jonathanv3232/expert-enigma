function findLongestChain(pairs) {
	let cache = {};
	pairs.sort((a, b) => a[0] - b[0]);
	function _helper(i, lastPair) {
		if(i === pairs.length) return 0;
		let x, y;		
		x = y = 0;
		let ck = lastPair;
		if(typeof cache[ck] != 'undefined') {
			console.log('used cache');
			return cache[ck];
		}
		if(lastPair === null || pairs[lastPair][1] < pairs[i][0]) {
			// take this one and go to the next one           
			x = Math.max(_helper(i + 1, i) + 1);
		} 
		//don't take this one go to the next one
		y = _helper(i + 1, lastPair)

		return cache[ck] = Math.max(x, y);
	}
	return _helper(0, null);
}
//let pairs = [[1,2],[3,4],[3,5],[4,6],[5,7],[6,8],[8,10],[11, 12]]; //should be 5
let pairs = [[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]; //should be 3
console.log(pairs);
console.log(findLongestChain(pairs));
