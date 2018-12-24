//let arr = [[1,10],[4,6],[8,10],[10,18]];
let arr = [[1,3],[2,6],[8,10],[15,18]]; 
console.log(arr);
function mergeIntervals(arr) {
    if(arr.length === 0) return [];
    let results = [];
    arr.sort((a,b) => a[0] - b[0]);
    let left = 0;
    let right = 1;
    while(left <= right) {
        let largest = arr[left][1];
        if(right === arr.length) {
            largest = Math.max(largest, arr[right - 1][1]);
            results.push([arr[left][0], largest]);
            return results;
        }
        if(largest >= arr[right][0]) {
            largest = Math.max(largest, arr[right][1]);
            right++;
        } else {
            results.push([arr[left][0], largest]);
            left = right; 
            right++;
        }
    }
}
console.log(mergeIntervals(arr));
