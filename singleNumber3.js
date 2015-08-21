/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  // var index = nums.length; 

  // var check1 = 0;
  // var check2 = 0;

  // nums.forEach(function(value){check1 ^= value});
  // while (index--){check2 ^= nums[index]};

  // console.log(check1);
  // console.log(check2);

  var work = {};
  nums.forEach(function(value){
    if (work[value] === undefined){
      work[value] = true;
    } else {
      delete work[value];
    }
  })

  return Object.keys(work).map(function(value){return Number(value)});
};