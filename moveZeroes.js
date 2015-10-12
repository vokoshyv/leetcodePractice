/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  nums.sort(function(a, b){
    if (a === 0 && b !== 0){
      return 1;
    } else {
      return 0;
    }
  })
};