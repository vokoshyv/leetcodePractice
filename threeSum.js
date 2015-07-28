/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var occurred = {};
  var alreadyInserted = {};
  var results = [];
  var temp;
  var current;
  var check;
  for (var i = 0; i < nums.length-1; i++){
    for (var j = i+1; j < nums.length; j++){
      temp = - nums[i] - nums[j];
      if (occurred[temp]){
        current = [];
        current.push(nums[i], nums[j], temp);
        current.sort(function(a, b){
          return a-b;
        })
        check = current.join('');
        if (!alreadyInserted[check]){
          results.push(current);
          alreadyInserted[check] = true;
        }
      }
    }
    occurred[nums[i]] = true;
  }
  return results;
};