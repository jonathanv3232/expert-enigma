let results = [];
let chosen = [];

function perms(n, perm) {
	if(perm.length === n) {
		results.push(perm.slice());
	} else {
		for(let i = 0; i < n; i++) {
			if(chosen[i]) continue;
			chosen[i] = true;
			perm.push(i);
			perms(n, perm);
			perm.pop();
			chosen[i] = false;
		}
	}
}

perms(3, []);
console.log(results);


