var advantageCount = function(A, B) {
    //take the most min number that will get the advantage     
    for(let i = 0; i < A.length; i++) {
        //get the number        
        let meetThis = B[i];
        //everything to the left of this index is already sorted        
        let smallest = Infinity;
        for(let j = i; j < A.length; j++) {
            if(A[j] > meetThis && smallest > A[j]) {
                smallest = A[j];        
                A[j] = A[i];
                A[i] = smallest;
            }
        }
    }
    return A;
};

let A = [2,7,11,15];
let B = [1,10,4,11];
//Output: [2,11,7,15]
advantageCount(A, B);
console.log(A);
let C = [12,24,8,32];
let D = [13,25,32,11];
//Output: [24,32,8,12]
advantageCount(C, D);
console.log(C);
let E = [9,1,2,4,5];
let F = [6,2,9,1,4];
advantageCount(E, F);
console.log(E, [9,4,1,2,5]);
//Output: [9,4,1,2,5]

