/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.


*/
//Time complexity : O(n^2)
// var searchMatrix = function(matrix, target) {
//   for(var i =0; i<matrix.length; i++) {
//     for(var j =0; j< matrix[i].length; j++) {
//       if(matrix[i][j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };


//Optimized
//Accepted , time complexity O(row + col)
var searchMatrix = function(matrix, target) {
  if(matrix.length ===0 ) {
    console.log("ji")
     return false;
    }
  var row = 0;
  var col = matrix[0].length-1;

  while(row <= matrix.length-1 && col>=0 ) {  // row and col should not go out of range
    console.log(col, row)
    if(matrix[row][col] === target) {
      return true;
    }else if(target < matrix[row][col]) {  // does not exists in this whole col
      col--;
    }else if(target > matrix[row][col]) { //does not exists in this whole row, increase the row
     row++;
    }
  }
 
  return false;
};
var matrix = [
  [-5],
  [6]
]
searchMatrix(matrix, 6)