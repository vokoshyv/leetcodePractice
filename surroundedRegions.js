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
  let freedom = false;
  let visited = new Set();

  for (let y = 1; y < board_y - 1; y++) {
    for (let x = 1; x < board_x - 1; x++) {
      if (board[y][x] === "O") {
        freedom = false;
        visited = new Set();
        findOpen(x, y);
        if (!freedom) {
          visited.forEach(key=>{
            key = key.split('_');
            board[parseInt(key[1])][parseInt(key[0])] = 'X';
          })
        }
      }
    }
  }


  function findOpen(x, y) {
    let key = x + '_' + y;
    if (board[y][x] === 'X') {
      return;
    }
    if (visited.has(key)) {
      return;
    }
    if (x === 0 || y === 0 || x >= (board_x - 1) || y >= (board_y - 1)) {
      if (board[y][x] === 'O') {
        freedom = true;
        return;
      } else {
        return;
      }
    }

    visited.add(key);

    findOpen(x, y - 1);
    findOpen(x, y + 1);
    findOpen(x - 1, y);
    findOpen(x + 1, y);
  }
};


// let test = [["O","X","X"],
//             ["X","O","O"],
//             ["X","O","X"],
//             ["X","X","X"]]

// let test = [["O","X","X","O","X"],
//             ["X","X","X","X","O"],
//             ["X","X","X","O","X"],
//             ["O","X","O","O","O"],
//             ["X","X","O","X","O"]]

// console.log(test);
// solve(test);
//
// console.log("\n");
//
// console.log(test);
/*
[["O","X","X","O","X"],
 ["X","X","X","X","O"],
 ["X","X","X","O","X"],
 ["O","X","O","O","O"],
 ["X","X","O","X","O"]]
 */
