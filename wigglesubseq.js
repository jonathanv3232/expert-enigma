function buildAlt(arr) { 
	let ret = [];
    for(let i = 1; i < arr.length; i++) {
        ret.push(Math.sign(arr[i] - arr[i - 1]));
    }
    console.log(arr, ret);
    return ret;
}

function maxAlternating(altArr, start) {
    let maxCount = 0;
    for(let i = 0; i < altArr.length; i++) {
		if(altArr[i] === start) {
            maxCount++;
            if(start === 1) {
                start = -1;
            } else if(start === -1){
                start = 1;
            }
        }
    }
    return maxCount;
}

function wiggleSeq(arr) {
    let altArr = buildAlt(arr); 
    let maxCount = 0;
    return Math.max(maxAlternating(altArr, -1), maxAlternating(altArr, 1)); 
}
