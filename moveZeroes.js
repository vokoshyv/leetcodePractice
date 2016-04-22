/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var temp;
  var toHere = nums.length;
  var i = nums.length; 
  var pointer;

  while (i--){
    if (nums[i] === 0){
      pointer = i;
      while (pointer < nums.length-1 && pointer < toHere-1){
        nums[pointer] = nums[pointer+1];
        pointer++;
      }
      nums[pointer] = 0;
    }
  }
};