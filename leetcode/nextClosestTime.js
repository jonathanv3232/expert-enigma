var nextClosestTime = function(time) {
	function genTimes(digits, time) {
		if(time.length === 4) {
			calcTimeDiff(time);
			return;
		}		
		for(let digit of digits) {
			let parsedDigit = parseInt(digit);
			if(time.length === 0 && [1,2].includes(parsedDigit)) genTimes(digits, time + digit);
			if(time.length === 1 &&	[0,1,2,3].includes(parsedDigit)) genTimes(digits, time + digit);
			else if(time.length === 2 && [0,1,2,3,4,5].includes(parsedDigit)) genTimes(digits, time + digit);
			else if(time.length > 2) genTimes(digits, time + digit);
		}
	}

	let minDiff = Infinity;
	let closestTime;
	let originalTime = time.replace(":", "");

	function calcTimeDiff(time) {
		let parsedOriginal = parseInt(originalTime);
		let parsedTime = parseInt(time);
		let diff;
		if(originalTime > time) {
			diff = 2400 - parsedOriginal + time;
		} else {
			diff = time - parsedOriginal;
		}
		if(diff < minDiff && parsedOriginal != parsedTime) {
			minDiff = diff;
			closestTime = time;
		}
		
	}
    //make the array of digits
    let digits = new Set();
	for(let i = 0; i < time.length; i++) {
		if(time[i] === ':') continue
		digits.add(time[i]);		
	}
	genTimes(digits, "");	
    //choose the 1 if there is one
        //and make a perm with the rest of the chars
    //choose a 2 if there is one
        //digits on the 2nd place can only be 0 -3
        //make perms like usual    
        
    
    //for each time generated check if it is valid
        //if valid check the time difference
        //store the smallest diff and return the time
	return closestTime;
};

console.log(nextClosestTime("19:34"));
