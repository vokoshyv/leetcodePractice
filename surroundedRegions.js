/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) {
    return;
  }
  let board_y = board.length;
  let board_x = board[0].length;

  let visited = new Set();

  for (let y = 1; y < board_y - 1; y++) {
    for (let x = 1; x < board_x - 1; x++) {
      if (board[y][x] === "O") {
        findOpen(x, y);
      }
    }
  }


  function findOpen(x, y) {
    if (board[y][x] === 'X') {
      return false;
    }
    if (x === 0 || y === 0 || x >= board_x - 1 || y >= board_y - 1) {
      if (board[y][x] === 'O') {
        return true;
      } else {
        return false;
      }
    }

    board[y][x] === 'X';

    let up = findOpen(x, y - 1);
    let down = findOpen(x, y + 1);
    let left = findOpen(x - 1, y);
    let right = findOpen(x + 1, y);

    if (up || down || left || right) {
      board[y][x] = 'O';
      return true;
    }

    return false;
  }
};


let test = [["O","X","X"],
            ["X","O","O"],
            ["X","O","X"],
            ["X","X","X"]]

console.log(test);
solve(test);

console.log("\n");

console.log(test);
/*
[["O","X","X","O","X"],
 ["X","X","X","X","O"],
 ["X","X","X","O","X"],
 ["O","X","O","O","O"],
 ["X","X","O","X","O"]]
 */
