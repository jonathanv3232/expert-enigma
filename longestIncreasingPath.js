var longestIncreasingPath = function(matrix) {
    function valid(i, j) {
        return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length && matrix[i][j] != null;
    }
    let cache = {};
    function dfs(prevVal, i, j) {
        if(valid(i, j) && matrix[i][j] < prevVal) {
            let ck = i + ',' + j;
            //if(typeof cache[ck] != 'undefined') return cache[ck];
            let value = matrix[i][j];
            matrix[i][j] = null;
            let a = dfs(value, i + 1, j) + 1;  
            let b = dfs(value, i, j + 1) + 1;   
            let c = dfs(value, i - 1, j) + 1;   
            let d = dfs(value, i, j - 1) + 1;   
            matrix[i][j] = value;    
            return cache[ck] = Math.max(a, b, c, d);
        }        
        return 0;
    }    
    let len = matrix.length;
    let innerLen = matrix[0].length;
    let largestSeq = 0;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < innerLen; j++) {
            let res = dfs(Infinity, i, j);        
            if(res > largestSeq) largestSeq = res;
        }
    }
    return largestSeq;
};
let M = [[0,1,2,3,4,5,6,7,8,9],[19,18,17,16,15,14,13,12,11,10],[20,21,22,23,24,25,26,27,28,29],[39,38,37,36,35,34,33,32,31,30],[40,41,42,43,44,45,46,47,48,49],[59,58,57,56,55,54,53,52,51,50],[60,61,62,63,64,65,66,67,68,69],[79,78,77,76,75,74,73,72,71,70],[80,81,82,83,84,85,86,87,88,89],[99,98,97,96,95,94,93,92,91,90],[100,101,102,103,104,105,106,107,108,109],[119,118,117,116,115,114,113,112,111,110],[120,121,122,123,124,125,126,127,128,129],[139,138,137,136,135,134,133,132,131,130],[0,0,0,0,0,0,0,0,0,0]];
let ans = longestIncreasingPath(M);
console.log(ans);
