function solve(a){
    // Complete this function
    if(a.length == 1) return "YES";
    if(a.length == 2) return "NO";
    let pointer = a.length - 2;
    let leftSum = a.slice(0, pointer).reduce((acc, cur) => acc + cur);
    //last element is our right sum
    let rightSum = a[a.length - 1];
    
    
    console.log(pointer);
    console.log(leftSum);
    console.log(rightSum);
    
    for(let i = a.length - 2; i >= 0; i--) {
        if(leftSum == rightSum) {
            return "YES";
        } else {
            if(leftSum > rightSum) {
                rightSum += a[pointer];
                pointer--;
                leftSum -= a[pointer];
            }
        }
    }
    return "NO";
}
console.log(solve([1,2,3]));
