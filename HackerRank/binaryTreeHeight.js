
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

heightOfTree = function (root) {
  var cal = function (root){
    if(root === null){
      return 0;
    }
   return Math.max( cal(root.right),  cal(root.left))+1
   
  }
  return cal(root)-1
}
var binaryTree = new BinaryTree(6);
var right1 = binaryTree.addRight(9);
var right2 = right1.addLeft(7);
var right3 = right1.addRight(10);
var right4 = right3.addRight(11);

heightOfTree(binaryTree)