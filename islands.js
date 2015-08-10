/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  var traveledTo = [];
  var i = grid.length; 
  while (i--){
    traveledTo.push(Array.apply(null, Array(grid[0].length)).map(Number.prototype.valueOf,0));
  }

  var islandCount = 0;

  var traverseTheMap = function(xCoor, yCoor){
    //base case when traversing the traveledTo matrix
    if (traveledTo[yCoor][xCoor] === 1){
      return;
    }
    traveledTo[yCoor][xCoor] = 1;
    
    if (grid[yCoor-1] !== undefined && grid[yCoor-1][xCoor] === 1){
      traverseTheMap(xCoor, yCoor-1);
    }
    if (grid[yCoor+1] !== undefined && grid[yCoor+1][xCoor] === 1){
      traverseTheMap(xCoor, yCoor+1);
    }
    if (grid[yCoor][xCoor-1] !== undefined && grid[yCoor][xCoor-1] === 1){
      traverseTheMap(xCoor-1, yCoor);
    }
    if (grid[yCoor][xCoor+1] !== undefined && grid[yCoor][xCoor+1] === 1){
      traverseTheMap(xCoor+1, yCoor);
    }

  }

  for (var yCoor = 0; yCoor < grid.length; yCoor++){
    for (var xCoor = 0; xCoor < grid[yCoor].)
  }
  return islandCount;
};
