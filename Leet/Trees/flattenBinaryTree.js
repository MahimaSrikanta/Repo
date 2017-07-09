/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  var stack = [];
  var currPtr = root;
  while(currPtr !== null ) {
  	if(currPtr.right !== null) {
  	  stack.push(currPtr.right);
  	}
  	if(currPtr.left !== null) {
  	  currPtr.right = currPtr.left;
  	  currPtr.left = null;
  	} else if(stack.length > 0){
  	  var node = stack.pop();
  	  currPtr.right = node;
  	}
  	currPtr = currPtr.right;
  }
};