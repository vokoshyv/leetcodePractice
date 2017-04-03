/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2){
    return nums.length;
  }
  var lag = 1;
  var temp;
  for (var i = 1; i < nums.length; i++){
    if (nums[i] !== nums[i - 1]){
      nums[lag] = nums[i];
      lag++;
    }
  }

  return lag;
};


// console.log(removeDuplicates([1,1,2]));