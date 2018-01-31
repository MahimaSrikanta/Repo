/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
*/



var isValidSudoku = function(board) {
  //checks for row wise 
  for(var i =0; i<9; i++) {
    var rows = {};
    var cols ={};
    for(var j=0; j<9; j++) {
      if(board[i][j] !== "." && rows[board[i][j]]) {
        return false;
      } else {
        rows[board [i][j]] =1;
      }
      if(board[j][i] !== "." && cols[board[j][i]]) {
        return false;
      } else {
        cols[board[j][i]]=1;
      }
    }
  }
     
  
  return true
};