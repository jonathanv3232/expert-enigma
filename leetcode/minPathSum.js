/*

  let square = [[1,2,3],[4,5,6],[7,8,9]]
  Output: 12
  Explanation: 
  The possible falling paths are:

      [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
      [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
      [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]

  The falling path with the smallest sum is [1,4,7], so the answer is 

*/
let square = [[3,2,0,3,4],[4,5,0,1,11],[7,8,0,9,3],[3,2,1,3,4],[5,9,0,3,4]];

function valid(squareArr, x) {
  return ( x >= 0 && x < squareArr.length);
}

var ITERS = 0;

function minPath(squareArr, x, y, cache) {
  if(y === squareArr.length) return 0;
  if(!valid(squareArr, x)) return Infinity;
  
  ITERS += 1;
  if(typeof cache[x + ',' + y] == "undefined") {
    cache[x + ',' + y] = Math.min( 
      minPath(squareArr, x - 1, y + 1, cache), 
      minPath(squareArr, x - 0, y + 1, cache), 
      minPath(squareArr, x + 1, y + 1, cache)) + squareArr[y][x];
  }

  return cache[x + ',' + y]
}

function smallestPath(squareArr) {
  let min = Infinity;
  ITERS = 0;
  let cache = {};
  for(let x = 0; x < squareArr.length; x++) {
    // min = Math.min(..., min);
    min = Math.min(minPath(squareArr, x, 1, cache) + squareArr[0][x], min) 
  }
  console.log("ITERS", ITERS)
  return min;
}

let res = smallestPath(square);
console.log(res);

