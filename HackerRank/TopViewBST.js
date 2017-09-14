
var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;    
}
BinaryTree.prototype.addLeft = function(value) {
    var tree = new  BinaryTree(value);
    if(this.left === null){
      this.left = tree;
    } else {
      console.log("Already Left child exists");
    }
    return tree;
}

BinaryTree.prototype.addRight = function(value) {
    var tree = new  BinaryTree(value);
    if(this.right === null){
      this.right = tree;
    } else {
      console.log("Already Right child exists");
    }
    return tree;
}

topViewTree = function(root){
  var queue = [];
  queue.push([root, 0]);
  var hash ={};
  
  while(queue.length !== 0){
    var node = queue.shift();
    var hd = node[1]
    if(hash[hd] === undefined){
      console.log(node[0].value);
    }
    // if(node !== null){
    //   queue.push([node.left,hd-1 ]);
    //   queue.push([node.right,hd+1]);
    // }
    if(node[0].left !== null){
     
      queue.push([node[0].left,hd-1])
       
    }
    if(node[0].right !== null){
      queue.push([node[0].right,hd+1])
      //console.log(queue)
    }
  }
}


var binaryTree = new BinaryTree(6);
var right1 = binaryTree.addRight(9);
var right2 = right1.addLeft(7);
var right3 = right1.addRight(10);
var right4 = right3.addRight(11);

topViewTree(binaryTree)