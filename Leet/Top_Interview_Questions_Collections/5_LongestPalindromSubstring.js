/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

// Works fine
//Time : O(n^2) , space : O(n^2)



//Create a new  2D  of size  N Matrix 
var createMatrix = function (N) {
    var matrix = new Array(N);
    for (var i = 0; i < N; ++i) {
        matrix[i] = new Array(N);
    }

    return matrix;
};


var longestPalindrome = function(s) {
  var max =1;
  var begins =0;
  var temp = createMatrix(s.length);
  
  // single letter palindromes
  for(var i =0; i<s.length; i++) {
    temp[i][i] = true;
  }
  
  //two letter
   for(var j =0; j < s.length; j++) {
     if(s[j] === s[j+1]) {
       temp[j][j+1] = true;
       //console.log(j)
       begins = Math.min(begins,j)
       max = 2;
     }
   }
  // console.log(begins)
   // 3 to n  length letters , runs the outer list 
   for(var lencounter =3; lencounter <=s.length; lencounter++) {
     for(var k =0; k< s.length; k++) {
       var endlen = k+lencounter-1;
       if(s[k] === s[endlen] && temp[k+1][endlen-1]) {
         temp[k][endlen] = true;
         begins =k
         max= lencounter;
       } 
     }
   }
  // console.log(temp);
  //console.log(begins, max);
   return s.slice(begins, begins+max);
};