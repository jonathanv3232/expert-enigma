function search(k, n, chosen) {
    if(k.length == n) {
       console.log(k);
    }
    else {
        for(let i = 0; i < n; i++) {
            if(chosen[i]) continue;
            chosen[i] = true;
            k.push(i);
            search(k, n, chosen);
            chosen[i] = false;
            k.pop();
        }
    }
}
const permutations = [];
const chosen = [];
search(permutations, 3, chosen);
