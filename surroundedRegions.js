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
        turn(x, y);

        // console.log("X: ", x);
        // console.log("Y: ", y);
        // console.log("BOARD: ");
        // console.log(board);
      }
    }
  }


  function turn(x, y) {
    if (visited.has(x + '_' + y)) {
      return true;
    }
    if (x === 0 || y === 0 || x === (board_x - 1) || y === (board_y - 1)) {
      if (board[y][x] === "X") {
        return true;
      } else {
        return false;
      }
    }
    if (board[y][x] === "X") {
      return true;
    }

    // board[y][x] = "X";
    visited.add(x + '_' + y);

    let down = turn(x, y + 1);
    let up = turn(x, y - 1);
    let left = turn(x - 1, y);
    let right = turn(x + 1, y);

    visited.delete(x + '_' + y);

    if (up && down && left && right) {
      board[y][x] = "X";
      return true;
    }

    board[y][x] = "O";

    return false;
  }
};


let test = [["O","X","X"],
            ["X","O","O"],
            ["X","O","X"],
            ["X","X","X"]]
solve(test);

console.log(test);
/*
[["O","X","X","O","X"],
 ["X","X","X","X","O"],
 ["X","X","X","O","X"],
 ["O","X","O","O","O"],
 ["X","X","O","X","O"]]
 */
