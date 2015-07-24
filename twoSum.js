/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result;
  for (var i = 0; i < nums.length-1; i++){
    for (var j = i+1; j < nums.length; j++){
      if (nums[j] > target){
        break;
      }
      if (nums[i] + nums[j] === target){
        result = [i+1, j+1];
      }
    }
  }
  return result;
};