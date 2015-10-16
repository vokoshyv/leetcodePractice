var test = [
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]
]

function numberOfPaths(matrix) {
  var result = 0;
  
  // designate limits that coordinates can go to
  var xLimit = matrix[0].length-1;
  var yLimit = matrix.length-1;

  // recursive function for traversing through matrix
  var runThrough = function(xCoor, yCoor){
    if (matrix[yCoor][xCoor] === 0){
      return;
    } else if (xCoor === xLimit && yCoor === yLimit && matrix[yCoor][xCoor] === 1){
      // increase result count for paths that reach bottom right corner
      result++;
      return;
    } 

    if (matrix[yCoor + 1] !== undefined){
      runThrough(xCoor, yCoor + 1);
    }
    if (matrix[yCoor][xCoor] !== undefined){
      runThrough(xCoor + 1, yCoor);
    }
  }

  // call recursive function 
  runThrough(0, 0);

  // return number of valid paths
  return result;
}

numberOfPaths(test);