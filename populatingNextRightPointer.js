function SpecialNode(val) {
    this.val = val;
    this.right = this.left = this.next = null;
}

let root = new SpecialNode(-1);
let zero = root.left = new SpecialNode(0);
let one = root.right = new SpecialNode(1);
let two = zero.left = new SpecialNode(2);
let three = zero.right = new SpecialNode(3);
let four = one.left = new SpecialNode(4);
let five = one.right = new SpecialNode(5);

two.left = new SpecialNode(6);
two.right = new SpecialNode(7);
three.left = new SpecialNode(8);
three.right = new SpecialNode(9);
//it breaks here
four.left = new SpecialNode(10);
four.right = new SpecialNode(11);
five.left = new SpecialNode(12);
five.right = new SpecialNode(13);

//{-1, 0,1 ,2,3,4,5 ,6,7,8,9,10,11,12,13}

//print the tree after the function
function llPrint(root) {
    if(!root) return;
    //go all the way to the left
    printLinkedList(root);
    llPrint(root.left);
}

function printLinkedList(node) {
    let pointer = node;
    while(pointer) {
        console.log(pointer.val);
        pointer = pointer.next;
    }
}
/*
        -1               
       /  \
      0    1
     / \  / \
    2  3  4  5
   / \/ \/ \/ \
  6  78910111213

*/

//1 2 4 5 1 6 3 7
 
function connect(root) {
    if(!root) return;
    connectTheGaps(root);
    connect(root.left);
    if(root.left && root.right)
        root.left.next = root.right;
    connect(root.right);
}


function connectTheGaps(root) {
    //go left then all the way right
    let node = root;
    if(node.left) {
        node = root.left;
        //now go all the way right 
        if(node.right) {
            //go all the way right
            node = node.right;
            while(node.right) {
                node = node.right;        
            }
            //now we have the node to set the next for
        } else {
            return;
        }
    } else {
        return;
    }

    //go right then left
    let tmp = root.right 
    while(tmp.left) {
        tmp = tmp.left
    }
    //tada
    //console.log(connecting
    node.next = tmp;

}

function preOrder(root) {
    if(!root) return;
    preOrder(root.left);
    console.log(root.val);
    preOrder(root.right);
}

//preOrder(root);
connect(root);
llPrint(root);
