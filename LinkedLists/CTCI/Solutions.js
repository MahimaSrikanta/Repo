//1.1 Remove Dupes from unsorted linked list

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


//1.2 Find the kth to last element 
/*
 Logic: Take two pointers, move the first ptr till k times starting from the list .Then move both pointers till the first ptr reaches the null. The result will be pointed by second ptr
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


//1.3 Delete the middle node, given the ptr to exactly that node
/*
 Logic: Copy the value of next node to current node and delete the next node

 TimeComplexity: O(1)
*/ 