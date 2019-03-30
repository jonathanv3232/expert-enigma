function debounce(cb, timeout) {
	let canRun = true;
	function restartTimer() {
		setTimeout(() => canRun = true, timeout);
	}
	function debouncedFunc(...allArgs) {
		if(canRun) {
cb(...allArgs);
restartTimer();
}
}
return debouncedFunc();
}
//call with a parameter
cbDebounced = debounce((a) => console.log(a), 1000) // 

cbDebounced(10);
100 ms
cbDebounced(20);

//edge cases
 debounce(() => console.log("hello"), NaN) // throw an error
					
debounce(null, timeout) //throw and error need a callback



