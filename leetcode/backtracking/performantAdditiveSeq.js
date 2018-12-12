
var isAdditiveNumber = function(nums) {
    let numbers = []; 
	let previousSum = null;
    function _helper(start, number) {
		console.log(numbers);
		if(number >= 3 && numbers[number - 1] > previousSum) {
			console.log('this ran');
			return;  
		}
		if(number >= 1 && numbers[number - 1].length > 1 && numbers[number - 1][0] === "0") {
			return;
		}
        if(start === nums.length) {
			console.log(numbers);
			return true;;
		}

		if(!numbers[number]) numbers.push("");

		for(let i = start; i < nums.length; i++) {
			numbers[number] += nums[i];
			if(number >= 2) {
				previousSum = parseInt(numbers[number - 2]) + parseInt(numbers[number - 1]);
				while(i < nums.length - 1 && previousSum > numbers[number]) {
					i++;
					numbers[number] += nums[i];
				}
			}

			if(_helper(i + 1, number + 1)) return true;
		}	
		previousSum = 0;
		numbers.pop();
		return false;
    }

	return _helper(0, 0);
};

let ans = isAdditiveNumber("199100199");
console.log(ans);
