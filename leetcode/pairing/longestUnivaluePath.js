function kthGrammar(n, k) {
	let prev = "0"
	let curr = ""
    for(let i = 2; i <= n; i++) {
		for(let j = 0; j < prev.length; j++) {
			if(prev[j] === '0') curr += "01"
			else curr += "10"
		}
			prev = curr;
			curr = ""
    }
	return prev[k - 1];
}
console.log(kthGrammar(, 5));

