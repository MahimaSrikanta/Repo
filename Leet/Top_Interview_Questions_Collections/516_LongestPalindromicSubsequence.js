/*
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/
//https://www.youtube.com/watch?v=U4yPae3GEO0
//accepted

var createMatrix  = function (n) {
  var mat = new Array(n);
  for(var i =0; i<n; i++) {
    mat[i] = new Array(n);
  }
  return mat;
};
var longestPalindromeSubseq = function(s) {
    var table = createMatrix(s.length);
    
    //trival case with single letter 
    for(var i =0; i<s.length; i++) {
      table[i][i] = 1;
    }
    
    // for length of 2 
    for(var k =0; k<s.length-1; k++) {
      if(s[k] === s[k+1]) {
        table[k][k+1] =2;
      } else {
        table[k][k+1] =1;
      }
    }
    
    //from 3 - s length find the longest 
    for(var dist = 2; dist < s.length; dist++) {
      for(var j =0; j< s.length-dist; j++) {
        var row = j;
        var col = j+dist;
        //if both edge letters matches
        if(s[row] === s[col]) {
          table [row][col] = 2+ table[row+1][col-1];
        } else {
          table [row][col] = Math.max(table[row+1][col], table[row][col-1]);
        }
      }
    }
    
    return table[0][s.length-1]
};

longestPalindromeSubseq("LPASPAL");