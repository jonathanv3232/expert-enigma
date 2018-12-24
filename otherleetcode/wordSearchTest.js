function valid(board, i, j) {
   if(i >= 0 && j >= 0 && i < board.length && j < board[0].length) return true;
    return false; 
}
function printBoard(board) {
    console.log('------------------');
    for(let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function wordFinder(board, i, j, currStr, word, wordIndex) {
    let a, b, c, d;
    if(currStr.length === word.length) return true;
    if(valid(board, i, j) && board[i][j] === word[wordIndex]) {
        let tmp = board[i][j];
        board[i][j] = null;
        printBoard(board);
        a = wordFinder(board, i + 1, j, currStr + word[wordIndex], word, wordIndex + 1);
        if(a) {
            board[i][j] = tmp;
            return true;
        }
        b = wordFinder(board, i - 1, j, currStr + word[wordIndex], word, wordIndex + 1);
        if(b) {
            board[i][j] = tmp;
            return true;
        }
        c = wordFinder(board, i, j + 1, currStr + word[wordIndex], word, wordIndex + 1);
        if(c) {
            board[i][j] = tmp;
            return true;
        }
        d = wordFinder(board, i, j - 1, currStr + word[wordIndex], word, wordIndex + 1);
        if(d) {
            board[i][j] = tmp;
            return true;
        }
        board[i][j] = tmp;
    }
    return false;
}

var exist = function(board, word) {
    let firstChar = word[0];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === firstChar) {
                if(wordFinder(board, i, j, "", word, 0))
                    return true;
            }
        }
    }
    return false;
};
let board = [['c', 'a', 'a'], ['a','a', 'a'], ['b', 'c', 'd']];
let word = 'aab';
console.log(exist(board, word));
