function solve(sum, coins, cache) {
    console.log('you were given ' + sum + ' as an input');
    if(sum == 0) return 0;
    if(sum < 0) return Infinity;
    let first = [];
    for(let i = 1; i <= sum; i++) {
        let currentSum = i;
        cache[currentSum] = Infinity;
        for(let c = 0; c < coins.length; c++) {
            let coin = coins[c];
            if(currentSum - coin >= 0) {
                cache[currentSum] = Math.min(cache[currentSum], coins[currentSum - coin] + 1);
                first[i] = coins[c]; 
            }
        }
    }
    
    let copy = sum;
    while (copy > 0) {
        console.log(first[copy]); 
        copy -= first[copy]; 
    }
    console.log(cache[sum]);
    return cache[sum];
}
function coinChange(coins, sum) {
    let min;
    return min = solve(sum, coins, {}) != Infinity ? min : -1;
}
console.log(coinChange([1,3,4], 10));

