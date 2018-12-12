var reverseWords = function(str) {
	str = str.replace(/\s+/g, ' ');
	if(str === ' ') return '';
    let reversed = str.split(' ').reverse();
    
    for(let i = 0; i < reversed.length; i++) {
        let word = reversed[i];
        word = word.split('').reverse().join('');
    }
    return reversed.join(' ');
};
console.log(reverseWords('the sky is blue'));
console.log(reverseWords('   '));
