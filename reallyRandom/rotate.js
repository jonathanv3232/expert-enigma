var rotate = function(nums, k) {
    let len = nums.length;
    let mN = k % len;
    for(let i = len - mN; i < nums.length; i++) {
        let temp = nums[i];
        let oMN = (i + mN) % len;
        nums[i] = nums[oMN];
        nums[oMN] = temp;
    }
    let counter = len - mN;
    let index = 0;
    while(counter <= len) {
        nums[index++] = nums[counter++];
    }
};
let arr = [1,2,3,4,5,6];
rotate(arr, 8);
console.log(arr);
