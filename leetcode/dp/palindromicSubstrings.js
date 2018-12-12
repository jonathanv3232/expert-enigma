function palindromicSubstrings(str) {
	let len = str.length;
	let ans = 0;
	for(let center = 0; center < len * 2 - 1; center++) {
		let left = Math.floor(center / 2); 
		let right = Math.floor(left + center % 2);
		while(left >= 0 && right < len && str[left] === str[right]) {
			ans++;
			left--;
			right++;
		}
	}
	return ans;
}

let ans = palindromicSubstrings("racecar");
console.log(ans);
