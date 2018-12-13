/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  let y = 1;

  while (y < A.length) {
    for (let x = 0; x < A.length; x++) {
      A[y][x] += findMinAbove(A, x, y);
    }

    if (y === A.length - 1) {
      return Math.min(...A[y]);
    }
    y++;
  }

  return A[0][0];
};

function findMinAbove(A, x, y) {
  if (x === 0) {
    return Math.min(A[y-1][x], A[y-1][x+1]);
  } else if (x === (A.length - 1)) {
    return Math.min(A[y-1][x], A[y-1][x-1]);
  } else {
    return Math.min(A[y-1][x], A[y-1][x+1], A[y-1][x-1]);
  }
}
