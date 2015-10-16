/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 1){
    return (nums[0] === 1)? 0 : 1;
  }
  var lib = [];
  nums.forEach(function(value){
    lib[value] = true;
  })
  console.log(lib);

  for (var i = 0; i < lib.length; i++){
    if (!lib[i]){
      console.log(i);
      return i;
    }
  }
  return lib.length;
};

missingNumber([0, 1, 3, 4, 5]);