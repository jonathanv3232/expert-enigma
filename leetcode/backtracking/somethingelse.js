var splitIntoFibonacci = function(S) {
    let numbers = [];
	let maxInt = Math.pow(2, 31) - 1;

    function _helper(start, number) {

		if(numbers[number - 1] > maxInt) return false;

		if(number > 0 && numbers[number - 1].length > 1 && numbers[number - 1][0] === "0") return false;

		if(start === S.length && numbers.length >= 3) {
			if(numbers[number - 1] == (parseInt(numbers[number - 2]) + parseInt(numbers[number - 3]))) {
				return numbers.map(x => parseInt(parseInt(x)));
			}
		}

		if(number > 0 && numbers[numbers.length - 1].length > S.length - start) {
			console.log(numbers)
			return false
		}

        if(start === S.length) {
			return false;
        }        

        let i = start
        for(i; i < S.length; i++) {
			if(!numbers[number]) numbers.push("");

            numbers[number] += S[i]; 
            if(number >= 2) {
                let lastSum = parseInt(numbers[number - 1]) + parseInt(numbers[number - 2]);    
                let j = i + 1;
                while(j < S.length && lastSum > parseInt(numbers[number])) {
                    numbers[number] += S[j++];            
                }
				if(lastSum === parseInt(numbers[number])) {
					const maybe = _helper(j, number + 1);
					if(maybe) {
						return maybe
					}

				} else {
					numbers.pop();
					return false;
				}
            } else {
                const maybe = _helper(i + 1, number + 1); 
				if (maybe) {
					return maybe
				}

            }        
        }
		numbers.pop()
		if (i === S.length && number === 0) return []
    }
    return _helper(0, 0);
};
let s = "123456579";
//let s = "539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511";
//let s = "11235813"
//let s = "112358130"
//let s = "1101111"
//let s = "0123"
let ans = splitIntoFibonacci(s);
console.log(ans);
