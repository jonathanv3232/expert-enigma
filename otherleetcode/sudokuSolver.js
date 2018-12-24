function leftMost(i, j) {
  let topOffset = i % 3;
  let rightOffset = j % 3;
  return [i - topOffset, j - rightOffset];
}

function subgridCount(grid, i, j, tempSet) {
  let topLeft = leftMost(i, j);
  let [x, y] = topLeft;
  for(let a = 0; a < 3; a++) {
    for(let b = 0; b < 3; b++) {
      if(grid[x + a][y + b] === '.') continue;
      tempSet.add(parseInt(grid[x + a][y + b]));
    }
  }
}

function findAllNotInSet(tempSet) {
  let set = new Set();
  for(let i = 1; i < 10; i++) {
    if(!tempSet.has(i)) set.add(i);
  }
  return set;
}

function possibilites(grid, i, j) {
  let tempSet = new Set();
  //row
  for(let x = 0; x < grid[i].length; x++) {
    if(grid[i][x] === '.') continue;
    tempSet.add(parseInt(grid[i][x]));
  }
  //col
  for(let x = 0; x < grid.length; x++) {
    if(grid[x][j] === '.') continue;
    tempSet.add(parseInt(grid[x][j]));
  }
  //subgrid
  subgridCount(grid, i, j, tempSet);
  return findAllNotInSet(tempSet);
}


function emptySquares(grid) {
  let empty = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length; j++) {
      if(grid[i][j] === '.') empty++;
    }
  }  
  return empty;
}

var solveSudoku = function(grid, isSolved) {
  let bestSquare = [0,0];
  let possible = bestPossibilities(grid);  
  if(possible === null && emptySquares(grid) === 0) {
      isSolved[0] = true;
      return;
  }
  if(possible.size === 0) return false;
  for(let p = 1; p < 10; p++) {
    if(possible.has(p)) {
      let [i, j] = bestSquare;
      grid[i][j] = p;
      let solvedGrid = solveSudoku(grid, isSolved);
      if(isSolved[0]) return;
      grid[i][j] = '.';
    }
  }
  
  
  function bestPossibilities(grid) {
    let bestPossibility = 9;
    let allPossibilites = null;
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid.length; j++) {
        if(grid[i][j] != '.') continue
        let result = possibilites(grid, i, j);
        if(result.size < bestPossibility) {
          bestPossibility = result.size;
          bestSquare = [i, j];
          allPossibilites = result;
        }
      }
    }
    return allPossibilites;
  }
};

let sudoku =[[".",".","2",".","9",".","7",".","."],["7","5",".",".",".","6",".","8","."],[".","4","3",".","8",".",".",".","."],[".",".",".","9",".",".",".","7","."],[".",".","5",".",".",".","1",".","."],[".","2",".",".",".","1",".",".","."],[".",".",".",".","3",".","4","1","."],[".","7",".","8",".",".",".","9","6"],[".",".","9",".","4",".","3",".","."]]; 
console.log('before solving');
console.log(sudoku);
solveSudoku(sudoku, [false]);
console.log('after');
console.log(sudoku);
