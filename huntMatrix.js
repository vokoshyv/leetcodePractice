let test = [[1, 0, 0],
            [1, 0, 0],
            [1, 9, 0]];


function ratPath(matrix) {

  let result;
  let visited = new Set();
  function hunt(x, y, path) {
    let key = x + '_' + y;
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return;
    }
    if (matrix[y][x] === 0) {
      return;
    }
    if (visited.has(key)) {
      return;
    }
    if (matrix[y][x] === 9) {
      // path.push([x, y]);
      result = path.slice();
      // path.pop();
      return;
    }

    path.push([x, y]);
    visited.add(key);
    hunt(x+1, y, path);
    hunt(x-1, y, path);
    hunt(x, y+1, path);
    hunt(x, y-1, path);
    path.pop();
    visited.delete(key);
  }
  hunt(0, 0, []);

  return result;
}


console.log(ratPath(test));
