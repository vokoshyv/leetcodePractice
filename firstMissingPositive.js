/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var work = [];
  for (var i = 0; i < nums.length; i++){
    if (nums[i] > 0){
      work[nums[i]] = true;
    }
  }
  for (var i = 1; i < work.length; i++){
    if (work[i] !== true){
      return i;
    }
  }
  return (work.length > 0)? work.length : 1;
};