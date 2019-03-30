function Node(val) {
    this.val = val;
    this.next = this.prev = null;
}

function DoublyLinkedList() {
    this.head = this.tail = null;
    this.numberOfValues = 0;
}


//insert a node into the list
DoublyLinkedList.prototype.insert = function(val) {
    //make a new node with the data
    let newNode = new Node(val);
    //if this is the first Node in the list then set the head and tail
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        //set the prev
        newNode.prev = this.tail;
        //add to the tail
        this.tail.next = newNode; 
        //set this is as the tail node since it is the last one
        this.tail = newNode;
    }
    //update this value
    this.numberOfValues++;
}

//remove a node with a specific val 
DoublyLinkedList.prototype.remove = function(val) {
    let curr = this.head;
    while(curr && curr.val !== val) {
        //find the right val
        curr = curr.next;
    }
    if(cur.val !== val) return;
    //we found the node now remove it
    //update the prev and next pointers
    if(curr.prev) {
        curr.prev.next = curr.next;
    }
    if(curr.next) {
        curr.next.prev = curr.prev;
    }
}

DoublyLinkedList.prototype.insertAfter = function(node) {
}

DoublyLinkedList.prototype.traverse = function(node) {
}

DoublyLinkedList.prototype.traverseReverse = function(node) {
}

DoublyLinkedList.prototype.print = function(node) {
}


