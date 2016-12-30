/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  return nums.reduce(function(a, b){return a + b}, 0) - Math.min.apply(null, nums) * nums.length;
};