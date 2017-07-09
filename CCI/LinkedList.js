var LinkedList = function() {  
    this.head = null;
    this.tail = null;
    
}
LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  //check if its the first node to be added
  if(this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
  } else {
      node.next = this.head;
      this.head = node;
  }
}

LinkedList.prototype.removeFromHead = function(value) {
  //check if its empty list
  if(this.head === null && this.tail === null) {
    console.log("Error, the linked list is empty")
  } else if(this.head === this.tail) {
      var result = this.head.value;
      this.head = null;
      this.tail = null;
  } else {
     this.head = this.head.next;
  }       
}

var Node = function (value) {
    this.value = value;
    this.next = null;
}