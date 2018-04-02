//Q1 ******************
/*This is one of the questions I’ve asked the candidates: Find the maximum number in a jagged array. Each element of the array can be a number or an array of other numbers on indefinite number of levels, like this:

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
*/



function largest (array) {
    var max = -Infinity;
    
    var helper = function(arr) {
      
      for(var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          helper(arr[i]);
        }else {
          if(arr[i] > max){
            max= arr[i];
          }
        }
      }
    }
    helper(array);
    return max;
    
  }
  
  largest([2, 4, 10, [12, 4, [100,99], 4], [3, 2, 99], 0])

  //Q2 ******************
  //Rock paper scissors
function generator ( count){
    var opt = ['Rock', 'Paper', 'Scissors'];
    var result =[]
    var temp =[]
    var helper = function (c){
     //base case
     if(c=== 0){
       result.push(temp.slice(0));
       return
     }
     
     for(var i =0; i<opt.length; i++){
      temp.push(opt[i]);
      helper(c-1);
      temp.pop();
     }
  
      
    }
    
    helper(count, temp);
    return result;
  }
  
  generator(3);

  //Q3 ******************
  /*
Delete middle element of a stack
Given a stack with push(), pop(), empty() operations, delete middle of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]
Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]
Output : Stack[] = [1, 2, 4, 5, 6]
*/


function middleElementDelete (stack){
    var mid =0;
    
    var helper = function (stack, len){
      // base case;
      
      if(stack.length ===0){
        mid = Math.floor(len/2);
        return len;
      }
      var element = stack.pop();
      helper(stack, len+1);
      if(len !== mid) {
       stack.push(element)
      }
     
    }
    
    return helper(stack, 0);
  
  }
  middleElementDelete([1, 2, 3, 4, 5]);

//Q4 ******************

/*Given a string, print all possible palindromic partitions
Given a string, find all possible palindromic partitions of given string.

Example:
*/
 



 //Q5 ******************

/*
/*
Given two strings, copy one string to other using recursion.
*/

function stringCopy (str1, str2){
  var len = str1.length;
  
  var helper = function(s1, s2, index){
    //base case
    if(s1.length ===0){
      return s2.slice(0,len)
    }
    s2[index] =s1[0];
    return helper(s1.slice(1),s2, index+1)
    
  }
  return helper(str1.split(""), str2.split(""), 0).join("");

  
}

stringCopy("mahima", "sri");

//Q6 ******************

/*
Power Set in Lexicographic order
This article is about generating Power set in lexicographical order.

Input : abc
Output : a ab abc ac b bc c
*/



function Lexicographic(str){
  var result =[];
  function helper(str, temp, index) {
    result.push(temp.slice(0).join(""))
  //base case
  if(temp.length === str.length){
    return
  }

  for(var i=index+1; i<str.length;i++){
    if(temp.indexOf(str[i]) === -1){
      temp.push(str[i]);
      helper(str, temp, index+1);
            
    temp.pop();
    }
  }
  return 
 }
  helper(str,[], -1)
  return result
}
Lexicographic("abc");


//Q7 ******************
/*
Find middle of singly linked list Recursively
Given a singly linked list and the task is to find middle of linked list.
*/


function Node(value) {
  this.val = value;
  this.next = null;
}


function middleList (head) {
  var len =0;
 var fake = head;
 var mid ;
 
 var helper = function (h,index){
    if(h=== null){
      return 
    }
    len++;
    helper(h.next, index+1);
    if(index === Math.floor(len/2)){
      mid= h.val
    }
    
 }
 
 helper(fake, 0);
 return mid;
 
}

var n1= new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

middleList(n1);

//Q8 *************************
/*
Time Complexity Analysis | Tower Of Hanoi (Recursion)
*/

function helper(n, from, to, aux){
  if(n ===1){
     console.log(`moving disk ${n} from ${from} rod to${to} rod `);
    return
  }
  helper(n-1, from, aux, to);
  console.log(`moving disk ${n} from ${from} rod to${to} rod `);
  helper(n-1,aux,to,from)
}

function toweroOfHanoi(disks){
  helper(disks, 'A', 'C', 'B')
  
}

toweroOfHanoi(3)

//Q9 **********************
//Permuation of all given String

var helper =(str, temp, result) => {
  if(temp.length === str.length){
    result.push(temp.slice(0).join(""));
    return
  }
  for(var i=0; i<str.length; i++){
    if(temp.includes(str[i])) continue;
      temp.push(str[i])
      helper(str,temp,  result);
    
    temp.pop();
  }

}

var permute = (str) => {
  let result =[];
 helper(str,[], result)
 return result

}

permute('ABC')

//Q10
/*Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

var helper = (arr, result, temp, index) =>{
  result.push(temp.slice(0));
for(var i =index; i<arr.length; i++){
  temp.push(arr[i]);
  helper(arr, result, temp, index=index+1);
  temp.pop()
  
}


}

var subset =(array) =>{
var result=[]
helper(array, result, [], 0)
return result
}

subset([1,2,3]);



/**********************************************
 * Kata Recursions
 ***********************************************/




//Q11 
/*
Take a Object or Array with deeply nested Objects and Arrays and flatten into a single level plain object.

For example:

flattenObject({ hai: { yo: 'test' } }); // =>  { 'hai.yo': 'test' }
flattenObject([1, 2, 3]); // =>  { 0: 1, 1: 2, 2: 3 }
flattenObject([{ foo: 'test' }, 2, 3]); // =>  { '0.foo': 'test', 1: 2, 2: 3 }
*/
const flattenObject = (array) => {
  var object = {};
  
  for(let key in array){
    if(typeof(array[key])=== 'object'){
      let k=flattenObject(array[key]);
      for(let keys in k){
        let temp;
        object[key+'.'+keys] = k[keys]
      }
    }else{
      object[key] = array[key]
    }
  }
  return object
  }



flattenObject({ hai: { yo: 'test' } });

//Q12

/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

Test.assertEquals(arraySum([1, 2]), 3);
Test.assertEquals(arraySum([1, 2, 3]), 6);
Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);
*/

function arraySum(arr) {
  // sum ALL the things!
  var sum =0;
  var helper = (arr) => {
    for(var i =0; i<arr.length; i++) {
      if(Array.isArray(arr[i])){
        helper(arr[i]);
      }else {
        if(typeof(arr[i] )=== 'number'){
          sum += arr[i];
        }
      }
    }
  }
  helper(arr)
  return sum
}

//Q13
const fibonacci = n => {

  if(n <=2){
    return 1;
  }
  
  return fibonacci(n-1)+ fibonacci(n-2);
};

//Q14
/*
You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.
*/


function replicate(times, number) {
	// your solution here
	var result =[];
  var helper =(times, number) => {
    if(times<=0){
      return result;
    }
    result.push(number);
    helper(times-1, number)
  }
  helper(times, number);
  return result
}

//Q15
/*
  Determine the tree age [ [ [] ] ]  =3
*/
const treeAge = treeTrunk => {
  var max= -Infinity;
  var helper = (trunk, age) => {
    if(trunk.length === 0){
      max= Math.max(age, max)
      return age;
    }  
    
    for(var i =0; i<trunk.length; i++){
      if(Array.isArray(trunk[i])){
        helper(trunk[i], age+1);

      }
    }
    return age;
  }
 helper(treeTrunk,1)
 return max;

}

//Q16
/*
Convert a linked list to a string
new Node(1, new Node(2, new Node(3))), "1 -> 2 -> 3 -> null"
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  var str ="";
  // Write your code here
  let fake = list;
  var helper =(fake) =>{
    if(fake === null){
      return str+="null"
    }
    str= str+fake.data+"->";
    helper(fake.next)
  }
  helper(list);
  return str
}

stringify(new Node(1, new Node(2, new Node(3))));

//Q17
/*
sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = arr => {
  //
  var sum =0;
  var helper = (arr) => {
    if(arr.length ===0){
      return sum;
    }
    
    for(var i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        helper(arr[i])
      }else {
        sum+=arr[i]
      }
    }
  }
  helper(arr);
  return sum
};

//Q18
/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0

Examples

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
*/
const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  var sum =0;
  
  var helper =(begin, end, step) => {
    if(begin > end){
      return sum
    }
    sum +=begin;
    helper(begin+step, end, step)
    
  }
  helper(begin, end, step)
  return sum
};

sequenceSum(2,2,2);

//Q19
/*
Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
*/


function SumSquares(l){
  let sum=0;
  var helper = (l) => {
    if(l.length ===0){
      return sum;
    }
    for(let i in l){
      if(Array.isArray(l[i])){
        helper(l[i]);
      }else{
        sum+=Math.pow(l[i],2);
      }
    }
  }
  helper(l);
  return sum
}

var l = [10,[[10],10],[10]]
SumSquares(l);

//Q20
/*
let bst = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  }
};

let bstResult = {5: [], 3: ['left'], 1: ['left', 'left'], 4: ['left', 'right'], 7: ['right'], 6: ['right', 'left'], 9: ['right', 'right']};
*/
function createBSTDirectory(BST){
  var hash = {};
  hash[BST.value] =[];
  
  var helper = (tree,prev, side) => {
    if(tree === null){
      return ;
    }
      hash[tree.value] = prev;
      hash[tree.value].push(side);

    helper(tree.left, hash[tree.value].slice(0), "left");
    helper(tree.right, hash[tree.value].slice(0), "right")
    
  }
  if(BST.left !== null){
    helper(BST.left,[], "left");
  }
  if(BST.right !== null){
    helper(BST.right,[], "right");  
  }
  return hash
}

