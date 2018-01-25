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


//111. Minimum Depth of Binary Tree  --> Accepted

var minDepth = function(root) {
  
    var queue = [[root,1]];
     if(temp === null) {
        return 0
      }
 
    while(queue.length !== 0) {
      var temp = queue.shift();
      var node = temp[0];
      var depth = temp[1];
      if(node === null) {
          return 0
      }
      if(node.left === null && node.right === null) {
         return depth;
      }
      
      if(node.left !== null) {
        queue.push([node.left, depth+1])
      }
      
      if(node.right !== null) {
        queue.push([node.right, depth+1])
      }
    }
    
    return depth
    
};


//==================================

//124. Binary Tree Maximum Path Sum --> Hard --> passed 44 /94 tests
var maxPathSum = function(root) {
  var helper = function (root) {
    if (root === null) {
      return 0
    }
    // if(root.left === null && root.right === null) {
    //   return 0
    // }
    
    var l= helper(root.left);
    var r =helper(root.right);
    var maxNode = Math.max(l,r)
    var max = Math.max(l+r+root.val,root.val, maxNode );
    return max
  
  }
  return helper(root)
};

var binaryTree = new TreeNode(1);
var right1 = binaryTree.addRight(2);
var left1 = binaryTree.addLeft(2);
var right2 = right1.addRight(3);
var left2 = left1.addLeft(3);

//minDepth(binaryTree)

maxPathSum(binaryTree)
