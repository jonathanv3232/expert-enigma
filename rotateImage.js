function place(M, val, i, j) {
    let tmp = M[i][j];
    M[i][j] = val;
    return tmp;
}

function rotate(M) {
    let tmp = null;
    let len = M.length;
    for(let x = 0; x < Math.floor(M.length / 2); x++) {
        for(let i = 0; i + x < len - (1 + x); i++) {
            let startingY = x + i; 
            //place the first corner to the right
            tmp = place(M, M[x][startingY], x + i, len - (1 + x));
            //console.log(x, startingY, '--->', x + i, len - (1 + x));
            //place the tmp var to the bottom
            tmp = place(M, tmp, len - (1 + x), len - (1 + x + i));
            //console.log(x + i, len - (1 + x), '--->', len - (1 + x), len - (1 + x + i)); 
            //place the tmp var to the left
            tmp = place(M, tmp, len - (1 + i + x), x); 
            //console.log(len - (1 + x), len - (1 + x + i), '--->', len - (1 + i + x), x);
            //place the tmp in the first corner
            place(M, tmp, x, startingY); 
            //console.log(len - (1 + i + x), x, '--->',  x, startingY);
        }
        console.log(M);
        console.log('+================+');
    }
}

let failedTest = [[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]];

//let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [14,15,16,17]];
console.log(failedTest);
rotateImage(failedTest);



