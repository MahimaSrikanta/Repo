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

preOrder = function (root){
if(root === null){
  return;
}
 console.log(root.value);
 preOrder(root.left);
 preOrder(root.right);
}

postOrder = function (root){
if(root === null){
  return;
}

 postOrder(root.left);
 postOrder(root.right);
  console.log(root.value);
}

inorder = function(root){
  if(root === null){
    return;
  }
  inorder(root.left);
  console.log(root.value);
  inorder(root.right)
}

var binaryTree = new BinaryTree(6);
var right1 = binaryTree.addRight(9);
var right2 = right1.addLeft(7);
var right3 = right1.addRight(10);
var right4 = right3.addRight(11);

//preOrder(binaryTree)
//postOrder(binaryTree)

inorder(binaryTree)