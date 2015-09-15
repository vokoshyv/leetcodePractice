/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  var copy = [];

  matrix.map(function(row){
    copy.push(row.slice());
  })

  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++){
    for (var colIndex = 0; colIndex < matrix.length; colIndex++){
      matrix[rowIndex][colIndex] = copy[matrix.length-1-colIndex][rowIndex];
    }
  }

};