/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  let result = N;
  N--;
  let operation = 'divide';

  while (N > 1) {
    if (operation === 'divide') {
      result = Math.floor(result / N);
      operation = 'addition';
    } else 
  }


  return result;
};
