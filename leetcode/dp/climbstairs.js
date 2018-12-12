var climbStairs  = function(n) {
	if(n == 1 || n == 2) return n;
	let countA = 2;
	for(let i = 3; i < n; i++) {
		let newCount = countA + 1;
		countA = newCount;
	}	
	return countA + 1;
}
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
