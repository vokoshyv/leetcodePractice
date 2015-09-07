/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var ultimateMax = nums[0];
  var currentPositiveMax = nums[0];
  var currentNegativeMin = nums[0];
  var prevPosMax;
  var prevNegMax;

  for (var i = 1; i < nums.length; i++){
    prevPosMax = currentPositiveMax;
    prevNegMax = currentNegativeMin;

    currentPositiveMax = Math.max(Math.max(prevPosMax*nums[i], prevNegMax*nums[i]), nums[i]);
    currentNegativeMin = Math.min(Math.min(prevPosMax*nums[i], prevNegMax*nums[i]), nums[i]);
    ultimateMax = Math.max(ultimateMax, currentPositiveMax);
  }

  return ultimateMax;
};