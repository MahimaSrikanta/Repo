/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?



*/
//accepted
//https://www.youtube.com/watch?v=GO5QHC_BmvM
// There are only two ways to reach any cell  of the matrix . 1. left and from top
// DP formula = matrix [i][j] = DP matrix[i-1][j] + DP matrix[i][j-1]

var createMatrix = function (m, n) {
  var outer = new Array(m);
  for(var i =0; i< m; i++) {
    outer[i] = new Array(n);
  }
  return outer
}


var uniquePaths = function(m, n) {
  var matrix = createMatrix(m,n);
  
  //assign all the cols with 1
  for(var i =0; i<n; i++) {
    matrix[0][i] =1;
  }
  
  //assign all the rows with 1
  for(var j =0; j<m; j++) {
    matrix[j][0] =1;
  }
  
  //assign the other cells of the total ways that can be used to reach them
  
  for(var k=1; k< m; k++) {
    for(var l=1; l<n; l++) {
     // console.log(matrix[k-1][l]+ matrix[k][l-1])
      matrix[k][l] = matrix[k-1][l]+ matrix[k][l-1];
    }
  }
  return matrix[m-1][n-1]
};