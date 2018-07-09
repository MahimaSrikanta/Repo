//2.1 Remove Dupes from unsorted linked list

/*
Logic: Using Temp hash table, with key set to linkedlist's node's value.hence dup can be detected easily and node can be deleted
Time Complexity : O(n)

Restriction: Without using a temp buffer;
Logic: Run nested loops, where for each outer loop value, inner loop loops through the linked List
Time Complexity: O(n^2);
*/

let RemoveDups = function(head){
    let outerPtr = head;
    while(outerPtr !== null){
       let innerPtr = outerPtr.next;
      while(innerPtr !== null){
        //dup found
        if(outerPtr.val === innerPtr.val) { 
          //not last node
          if(innerPtr.next !== null){
            //copy the next node val to present node
             innerPtr.val = innerPtr.next.val;
             innerPtr.next = innerPtr.next.next;
          } else {
            //drop the last one
            innerPtr= null;
          }
        } else {
          //increment the pointer
          innerPtr = innerPtr.next; 
        }
      }
      outerPtr = outerPtr.next;
    }
  };


//2.2 Find the kth to last element 
/*
 Logic: Take two pointers, move the first ptr till k times starting from the list .
 Then move both pointers till the first ptr reaches the null. The result will be pointed by second ptr
 TimeComplexity: O(n)
*/ 

let kthLastElement = function(head,k) {
    let first = head;
    let second = head;
    while(k !==0){
      first = first.next;
      k--;
    }
    while(first !== null){
      first =first.next;
      second = second.next;
    }
    return second;
  }


//2.3 Delete the middle node, given the ptr to exactly that node
/*
 Logic: Copy the value of next node to current node and delete the next node

 TimeComplexity: O(1)
*/ 

 //2.4 Partition

 let Partition = function(head, partVal){
    let small = new ListNode(0);
    let big = new ListNode(0);
    let curr = head;
    let bip = big;
    let sm = small;
    while(curr !== null){
      if(curr.val >= partVal){
        bip.next= new ListNode(curr.val);
        bip = bip.next;
      }else {
        sm.next=new ListNode(curr.val);
        sm = sm.next
      }
      curr = curr.next
    }
    //attach the small with big
    bip.next = small.next;
    return big.next
 }


var list = new ListNode(1);
var list1 = new ListNode(2);
var list3 = new ListNode(5);
var list4 = new ListNode(4);
var list5 = new ListNode(0);
list.next = list1;
list1.next = list3;
list3.next = list4;
list4.next = list5;


//2.5  Sum List Given in the reverse order
/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/*
  Logic: loop while both the lists are not null  and go on adding the values of node. 
  val/10 gives carry and val%10 gives sum. create ans list with sum and carry to next summation.
  If two linked list are of unequal size. Then loop through the left out longest linked list 
  and add the results to ans list.

  Time Complexity : O(n) 
*/

var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0);
  var carry = 0;
  var h1 = l1;
  var h2 = l2;
  var r1 = result;
  while(h1 !== null && h2 !== null) {
  
    let sum = h1.val + h2.val + carry;
    carry =0;
    
    r1.next = new ListNode(sum %10);
  
    carry = Math.floor(sum/10);
    
    h1 = h1.next;
    h2 = h2.next;
    r1 = r1.next;
  }
 var max = h1 === null ? h2 : h1;
// if the lists are unequal size
 while(max !== null) {
   let  sum = max.val + carry;
   carry=0;
   r1.next = new ListNode(sum%10);
   carry = Math.floor(sum/10);
   
   max = max.next;
   r1 = r1.next;
 }
 if(carry !== 0) {
   r1.next = new ListNode(carry);
 }
 return result.next
};

//2.5 Follow-up Sum of LinkedList
//Suppose the digits are stored in reverse order and you cannot modify the list

/*
  Logic: 
  - Recursively go to bottom of both the linked list and also the go on adding dummy node to result list. 
  - Then while recursing back go on adding the values of list1 and list 2  with keeping track of the carry and set the result nodes.val to the sum. 
  - At the end if there is any carry, add that node to the head of the result

  Time Complexity: O(n)
*/

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


//2.8 Loop Detection and Removal

