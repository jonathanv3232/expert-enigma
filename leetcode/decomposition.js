/*
		leetcode: https://leetcode.com/problems/range-sum-query-mutable/
		https://www.geeksforgeeks.org/sqrt-square-root-decomposition-technique-set-1-introduction/
*/

var NumArray = function(nums) {
  //break up nums into sqrt(nums) blocks
  this.blockSize = Math.floor(Math.sqrt(nums.length));
  this.numBlocks = Math.ceil(nums.length / this.blockSize);
  this.allNums = nums;

  this.blocks = [];
  this.sums = [];
  
  for(let i = 0; i < this.numBlocks; i++) {
    let block = nums.slice(i * this.blockSize, i * this.blockSize + this.blockSize);
    this.blocks.push(block);
    let sum = 0;
    for(let j = 0; j < this.blocks[i].length; j++) {
      sum += block[j];
    }
    
    this.sums.push(sum);
  }
	
};

NumArray.prototype.update = function(i, val) {
	//get block to be update
	let block = Math.floor(i / this.blockSize);
	//update value in the block and the array
	let index = i % this.blockSize;
	let prevVal = this.blocks[block][index];
	this.blocks[block][index] = val;
	//subtract or add the diff from the totalSum
	if(Math.sign(prevVal - val) === -1) {
		this.sums[block] += val - prevVal;
	} 
	else {
		this.sums[block] -= prevVal - val;

    }

	this.allNums[i] = val;
};

NumArray.prototype.sumRange = function(i, j) {
  //figure out the first block and is it partial or complete

	//start may be a float number
  let start = i / this.blockSize;
	//find the first index of the starting block
  let startingBlock = Math.floor(start);
	//is the first block being used partially used?
  let startingBlockPartial;

  if(start !== startingBlock) startingBlockPartial = true;
  else startingBlockPartial = false;

 	//end block float 
  let end = j / this.blockSize;
	//get the first index of the ending block
  let endingBlock = Math.floor(end);
	//find the actual index int the block
  let remainder = j % this.blockSize;
  
  //are we are using the entire block?
  let endingBlockPartial; 
	
	if(remainder === this.blocks[endingBlock].length) endingBlockPartial =  false;
	else endingBlockPartial = true; 
 	//start the count 
  let totalSum = 0;

	//if the starting and endingblock are greater than one block apart
  if(endingBlock - startingBlock > 1) {
    if(startingBlockPartial) {
      let startIndex = i % this.blockSize;
		//count the starting block sum from the startIndex to the end 
      totalSum += this.calcPartialBlocks(startingBlock, startIndex, this.blocks[startingBlock].length - 1);
    } else {
		//if it is not partial then add the whole thing
		totalSum += this.addCompleteBlocks(startingBlock, startingBlock);
	}

    if(endingBlockPartial) {
      let endIndex = j % this.blockSize;
		//count the endingBlock from the first index to the endingIndex
      totalSum += this.calcPartialBlocks(endingBlock, 0, endIndex);
    } else {
		//if it is not partial then add the whole block
		totalSum +=	this.addCompleteBlocks(endingBlock, endingBlock);
    }

   	//since there is always a difference always add the middle blocks to the sum 
    totalSum += this.addCompleteBlocks(startingBlock + 1, endingBlock - 1);
  } else {
	//this means the blocks are spanning only two away
	//or that they are on the same block
    for(let x = i; x <= j; x++) {
      totalSum += this.allNums[x];
    }
  }

  return totalSum;
};

NumArray.prototype.addCompleteBlocks = function(startingBlock, endingBlock) {
	let totalSum = 0;
	for(let i = startingBlock; i <= endingBlock; i++) {
		totalSum += this.sums[i];
    }
	return totalSum;
};

NumArray.prototype.calcPartialBlocks = function(block, starting, ending) {
  let totalSum = 0;
    for(let i = starting; i <= ending; i++) {
		totalSum += this.blocks[block][i];
    }
  return totalSum;
};
// ============================ TESTING ==============================
const testCase = require("./decomp_test");
const expected = require("./testcase");

let vals = testCase.arr;
let arr = testCase.arr[0][0];
let numArr = new NumArray(arr);
let functionCalls = testCase.functionCalls;

let answer = [0];
let logs = [];

for(let i = 1; i < functionCalls.length; i++) {
	let valOne = vals[i][0];
	let valTwo = vals[i][1];

	if(functionCalls[i] === "update") {
		numArr.update(valOne, valTwo);
		answer.push(null);
		logs.push([valOne, valTwo]);
	} else {
		let x = numArr.sumRange(valOne, valTwo);
		answer.push(x);
    }
}

for(let i = 0; i < expected.length; i++) {
	if(expected[i] != answer[i]) {
		console.log('update ' + logs[i][0] + ' , ' + logs[i][1]);
		console.log(expected[i] + ' and ' + answer[i] + ' did not match');	
	}
}

