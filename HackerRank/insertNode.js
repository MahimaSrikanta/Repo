/*
  Insert Node at the beginning of a linked list
  head pointer input could be NULL as well for empty list
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
  var temp = head;
    head= new Node(data);
    head.next = temp;
    
    return head

}


/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
  if(head === null) {
      head= new Node(data);
      return head;
  } 
  var temp = head
  while(temp.next !== null){
      temp= temp.next;
  }
    
    temp.next = new Node(data);
    return head;
    
}