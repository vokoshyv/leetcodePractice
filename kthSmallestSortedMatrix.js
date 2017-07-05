/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var rowLength = matrix[0].length;
  var row = Math.floor((k-1) / rowLength);
  var column = (k-1) % rowLength;
  console.log("ROW: ", row);
  console.log("COLUMN: ", column);
  return matrix[row][column];
};