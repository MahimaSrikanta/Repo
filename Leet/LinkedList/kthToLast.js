/*
Given a Linked List and a number n, write a function that returns 
the value at the n’th node from end of the Linked List.
CCI
*/
function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
function kthToLast(head, k) {
  var curr = head
  var count =0;
  var run = head;
  while(count !== k) {
    if(run === null) {
      return null
    } else {
    run = run.next;
    count++;
    }
  }
  //actual moving of pointers
  while(run !== null) {
    curr = curr.next;
    run = run.next;
  }

  return (curr)
 }
 
 var list = new ListNode(1);
var list1 = new ListNode(2);
var list3 = new ListNode(1);
var list4 = new ListNode(4);
var list5 = new ListNode(2);
list.next = list1;
list1.next = list3;
list3.next = list4;
list4.next = list5;
kthToLast(list, 7)
 
 
