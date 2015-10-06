/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var ultimateMax = nums[0];
  var currentMax = nums[0];
  var currentMin = nums[0];
  var prevMaxCheck;
  var prevMinCheck;

  for (var i = 1; i < nums.length; i++){
    prevMaxCheck = currentMax;
    prevMinCheck = currentMin;

    currentMax = Math.max(Math.max(prevMaxCheck * nums[i], prevMinCheck * nums[i]), nums[i]);
    currentMin = Math.min(Math.min(prevMaxCheck * nums[i], prevMinCheck * nums[i]), nums[i]);

    ultimateMax = Math.max(ultimateMax, currentMax);

  }

  return ultimateMax;

};