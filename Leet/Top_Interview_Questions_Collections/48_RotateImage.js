/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

*/

// Not in in-place

var rotate = function(matrix) {
  var result =[];
  var temp =[];
  var col = matrix[0].length;
  var row = matrix.length;
  
  for(var i=0;i< col; i++ ) {
    for(var j= row-1;j>=0; j--) {
    temp.push(matrix[j][i]);
    }
    result.push(temp);
    temp =[];
  }
  console.log(matrix)
  return result;
  
};

// Not working 4*4 matrix

var rotate = function(matrix) {
  var layers = Math.ceil(matrix.length/2);
  for(var i =0; i< layers; i++) {

    for(var j =i; j< matrix.length-i-1; j++) {
      var first = i;
      var last = matrix.length-i-1;
      var offset = j-i;
      
      //save top 
        var top = matrix[first][j];
      
      //move left to top
        matrix[first][j] =  matrix[last-offset][first];
       
      //move bottom to left
        matrix[last-offset][first] = matrix[last][last-offset];
        
      //move right to bottom
        matrix[last][last-offset] = matrix[offset][last];
      
      //put top to right
     matrix[offset][last] = top;
    }
  }
  
  return matrix
}

rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
