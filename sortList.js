//Output: 1->2->3->4
function llNode(val) {
    this.val = val;
    this.next = null;
}

//Input: 4->2->1->3
let one = new llNode(1);
let two = new llNode(2);
let three = new llNode(3);
let four = new llNode(4);

four.next = two; 
two.next = one;
one.next = three;
 
//insert a dummy node before the first node

//insert a dummy node right after the first node


// 4 -> 2 -> 1 -> 3 -> null

// null -> 4 -> null -> 2 -> 1 -> 3 -> null

// null -> 2 -> 4 -> null -> 1 -> 3 -> null 
// null -> 1 -> 2 -> 4 -> null -> 3 -> null 
// null -> 3 -> 1 -> 2 -> 4 -> null -> null 

//to get rid of the left dummy just set the 3 as the head and the ref is lost
//to get rid of the right dummy just use the pivot ref
//
// 3 -> 1 -> 2 -> 4 -> null 

// to sort recursively pass the head in and the pivot as the last elem
// to sort the right side pass one after the pivot and the tail

function insertIntoLL(dummyNode, insertThis) {
    let tmp = dummyNode.next;
    let ret = insertThis.next;
    dummyNode.next = insertThis;
    insertThis.next = tmp;
    return ret;
}

function printList(node) {
    console.log('START PRINT');
    while(node) {
        console.log(node.val);
        node = node.next;
    }
    console.log('END PRINT');
}

function sortList(startNode, stopNode) {
    if(startNode === stopNode) return;
    //printList(startNode);
    //printList(stopNode);

    //attach the left before the head
    let leftDummy = new llNode(null);
    insertIntoLL(leftDummy, startNode);
    //attach the right after the head
    let rightDummy = new llNode(null);
    insertIntoLL(startNode, rightDummy);
    
    let pointer = rightDummy.next;
     
    while(pointer !== stopNode) {
        //tmp var
        let nextPointer = pointer.next;
        console.log(pointer.val)
        //using startNode as our pivot 
    	if(pointer.val < startNode.val) {
            //everything to left is less than the pivot
            let right = insertIntoLL(leftDummy, pointer);
            rightDummy.next = right;
        } else {
            //everything to the right is greater or equal to the pivot
            
            let right = insertIntoLL(rightDummy, pointer);
            rightDummy.next = right;
        }
        pointer = nextPointer;
    }
    //loose the ref, but keep the LL tied together 
    startNode.next = rightDummy.next;
	//remove the extra node at the beggining 
    //are we loosing the left side of this list?
    sortList(leftDummy.next, startNode);
	//startnode.next should be rightDummy.next
    sortList(startNode.next, stopNode); 
}

sortList(four, null);
printList(one);
