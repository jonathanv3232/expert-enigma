function greaterThanFunc(arr, left, right, x, results, greaterThan) {
    if(left >= right){
        if(left > right) return;
        if(!greaterThan) {
            if(x >= arr[left]) results.push(arr[left]);
        } else {
            if( x <= arr[left]) results.push(arr[left]);
        }
        return;
    }
    //if(arr.slice(left, right + 1).length === 0) {
    //    console.log(left, right);
    //    return ;
    //}
    
    let mid = Math.floor((left + right) / 2);
    if(greaterThan) {
        if(arr[mid] >= x) results.push(arr[mid]);
    } else {
        if(arr[mid] <= x) results.push(arr[mid]);
    }

    greaterThanFunc(arr, left, mid - 1, Math.max(arr[mid], x), results, false);
    greaterThanFunc(arr, mid + 1, right, Math.min(arr[mid], x), results, true);
}

function unsortedSearch(arr) {
    let results = [];
    let mid = Math.floor((arr.length - 1) / 2);
    results.push(arr[mid]);
    greaterThanFunc(arr, 0, mid - 1, arr[mid], results, false);
    greaterThanFunc(arr, mid + 1, arr.length - 1, arr[mid], results, true);
    return results;
}

//let arr = [1,8,5,6,7,9,2];
let arr = [1,2,3,4,5,6,7,8,9,10,11];
//let arr = [1,1,1];
let ans = unsortedSearch(arr);
console.log(arr);
console.log(ans);
// Below code is used for testing (brute force solution)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] == target) return true; 
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
function found(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        if(binarySearch(arr, arr[i])) results.push(arr[i]); 
    }
    return results;
}
console.log(found(arr));
