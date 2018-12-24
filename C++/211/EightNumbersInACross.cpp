/*
define positions(index)
one of the choice is following
    ___ ___
____|_0_|_1_|___
|__2_|_3_|_4_|_5_|
   |_6_|_7_|

*/
bool ok(cross, position){
  //create neighborhood table(2d array) based on above definition.
  int adjacencyCheck[8][7];
  adjacencyCheck = [[1,2,3,4,-1], [0,3,4,5,-1], [0,3,6,-1], [0,2,6,4,7,1,-1], [0,3,6,1,7,5,-1], [1,4,7,-1], [2,3,4,7,-1], [6,3,4,5,-1]];

  //test for same number (same row test in 8 queens)
  for(int i = 0; i < position; i++) {
    if(i == cross[i]) {

    }
  }
  //test for consecutive integers
      //step1: get one of the adjacent squares' index
      for(int i = 0; i < adjacencyCheck[position].size(); i++){
        if(adjacencyCheck[i] == )
      }
      //step2: value in that index - value in current col ==1 or -1
      //step3: repeat 1,2 until no more neighbors exitst
}

void main() {

int cross[8];

}
