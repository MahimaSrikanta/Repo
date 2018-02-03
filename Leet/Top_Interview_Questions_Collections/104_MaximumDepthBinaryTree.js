/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
 TreeNode.prototype.addLeft = function(value) {
    var tree = new  TreeNode(value);
    if(this.left === null){
      this.left = tree;
    } else {
      console.log("Already Left child exists");
    }
    return tree;
}

 TreeNode.prototype.addRight = function(value) {
    var tree = new  TreeNode(value);
    if(this.right === null){
      this.right = tree;
    } else {
      console.log("Already Right child exists");
    }
    return tree;
}

var maxDepth = function(root) {
  var max =0;
  if(root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1)
};

var binaryTree = new TreeNode(10);
 var right1 = binaryTree.addRight(1);
// var left1 = binaryTree.addLeft(9);
// var left2 = left1.addLeft(2);
// var right2 = left1.addRight(3);
// var left3 = right2.addLeft(5);

maxDepth(binaryTree)