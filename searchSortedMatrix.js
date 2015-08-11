/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var test = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];

// whoo, this one is a bit harder
var otherTest = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

var searchRow = function(row, target){
  var start = 0;
  var end = row.length-1;
  var middle;

  while (start <= end){
    middle = Math.floor((start + end)/2);
    if (row[middle] === target){
      return true;
    }
    else if (target < row[middle]){
      end = middle-1;
    }else if (target > row[middle]){
      start = middle+1;
    }
  }
  return false;
}

var searchFirstCol = function(matrix, target){
  var start = 0;
  var end = matrix.length-1;
  var middle;
  var rowIndex;

  while (start <= end){
    middle = Math.floor((start + end)/2);
    if (matrix[middle][0] === target){
      return true;
    }
    else if (target < matrix[middle][0]){
      end = middle - 1;
      rowIndex = middle - 1;
    }
    else if (target > matrix[middle][0]){
      start = middle + 1;
      rowIndex = middle;
    }
  }
  return rowIndex;
}

var searchMatrix = function(matrix, target) {
  var check = searchFirstCol(matrix, target);
  return (check === true)? true : (check > -1)? searchRow(matrix[check], target) : false;
};