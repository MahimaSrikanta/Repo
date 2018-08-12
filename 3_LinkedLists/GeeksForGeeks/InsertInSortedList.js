/*
Given a linked list which is sorted, how will you insert in sorted way
Given a sorted linked list and a value to insert, write a function to insert the value in sorted way.
*/

/*
  Logic: start curr pointer from head and always check if curr.next greater than insertion node
  if yes then insert the insertion node and link to curr.next.
  If head is empty then insert the node at head and return
  
   Complexity : O(n)
*/

