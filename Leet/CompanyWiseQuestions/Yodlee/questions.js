//Merge Sort 
const Merge =(left, right) => {
    let result =[];
    while(left.length && right.length){
      if(left[0] < right[0]){
        result.push(left.shift());
      }else {
        result.push(right.shift());
      }
    }
    while(left.length){
      result.push(left.shift());
      
    }
    
    while(right.length){
      result.push(right.shift());
    }
    return result;
  }
  const MergeSort = (arr) => {
    //base case
    if(arr.length <2){
      return arr
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return Merge(MergeSort(left), MergeSort(right))
  }
  
  MergeSort([4,3,1,5]);
  
  //Quick Sort
  
  
  
  //Find intersection in the linked list 
  function getIntersectionNode (listA, listB){
    let A = listA;
    let B = listB;
    
    while(A !== null || B!== null){
      if(A!==null && B!==null){
        if(A.val === B.val){
          return true;
        }
      }
      
      A= A=== null ? listB : A.next;
      B= B=== null ? listA : B.next
    }
    return false;
  };
  
  //Find kth from last
  function findKthLast (head, k){
    let fake = head;
    let count=0;
    let result;
    let helper = (fake,) => {
      if(fake=== null){
        return;
      }
      helper(fake.next);
      count++;
      if(count === k){
        result=fake.val
      }
    }
    helper(fake);
    return result;
  }
  
  //merge the two list 
  
  //cycle the linked list
  function detectCycle (head){
    let slow= head;
    let fast = head;
    
    while(slow !== null && fast !== null){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return true
      }
    }
    return false;
  }
  
  //Reverse Linked list
  function reversePrint(head) {
      if(head === null || head.next === null){
          return head;
      }
      var fake = head;
      var curr = head;
      while(curr.next !== null) {
          var node = new ListNode(curr.next.val);
          curr.next = curr.next.next;
          node.next = fake;
          fake = node;
      }
      return fake;
  }
  
  //isPalindrome linkedlist (Recurssion)
  
  var isPalindrome = function(head) {
    var curr = head;
    var result = true;
      if(head === null || head.length <=1) {
        return true
    }
    var helper = function (last) {
      if(last === null) {
        return true;
      }
       helper(last.next);
       //console.log(last)
      if(last.val === curr.val) { 
        curr = curr.next;
       
      } else {
        result = false;
      }
      
    }
    helper(head);
    return result
  };
  
  // add two numbers 
  /*
  1) Calculate sizes of given two linked lists.
  2) If sizes are same, then calculate sum using recursion. Hold all nodes in recursion call stack till the rightmost node, calculate sum of rightmost nodes and forward carry to left side.
  3) If size is not same, then follow below steps:
  ….a) Calculate difference of sizes of two linked lists. Let the difference be diff
  ….b) Move diff nodes ahead in the bigger linked list. Now use step 2 to calculate sum of smaller list and right sub-list (of same size) of larger list. Also, store the carry of this sum.
  ….c) Calculate sum of the carry (calculated in previous step) with the remaining left sub-list of larger list. Nodes of this sum are added at the beginning of sum list obtained previous step
  */
  
  var addTwoNumbers = function(A, B){
    let result = new ListNode(0);
    let carry =0;
    
    var helper = (A, B, result) => {
      if(A=== null){
        return;
      }
      result.next = new ListNode(0);
      helper(A.next, B.next, result.next);
      let value =A.val +B.val +carry;
      result.val = (value%10);
      carry = Math.floor(value/10);
      
    }
    helper(A, B, result);
    if(carry){
      let node = new ListNode(carry);
      node.next = result;
      result = node;
    }
    return result;
  }
  
  //Delete Duplicates from sorted List
  var deleteDuplicates = function(head) {
   if(head === null || head.next === null) {
      return head
   }
    var curr = head;
    // var counter = head.val;
    while(curr !== null) {
      if(curr.next === null){
        break;
      }
      if(curr.val === curr.next.val) {	
          curr.next = curr.next.next
        } else {
          curr = curr.next;
        }	
    }
    return head;
  };

  //remove duplicated from unsorted
  LinkedList.prototype.removeDuplicates = function() {
    var hashObj = {};
    var curr = this.head;
    while(curr.next !== null) {
        if(hashObj[curr.value] === undefined) {
          hashObj[curr.value] = 1;
          curr= curr.next;
        } else {
         curr.value = curr.next.value;
         curr.next = curr.next.next;
        }
        
    };
    return this.head;
  }
  
  //Graph
  
  //detect graph cycle
   detectCycle() {
     var white = [], gray =[], black=[];
     for(var keys of this.adjList.keys()) {
       white.push(keys);
  
     }
     
     while(white.length !==0) {
      if( this.dfsDetectCycle(white[0], white, gray, black)){
        return true;
      }
     }
     return false;
    }
     
     dfsDetectCycle (curr, white, gray,black) {
       this.moveCurr(curr, white, gray);
       for(var neigh of this.adjList.get(curr)){
         if(black.indexOf(neigh) !== -1) {  // already explored
           continue;
         }
         if(gray.indexOf(neigh) !== -1) {
           return true
         }
         this.dfsDetectCycle(neigh, white, gray, black)
       }
       this.moveCurr (curr, gray, black);
       return false;
     }
     
     moveCurr (curr, list1, list2) {
       var index = list1.indexOf(curr);
       list1.splice(index,1);
      // console.log(list2, list1)
       list2.push(curr);
     }
  
  }

  function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
      let j= i-1;
      let key = arr[i];
      
      while(j>=0 && arr[j] > key){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        j--;
      }
    }
    return arr
  }
  
  insertionSort([5,4,3,2,1])
  
  //Worstcase : O(n^2);
  //Bestcase : O(n);
  
  
  /*
   ****** Arrays  *****
  */
  
  
  //Reverse array Recursion
  
  function reverse(arr){
    if (arr.length === 0){
      return [];
    }
    
    let last = arr[0];
    return reverse(arr.slice(1)).concat(last)
    
  }
  
  reverse([1,2,3, 5]);

  //reverse string

  function reverseString (str) {
    if(str.length ===0){
      return ''
    }
    let last = str[0];
    return reverseString(str.slice(1,str.length)).concat(last);
  }
  
  reverseString('hello');

  //Fibonacci
  let fibonacci = function (n){
    let a=0, b=1,fib=1;
    while(n>=0){
      fib = a+b;
      a=b;
      b=fib;
      n--;
    }
  
    return fib
  }
  fibonacci(3)

// Tree 
// min depth


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

const minDepth = function(head) {
  if(head=== null){
    return 0;
  }
  return Math.min(1+ this.minDepth(head.left), 1+this.minDepth(head.right))
}
var binaryTree = new TreeNode(1);
var left1 = binaryTree.addLeft(2);
var right1 = left1.addRight(2);


minDepth(binaryTree);


//Top view
topViewTree = function(root){
  var queue = [];
  queue.push(root);
  var hash ={};
  
  while(queue.length !== 0){
   let count =queue.length;
   let node;
    for(let i=0; i<count; i++){
      node = queue.shift()
      console.log(node.value)
      if(node.left !== null){
        queue.push(node.left)
      }
      if(node.right !== null){
        queue.push(node.right);
      }
    }
  }
}