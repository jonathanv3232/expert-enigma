//create permutations
//when you have a permutation checi if it follows the condition
//if it does increment the counter
function countArrangement(N) {
	let chosen = [];
	let perm = [];
   	let count = 0;	
	function _helper() {
		if(perm.length >= 1 && !(perm[perm.length - 1] % perm.length === 0 || 
			perm.length % perm[perm.length - 1] === 0)) return;	
		if(perm.length === N) {
			count++;
			return;
		}
		for(let i = 1; i <= N; i++) {
			if(chosen[i]) continue;
			chosen[i] = true;
			perm.push(i);
			_helper();	
			perm.pop();
			chosen[i] = false;
		}
	}		
	_helper();
	return count;
}
let count = countArrangement(15);
console.log(count);
