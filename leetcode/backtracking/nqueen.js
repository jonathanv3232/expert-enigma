function noQueenRow(board, row) {
    for(let i = 0; i < board.length; i++) {
        if(board[row][i] === ' Q ') return false;
    }    
    return true;
}
function noQueenCol(board, col) {
    for(let i = 0; i < board.length; i++) {
        if(board[i][col] === ' Q ') return false;
    }    
    return true;
}

function upLeft(board, row, col) {
    while(row >= 0 && col >= 0) {
        if(board[row--][col--] === " Q ") return false;
    }    
    return true;
}
function upRight(board, row, col) {
    while(row >= 0 && col < board.length) {
        if(board[row--][col++] === " Q ") return false;
    }    
    return true;
}
function downLeft(board, row, col) {
    while(row < board.length && col >= 0) {
        if(board[row++][col--] === " Q ") return false;
    }    
    return true;
}
function downRight(board, row, col) {
    while(row < board.length  && col < board.length) {
        if(board[row++][col++] === " Q ") return false;
    }    
    return true;
}

function noQueenDiag(board, row, col) {
    return upLeft(board, row, col) && upRight(board, row, col) && downLeft(board, row, col) && downRight(board, row, col);
}

function noQueen(board, row, col) {
    return noQueenRow(board, row) && noQueenCol(board, col) && noQueenDiag(board, row, col);    
}
function format(board) {
    let sol = [];
    for(let i = 0; i < board.length; i++) {
        sol.push(board[i].join(""));
    }
    return sol;
}
function boardInit(n) {
	let board = [];
	for(let i = 0; i < n; i++) {
		board[i] = [];
		for(let j = 0; j < n; j++) {
			board[i][j] = " . ";
		}
	}
	return board;
}
function print(board) {
	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board[0].length; j++) {
			process.stdout.write(board[i][j]);
		}
		console.log('');
	}
	console.log('=============');
}
var solveNQueens = function(n) {
    let sols = [];
    let board = boardInit(n);    
    function _helper(row) {
		print(board);
        if(row === n) {
            sols.push(format(board));
            return;
        }
        for(let col = 0; col < n; col++) {
            if(noQueen(board, row, col)) {
                board[row][col] = ' Q ';
                _helper(row + 1);
                board[row][col] = ' . ';
            } else {
				board[row][col] = ' Q ';		
				print(board);
				board[row][col] = ' . ';
			}

        } 
    }
    _helper(0);
    return sols;
};
let ans = solveNQueens(4);
console.log(ans);
