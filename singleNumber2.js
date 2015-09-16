/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var lib = {};

  for (var i = 0; i < nums.length; i++){
    if (lib[nums[i]] === undefined){
      lib[nums[i]] = 1;
    } else {
      lib[nums[i]]++;
      if (lib[nums[i]] === 3){
        delete lib[nums[i]];
      }
    }
  }

  return Number(Object.keys(lib)[0]);
};