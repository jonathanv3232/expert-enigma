//find the next permutation
//1,2,3  -> 1,3,2
//3,1,2 -> 3,2,1
//3,2,1 -> 1,2,3
//4,5,6,9  -> 4,5,9,6
//9,6,5,4 -> 4,6,5,9


function nextPerm(arr) {
    //start a pointer at the end and find the next smaller spot 
    //if you get to the end and nothing else is smaller than use the first num 
    let len = arr.length;
    let j = len - 1;
    let end = arr[j];
    let noSwap = true;
    while(j >= 0) {
        if(arr[j] < end) {
            swap(arr, j, end);
            noSwap = false;
        }
    }
    if(!noSwap) {
        swap(arr, 0, end);
    }
    return arr;
}

