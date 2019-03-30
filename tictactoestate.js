// https://leetcode.com/problems/valid-tic-tac-toe-state/description/
// https://leetcode.com/problems/number-of-atoms/description/
// 
// answer should have been:
// 
// 1. builtins
// 2. regex
// 3. brute force (had trouble on this part?)
// 4. mention KMP or other smarter search algorithm
// 
// result = configure figma
// query: fig     
// 
// output: con<b>fig</b>ure <b>fig</b>ma
// 
// {
//  a: b     set of values in the map {b, a, c}
//  b: a
//  c: c
// }
// 
// 
// 
// s1 = "abc"
// change all a's to d's "dbc"
// change all b's to a's "dac"
// change all d's to b's "bac"
// 
// // abc -> bbc -> aac (without intermediate)
// change all a's to b's,
// change all b's to a's, this breaks
// s2 = "bac
// true
// 
// 
// 
// 
// 
// 
// s1 = "abcd"	
// 	change all a's to f's
//     change all b's to x's
//     ....
//     
// s2 = "fxyz"
// True
// 
// s1 = "aa"
// s2 = "ba"
// false


// how can i change s1 to s2 vs. how can i tell if its impossible to change s1 to s2
// def can_change(s1, s2):
// 	mappings = defaultdict(set)
//     for i in xrange(len(s1)):
//     	c1 = s1[i]
// 		c2 = s2[i]
//         mappings[c1].add(c2)
// 
// 	for c in mappings:
//         # if a character ever maps to more than one output char, its impossible
//     	if len(mappings[c]) > 1: 
//         	return False
// 	return True

//first symbol placed is X
//if there is  a winner you can't have added more
// 
// input: array of three strings
// 
// Example 1:
// Input: board = ["O  ", "   ", "   "]
// Output: false
// Explanation: The first player always plays "X".
// 
// Example 2:
// Input: board = ["XOX", " X ", "   "]
// Output: false
// Explanation: Players take turns making moves.
// 
// Example 3:
// Input: board = ["XXX", "   ", "XXX"]
// Output: false
// 
// Example 4:
// Input: board = ["XOX", "O O", "XOX"]
// Output: true
// 

// XOO
// XXO
// XOX

//["XXX","XOO","OO "]
// ["XOX",
//  "O O",
//  "XOX"]

function xGoesFirst(board, winner) {
    let xCount = 0;
    let oCount = 0;
	for(let i = 0; i < board.length; i++) {
    	for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === "X") xCount++;
            else if(board[i][j] === "O") oCount++;
        }
    }
    
    if(winner && winner === "O") return oCount === xCount; 
    if(winner && winner === "X") return oCount + 1 === xCount;
    if(xCount + oCount === 1 && oCount > xCount) return false;
    if(oCount > xCount) return false;
    if(xCount > oCount + 1) return false;
    
    return true;
}

function onlyOneWin(board) {
    //check for both X and O
   	//if there are two wins return false 
    
    //check diagnol
    let diagnolWinO = checkDiag("O", board);
    let diagnolWinX = checkDiag("X", board);
    //check horizontal
    let horizontalWinO = checkHorizontal("O", board);
    let horizontalWinX = checkHorizontal("X", board);
    //check vertical
    let verticalWinO = checkVertical("O", board);
    let verticalWinX = checkVertical("X", board);
    
    if((diagnolWinX || horizontalWinX || verticalWinX) && (diagnolWinO || horizontalWinO || verticalWinO)) return false;
    
    if(diagnolWinX || horizontalWinX || verticalWinX) return "X";
    else if(diagnolWinO || horizontalWinO || verticalWinO) return "O";
    
    return false; 
}


function checkDiag(symbol, board) {
    //two diagnols
    //from top left to bottom right
    let topLeftMatch = 0;
    for(let i = 0; i < 3; i++) {
    	if(board[i][i] === symbol) {
            topLeftMatch++;
        }
    }
    let bottomLeftMatch = 0;
    //from bottom left to top right
    for(let i = 2; i >= 0; i--) {
        if(board[i][2 - i] === symbol) {
            bottomLeftMatch++;
        }
    }
    if(topLeftMatch === 3 || bottomLeftMatch === 3) return true;
    return false;
}

function checkHorizontal(symbol, board) {
    let stringMatch = 0;
    for(let i = 0; i < 3; i++) {
        let symbolMatch = 0;
        for(let j = 0; j < 3; j++) {
            if(symbol === board[i][j]) {
                symbolMatch++;
            }
        }
        if(symbolMatch === 3) stringMatch++;
    }
    return stringMatch === 1;
}

function checkVertical(symbol, board) {
    let wins = 0;
    for(let j = 0; j < 3; j++) {
        let symbolMatch = 0;
    	for(let i = 0; i < 3; i++) {
            if(board[i][j] === symbol) {
                symbolMatch++;
            }
        }
        if(symbolMatch === 3) wins++;
    }
    return wins === 1;
}

function validTicTacToe(board) {
    //make sure that there isn't any moves after a win
    // TODO: calculate: isXWinner, isOWinner. return false if both are true
    // pass in the winner to xGoesFirst
    // noMoreThanOneWin can only return 'X' or 'O' or false. its too overloaded

    //return false if both won or return a winner
    let noMoreThanOneWin = onlyOneWin(board);
    //make sure players take turns
    let noMoreThanOneMove = xGoesFirst(board, noMoreThanOneWin);
    
    return noMoreThanOneMove && noMoreThanOneWin;
}

console.log(validTicTacToe(["XOX", "O O", "XOX"]));
