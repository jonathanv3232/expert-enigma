/**
 * @param {string} digits
 * @return {string[]}
 */

function Node(data) {
    this.val = data;
    this.next = null;
    this.tail = this;
}

function Queue() {
    this.linkedList = new Node(1);
    
    this.push = function (data) {
        this.linkedList.tail.next = new Node(data);
        this.linkedList.tail = this.linkedList.tail.next;
    }
    
    this.pop = function () {
        let ret = this.linkedList.val;
        this.linkedList = this.linkedList.next;
        return ret;
    } 
    
    this.toList = function () {
        let ret = [];
        let curr = this.linkedList;
        while(this.curr.val != null) {
            ret.push(this.curr.val);
            curr = curr.next;
        }
        return ret;
    }
    
    this.peek = function () {
        return this.linkedList.val;
    } 
}

function initQ(q, arr) {
    for(let i = 0; i < arr.length; i++) {
        q.push(arr[i]);
    }
}

var letterCombinations = function(digits) {
    if(digits.length == 0) return [];
    var mapping = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p','q','r', 's'],
        '8': ['t','u', 'v'],
        '9': ['w','x', 'y', 'z']
    };
    
    let arr = [];
    for(let i = 0; i < digits.length; i++) {
        arr.push(mapping[digits[i]]); 
    }
    
    let index = 1;
    
    let q = new Queue();    
    
    initQ(q, arr[0]);
    q.pop();
    
    while(true) {
       if(q.peek().length === digits.length) return q.toList(); 
       let current = q.pop(); 
       for(let i = 0; i < arr[index].length; i++) {
           let currStr = current + arr[index][i];
           q.push(currStr);
       } 
       index++;
    } 
};
