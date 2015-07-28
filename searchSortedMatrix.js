/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

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

var searchFirstCol = function(matrix){
  var start = 0;
  var end = matrix.length-1;
  var middle;
  var rowIndex;

  while (start <= end){
    middle = Math.floor((start + end)/2);
    if (matrix[middle][0] === target){
      return true;
    }
    else if (target < row[middle][0]){
      end = middle - 1;
      rowIndex = middle - 1;
    }
    else if (target > row[middle][0]){
      start = middle + 1;
      rowIndex = middle;
    }
  }
  return rowIndex;
}

var searchMatrix = function(matrix, target) {
    
};

searchRow([1, 2, 4, 5, 6, 7, 8, 9], 9);
