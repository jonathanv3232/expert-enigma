/*

4 -> 3 -> 5 -> 2 -> 1

1 -> 2 -> 3 -> 4 -> 5

*/
function Node(val) {
	this.val = val;
    this.next = null;
}

let head = new Node(4);
head.next = new Node(3);
head.next.next = new Node(5);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);


/*
 4 -> 5 -> 3 -> 2 -> 1 -> N
           |
 D -> 4 -> 5 -> 3 -> 2 -> 1 -> N
                |
 D -> 4 -> 5 -> 3 -> 2 -> 1 -> N
 
 3 -> D -> 4 -> 5 -> 2 -> 1 -> N
                     |
 3 -> D -> 4 -> 5 -> 2 -> 1 -> N
 
*/

function sortList(startNode, endNode) {
    if(startNode === null) return;
    if(startNode === endNode) return;
    
	let dummyNode = new Node(null);    
    dummyNode.next = startNode;
    let holdsDummy = null;
    let currNode = startNode.next;
    let head = dummyNode;
    let lastCorrectPlace = null;  
    
    while(currNode && currNode !== endNode) {
        let next = currNode.next;
        if(starNode.val > currNode.val) {
            if(!holdsDummy) holdsDummy = currNode;
            if(lastCorrectPlace) {
                lastCorrectPlace.next = next;
            } else {
                startNode.next = next;
            }
            
        	currNode.next = head;    
            head = currNode;
        } else {
            lastCorrectPlace = currNode;
        }
        currNode = next;
    }
    
    let a = sortList(head, dummyNode);
    let b = sortList(dummyNode.next, endNode);
    if(holdsDummy) holdsDummy.next = dummyNode.next;
    a.next = b;
    return a;
}

let newHead = sortList(head, null);
function printList(node) {
    let str = "";
    while(node) {
        str += node.val;
        str += "->";
        node = node.next;
    }
    console.log(str);
}
printList(head);
//printList(newHead);
