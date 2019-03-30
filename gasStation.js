function canDoRoundTrip(arr, cost, start, tripLen) {
   	let remainingGas = 0; 
    let i = start;
    while(i <= arr.length) {
        if(tripLen === arr.length) return true;    
        if(i === arr.length) i = 0;
        remainingGas += arr[i];
        //console.log(remainingGas, cost);
       	if(remainingGas - cost[i] >= 0) {
            remainingGas -= cost[i];
            i++;
            tripLen++;
        } else {
            return false;
        }
    }
}

function gasStation(arr, cost) {
    //because I can start anywhere
    //i should start from 0 to n - 1
    console.log(canDoRoundTrip(arr, cost,4, 0))
    for(let i = 0; i < arr.length; i++) {
        //can i make it starting from this index
        if(canDoRoundTrip(arr, cost, i, 0)) return i;
    }
    return -1;
}
//there is more than enough gas but you have to find the right spot
//there is either more than enough gas
xx//just enough and you have to choose the right spot
//there is not enough no matter what
//
//grab the first positive gas delta
//
//
//maybe summing up the gas and subtracting the cost to figure out in the beggining
            
           -1, 1,-2, 0,-1, 3
           -2,-1,-4,-2,-3, 0

DELTAS:    -2  1 -3  2 -1  3 
            x  1  x  2  x  3
let gas  = [1, 4, 1, 4, 5, 1]
let cost = [3, 3, 4, 2, 6, 4]

//maybe if we take the first biggest possitive that can make it through
