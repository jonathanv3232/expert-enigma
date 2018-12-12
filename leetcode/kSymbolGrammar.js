function Node(val) {
    this.next = null
	this.val  = val
}

function addNext(curr, val) {
		let newNode = new Node(val);
		newNode.next = curr.next;
		curr.next = newNode
		curr = curr.next.next;
		return curr;
} 

function solution(N, K) {
	const lk = new Node(0)
	let curr; 

	for(let i = 1; i <= N; i++) {
		curr = lk;
		while(curr) {
			if(curr.val == 0) {
				curr = addNext(curr, 1);
			}			
			else {
				curr = addNext(curr, 0);
			}
		}	
    }

	let counter = 1;
	let val = null;

    curr = lk

	while(counter <= K) {
		if(counter === K) {
			val = curr.val;
		}	

		curr = curr.next;
		counter++;
    }

	return val;
}
