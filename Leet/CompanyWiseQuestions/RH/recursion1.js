//Q21
/*
Happy Numbers
*/

function helper(num, seq){
    if(num ===1){
      return true;
    }
    
    if(seq.indexOf(num) !== -1){
      return false
    }
    let str = String(num);
    let sum =0;
    if(str.length >1){
     for(var i in str){
      sum +=Math.pow(Number(str[i]), 2);
     }  
    }else {
       sum = Math.pow(num,2);
    }
    seq.push(num)
   return  helper(sum,seq)
    
  }
  function happyNumbers(x){
    // Put your answer here
    var result =[];
    for(var i =1; i<=x; i++){
      if( helper(i, [])) {
        result.push(i)
      }
    }
    return result
  
  }
  
  happyNumbers(50);

  /*
  Q22
Program for Sum the digits of a given number
Given a number, find sum of its digits.

Example :

Input : n = 687
Output : 21

Input : n = 12
Output : 3

*/

function Sumdigits (num){
  var result =0;
  
  var helper = function (str){
    if(str.length ===0){
      return result;
    }
    result+=Number(str[0]);
    helper(str.slice(1));
  }
  
  helper(String(num));
  return result;
}
Sumdigits (12);



/*
Q23
Reverse a stack using recursion
Write a program to reverse a stack using recursion. You are not allowed to use loop constructs like while, for..etc, and you can only use the following ADT functions on Stack S:
isEmpty(S)
push(S)
pop(S)
*/
function reverse(stack){
  if(stack.length ===0){
    return;
  }
  var temp =stack.pop();
  reverse(stack);
  stack.push(temp);
  console.log(stack)
}

reverse([1,2,3,4,5])


/*
Q24
Check if a number is Palindrome
Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome.
*/

function Palindrome (num){
  var result = true;
  var helper = (str) => {
    if(str.length ===0){
      return
    }
    
    if(str[0] !== str[str.length-1]){
      result = false;
      return 
    }
    helper(str.slice(1,str.length-1))
  }
  helper(String(num));
  return result
}

Palindrome(1451);

//Q25

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

function level (root) {

var hash = [];
var helper=(root, index)=> {
  if(root === null){
    return;
  }
  helper(root.left, index+1);
  if(hash[index]!== undefined){
    hash[index].push(root.val)
  }else {
     hash[index]= [root.val]
  }
  helper(root.right, index+1)
}
helper(root,0);
console.log(hash)
}


var binaryTree = new TreeNode(1);
var right1 = binaryTree.addRight(3);
var left1 = binaryTree.addLeft(2);
var right2 = right1.addRight(5);
var left2 = right1.addLeft(4);
level(binaryTree)



//BFS
function level (root) {
  let queue = [root];
  let result = []
  while(queue.length!==0){

    let temp =[];
    let count = queue.length
    for(let i =0; i<count; i++){
      let node = queue.pop();
      temp.push(node.val);
      if(node.left !== null){
        queue.unshift(node.left);
      }
      if(node.right !== null){
        queue.unshift(node.right);
      }
    }
    result.push(temp.slice(0))
  }
  return result;
}


//Vertical
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


function vertical (root){
  let hash = {};
  let helper = function(root, index){
    if(root === null){
      return;
    }
    helper(root.left, index-1);
    helper(root.right, index+1);
    if(hash[index]){
      hash[index].push(root.val)
    }else {
       hash[index] =[root.val];
    } 
    
  }
  helper(root,0);
  console.log(hash)
}


var binaryTree = new TreeNode(1);
var right1 = binaryTree.addRight(3);
var left1 = binaryTree.addLeft(2);
var right2 = left1.addRight(5);
var left2 = left1.addLeft(4);
right1.addLeft(6);
right1.addRight(7);
vertical(binaryTree)