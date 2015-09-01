/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var check = {};

  for (var i = 0; i < nums.length; i++){
    if (check[nums[i]] !== undefined){
      for (var j = 0; j < check[nums[i]].length; j++){
        if (i - check[nums[i]][j] <= k){
          return true;
        }
      }
      check[nums[i]].push(i);
    }else {
      check[nums[i]] = [i];
    }
  }
  return false;
};