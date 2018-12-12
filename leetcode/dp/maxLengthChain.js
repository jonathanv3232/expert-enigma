function findLongestChain(pairs) {
	function _helper(start) {
		//if(start > pairs.length) return -1;
		if(start === pairs.length) return 0;
		if(pairs[start - 1] && pairs[start - 1][1] >= pairs[start][0]) return 0;


		let max = -Infinity;
		for(let i = start; i < pairs.length; i++) {
			console.log('starting at pair', start + 1, 'now at', i + 1);
			//plus one means I took this one now check the next one
			let res = _helper(i + 1) + 1;
			if(res > max) {
				max = res;
			}
		}
		return max;
	}
	return _helper(0);
}
//let pairs = [[1,2],[3,4]];
let pairs = [[1,2],[3,4],[3,5],[4,6],[5,7],[6,8],[8,10],[11, 12]];
console.log(pairs);
//let pairs = [[10,11],[11,12],[12,15],[14,22]];
console.log(findLongestChain(pairs));
