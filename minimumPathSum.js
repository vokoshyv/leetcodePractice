/**
 * @param {number[][]} grid
 * @return {number}
 */
var test = [
[1, 7, 3], 
[9, 4, 7], 
[5, 2, 1]
]

var minPathSum = function(grid) {
  var result = 0;
  grid.forEach(function(row){
    row.forEach(function(value){
      result += value;
    })
  })

  var traverse = function(yCoor, xCoor, buildUp){
    if (grid[yCoor+1] === undefined && grid[xCoor+1] === undefined){
      result = Math.min(buildUp + grid[yCoor][xCoor], result);
      return
    }

    if (grid[yCoor+1] !== undefined){
      traverse(yCoor+1, xCoor, buildUp + grid[yCoor][xCoor]);
    }

    if (grid[yCoor][xCoor+1] !== undefined){
      traverse(yCoor, xCoor+1, buildUp + grid[yCoor][xCoor]);
    }
  }
  traverse(0, 0, 0);
  return result;
};

minPathSum(test); 