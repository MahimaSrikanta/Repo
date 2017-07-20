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

//accepted

//https://www.youtube.com/watch?v=TWDigbwxuB4
var isBalanced = function(root) {
  if(root === null || root === []) {
    return true;
  }
  var helper = function (node) {
    if(node === null) {   // bottom-up approach
      return 0;
    }
    var left = helper(node.left);
    var right = helper(node.right); // remember to declare these variables as var
    
    if(left === -1 || right === -1 ) {
      return -1;
    }
    if(Math.abs(left - right) > 1) {
      
      return -1;
    } else {
    
     return 1+ Math.max(left,right);
    }
    
  }
  
  return helper(root) === -1 ? false : true;
  
};