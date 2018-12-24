var intersect = function(nums1, nums2) {
    let arr = [];
    let setOne = new Map();
    let setTwo = new Map();
    for(let i = 0; i < nums1.length; i++) {
        setOne.set(nums1[i], (setOne.get(nums1[i]) || 0) + 1);    
    }
    for(let i = 0; i < nums2.length; i++) {
        setTwo.set(nums2[i], (setTwo.get(nums2[i]) || 0) + 1);    
    }
    function computeIntersection(val, key, map) {
        if(setTwo.has(key)) {
            let diff = Math.min(setTwo.get(key), setOne.get(key));
            console.log(diff);
            for(let i = 0; i < diff; i++) {
                arr.push(key);
            }
        }
    } 
    setOne.forEach(computeIntersection);
    return arr;
};
let nums1 = [2,2]
let nums2 = [1,2,2,1];
console.log(intersect(nums1, nums2));
