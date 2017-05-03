/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var height = grid.length;
  var width = grid.length > 0? grid[0].length : 0;
  var count = 0;

  function countSides(x, y){
    if (grid[y][x] === 1){
      x - 1 < 0 && count++;
      y - 1 < 0 && count++;
      x + 1 >= width && count++;
      y + 1 >= height && count++;
      
      grid[y-1] && grid[y-1][x] === 0 && count++;
      grid[y+1] && grid[y+1][x] === 0 && count++;
      grid[y][x+1] === 0 && count++;
      grid[y][x-1] === 0 && count++;
    }
  }

  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      countSides(x, y);
    }
  }

  return count;
};