#include <iostream>
#include <stdlib.h>
using namespace std;

bool ok(int q[], int c){
  	 // row test
	for ( int i = 0; i < c; i++ ){	 
        	if( q[i] == q[c]||c-i == abs(q[c]-q[i]) ) return false;
	}
	return true;
}

void backtrack(int &c){
    //decrease col
	c--;
    //set stop point
	if (c==-1) {
		exit(0);
	}
}

void print(int q[], int counter){
	 cout << "solution" << " " << counter << endl;
        for(int i=0;i<8;i++){
        	cout << q[i]+1 << " " ;
        }
        cout << endl << endl;
        for(int i=0;i<8;i++){

                for(int j=0;j<8;j++){
                        if(i==q[j]) cout << "1" << " ";
                        else cout << "0" << " ";
                 }
        	cout << endl;
        }
        cout << endl;
}

int main(){

    // Setting up the board
	int q[8] = {0};
	int c = 0;
	int counter = 0;

    bool from_backtrack=false;
    while(true){
        while(c<8){
            if(!from_backtrack) {
                /*column section*/
		c++;
		if(c == 8) break;
		q[c]=-1;
            }
            from_backtrack=false;
            while(q[c]<8){
		q[c]++;
		if(q[c] == 8){
			from_backtrack = true;
			backtrack(c);
		}
		if(ok(q,c) == true) break;
		
                /*row section*/
                //backtrack(c);  follows
                //from_backtrack=true;

            }
        }
	counter++;
        print(q,counter) ;/*print section*/
        backtrack(c);
        from_backtrack=true;
    }
}