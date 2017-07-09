/*Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var queue = [];
  var isValid = true;
  if(root !== null) {
    queue.push(root);
  } else {
    return isValid;
  }

  while(queue.length > 0) {
  var node = queue.shift();
    if(node.left !== null ) {
      if(node.left.val >= node.val) {
      	isValid = false;
      	return isValid;
      } else  {
      	queue.push(node.left);
      }
  	}
  	if(node.right !== null) {
  		if(node.right.val <= node.val) {
      	isValid = false;
      	return isValid;
      } else  {
      	queue.push(node.right);
      }

  	}
  }
  return isValid;
    
};


//recursive solution 
var isValidBST = function(root) {
    return (recursion(root, -Infinity, Infinity))
  
    
};

var recursion = function(node, min, max) {
  if(node === null){
    return true;
  }
  if(node.val >=max || node.val <= min){
    return false;
  }
  return recursion(node.left, -Infinity, node.val ) && recursion(node.right, node.val, Infinity) 
}