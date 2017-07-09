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


//https://www.youtube.com/watch?v=TWDigbwxuB4
var helper = function(root) {
  if(root === null) {
  	return 0;
  }
  var left= isBalanced(root.left);
  var right= isBalanced(root.right);

  if(left === -1 || right === -1) {
  	return -1;
  }
  if(Math.abs(left-right) > 1) {
    return -1;
  } 
  	return Math.max(left, right) +1
  

}

var isBalanced = function(root) {
  if(root === null) {
	return true;
  }
  if(helper(root) === -1) {
  	return false;
  }
  return true;
}