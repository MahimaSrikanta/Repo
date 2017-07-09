/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 //RunTime is O(n), how to make it to run in O(logn)

var kthSmallest = function(root, k) {
  var result =[];
  if(root !== null) {
  	recursion(root, result);
  }
  return result[k-1].val; 
    
};

var recursion = function(root, result) {
  if(root.left !== null) {
  	recursion(root.left, result);
  }
  result.push(root);
  if(root.right !== null) {
  	recursion(root.right, result);
  }
  return
}