function copyRandomList(realNode) {
    if(!realNode) return null;
    let head = realNode;
	let copyHead = new RandomListNode(realNode.val);    
   	let copyNodePointer = copyHead; 
    let node = head.next;
   	let map = new Map(); 
    
    map.set(null, null);
    map.set(head, copyHead);
    
   	while(node !== null) {
        //make the copy
    	let copyNode = new RandomListNode(node.val);		    
        //store the real ref to the copy equivalent
        map.set(node, copyNode);
        //put the copy in the right place
        copyNodePointer.next = copyNode;
        //update the pointers
        copyNodePointer = copyNodePointer.next;
        node = node.next;
    }
    
    node = head;
    copyNodePointer = copyHead;
   	 
    while(node !== null) {
    	copyNodePointer.random = map.get(node.random);	    
        node = node.next;
        copyNodePointer = copyNodePointer.next;
    }
    
    return copyHead;
}
