#include<iostream>  
using namespace std;
int main() {
  int b[8][8] = {0};
	int r = 0, c = 0, counter = 0, i = 0;
  b[0][0] = 1;

nc:     c++;

        if(c==8){
                counter++;
                goto print;
        }

        r = -1;

nr:     r++;
        if (r == 8) goto backt;

	// Row test
        for ( i = 0; i < c; i++ ){
		if(b[r][i] == 1) goto nr;
	}

	// Up diagonal test
        for ( i = 1 ; ((r - i) >= 0) && ((c - i) >= 0); i++ ) {
		if ( b[r-i][c-i] == 1 ) goto nr;
	}


	// Down diagonal test
        for ( i = 1 ; ((r + i) < 8) &&  ((c - i) >= 0); i++ ) {
		if( b[r+i][c-i] == 1 ) goto nr;
	}

        b[r][c]=1;
        goto nc;

backt:  c-- ;
        if (c == -1) return 0;

	r=0;
	while ( b[r][c] != 1 ) r++;
	b[r][c]=0;

	goto nr;

print:  cout << "solution" << " " << counter <<" "<<endl;
        for(i=0;i<8;i++){
                for(int j=0;j<8;j++){
                        cout<<b[i][j]<< " ";
                        }
                cout<<endl;
        }
	goto nr;

}
