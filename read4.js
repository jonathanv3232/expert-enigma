//if you call read multiple times it should be a class basically a task queue
//What information do you need...
//
//read4(arr) //returns the chars left in the file and puts the chars in the arr passed in
function ReadClass() {
    this.tempBufferIndex = 0;        
    this.tempBuffer = [];
}

function.prototype.Read(arr, charsToRead) {
    if(charsToRead === 0) return arr;
    
    //there might be somthing in the temp buffer between calls
    let leftInBuffer = this.tempBuffer.length - (this.tempBufferIndex + 1);
    if(charsToRead < leftInBuffer) {
        lastIndex = this.tempBufferIndex;
        this.tempBufferIndex += charsToRead;
        arr.push(tempBuffer.slice(lastIndex, this.tempBufferIndex));
        return arr;
    } else {
        //copy what is in the buffer and then continue
        arr.push(tempBuffer.slice(this.tempBufferIndex));
        charsToRead -= leftInBuffer;
    }

    let calls = Math.floor(charsToRead / 4);

    for(let i = 0; i < calls; i++) {
        let charsRead = read4(this.tempBuffer);        
        //if(charsRead != 
        arr.push(this.tempBuffer.slice());
    }

    //there might be a remainder to read
    if(charsToRead % 4 > 0) {
        let charsRead = read4(tempBuffer);
        arr.push(tempBuffer.slice(0, charsToRead % 4));
        this.tempBufferIndex += charsToRead % 4; 
    }
}

let readClass = new ReadClass();

//should read 10 chars from a file that has 100 chars
