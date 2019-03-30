Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

143 2219
432 1219


//loop backwards and multiply the number by i - len * 10
//using a heap take the k greatest ones and remove them (max heap)
//
for(let i = num.length - 1; i >= 0; i--) {
    heap.insert([10 * num[i]);
}
//now that everything is inserted pop out the one's with the greatest value
//you will no what digit it is because of the number of zeroes
//
//
num = "149"
num = '5543'


//there should be no value that is greater than this number to the left and a value that is greater than to the right 
