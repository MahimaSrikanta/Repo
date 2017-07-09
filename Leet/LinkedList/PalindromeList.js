/*Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

*/

//Accepted , but not in Space O(1);
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var isPalindrome = function(head) {
  var curr = head;
  var arr =[];
  var counter =0
    if(head === null || head.length <=1) {
      return true
  }
  while( curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  for(var i =0,j= arr.length-1; i<=j; i++,j--) {
    if(arr[i] !== arr[j]) {
      return false
    }
  }
  return true;
};

// REcurssion

var isPalindrome = function(head) {
  var curr = head;
  var result = true;
    if(head === null || head.length <=1) {
      return true
  }
  var helper = function (last) {
    if(last === null) {
      return true;
    }
     helper(last.next);
     console.log(last)
    if(last.val === curr.val) { 
      curr = curr.next;
     
    } else {
      result = false;
    }
    
  }
  helper(head);
  return result
};


var list = new ListNode(0);
var list1 = new ListNode(0);
//var list3 = new ListNode(0);
// var list4 = new ListNode(2);
// var list5 = new ListNode(2);
 list.next = list1;
 //list1.next = list3;
// // list3.next = list4;
// // list3.next = list5;
isPalindrome(list)