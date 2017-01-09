/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return  Math.log(num) / Math.log(4) % 1 === 0;
};