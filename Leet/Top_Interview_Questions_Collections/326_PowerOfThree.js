/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

//accepted using recursion 

// Assuming only +ve numbers aare given

var isPowerOfThree = function(n) {
    if(n ===1) {
      return true;
    }
    if(n%3 !== 0  || n ===0) {
      return false;
    }
     return isPowerOfThree(n/3);
}