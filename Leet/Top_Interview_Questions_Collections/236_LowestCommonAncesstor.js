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

var lowestCommonAncestor = function(root, p, q) {
     if(root === null || root === p || root === q) return root;
  
  left = lowestCommonAncestor(root.left, p, q);
  right =lowestCommonAncestor(root.right, p, q);
  return left === null ? right : right === null ? left : root
};

//using stacks

var lowestCommonAncestor = function(root, p, q) {
  var stack =[root];
  var hash={};
  hash[root.val]=null;
  while(! hash[p] || ! hash[q]) {
    var node = stack.pop();
    if(node.left !== undefined) {
      stack.push(node.left);
      hash[node.left.val] = node.val;
    }
    if(node.right !==undefined) {
      stack.push(node.right);
      hash[node.right.val] = node.val;
    }
  }
  
  var temp =[];
  while(p !== null) {
    p = hash[p];
    temp.push(p);
  }  
  while(! temp.includes(q)) {
    q= hash[q];
    
  }
  return q
};