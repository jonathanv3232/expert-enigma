//1
//11
//21
//1211
//111221
//312211
//13112221
//1113213211
//

//take all chars of the same number
//count them and return a string of that number with the type of char next to it
//append to a new string and return that string

function count(str) {
    let num = str[0];
    let len = str.length;
    return len + num;
}

function countAndSay(str) {
    if(str.length === 0) return "";
    let ret = "";
    let i = 0;
    let number = str[0];
    let numberIndex = 0;
    while(i < str.length) {
        i++;
        if(number != str[i] || str[i] === undefined) {
            let substring = str.substring(numberIndex, i);
            numberIndex = i;
            number = str[numberIndex];
            ret += count(substring);
        }
    }
    return ret;
}
function wrapper(n) {
    if(n == 1) return 1;
    let i = 2;
    let result = countAndSay("1");
    while(i < n) {
        i++;
        result = countAndSay(result);
    }
    return result;
}
console.log(wrapper(5));
