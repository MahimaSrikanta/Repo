/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

*/

//accepted , look for fake head, without it , results into error

function ListNode(val) {
 this.val = val;
 this.next = null;
}
var mergeTwoLists = function(l1, l2) {
  var pt1 = l1;
  var pt2 = l2;
  var result = new ListNode(0);
  var fake = result;
  while(pt1 !== null && pt2 !== null) {
    if(pt1.val < pt2.val) {
      console.log("hello")
      fake.next = pt1;
      pt1 = pt1.next;
      
    } else {
      
      fake.next = pt2
      pt2 = pt2.next;
      
    }
    fake = fake.next;
    
  }
  if(pt1 === null) {
    fake.next = pt2;
  } else if(pt2 === null) {
     fake.next = pt1;
  }
  return result.next;  
};

var list = new ListNode(2);
var list1 = new ListNode(1);
// var list3 = new ListNode("c");
// var list4 = new ListNode("d");
// var list5 = new ListNode("e");

// list.next = list1;
// list1.next = list3;
// list3.next = list4;
// list4.next = list5;
// list5.next = list3;

//assert( hasCycle(list), true);
mergeTwoLists(list, list1)