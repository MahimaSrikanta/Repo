/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
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
 * @param {number} k
 * @return {boolean}
 */


 //accepted
found = function(root, k, hash) {
  if(root === null){
    return false;
  }
  if(hash[root.val] !== undefined) {
    return true;
  }
    
  hash[(k-root.val)] =1;
  return found(root.left, k, hash) || found(root.right, k, hash)
}
var findTarget = function(root, k) {
     var hash ={};
    return found(root, k,hash)
};