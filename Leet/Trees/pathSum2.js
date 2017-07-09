/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

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
 * @return {number[][]}
 */
 var recursion = function (root, sum, queue, finalResult) {
  
  if(root.left === null && root.right === null && sum === 0) {
    var temp = [];
    temp = queue.slice(0);
    finalResult.push(temp);
  }

  if(root.left !== null) { 	
  	queue.push(root.left.val);
  	recursion(root.left, sum - root.left.val, queue, finalResult);
  	queue.pop();
  }
  if(root.right !== null) {
  	queue.push(root.right.val);
  	recursion(root.right, sum - root.right.val, queue, finalResult);
  	queue.pop();
  }

  return;

}
var pathSum = function(root, sum) {
  var finalResult = [];
  var queue = [];
  if(root === null) {
  	return finalResult;
  }
  queue.push(root.val);
  recursion(root, sum-root.val, queue, finalResult);
  return finalResult; 
};