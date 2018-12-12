let res = [];
let N = 5;
let K = 3;
function main() {

	function combs(N, K, arr, start, depth) {
		console.log(start, depth, arr);
		if(arr.length === K) {
			res.push(arr.slice());		
			return;
		}
		
		for(let i = start; i <= N; i++) {
			if(depth === 0 && i === N - K + 2) return;
			arr.push(i);
			combs(N, K, arr, i + 1, depth + 1);				
			arr.pop();
			console.log(start, depth, arr);
		}
	}
	combs(N, K, [], 1, 0);
}
main();

console.log(res);





