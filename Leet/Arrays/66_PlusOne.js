/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/

//17 min, Time: O(n)

var plusOne = function(digits) {
  var sum =0;
  var carry =1;
  var result =[];
  for(var i =digits.length-1; i>=0; i--) {
    sum =digits[i]+carry;
    carry =0;
    carry = Math.floor(sum /10);
    result.unshift(sum%10);
  }
  if(carry > 0) {
   result.unshift(carry);
  }
  return result
  
};