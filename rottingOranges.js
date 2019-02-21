/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let count = 9999;
  let time = 0;

  while (count > 0) {
    let currentCount = 0;

    time++;
    currentCount = advance(grid, currentCount);

    if (currentCount === 0) {
      return time - 1;
    }

    if (currentCount === count) {
      return -1;
    }

    count = currentCount;
  }


};

function advance(matrix, currentCount) {
  let copy = copyMatrix(matrix);

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 1) {
        currentCount += 1;
        checkSurrounding(x, y, matrix, copy);
      }
    }
  }

  return currentCount;
}

function copyMatrix(matrix) {
  let result = [];

  matrix.forEach(row => {
    result.push(row.slice());
  })

  return result;
}

function checkSurrounding(x, y, matrix, copy) {
  if (x - 1 >= 0) {
    if (copy[y][x-1] === 2) {
      matrix[y][x] = 2;
      return matrix;
    }
  }
  if (y - 1 >= 0) {
    if (copy[y-1][x] === 2) {
      matrix[y][x] = 2;
      return matrix;
    }
  }
  if (x + 1 < matrix[0].length) {
    if (copy[y][x+1] === 2) {
      matrix[y][x] = 2;
      return matrix;
    }
  }
  if (y + 1 < matrix.length) {
    if (copy[y+1][x] === 2) {
      matrix[y][x] = 2;
      return matrix;
    }
  }
  return matrix;
}
