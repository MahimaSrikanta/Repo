
var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;    
}
BinaryTree.prototype.addLeft = function(value) {
    var tree = new  BinaryTree(value);
    if(this.left === null){
      this.left = tree;
    } else {
      console.log("Already Left child exists");
    }
    return tree;
}

BinaryTree.prototype.addRight = function(value) {
    var tree = new  BinaryTree(value);
    if(this.right === null){
      this.right = tree;
    } else {
      console.log("Already Right child exists");
    }
    return tree;
}
BinaryTree.prototype.LCP = function () {
  this.currPtr = this;
  var queue = [this.currPtr];
  var len =1;
  var max= 1;
  while(queue.length > 0) {
    var node = queue.shift();
    if(node.left !== null) {
      queue.push(node.left);
      if(node.left.value === node.value+1) {
      	len++;
      } else {
      	len =1;
      }
    }
    if(node.right !== null) {
      queue.push(node.right);
      if(node.right.value === node.value+1) {
    	len++;
      } else  {
      	len=1
      }
    }
    max = Math.max(max,len);
  }
  return max;
}




var binaryTree = new BinaryTree(6);
var right1 = binaryTree.addRight(9);
var right2 = right1.addLeft(7);
var right3 = right1.addRight(10);
var right4 = right3.addRight(11);
binaryTree.LCP()