/*Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(root === null) {
  	return false;
  }
  if(root.val === sum && root.left === null && root.right === null) {
  	return true;
  }
  hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
};


//did not understand non-recursive way of doin this problem