/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * 
 * Example 1:
 * 
 * [[1,1,1,1,0],
 *  [1,1,0,1,0],
 *  [1,1,0,0,0],
 *  [0,0,0,0,0]]
 * Answer: 1
 * 
 * Example 2:
 * 
 * [[1,1,0,0,0],
 *  [1,1,0,0,0],
 *  [0,0,1,0,0],
 *  [0,0,0,1,1]]
 * Answer: 3
 *
 * 
 */












var numIslands = function(grid) {
  var traveledTo = [];
  var i = grid.length; 
  while (i--){
    traveledTo.push(Array.apply(null, Array(grid[0].length)).map(Number.prototype.valueOf,0));
  }

  var islandCount = 0;

  var traverseTheMap = function(xCoor, yCoor, depth){
    //base case when traversing the traveledTo matrix
    if (traveledTo[yCoor][xCoor] === 1){
      return;
    }

    //base case when no land exists at grid coordinate
    if (grid[yCoor][xCoor] === '0'){
        return;
    }

    //base case when to increase islandCount (islands that
    //haven't been traveled to yet)
    if (traveledTo[yCoor][xCoor] === 0 && depth === 0){
        islandCount++;
    }

    //change traveledTo matrix to account for islands that 
    // have already been traveled to
    traveledTo[yCoor][xCoor] = 1;
    
    //recursively search through the rest of the map
    if (grid[yCoor-1] !== undefined && grid[yCoor-1][xCoor] === '1'){
      traverseTheMap(xCoor, yCoor-1, depth+1);
    }
    if (grid[yCoor+1] !== undefined && grid[yCoor+1][xCoor] === '1'){
      traverseTheMap(xCoor, yCoor+1, depth+1);
    }
    if (grid[yCoor][xCoor-1] !== undefined && grid[yCoor][xCoor-1] === '1'){
      traverseTheMap(xCoor-1, yCoor, depth+1);
    }
    if (grid[yCoor][xCoor+1] !== undefined && grid[yCoor][xCoor+1] === '1'){
      traverseTheMap(xCoor+1, yCoor, depth+1);
    }

  }

  //for loop to go though each coordinate of the grid
  for (var yCoor = 0; yCoor < grid.length; yCoor++){
    for (var xCoor = 0; xCoor < grid[yCoor].length; xCoor++){
      traverseTheMap(xCoor, yCoor, 0);
    }
  }

  return islandCount;
};