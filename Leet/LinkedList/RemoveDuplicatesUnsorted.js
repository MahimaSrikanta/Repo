// CCI : 2.1

function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 

 var deleteDuplicates = function(head) {
   var hash = {};
   var previous = null;
   var curr = head;
   while(curr !== null) {
     if(hash[curr.val] === undefined) {
       hash[curr.val] = 1;
       previous = curr;
     } else {
      previous.next = curr.next;
     }
    curr = curr.next; 
   }
 return head
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
deleteDuplicates(list)