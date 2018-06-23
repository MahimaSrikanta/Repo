/*
Reverse a linked list
Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing links between nodes.

Examples:

Input : Head of following linked list  
       1->2->3->4->NULL
Output : Linked list should be changed to,
       4->3->2->1->NULL
*/

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
    else this.head = newNode;
    this.tail= newNode;
  }
  
  Linkedlist.prototype.removeFromHead = function () {
    if(!this.head) return null;
    let result = this.head.val;
    this.head= this.head.next;
    if(!this.head) this.tail = null;
  }
  
/*
  Logic 1: Create a new node with the data set to current's next node value and place it in front of the linked list and set to head.
  TimeComplexity : O(n)
  Space Complexity : O(n)
*/
  let Reverse = function(head) {
    let curr = head;
    let fake = head;
    while(curr.next !== null){
      let node = new Node(curr.next.val)
      curr.next = curr.next.next;
      node.next = fake;
      fake = node
    }
    console.log(JSON.stringify(fake));
  }

/*
  Logic 2: Keep three pointers  prev, curr and next  and go on reversing the link between current and previous nodes
  TimeComplexity : O(n)
  Space Complexity : O(1)
*/


  let List = new Linkedlist();
  List.addToTail(1);
  List.addToTail(2);
  List.addToTail(3);
  List.addToTail(4);
  Reverse(List.head)

