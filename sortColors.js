/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var startPointer = 0;
  var endPointer = nums.length-1;

  var i = 0;

  while (i < endPointer + 1){
    if (nums[i] === 0){
      var temp = nums[startPointer];
      nums[startPointer] = nums[i];
      nums[i] = temp;
      i++;
      startPointer++;
      continue;
    } else if (nums[i] === 2){
      var temp = nums[endPointer];
      nums[endPointer] = nums[i];
      nums[i] = temp;
      endPointer--;
      continue;
    }
    i++;
  }

  console.log(nums);
  
};


sortColors([0, 1, 2, 2, 1, 0, 0, 0, 1, 1, 2])
