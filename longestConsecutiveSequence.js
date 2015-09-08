var longestConsecutive = function(nums) {

  var work = {};

  for (var i = 0; i < nums.length; i++){
    work[nums[i]] = true;
  }
  var max = 1;
  var left;
  var right;
  var count;

  for (i = 0; i < nums.length; i++){
    left = nums[i] - 1;
    right = nums[i] + 1;
    count = 1;

    while (work[left] !== undefined){
      delete work[left];
      left--;
      count++;
    }
    while (work[right] !== undefined){
      delete work[right];
      right++;
      count++;
    }

    max = Math.max(count, max);
  }
  return max;
};