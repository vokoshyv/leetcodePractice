/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = [1];

  for (let i = 1; i < nums.length; i++) {
    let mostMax = 0;
    let j = 0;

    while (j < i) {
      if (nums[j] < nums[i]) {
        mostMax = Math.max(mostMax, result[j]);
      }
      j++;
    }
    result.push(mostMax + 1);
  }

  return Math.max(...result);
};
