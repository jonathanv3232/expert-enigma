//if(number >= 2 && numbers[number] > parseInt(numbers[number - 2]) + parseInt(numbers[number - 1])) return;
function isValid(numbers) {
	if(numbers.length <= 3) return false; 
	for(let i = 0; i < numbers.length - 1; i++) {
		if(numbers[i][0] == "0" && numbers[i].length > 1) {
			console.log(numbers[i]);
			return;
		}
	}

	for(let i = 2; i < numbers.length - 1; i++) {
		let numA = parseInt(numbers[i - 2]);
		let numB = parseInt(numbers[i - 1]);

		if(numA + numB != parseInt(numbers[i])) {
			return false;
		}
	}
	return true;
}

var isAdditiveNumber = function(nums) {
    let numbers = []; 
    function _helper(start, number) {
		if(!numbers[number]) numbers.push("");

        if(start === nums.length) {
			if(isValid(numbers)) {
				console.log(numbers);
				return true;;
			}
		}

		for(let i = start; i < nums.length; i++) {
			numbers[number] += nums[i];
			if(_helper(i + 1, number + 1)) return true;
		}	
		numbers.pop();
    }

	return _helper(0, 0) ? true: false;
};
let ans = isAdditiveNumber("199100199");
console.log(ans);
