/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/


var reverse = function(x) {
  var s = String(x).split("");
    var val = (s[0] === "-") ? 1 :0
    for(var i=val,j=s.length-1; i<j;i++,j--) {
        var temp = s[i];
        s[i] =s[j];
        s[j] =temp;
    }
    var result = parseInt(s.join("")); 
    return Math.abs(result) >2147483648 ? 0 : result ;

};