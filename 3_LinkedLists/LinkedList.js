//Linked List Implementation

//LinkedList

const Linkedlist = function(){
    this.head = null;
    this.tail = null;
  }
  
  const Node = function(val) {
    this.val=val;
    this.next = null;
  }
  
  Linkedlist.prototype.addToTail = function (val) {
    let newNode = new Node(val);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode; // if this is the first node added
    this.tail= newNode;
  }
  
  Linkedlist.prototype.removeFromHead = function () {
    if(!this.head) return null;// if list list is already empty return null
    let result = this.head.val;
    this.head= this.head.next;
    if(!this.head) this.tail = null; // if list become empty after removal, set head and tail to null
  }
  
  let List = new Linkedlist();
  List.addToTail(1);
  List.addToTail(2);
  List.addToTail(3);
  List.removeFromHead()
  List.removeFromHead()
  List.removeFromHead()
  console.log(List)