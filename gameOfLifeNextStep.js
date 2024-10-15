/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const sumAround = (grid, x, y) => {
    let count = 0;

    count += ((x - 1) > -1) ?  grid[y][x - 1] : 0;
    count += ((x + 1 < grid[0].length)) ?  grid[y][x + 1] : 0;
    count += ((y - 1) > -1) ?  grid[y - 1][x] : 0;
    count += ((y + 1) < grid.length) ?  grid[y + 1][x] : 0;

    count += ((x - 1) > -1 && (y - 1) > -1) ? grid[y - 1][x - 1] : 0;
    count += ((x + 1) < grid[0].length && (y - 1) > -1) ? grid[y - 1][x + 1] : 0;
    count += ((x - 1) > -1 && (y + 1) < grid.length) ? grid[y + 1][x - 1] : 0;
    count += ((x + 1) < grid[0].length && (y + 1) < grid.length) ? grid[y + 1][x + 1] : 0;

    return count
}

var gameOfLife = function (board) {
    const copy = [];

    for (let y = 0; y < board.length; y++) {
        copy.push([]);
        for (let x = 0; x < board[0].length; x++) {
            copy[y].push(board[y][x]);
        }
    }


    for (let y = 0; y < copy.length; y++) {
        for (let x = 0; x < copy[0].length; x++) {
            let count = sumAround(copy, x, y);

            if (copy[y][x] === 1) {
                // current is alive
                if (count < 2) {
                    board[y][x] = 0;
                } else if (count > 3) {
                    board[y][x] = 0;
                } else {
                    board[y][x] = 1;
                }
            } else {
                // current is dead
                if (count === 3) {
                    board[y][x] = 1;
                } else {
                    board[y][x] = 0;
                }
            }
        }
    }
};