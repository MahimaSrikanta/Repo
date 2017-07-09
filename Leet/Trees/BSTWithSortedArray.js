/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var sortedArrayToBST = function(nums) {
	if(nums.length === 0) {
		return null;
	}
  //find the root by following
  var index = Math.floor(nums.length /2);
  var tree = new TreeNode(nums[index]);
  tree.left = sortedArrayToBST(nums.slice(0,index));
  tree.right = sortedArrayToBST(nums.slice(index+1));
  return tree;
};