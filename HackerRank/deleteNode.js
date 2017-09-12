/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
  //if 0th position
  if(position ===0){
      head= head.next;
      return head;
  } 
  var count =0;
  var fake = head;
  while(count !== position-1 && fake.next !== null){
      fake = fake.next;
      count++;
  }
   //Remove the node
   fake.next = fake.next.next;
    return head;
}