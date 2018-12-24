#include <iostream>

using namespace std;

void print(int board[][8], int &solutions) {
  solutions += 1;
  cout << numOfSolutions << endl;
  for(int i = 0; i < 8; i++){
    for(int j = 0; i < 8; j++) {
      cout << board[i][j];
    }
    cout << endl;
  }

}

int main() {
  /*board setup section*/
  int b[8][8] = {0};  //8x8 board, 0s are blanks, 1s are queens

  b[0][0] = 1;        //putting 1st queen piece on upper-left corner
  int r = -1; // difference in making these 0s
  int c = -1;

  int numOfSolutions = 0;

  next_col:   /*column section*/
    c++;            //increase column index
    //set a wall to stop c++
    if(c == 8) {
      cout << "going to call the print fucntion" << endl;
      goto print;
    }
  next_row:   /*row section*/
    r++;                    //increase row index
    if(r == 8) { // how does me getting to the last row ensure that I am done?
      goto backtrack;
    }             // set a wall to stop r++

    /* 3 tests */
      /* row test */
          for(int i = 0; c-i >= 0; i++) {
            if(b[r][c-i]) {
              goto next_row;
            }
          }
      /* up diagnial test */
          for(int i = 1;r - i >= 0 && c - i >= 0;i++)//set a wall to stop  r-i and c-i
              if(b[r-i][c-i])
                goto next_row;

      /* down diagnal test */
          for(int i=1;r + i <= 7 && c - 1 >= 0;i++)//set a wall to stop  r+i and c-i
              if(b[r+i][c-i])
                goto next_row;

    /* After passed 3 tests*/
       b[r][c]=1;                  //place a queen
       goto next_col;              //move on to next column
    backtrack:  /*backtrack section*/
      c--;                        //go back one column
      if(c == -1) {
        return 0;
      }                    //set a wall to stop c--
      r=0;
      for(int i = 0; r + i < 8; i++) {  //find a queen in current col that we placed before.
        if(b[r+i][c]) {
          b[r][c] = 0;                //remove that founded queen
          goto next_row;              //move on to next row
        }
      }

    print:      /*print section*/
      print(b, numOfSolutions);    //print the board
      goto backtrack;             //go back to ﬁnd more solutions
}
