function subsets(n) {
	for(let i = 0; i < (1 << n); i++) {
		//process subsets 
		for(let j = 31; j >= 0; j--) {
			if((i & (1 << j)) == 1) {
				process.stdout.write(" 1 ");
			} else {
				process.stdout.write(" 0 ");
			}
		}
		console.log('\n');
	}
}
subsets(4);
