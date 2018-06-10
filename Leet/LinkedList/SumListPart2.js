
/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/



function ListNode(val) {
 this.val = val;
 this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  
  var carry = 0;
  var result = new ListNode(0);
  var h1 = result;
  var recursion = function (link1, link2, result) {
  if(link1.next !== null && link2.next !== null) {
      result.next = new ListNode(0);
      recursion(link1.next, link2.next, result.next );
    }
   var sum = link1.val + link2.val + carry;
   result.val = sum%10 ;
   carry =0;
   carry = Math.floor(sum/10);
 }
  recursion (l1, l2, result);
 if(carry !== 0) {
   var node1 = new ListNode(carry);
   node1.next = h1;
   h1 = node1
 }
 return  JSON.stringify(h1)
  
};


var list = new ListNode(7);
var list1 = new ListNode(2);
var list3 = new ListNode(4);
//var list4 = new ListNode(3);

var list5 = new ListNode(6);
var list6 = new ListNode(6);
var list7 = new ListNode(8);

list.next = list1;
list1.next = list3;
//list3.next = list4;

list5.next = list6;
list6.next = list7;
addTwoNumbers(list, list5);