var reverseVowels = function(s) {
	//make into an array so that we can modify
	let arr = s.split('');

    let vowels = ['a', 'e', 'i', 'o', 'u'];    
    let i = 0;
    let j = s.length - 1;
    
    while(i < j) {
        while(i < j && vowels.indexOf(arr[i]) === -1) {
            i++;
        }
        while(i < j && vowels.indexOf(arr[j]) === -1) {
            j--;
        }
        if(i < j) {
            let tmp = arr[i];    
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
        if(j > i) break;
    }
    return arr.join('');
};
console.log(reverseVowels('hello'));
