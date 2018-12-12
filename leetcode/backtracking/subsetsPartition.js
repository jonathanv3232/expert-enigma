/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    //make all subsets
    let subsetOne = [];
    let subsetTwo = nums.slice(); 
    let res = false;
    function allSubsets(K) {
        if(K === nums.length) {
            let sumOne, sumTwo; 
            if(subsetOne.length > 0) {
                sumOne = subsetOne.reduce((acc, cur) => acc + cur);
            } else {
                sumOne = 0;
            }
            if(subsetTwo.length > 0) {
                sumTwo = subsetTwo.reduce((acc, cur) => acc + cur);   
            } else {
                sumTwo = 0;
            }
            if(sumOne === sumTwo) res = true; 
            return;
        }    
        
        subsetOne.push(nums[K]);
        let lastSubsetTwo = subsetTwo.slice();
		subsetTwo.splice(K, 1);
		console.log(subsetOne, subsetTwo);
        allSubsets(K + 1);
        subsetOne.pop();
        subsetTwo = lastSubsetTwo;
        allSubsets(K + 1);
    }
    allSubsets(0);
    return res;
};
let arr = [1,2,3,5];
let ans = canPartition(arr);
console.log(ans);
