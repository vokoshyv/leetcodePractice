/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  var tries = [];

  var jumpAlong = function(currIndex, jumps){
    if (currIndex >= nums.length-1){
      tries.push(jumps);
      return;
    }

    for (var i = nums[currIndex] - 1; i > 0; i--){
      jumpAlong(currIndex + i, jumps + 1);
    }
  }
  jumpAlong(0, 0);
  console.log(tries);
  return Math.min.apply(this, tries);
};