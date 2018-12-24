// var fib = function(n) {
//   if(n < 0) throw new Error('N must be a positive integer');
//   if(n <= 1) return n;
//   let fibN_1 = 0, fibN_2 = 1, fibValue = 1;
//   for(let i = 2; i <= n; i++) {
//     fibValue = fibN_1 + fibN_2;
//     fibN_1 = fibN_2;
//     fibN_2 = fibValue;
//   }
//   return fibValue;
// }
// memoizing with recursion
//
var fib = function(n) {
  if(n < 0) throw new Error("N must be a positive integer");
  if(n === 1 || n === 0) return n;
  if(!fib.previousCalculations) {
    fib.previousCalculations = {};
  }

  if(fib.previousCalculations[n]) {
    return fib.previousCalculations[n];
  } else {
    const value = fib(n - 1) + fib(n - 2);
    fib.previousCalculations[n] = value;
    return value;
  }
}
