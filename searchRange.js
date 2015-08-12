/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var lowerTarget = target - 0.5;
  var higherTarget = target + 0.5;

  var middle = Math.floor(nums.length/2);
  var start = 0;
  var end = nums.length-1;

  
};