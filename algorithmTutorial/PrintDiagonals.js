//Print all the diagonals of the matrix
var diagonals = function (matrix) {
  var rows = matrix.length;
  var col = matrix[0].length-1;
  var text="";
  for(var i =0; i< rows; i++) {
    var r=0;
    var c=i;
  
    while( r<= i) {
      text += matrix[c][r]+ " ";
      r++;
      c--;
    }
    console.log(text);
    text = ""
  }
  
  for(var j =0; j< rows; j++) {
    var k =rows-1;
    var l = 1+j;
 //  console.log("hi",k,l)
    while(k >=0 && l <= col) {
    // console.log(l,k)
      text += matrix[k][l]+ " ";
      l++;
      k--;
    }
    console.log(text);
    text = ""
  }
  
  
}

diagonals([[1,2,3,4], [5,6,7,8], [9,10,11,12]])



