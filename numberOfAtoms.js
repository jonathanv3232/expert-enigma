// Input: 
// formula = "H2O"
// Output: "H2O"

// Explanation: 
// The count of elements are {'H': 2, 'O': 1}.

// Example 2:
// Input: 
// formula = "Mg(OH)2"
// Output: "H2MgO2"

// Explanation: 
// The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
// Example 3:
// Input: 
// formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"

// Explanation: 
// The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

function lastParen(str, i, j) {
    //find the next paren that closes this one
    let open = 1;
    let closed = 0;
    i++;
    while(i <= j) {
        if(str[i] === "(") {
            open++;
        } else if(str[i] === ")") {
            closed++;
        }

        //is balanced
        if(open === closed) {
            return i;
        }

        i++;
    }
    /*
    let index = i + 1;
    for(let x = i + 1; x <= j; x++) {
        if(str[x] === ")") {
            index = x;
        }
    }
    return index;
    */
}

function findTheNumber(str, i, j) {
    let num = "";
    while(i <= j && Number.isInteger(parseInt(str[i]))) {
        //go find a number
        num += str[i];
        i++;
    }
    if(num === "") return 1;
    let ret = parseInt(num);
    return ret;
}

function formatMap(map) {
    let res = [];

    for(let key in map) {
        if(map[key] > 1) {
            res.push(key + map[key]);
        } else {
            res.push(key);
        }
    }
    return res.sort().join("");
}

function mergeReturnMap(localMap, returnMap, multiplier) {
    for(let key in returnMap) {
        if(typeof localMap[key] === "undefined") {
            localMap[key] = returnMap[key] * parseInt(multiplier);
        } else {
            localMap[key] += returnMap[key] * parseInt(multiplier);
        }
    }
}

function countOfAtoms(str) {
    function innerCount(i, j, multiplier) {
        if(i > j) return;
        console.log(str.substring(i, j + 1));
        let localMap = {};
        let returnMap = null;


       	while(i <= j) {
        	if(str[i] === "(") {
                console.log(str.substring(i, j + 1));
           		let indexOfLastParen = lastParen(str, i, j); 

                let newIndex = indexOfLastParen + 1;

                let num = findTheNumber(str, newIndex, j); 
                
                returnMap = innerCount(i + 1, indexOfLastParen - 1, num);

                if(num === 1) {
                    i = newIndex;
                } else {
                    let numLen = num.toString().length;
                    i = newIndex;
                    i += numLen
                }

                mergeReturnMap(localMap, returnMap, multiplier);

            } else if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {

                let elem = "";
                while(i <= j) {
                    elem += str[i++];
                    if(i > j) break;
                    //if at any point we hit a number 
                    if(Number.isInteger(parseInt(str[i]))) {
                        break;
                    }
                    //or a new elem (uppercase char)
                    if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
                        break;
                    }

                    if(str[i] === "(") break;
                }      


                //there might be a number
                let num = findTheNumber(str, i, j);
                let numLen = num.toString().length;


                if(typeof localMap[elem] === "undefined") {
                	localMap[elem] = parseInt(num) * parseInt(multiplier);    
                } else {
                    localMap[elem] += parseInt(num) * parseInt(multiplier);
                }
        
                //update to the new index
                if(num > 1) {
                    i += numLen;
                } 
            } 
        }

        return localMap;
    }

    let map = innerCount(0, str.length - 1, 1);

    return formatMap(map);
}

let test1 = "H2O";
let test = "Mg(OH)2O7Q3"
let test2 = "K4(ON(SO3)2)2";
let test3 ="((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14"; 
let test4 = "K4(ON(SO3)2)2";
let ans = countOfAtoms(test4);
console.log(ans);
