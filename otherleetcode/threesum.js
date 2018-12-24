function setToArr(set) {
    let ret = [];
    set.forEach((value1, value2, set) => {
        ret.push(value1.split(',').map(a => parseInt(a)));
    });
    return ret;
}
var threeSum = function(n) {
    n = n.sort(function(a, b) {
        return a - b;
    });
    let triplets = new Set(); 
    for(let i = 0; i < n.length - 2; i++) {
        let a = n[i];
        let start = i + 1;
        let end = n.length - 1;
        while(start < end) {
            let b = n[start];
            let c = n[end];
            if(a + b + c === 0) {
                let tripletKey = a + ',' + b + ',' + c; 
                triplets.add(tripletKey);
                start++;
                end--; 
            } else if(a + b + c > 0) {
                end--;
            }  else {
               start++; 
            }
        }
    }
    return setToArr(triplets);
 };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
