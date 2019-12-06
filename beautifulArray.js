/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  let visited = new Set();
  for (let i = 1; i <= N; i++) {
    visited.add(i);
  }

  let result = [];
  let i = 1;
  let j = N;

  let initial = Math.ceil(N / 2);
  result.push(initial);
  visited.delete(initial);

  while (visited.size > 0) {
    if (visited.has(i)) {
      result.push(i);
      visited.delete(i);
      i++;
    }
    if (visited.has(i)) {
      result.push(i);
      visited.delete(i);
      i++;
    }
    if (visited.has(j)) {
      result.push(j);
      visited.delete(j);
      j--;
    }
    if (visited.has(j)) {
      result.push(j);
      visited.delete(j);
      j--;
    }

  }

  return result;
};

console.log(beautifulArray(10));
