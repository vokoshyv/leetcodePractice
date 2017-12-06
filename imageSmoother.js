/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let result = [];

  for (let i = 0; i < M.length; i++) {
    result.push([]);
  }


  for (let y = 0; y < M.length; y++) {
    for (let x = 0; x < M[0].length; x++) {
      result[y][x] = getAverage(x, y, M);
    }
  }
  return result;
};

function getAverage(x, y, M) {
  let count = 0;
  let total = 0;
  if (M[y-1] !== undefined) {
    if (M[y-1][x-1] !== undefined) {
      count++;
      total += M[y-1][x-1];
    }
    if (M[y-1][x+1] !== undefined) {
      count++;
      total += M[y-1][x+1];
    }
    count++;
    total += M[y-1][x];
  }
  if (M[y+1] !== undefined) {
    if (M[y+1][x-1] !== undefined) {
      count++;
      total += M[y+1][x-1];
    }
    if (M[y+1][x+1] !== undefined) {
      count++;
      total += M[y+1][x+1];
    }
    count++;
    total += M[y+1][x];
  }
  if (M[y][x-1] !== undefined) {
    count++;
    total += M[y][x-1];
  }
  if (M[y][x+1] !== undefined) {
    count++;
    total += M[y][x+1];
  }
  count++;
  total += M[y][x]

  return Math.floor(total / count);
}
