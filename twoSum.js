/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var work = {};
  for (var i = 0; i < nums.length; i++){
    if (work[target - nums[i]] !== undefined){
      return [work[target-nums[i]]+1, i+1];
    }
    work[nums[i]] = i;
  }
};