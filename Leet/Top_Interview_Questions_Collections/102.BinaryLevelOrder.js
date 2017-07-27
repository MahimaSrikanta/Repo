/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

*/

//accepted


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
 TreeNode.prototype.addLeft = function(value) {
    var tree = new  TreeNode(value);
    if(this.left === null){
      this.left = tree;
    } else {
      console.log("Already Left child exists");
    }
    return tree;
}

 TreeNode.prototype.addRight = function(value) {
    var tree = new  TreeNode(value);
    if(this.right === null){
      this.right = tree;
    } else {
      console.log("Already Right child exists");
    }
    return tree;
}

var levelOrder = function(root) {
   var queue = [];
   queue.push(root);
   var result =[];
   var temp =[];
   while(queue.length !== 0) {
   
     var count = queue.length;
     for(var i =0; i< count; i++) {   // for loop till the length of queue, taken initially
       var top = queue.shift()
       //console.log(top.left.val, top.right.val)
       if(top.left !== null) {
         queue.push(top.left);
       }
       if(top.right !== null) {
         queue.push(top.right)
       }
       temp.push(top.val)
     }
     result.push(temp.slice(0));
     temp =[]
    
   }
   return result
};


var binaryTree = new TreeNode(10);
 var right1 = binaryTree.addRight(1);
var left1 = binaryTree.addLeft(9);
var left2 = left1.addLeft(2);
var right2 = left1.addRight(3);
var left3 = right1.addLeft(5);
var right3 = right1.addRight(15);
levelOrder(binaryTree)