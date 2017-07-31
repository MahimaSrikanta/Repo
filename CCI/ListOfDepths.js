/* Page 109

Time Complexity : O(n), space Complexity : O(n)
*/


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

var Linkedlist = function (value) {
  this.value = value;
  this.next = null;
}

var listOfDepths = function (root) {
  var queue = [];
  var result =[];
  var total =[];
  queue.push(root);

  while(queue.length !== 0) {
    var count = queue.length;
    var list = new Linkedlist(null);
    var head = list;
 
    for(var i =0; i<count; i++) {
      var temp = queue.shift();
      head.next = new Linkedlist(temp.val);
      head = head.next;
      result.push(temp.val);
      if(temp.left !== null) {
        queue.push(temp.left);
      }
      if(temp.right !== null) {
        queue.push(temp.right);
      }
    }
    
    total.push(result);
    result = [];
     console.log(JSON.stringify(list.next))
  }
  //console.log(JSON.stringify(list.next))
}


var binaryTree = new TreeNode(4);
var right1 = binaryTree.addRight(6);
var left1 = binaryTree.addLeft(2);
var left2 = left1.addLeft(1);
var right2 = left1.addRight(3);
 var left3 = right1.addLeft(5);
 var right4 = right1.addRight(7);
 listOfDepths(binaryTree)
