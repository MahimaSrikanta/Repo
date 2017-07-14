/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
*/

//accepted

var inorderTraversal = function(root) {
     var result =[];
     var stack =[];
     var curr = root;
  while(stack.length !== 0 || curr !== null){
    while(curr !== null) {
     stack.push(curr);  // this order matters 
      curr = curr.left;
      
    }
    curr = stack.pop();     
    result.push(curr.val);
    curr = curr.right;
 }
 
 return result
    
};