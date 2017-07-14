/*

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
*/

// Accepted , Time O(n^2), space O(n^2)

//Need to improvise 

var setZeroes = function(matrix) {
    //get the row 
    //get the col
    //temp array
    //loop through matrix to get the coordinates with 0's and save them into temp array;
    
  
    //loop through temp array
    // for all coordinates make a loop keeping row constant and changing all the colums from 0 to col count;
    // another loop keeping col constant and changing all the rows from 0 to rows count
    
    //return the matrix
    
  var row = matrix.length;
  var col = matrix[0].length;
  var temp = [];
  for(var i =0; i< row; i++) {
    for(var j =0; j< col; j++) {
      if(matrix[i][j] === 0) {
        temp.push([i,j]);
      }
    }
  }
 // console.log(temp)
  for(var k =0; k<temp.length; k++) {
    //chnage all rows
    for(var l= 0; l<row; l++) {
      //console.log("hi")
      matrix[l][temp[k][1]] =0;
    }
    
    // change all colums
    for(var m=0; m<col; m++) {
      matrix[temp[k][0]][m]=0;
    }
  }
  
};