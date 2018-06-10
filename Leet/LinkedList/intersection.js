 function ListNode(val) {
     this.val = val;
     this.next = null;
 }


var getIntersectionNode = function(headA, headB) {
    var result = null;
    var recursion = function (headA, headB) {
      if(headA === null || headB === null){
        return;
      }
      if(headA !== null &&  headB !== null){
        recursion(headA.next, headB.next) 
        if(headA.val !== headB.val && result === null) {
          return result = headA.next;
        }
      }
      
    }
    recursion (headA, headB)
    return result;
    
};


var list = new ListNode(1);
var list1 = new ListNode(2);
var list3 = new ListNode(4);
var list4 = new ListNode(2);

 list.next = list1;
 list1.next = list3;
 list3.next = list4;
 
var list10 = new ListNode(1);
var list11 = new ListNode(3);
var list31 = new ListNode(4);
//var list41 = new ListNode(2);

 list10.next = list11;
 list11.next = list31;
 // list31.next = list41;

getIntersectionNode(list, list10)

// Simple Way . 
//Read CCI Page : 222

// if the linked list are of same length, you could simply traverse and compare if they intersect
//when they are of unequal length, chop off or (ignore or virtually copy the smaller list's value to the difference through traversal)

//Accepted
var getIntersectionNode = function(headA, headB) {
  var A= headA;
  var B = headB;
  var result= null;
    
  if(headA === null || headB === null){
    return null;
  }
  while(A !== null || B!== null) { // in the second iteration the two pointers  will become null
    //console.log(A)
    if(A === B) {
       return A;   
     }
    A = A === null ? headB : A.next;
    B = B ===null ? headA : B.next;
  }
  return A
};


//
function getIntersectionNode (listA, listB){
  let A = listA;
  let B = listB;
  
  while(A !== null || B!== null){
    if(A!==null && B!==null){
      if(A.val === B.val){
        return true;
      }
    }
    
    A= A=== null ? listB : A.next;
    B= B=== null ? listA : B.next
  }
  return false;
}