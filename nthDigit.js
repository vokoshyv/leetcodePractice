/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let result = 1;
  let count = 1;

  while (count < n + 1){
    if (count + result.toString().length > n){
      return Number(result.toString()[n - count]);
    } else {
      count += result.toString().length;
      result += 1;
    }
  }
};
