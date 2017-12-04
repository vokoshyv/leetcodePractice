/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start < end) {
    console.log("START: ", start);
    console.log("END: ", end);
    mid = Math.floor((start + end) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    } else if (mid === end - 1 && nums[mid] === nums[mid - 1]) {
      return nums[end];
    } else if (mid % 2 === 0 && nums[mid] === nums[mid - 1]) {
      start = mid;
    } else if (mid % 2 === 1 && nums[mid] === nums[mid - 1]) {
      start = mid;
    } else {
      end = mid;
    }
  }
};
