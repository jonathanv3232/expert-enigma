function fib(n) {
	if(!this.alreadyComputed) {
		this.alreadyComputed = {};
	}
	if(n < 0) throw new Error("invalid input");
	if(n === 0 || n === 1) return n;
	if(this.alreadyComputed[n]) return this.alreadyComputed[n];
	return this.alreadyComputed = fib(n-1) + fib(n-2);

}

//solution is O(n) but apperantly there is an O(logn) solution that uses matrix multiplication
//this solution takes up N space


//this other solution also has an  O(n) run time but it is O(1) space complexity
// I didn't write this one it was on interview cake as the solution

function fib(n) {

    // edge cases:
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
        return n;
    }

    // we'll be building the fibonacci series from the bottom up
    // so we'll need to track the previous 2 numbers at each step
    var prevPrev = 0;  // 0th fibonacci
    var prev = 1;      // 1st fibonacci
    var current;       // Declare current

    for (var i = 1; i < n; i++) {

        // Iteration 1: current = 2nd fibonacci
        // Iteration 2: current = 3rd fibonacci
        // Iteration 3: current = 4th fibonacci
        // To get nth fibonacci ... do n-1 iterations.
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}
