/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

// Not accepted , but the logic looks fine 


var helperBFS = function (i, j, word, mat, str, index, result) {
    //base case
   
    if(str === word) {
      result = true;
        return true;
    }
    
    if(i >= mat.length || j >= mat[0].length || i < 0 || j < 0) {
        return false;
    }
    
    if(mat[i][j] === word[index]) {
        str +=mat[i][j];
        index++;
    }else {
        return false;
    }
    
    
    return helperBFS(i+1,j, word, mat, str, index, result) ||   // OR all the BFS calling functions to return end result
        helperBFS(i-1,j, word, mat, str, index, result) ||
        helperBFS(i,j+1, word, mat, str, index, result) ||
        helperBFS(i,j-1, word, mat, str, index, result);
      
   
    
}

var matrix = function (mat, word) {
  var result = false
    for(var i =0; i< mat.length; i++) {
        for(var j = 0; j< mat[i].length; j++) {
            if(mat[i][j] === word[0]) {             
               return helperBFS(i,j,word, mat, "", 0, result)
            }
        }
    }
    
}

var board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

matrix(board, "ABCCE")