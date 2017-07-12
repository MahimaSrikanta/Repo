/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

//accepted
// Floyd Cycle detection algorithm, keep two pointers for the digit sum , slow and fast and one point of time they meet.


var helper = function(n) {
  
var sum =0;
var temp =0;

  while (n) {
    temp = n%10;
    sum+= temp*temp;
    n = Math.floor(n/10);  //  * to get the next element of the number
  }
  return sum;
}

var isHappy = function(n) {
  //var checknumber =  helper(n);
  var slow =n;
  var fast =n;
do { 
     slow = helper(slow);  // one slow pointer
     fast = helper(fast);
     fast = helper(fast); // fast pointer at one point they do meet 
     //console.log(slow,fast)
  }while(slow != fast);
  
if(slow === 1) return true;
else return false

};