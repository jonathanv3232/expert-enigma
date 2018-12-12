/* 
 * Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

function countPrimes(num) {
	let primeCount = 0;
	for(let i = 3; i <= num; i++) {
		let upperLimit = Math.sqrt(i);
		let divisible = false;
		for(let j = 2; j <= upperLimit; j++) {
			if(i % j === 0) {
				divisible = true;
				break;
			}
		}	
		if(!divisible) primeCount++;
	}
	return primeCount;
}
let res = countPrimes(2);
console.log(res);

