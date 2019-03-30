/**
 * @param {string} s
 * @return {number}
 */
function multiply(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}
function divide(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return Math.floor(a/b); 
}
function subtract(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
}
function add(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}
function cleanStr(s) {
    let arr = [];    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " ") arr.push(s[i]); 
    }
    return arr;
}
var calculate = function(s) {
    let arr = cleanStr(s);
    let updated = [];
    let res = 0;
    lastOperator = null;
    for(let i = 0; i < arr.length; i++) {
        //update the result here    
        if(arr[i] === "*") {
            updated.push(multiply(arr[i - 1], arr[i + 1]));
        } else if(arr[i] === "/") {
            updated.push(multiply(arr[i - 1], arr[i + 1]));
            updated.push(divide(arr[i - 1], arr[i + 1]));   
        } else if(arr[i] === "+" || arr[i] === "-") {
            updated.push(arr[i - 1]);
            updated.push(arr[i]);
        } 
    }
    
    for(let i = 0; i < updated.length; i++) {
        if(updated[i] === "-") {
            res += subtract(updated[i - 1], updated[i + 1]);    
        } else if(updated[i] === "+") {
            res += add(updated[i - 1], updated[i + 1]);    
        }
    }
    return res;
};

let str = '6*4 + 3';
console.log(str);
let ans = calculate(str);
console.log(ans);
