/**
 * @param {character[][]} matrix
 * @return {number}
 */

var test = [
[1, 1, 0, 1], 
[1, 1, 1, 1], 
[0, 1, 0, 1], 
[0, 1, 1, 1], 
[1, 1, 0, 1]
] 

var checkRow = function(matrix, rowIndex, from, to){
  for (var i = from; i < to+1; i++){
    if (matrix[rowIndex][i] === 0){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

var checkCol = function(matrix, colIndex, from, to){
  for (var i = from; i < to+1; i++){
    if (matrix[i][colIndex] === 0){
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

var maximalRectangle = function(matrix) {
  // real coordinates
  var topLeft = [0, 0];
  var bottomRight = [matrix.length - 1, matrix[0].length - 1];
  // check coordinates
  var minRow = 0;
  var maxRow = matrix.length-1;
  var minCol = 0;
  var maxCol = matrix[0].length-1;





  //console.log(topLeft);
  //console.log(bottomRight);
  //console.log(minRow);
  //console.log(maxRow);
  //console.log(minCol);
  //console.log(maxCol);

  while (minRow <= maxRow || minCol <= maxCol){
    if (maxRow >= minRow){
      if (!checkRow(matrix, minRow, minCol, maxCol)){
        topLeft[0] = topLeft[0] + 1;
      }
      if (!checkRow(matrix, maxRow, minCol, maxCol)){
        bottomRight[0] = bottomRight[0] - 1;
      }
    }

    if (maxCol >= minCol){
      if (!checkCol(matrix, minCol, minRow, maxRow)){
        topLeft[1] = topLeft[1] + 1;
      }
      if (!checkRow(matrix, maxCol, minRow, maxRow)){
        bottomRight[1] = bottomRight[1] - 1;
      }
    }
    
    minRow++;
    maxRow--;
    minCol++;
    maxCol--;
  }

  console.log('haha');

  console.log(topLeft);
  console.log(bottomRight);


};


maximalRectangle(test);
