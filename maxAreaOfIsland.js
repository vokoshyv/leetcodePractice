/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let result = 0;
  let sizeSoFar = 0;

  function traverse(x, y) {
    if (x < 0 || y < 0 || y >= grid.length || x >= grid[0].length) {
      return;
    }
    if (grid[y][x] === 0) {
      return;
    }

    sizeSoFar++;
    result = Math.max(result, sizeSoFar);
    grid[y][x] = 0;

    traverse(x+1, y);
    traverse(x-1, y);
    traverse(x, y+1);
    traverse(x, y-1);
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      sizeSoFar = 0;
      traverse(x, y);
    }
  }

  return result;
};
