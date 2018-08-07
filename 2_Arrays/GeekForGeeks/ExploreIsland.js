/*
Given a grid map made of boolean 2D matrix, where '1' represents land and '0' represents water, count the number of islands. An island is surrounded by water and may be connected by adjacent lands horizontally, vertically or diagonally. Assume that all four edges of the grid are surrounded by water.

Example:
Given:
matrix = [
    [1,1,0,0,0],
    [0,1,0,0,1],
    [1,0,0,1,1],
    [0,0,0,0,0],
    [1,0,1,0,1],
];
 Logic (BFS) : explore each item  from  matrix. Start from the first element and call the helper function . Mark the explored item if equal to 1 as "*", then go to horizontal to right. Vertically down and diagonally left and right. without going out of bound.  
*/

let mat = matrix = [
    [1,1,0,0,0],
    [0,1,0,0,1],
    [1,0,0,1,1],
    [0,0,0,0,0],
    [1,0,1,0,1],
];



function islandCount (mat){
  let count =0;
  function exploreIslandHelper ( row, col, count) {
 
  
  //base case
  if(mat[row][col] === 0){
    return;
  }

  //set the value to "*" --> explored
  mat[row][col] = "*";

  //move horizontally to next col
  if(col < mat[0].length-1 ){
    exploreIslandHelper ( row, col+1, count)
  }

  //move vertically down to next row
  if(row < mat.length-1 ){
    exploreIslandHelper ( row+1, col, count)
  }

  //move diagonally down right
  if(row <mat.length-1 && col <mat[0].length-1){
     exploreIslandHelper ( row+1, col+1, count)
  }

  //move diagonally down left
  if(row <mat.length-1 && col >0){
     exploreIslandHelper (row+1, col-1, count)
  }
  
  return 1;
}
  //To start exploring island in the matrix
  for(let i =0; i<mat.length; i++){
    for(let j =0; j<mat[i].length; j++){
      if(mat[i][j] === 1){
        count += exploreIslandHelper( i, j, count);
      }
    }
  }
  return count
}

islandCount(mat)