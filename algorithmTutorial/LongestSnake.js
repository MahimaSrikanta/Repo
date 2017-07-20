/*
Objec­tive: Given two dimen­sional matrix, write an algo­rithm to find out the snake sequence which has the max­i­mum length. There could be many snake sequence in the matrix, you need to return the one with the max­i­mum length. Travel is allowed only in two direc­tions, either go right OR go down.

What is snake sequence: Snake sequence can be made if num­ber in adja­cent right cell or num­ber in the adja­cent down cell is either +1 or –1 from the num­ber in the cur­rent cell.
*/

//Solution is in recursive way , need to optimize this solution with dynamic programming

var checkSnake = function (matrix, prev, row, col, temp, result) {
  if(row >=matrix.length || row <0 || col >=matrix[0].length || col<0) {
     if(result[result.length] !== undefined && result[result.length-1] < temp.length) {
      result.push(temp.slice(0));
     } else if(result[result.length] === undefined) {
       result.push(temp.slice(0));
     }
    
    return ;
  }


  
  if(Math.abs(prev - matrix[row][col]) !== 1) {
    return;
  }
  
  if(Math.abs(matrix[row][col]-prev) === 1) {
    
    temp.push(matrix[row][col]);
    //console.log(temp, row, col)
  }
  checkSnake(matrix,matrix[row][col],row, col+1,temp, result);  // check left
  checkSnake(matrix,matrix[row][col],row+1, col,temp, result);  // check right
  temp.pop();
  //console.log("hi",row, col)
 console.log(result)
  return result;
  
}

var snakeSequence = function (matrix) {
  var result =[];
  var temp =[];
  var finalResult;
  for(var i=0;i<matrix.length; i++) {
    for(var j =0; j < matrix[0].length; j++) {
      checkSnake(matrix,matrix[i][j]-1, i, j, temp, result,0);
    }
  }
  
}

snakeSequence([[1,2,1,2],[7,7,2,5], [6,4,3,4], [1,2,2,5]])