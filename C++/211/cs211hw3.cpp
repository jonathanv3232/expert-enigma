#include <iostream>

using namespace std;

void print(int board[8][8], int &solutions) {
  solutions += 1;
  cout << solutions << endl;
	
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
  int r;
  int c = -1;
  
  int numOfSolutions = 0;

  next_col:   /*column section*/
    c++;            //increase column index
    //set a wall to stop c++
    if(c == 8)
      goto print;
    r = -1;

  next_row:   /*row section*/
    r++;                    //increase row index
    if(r == 8) { // how does me getting to the last row ensure that I am done?
      goto backtrack;
    }             // set a wall to stop r++

    /* 3 tests */
      /* row test */
          for(int i = 1; (c-i) >= 0; i++) {
           if(b[r][c-i] == 1) {
               goto next_row;
            }
          }
      /* up diagnial test */
          for(int i = 1;(r - i) >= 0 && (c - i) >= 0;i++)//set a wall to stop  r-i and c-i
              if(b[r-i][c-i] == 1)
                goto next_row;

      /* down diagnal test */
          for(int i=1;(r + i) <= 7 && (c - 1) >= 0;i++)//set a wall to stop  r+i and c-i
              if(b[r+i][c-i] == 1)
                goto next_row;

    /* After passed 3 tests*/

       b[r][c] = 1;      
       goto next_col; //move on to next column

    backtrack:  /*backtrack section*/
      c--;                        //go back one column
      if(c == -1) {
        return 0;
      }                    //set a wall to stop c--
      r = -1;
   
     // find queen
     while (b[r][c] != 1)
	r++;
     // while loop stops at queen so erase queen
     b[r][c] = 0;
     goto next_row;
 
    print:      /*print section*/
       numOfSolutions += 1;
       cout << numOfSolutions << endl;
      
       for(int i = 0; i < 8; i++){
          for(int j = 0; j < 8; j++) {
             cout << b[i][j];
          }
          cout << endl;
        }

      goto backtrack;             //go back to ?nd more solutions
}

