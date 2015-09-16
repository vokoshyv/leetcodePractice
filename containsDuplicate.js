/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var lib = {};

  for (var i = 0; i < nums.length; i++){
    if (lib[nums[i]] !== undefined){
      return true;
    }
    lib[nums[i]] = true;
  }
  return false;
};