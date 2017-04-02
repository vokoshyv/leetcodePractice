/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var lag = 0;
  var temp;
  for (var i = 0; i < nums.length - 1; i++){
    if (nums[i] !== nums[i + 1]){
      nums[lag] = nums[i];
      lag++;
    }
  }

  return lag;
};

console.log(removeDuplicates([1,1,2]));