var splitIntoFibonacci = function(S) {
    let res = [];
    return helper(0);

	function helper(pos) {
		if(pos === S.length && res.length >= 3) {
			return res;
		}

		for(let i = pos; i < S.length; i++) {

			if(S[pos] == '0' && i > pos) {
				break;
			}

			let num = parseInt(S.substring(pos, i + 1));

			if(num > 2147483647) {
				break;
			}

			let size = res.length;

			if(size >= 2 && num > res[res.length - 1] + res[res.length - 2] ) {
				break;
			}

			if(size <= 1 ||  num == res[res.length - 1] + res[res.length - 2] ) {
				res.push(num);
				let result = helper(i + 1);
				if(result.length > 0) {
					return result;
				}
				res.pop();
			}
		}
		return [];
	}
};

let ans = splitIntoFibonacci("123456579");
console.log(ans);
