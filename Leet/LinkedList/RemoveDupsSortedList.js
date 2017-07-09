/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* Definition for singly-linked list.*/

//Accepted
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
var deleteDuplicates = function(head) {
 if(head === null || head.next === null) {
    return head
 }
  var curr = head;
  // var counter = head.val;
  while(curr !== null) {
    if(curr.next === null){
      break;
    }
    if(curr.val === curr.next.val) {	
  	  curr.next = curr.next.next
  	} else {
  	  curr = curr.next;
  	}	
  }
  return head;
};

var list = new ListNode(1);
var list1 = new ListNode(1);
var list3 = new ListNode(1);
var list4 = new ListNode(2);
var list5 = new ListNode(2);
list.next = list1;
list1.next = list3;
// list3.next = list4;
// list3.next = list5;
deleteDuplicates(list)