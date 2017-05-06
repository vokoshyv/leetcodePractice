/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var maxOnes = 0;
  var onesCount = 0;
  nums.forEach(function(num){
    num? onesCount++ : onesCount = 0;
    maxOnes = Math.max(maxOnes, onesCount);
  })
  return maxOnes;
};