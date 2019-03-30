Example 1:

Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2

Example 2:

Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10

function modifyRes(str, modifier) {
    let operator = modifier[1];
    let num1 = modifier[0];
    let num2 = null;
    if(modifier.length > 2) {
        num2 = modifier[2];
    }

}
function evaluate() {

}
function diffWaysToCompute(input) {
    let ret = [];
    function _helper(string, res) {
        if(string.length === 0) {
            ret.push(res);
            return;
        }
        let i = 0; 
        while(i < input.length) {
            //take these two and add parens around them now solve the rest
            _helper(input.substring(i + 3, input.length), modifyRes(res, input.substring(i, i + 3)));
            //don't take this number and its operator
            _helper(input.substring(i + 1, input.length), modifyRes(res, input.substring(i, i + 2))); 
        }
    }
    return ret;
}
