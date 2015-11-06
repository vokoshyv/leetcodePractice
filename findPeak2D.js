// https://repl.it/BX3o

// Given a matrix with an infinite number  of points in it
// write an algorithm that will find the highest point in 
// this matrix

// The only function you have to determine the height at 
// a particular x,y-coordinate is matrix.giveHeightCostly(x, y). 
// This function (as its name denotes) is very costly to 
// call, and you want to call it as little as possible. 

// Details about the matrix: 
// -- Infinite number of points
// -- Any path towards this highest point will be constantly
//    increasing
// -- Boundaries are from (0,0) to (100, 100). 
// -- Solution must be within the radius of the actual max

var findMaxPoint = function(matrix, errRad){

}





















var findMaxPoint = function(matrix, radius){

  var result;
  var maxHeight = 0;

  var traverse = function(xMin, xMax, yMin, yMax){
    var xMid = (xMin + xMax) / 2;
    var yMid = (yMin + yMax) / 2;
    var tempHeight = matrix.giveHeightCostly(xMid, yMid);

    if (tempHeight <= maxHeight){
      return;
    } else if (tempHeight > maxHeight){
      result = [xMid, yMid];
      return;
    }

    // move right
    traverse(xMid, xMax, yMin, yMax);
    // move left
    traverse(xMin, xMid, yMin, yMax);
    // move up
    traverse(xMin, xMax, yMid, yMax);
    // move down
    traverse(xMid, xMax, yMin, yMid);

  }

  traverse(0, 100, 0, 100)

  return result;
}



