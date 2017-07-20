/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

*/

//Not accepted

//helper function 
// checks if the node.valeuals to the given value if yes, then returns the value
// checks if the node is null , if yes , then return null
// left vairable = helper(left node);
// right variable = helper(right node);
// if the left val != null && right val !== null , then return the root;


var helper = function (node, p, q) {
  if(node === null) {      // important to place this if condition above 
    return null;
  }
  if(node.val === p || node.val === q) {
    return node;
  }

  
  var left = helper(node.left, p, q);
  var right = helper(node.right, p,q);
  if(left !== null && right !==null) {
    return node.val;
  }
  return left !== null ? left : right;
}
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root === p || root  === q) {
    return root;
  }
  //helper fuunction root.left
 return  helper(root, p,q);
}
