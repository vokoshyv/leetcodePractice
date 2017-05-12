/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  if (n < 2){
    return n;
  }
  return hammingWeight(Math.floor(n/2)) + n % 2;
};