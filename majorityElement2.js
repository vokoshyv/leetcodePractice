/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var work = {};

  var results = [];

  for (var i = 0; i < nums.length; i++){
    if (work[nums[i]] !== undefined){
      work[nums[i]]++;
    } else {
      work[nums[i]] = 1;
    }
  }

  var checkAgainst = Math.floor(nums.length/3);

  for (var key in work){
    if (work[key] > checkAgainst){
      results.push(Number(key));
    }
  }
  return results;
};