require('../dist') 

const LinkedNode = DataStructures.LinkedListNode;
const LinkedList = DataStructures.LinkedList;


const nextNode = new LinkedNode(2);
const node = new LinkedNode(1);
node.pointTo(nextNode);
const otherNode = new LinkedNode(3);

const list = new LinkedList(node);

list.add(otherNode);

console.log(list)