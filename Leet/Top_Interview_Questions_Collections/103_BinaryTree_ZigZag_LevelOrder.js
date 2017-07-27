
/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

//Not accepted, need to check the logic again 

var zigzagLevelOrder = function(root) {
    if(root === null) {
        return [];
    }
  var queue = [];
  var temp = [];
  var result =[]
  var count = 0;
  queue.push(root);
  
  
var pushRight = function(node) {
  if(node.right !== null) {
      var right = node.right;
      queue.push(right)
   }
  }
  
  var pushLeft = function(node) {
  if(node.left !== null) {
      var left = node.left;
      queue.push(left)
  }
}
  
  while(queue.length !== 0) {
    var len = queue.length;
    
    for(var i =0; i< len; i++) {
       var top = queue.shift();
      if(count %2 === 0) {
        pushRight(top);
        pushLeft(top);
      } else {
        pushLeft(top);
        pushRight(top);
        
      }
      
       temp.push(top.val);
    }
    count++;
    result.push(temp.slice(0));
    temp =[];
  }
  
  

  return result;
};