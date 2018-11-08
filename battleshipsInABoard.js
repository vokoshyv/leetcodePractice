/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;

  board.forEach((row, y) => {
    row.forEach((item, x) => {
      if (item === 'X') {
        if (y === 0 && x === 0) {
          count++;
        } else if (y === 0) {
          if (board[y][x-1] === '.') {
            count++;
          }
        } else if (x === 0) {
          if (board[y-1][x] === '.') {
            count++;
          }
        } else if (board[y-1][x] === '.' && board[y][x-1] === '.'){
          count++;
        }
      }
    });
  });
  return count;
};
