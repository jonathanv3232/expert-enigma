function subarrays(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            console.log(arr.slice(i, j + 1));
        }
    }
}

function diffAllSubArrays(arr) {
    for(let i = 0; i <= arr.length; i++) {
        for(let j = 0; j < i; j++) {
            console.log(arr.slice(j, i));
        }
    }
}

subarrays([1,2,3,4,5]);
console.log("--------------");
diffAllSubArrays([1,2,3,4,5]);
