//Tic-tac-toe
var TicTacToe = function() {
  var board = [["", "", ""], ["","",""], ["","",""]];
  var currentPlayer = "x";
  displayBoard(board);
  playGame(board, currentPlayer);
}

// boardDesign
var boardDesign = function () {
  var hash = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2]
  }
  return hash;
}

// Display board
var displayBoard = function (board) {
  var hashValue = boardDesign();
  console.log(board[0][0] + " | " +  board[0][1]  + "|" +  board[0][2]);
  console.log("-------")
  console.log(board[1][0] + " | " +  board[1][1]  + "|" +  board[1][2]);
  console.log("-------")
  console.log(board[2][0] + " | " +  board[2][1]  + "|" +  board[2][2]);
}

//checkWinner
var checkWinner = function (board, currentPlayer, row, col) {
  //check horizontal
  if(board[row][0] === currentPlayer && board[row][1] === currentPlayer)
}




//Play Game

var playGame = function (board, currentPlayer) {
  var design = boardDesign();
  console.log("Player " + currentPlayer + " select grid between 1-9");
  var input = prompt("Player" + currentPlayer + "select grid between 1-9");
  if(design[input] !== undefined) {
    var row = design[input][0];
    var col = design[input][1];
    if(board [row][col] === ""){
      board [design[input][0]][design[input][1]] = currentPlayer;
    }else {
      alert("You have selected already occupied grid, please choose valid move");
      playGame(board, currentPlayer)
    }
    displayBoard(board);
    checkWinner(board, currentPlayer,row, col );
  }else {
    alert("please choose valid move");
    playGame(board, currentPlayer)
  }
  
}

TicTacToe();
