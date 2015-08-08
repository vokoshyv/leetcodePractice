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
  console.log(traveledTo);
  
};