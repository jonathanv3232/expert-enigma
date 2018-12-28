function search(k, subset, n) {
    if(k == n) {
        console.log(subset);
    } else {
        search(k + 1, subset, n);
        subset.push(k);
        search(k + 1, subset, n);
        subset.pop();
    }
}

search(0, [], 3);
