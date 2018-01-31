/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
   */

  //accepted 
  // basic idea: to recursively check if the  left subtree is equal to right subtree in the BST



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


var isSymmetric = function(root) {
  if(root === null) {
    return true;
  }
  var helper = function (right, left) {
    if(right === null && left === null) {
      return true;
    } else if( right === null || left === null) {  // if one of them is null and the other is filled as in the example given in the problem
      return false;
    }
    if(right.val !== left.val ) {
      return false;
    }
    return (helper(left.right, right.left) && helper(left.left, right.right));
  }
  return helper (root.left, root.right);
};


var binaryTree = new TreeNode(1);
var right1 = binaryTree.addRight(2);
var left1 = binaryTree.addLeft(2);
var right2 = right1.addRight(3);
var left2 = left1.addLeft(3);
//var right3 = left1.addRight(4);
//var left3 = right1.addLeft(4);

isSymmetric(binaryTree)