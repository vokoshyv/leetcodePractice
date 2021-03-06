/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let visited = new Set();
  let wordFound = false;

  function search(x, y, index) {
    if (index === word.length) {
      wordFound = true;
      return;
    }
    if (y < 0 || x < 0 || y >= board.length || x >= board[0].length) {
      return;
    }
    if (board[y][x] !== word[index]) {
      return;
    }
    if (wordFound) {
      return;
    }
    let key = x + '_' + y;
    if (visited.has(key)) {
      return;
    }

    visited.add(key);
    search(x + 1, y, index + 1);
    search(x - 1, y, index + 1);
    search(x, y + 1, index + 1);
    search(x, y - 1, index + 1);
    visited.delete(key);
  }


  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      search(x, y, 0);
    }
  }

  return wordFound;
};
