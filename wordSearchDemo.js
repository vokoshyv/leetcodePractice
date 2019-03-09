/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let visited = new Set();
  let wordFound = false;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      // if (board[y][x] === word[0]) {
        traverse(x, y, 0);
      // }
    }
  }


  function traverse(x, y, index) {
    if (index === word.length) {
      wordFound = true;
      return;
    }
    if (wordFound) {
      return;
    }
    if (x < 0 || y < 0 || y >= board.length || x >= board[0].length) {
      return;
    }
    let key = x + '_' + y;
    if (visited.has(key)) {
      return;
    }
    if (board[y][x] !== word[index]) {
      return;
    }

    visited.add(key);

    traverse(x+1, y, index + 1);
    traverse(x-1, y, index + 1);
    traverse(x, y+1, index + 1);
    traverse(x, y-1, index + 1);

    visited.delete(key);
  }

  return wordFound;
};



let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

let word1 = "ABCCED";
let word2 = "SEE";
let word3 = "ABCB";
let word4 = "ESECBASFCED"

console.log(exist(board, word1));
console.log(exist(board, word2));
console.log(exist(board, word3));
console.log(exist(board, word4));
