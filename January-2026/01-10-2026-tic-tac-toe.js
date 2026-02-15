/*
Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:

"X wins" if player X has three in a row.
"O wins" if player O has three in a row.
"Draw" if no player has three in a row.
*/

function ticTacToe(board) {
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const simpleBoard = [];
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      simpleBoard.push(board[i][k]);
    }
  }

  for (let i = 0; i < winningStates.length; i++) {
    if (
      simpleBoard[winningStates[i][0]] === simpleBoard[winningStates[i][1]] &&
      simpleBoard[winningStates[i][0]] === simpleBoard[winningStates[i][2]] &&
      simpleBoard[winningStates[i][0]] === "X"
    ) {
      return "X wins";
    } else if (
      simpleBoard[winningStates[i][0]] === simpleBoard[winningStates[i][1]] &&
      simpleBoard[winningStates[i][0]] === simpleBoard[winningStates[i][2]] &&
      simpleBoard[winningStates[i][0]] === "O"
    ) {
      return "O wins";
    }
  }

  return "Draw";
}

function testCases() {
  console.log(
    ticTacToe([
      ["X", "X", "X"],
      ["O", "O", "X"],
      ["O", "X", "O"],
    ])
  );
  console.log(
    ticTacToe([
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["O", "O", "X"],
    ])
  );
  console.log(
    ticTacToe([
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ])
  );
  console.log(
    ticTacToe([
      ["X", "X", "O"],
      ["X", "O", "X"],
      ["O", "X", "X"],
    ])
  );
  console.log(
    ticTacToe([
      ["X", "O", "O"],
      ["O", "X", "O"],
      ["O", "X", "X"],
    ])
  );
  console.log(
    ticTacToe([
      ["O", "X", "X"],
      ["X", "O", "O"],
      ["X", "O", "X"],
    ])
  );
}

testCases();
