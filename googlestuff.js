//make this work

function sum(x, y) {
	if(y === undefined){
    	return function(val){return x + val};
    }
    else{
    	return x + y;
    }
}

console.log(sum(3)(4));



function getAll(prefix, cb) {
    let result = [];
    let res = 0;
    function mergeResults(arr) {
    	result = result.concat(arr);    
        res++;
        if(res === 3) cb(result);
    }
    getMinerals(prefix, mergeResults);
    getAnimals(prefix, mergeResults);
    getSongs(prefix, mergeResults);
}

function printAllAnsers(arr) {
	console.log(arr);    
}

getAll("ca", printAllAnsers);//should print ["calcium", "camel", "can love", "call me", "can be"] 


function getMinerals(prefix, cb) {
    let res = ["calcium"];
    let randomNumber = Math.floor(Math.random() * 1200);
    console.log(randomNumber);
    setTimeout(() => {cb(res)}, randomNumber);
}
    
function getAnimals(prefix, cb) {
    let res = ["camel"];
    let randomNumber = Math.floor(Math.random() * 1200);
    
    console.log(randomNumber);
    setTimeout(() => {cb(res)}, randomNumber);
}
function getSongs(prefix, cb) {
    let res = ["can love", "call me", "can be"];
    let randomNumber = Math.floor(Math.random() * 1200);
    console.log(randomNumber);
    setTimeout(() => {cb(res)}, randomNumber);
}

