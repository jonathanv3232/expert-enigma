function DoublyList() {
	this.head = null;	
    this.tail = null;
    this.size = 0;
}

DoublyList.prototype.remove = function(node) {
    //only one elem
    if(this.head && this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else if(this.head === node) { //head
    	this.head = node.next;    
    } else if(this.tail === node) { //tail
    	this.tail = this.tail.prev;	    
        this.tail.next = null;
    } else {
        //somewhere in the middle
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = null;
    
    this.size--;
    return node;
}

DoublyList.prototype.addToEnd = function(node) {
    //this node is the only one being added
    if(!this.tail) {
        this.head = node;
        this.tail = node;
    } else { 
        this.tail.next = node;    
        node.prev = this.tail;
        this.tail = node;
    }
    this.size++;
    return node;
}

DoublyList.prototype.printList = function() {
    let curr = this.head;
    while(curr) {
        console.log(curr.key, curr.val);
        curr = curr.next;
    }
}

DoublyList.prototype.addNewNode = function(key, val) {
	let newNode = new Node(key, val);    
    let ref = this.addToFront(newNode);
    return ref;
}

DoublyList.prototype.addToFront = function(node) {
    //only elem
    if(!this.head) {
    	this.head = node;    
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
   	this.size++; 
    return node; 
}

function Node(key, val) {
    this.val = val;
    this.key = key;
    this.next = this.prev = null;
}

var LRUCache = function(cap) {
	this.listMap = {}; 
    this.cap = cap;
    this.orderList = new DoublyList();
};

LRUCache.prototype.get = function(key) {
    //not in the cache
    if(this.listMap[key] === undefined)
        return -1;

    let ref = this.listMap[key];
    const value = ref.val;

    this.orderList.remove(ref);
    this.orderList.addToFront(ref);

    return value;
};

LRUCache.prototype.put = function(key, value) {
    //just update the val for this key
    if(this.listMap[key]) {
        console.log('already in the map', key, value);
    	let ref = this.listMap[key];    
        ref.val = value;
        this.get(key);
    } else if(this.orderList.size < this.cap) {
    	let ref = this.orderList.addNewNode(key, value);
        this.listMap[key] = ref;
    } else {
        let ref = this.orderList.remove(this.orderList.tail);
        let keyToDelete = ref.key;
       	delete this.listMap[keyToDelete]; 

        ref = this.orderList.addNewNode(key, value);
        this.listMap[key] = ref;
    }

};

let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.put(1, 5);
console.log(cache.get(1));       // returns 5 
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4
