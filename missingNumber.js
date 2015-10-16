/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var lib = [];
  nums.forEach(function(value){
    lib[value] = true;
  })

  for (var i = 0; i < lib.length; i++){
    if (!lib[i]){
      return i;
    }
  }
  return lib.length;
};