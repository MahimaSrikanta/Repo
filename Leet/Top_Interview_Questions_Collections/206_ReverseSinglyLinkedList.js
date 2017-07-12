

//Accepted

function ListNode(val) {
     this.val = val;
     this.next = null;
 }
var reverseList = function(head) {
  // head is null or head next is null return head
  
  // curr ptr to head
  // loop till curr.next is not null
  // create a new node with curr.next val
  // point the curr.next to cur.next.next
  // point the new node next to head.next;
  // head to new node
  
  if(head === null || head.next === null){
    return head;
  } 
  var curr = head;
  var fakeHead = head;
  while( curr.next !== null) {
    var node = new ListNode(curr.next.val);
    curr.next = curr.next.next;
    node.next = fakeHead;
    fakeHead = node;
  }
  return fakeHead;
    
};



var list = new ListNode(1);
var list1 = new ListNode(2);
var list3 = new ListNode(3);
var list4 = new ListNode(4);
//var list5 = new ListNode(5);
list.next = list1;
list1.next = list3;
list3.next = list4;
//list4.next = list5;
JSON.stringify(reverseList(list));