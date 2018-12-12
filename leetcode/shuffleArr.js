var Solution = function(nums) {
	this.initialArr = nums.slice();    
	this.nums = nums;
};

Solution.prototype.reset = function() {
	this.nums = this.initialArr.slice();
};

Solution.prototype.random = function() {
	let min = 0;
	let max = this.nums.length;
	return Math.floor(Math.random() * (max - min) + min);
}

Solution.prototype.swap = function(i, rand) {
	let tmp = this.nums[i];    
	this.nums[i] = this.nums[rand];
	this.nums[rand] = tmp;
}

Solution.prototype.shuffle = function() {
	for(let i = 0; i < this.nums.length; i++) {
		let random = this.random();
		this.swap(i, random);
	}   
};

let sol = new Solution([1,2,3,4,5,6,7]);

sol.shuffle();
console.log(sol.nums);
sol.shuffle();
console.log(sol.nums);

sol.shuffle();
console.log(sol.nums);
sol.reset();
console.log(sol.nums);
