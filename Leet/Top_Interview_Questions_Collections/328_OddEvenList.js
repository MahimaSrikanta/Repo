/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ..
*/

//Accepted

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var oddEvenList = function(head) {
  // take a even head pointer , even pointer, and odd pointer
  // move the even pointer connecting all the even nodes 
  // move the odd pointer connectiong all odd nodes
  // then atlast connect the evenhead to odd pointer's next;
  if(head === null || head.next === null) {
    return head;
  }
  var evenHead = head.next;
  var evenPtr = head.next;
  var oddPtr = head;
  
  while(evenPtr !== null && evenPtr.next !== null) {   // be careful of the error of null so need to check for evenPtr and evenPtr.next 
    oddPtr.next = evenPtr.next;
    oddPtr = oddPtr.next;
    evenPtr.next = oddPtr.next;
    evenPtr = evenPtr.next;
  }
  oddPtr.next = evenHead;
  return head;
  
};

var list = new ListNode(1);
var list1 = new ListNode(2);
var list3 = new ListNode(3);
var list4 = new ListNode(4);
var list5 = new ListNode(5);
list.next = list1;
list1.next = list3;
list3.next = list4;
list3.next = list5;
oddEvenList(list)


