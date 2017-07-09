/*
Remove Dups: Write code to remove duplicates from an unsorted li nked list. FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? Hints: #9, #40
*/

var LinkedList = function() {  
    this.head = null;
    this.tail = null;
    this.size=0;
    
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
  this.size ++;
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
  this.size--;
}

LinkedList.prototype.removeDuplicates = function() {
  var hashObj = {};
  var curr = this.head;
  while(curr.next !== null) {
      if(hashObj[curr.value] === undefined) {
        hashObj[curr.value] = 1;
      } else {
        hashObj[curr.value] = 1;
      }
  }
}
LinkedList.prototype.display = function () {
  var curr = this.head;
  while(curr.next !== null) {
    console.log(curr.value);
    curr= curr.next;
  }
  if(curr.next === null) {
    console.log(curr.value);
  }
}
var Node = function (value) {
    this.value = value;
    this.next = null;
}

ll= new LinkedList();
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.display();